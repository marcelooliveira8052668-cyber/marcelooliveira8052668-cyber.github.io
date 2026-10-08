$ErrorActionPreference = "Stop"
$baile = "C:\Users\Sylvia Camillo\OneDrive\Documentos\Default Project"
$pastaImg = Join-Path $baile "img"
if (-not (Test-Path $pastaImg)) { New-Item -ItemType Directory -Path $pastaImg | Out-Null }

$plano = Get-Content (Join-Path $baile "imgPlano.json") -Raw -Encoding UTF8 | ConvertFrom-Json
$ua = "HistoriaEmFoco/1.0 (contato: marcelo@exemplo.br)"
$resultado = @()

foreach ($p in $plano) {
  $titulo = "File:" + $p.arquivo
  $api = "https://commons.wikimedia.org/w/api.php?action=query&prop=imageinfo&iiprop=url|mime&iiurlwidth=1400&format=json&origin=*&titles=" + [uri]::EscapeDataString($titulo)
  $json = $null
  try {
    $resp = Invoke-WebRequest -Uri $api -Headers @{ "User-Agent" = $ua } -UseBasicParsing -TimeoutSec 40
    $json = $resp.Content | ConvertFrom-Json
  } catch {
    Write-Output ("ERRO_API " + $p.num + " :: " + $_.Exception.Message)
    $resultado += [pscustomobject]@{ num = $p.num; arquivoLocal = ""; ok = $false; erro = $_.Exception.Message }
    continue
  }
  $q = $json.query.pages | Get-Member -MemberType NoteProperty | Select-Object -First 1
  $pg = $json.query.pages.($q.Name)
  $img = $pg.imageinfo[0]
  if (-not $img) {
    Write-Output ("SEM_IMAGEM " + $p.num + " :: " + $pg.title + " " + $pg.missing)
    $resultado += [pscustomobject]@{ num = $p.num; arquivoLocal = ""; ok = $false; erro = "arquivo nao encontrado" }
    continue
  }
  $ext = ".jpg"
  if ($img.mime -eq "image/png") { $ext = ".png" }
  $nomeLocal = "cap-" + ($p.num -replace "\.", "_") + $ext
  $destino = Join-Path $pastaImg $nomeLocal
  try {
    Invoke-WebRequest -Uri $img.thumburl -Headers @{ "User-Agent" = $ua } -OutFile $destino -UseBasicParsing -TimeoutSec 90
    $tam = (Get-Item $destino).Length
    if ($tam -lt 10000) {
      Write-Output ("PEQUENA " + $p.num + " :: " + $nomeLocal + " " + $tam + " bytes")
    } else {
      Write-Output ("OK " + $p.num + " :: " + $nomeLocal + " " + [math]::Round($tam/1kb) + " KB")
    }
    $resultado += [pscustomobject]@{ num = $p.num; arquivoLocal = $nomeLocal; ok = $true; erro = "" }
  } catch {
    Write-Output ("ERRO_BAIXA " + $p.num + " :: " + $_.Exception.Message)
    $resultado += [pscustomobject]@{ num = $p.num; arquivoLocal = ""; ok = $false; erro = $_.Exception.Message }
  }
  Start-Sleep -Milliseconds 350
}

$resJson = @()
foreach ($r in $resultado) { $resJson += $r } 
$resJson | ConvertTo-Json | Set-Content (Join-Path $baile "imgResultado.json") -Encoding UTF8
Write-Output ("--- " + (($resultado | Where-Object ok).Count) + " de " + $resultado.Count + " ok")