// Desenvolvido por Prof. Marcelo Oliveira
// =========================
// MAPA
// =========================

const mapa = L.map("mapa").setView([-23.55052, -46.633308], 6);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "&copy; OpenStreetMap"
}).addTo(mapa);

let linhaRota = null;
let marcadores = [];
let ultimaRota = null;

// =========================
// CAMPOS
// =========================

const btnCalcular = document.getElementById("btnCalcular");
const origem = document.getElementById("origem");
const destino = document.getElementById("destino");
const consumo = document.getElementById("consumo");
const gasolina = document.getElementById("gasolina");
const passageirosInput = document.getElementById("passageiros");

const distanciaEl = document.getElementById("distancia");
const tempoEl = document.getElementById("tempo");
const combustivelEl = document.getElementById("combustivel");
const pedagioEl = document.getElementById("pedagio");

// =========================
// BUSCAR CIDADE (Brasil)
// =========================

async function buscarCidade(nomeCidade) {
  const url = `https://nominatim.openstreetmap.org/search?format=json&countrycodes=br&limit=1&q=${encodeURIComponent(nomeCidade)}`;
  const resposta = await fetch(url);
  return resposta.json();
}

// =========================
// ROTEIRO REAL (OSRM)
// =========================

async function calcularRota(lat1, lon1, lat2, lon2) {
  const url = `https://router.project-osrm.org/route/v1/driving/${lon1},${lat1};${lon2},${lat2}?overview=full&geometries=geojson`;
  const resposta = await fetch(url);
  const dados = await resposta.json();
  if (!dados.routes || !dados.routes.length) throw new Error("Rota não encontrada");
  return dados.routes[0];
}

// =========================
// CLIMA (Open-Meteo)
// =========================

async function buscarClima(lat, lon) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
  const resposta = await fetch(url);
  const dados = await resposta.json();
  const c = dados.current_weather;
  return `${c.temperature}°C · vento ${c.windspeed} km/h`;
}

// =========================
// HISTÓRICO
// =========================

function salvarHistorico(o, d, km) {
  let hist = [];
  try { hist = JSON.parse(localStorage.getItem('vp_hist') || '[]'); } catch (e) { hist = []; }
  hist.unshift({ o, d, km, data: new Date().toLocaleDateString('pt-BR') });
  hist = hist.slice(0, 3);
  localStorage.setItem('vp_hist', JSON.stringify(hist));
  renderHistorico(hist);
}

function renderHistorico(hist) {
  const sec = document.getElementById('historico');
  const itens = sec.querySelectorAll('.card-info');
  hist.forEach((h, i) => {
    if (itens[i]) itens[i].textContent = `${h.o} → ${h.d} · ${h.km} km · ${h.data}`;
  });
  for (let i = hist.length; i < itens.length; i++) itens[i].textContent = '--';
}

// =========================
// BOTÃO CALCULAR
// =========================

btnCalcular.addEventListener("click", async () => {
  try {
    const origemTexto = origem.value.trim();
    const destinoTexto = destino.value.trim();

    if (origemTexto === "" || destinoTexto === "") {
      alert("Preencha origem e destino.");
      return;
    }

    btnCalcular.textContent = "Calculando...";
    btnCalcular.disabled = true;

    const origemDados = await buscarCidade(origemTexto);
    const destinoDados = await buscarCidade(destinoTexto);

    if (origemDados.length === 0 || destinoDados.length === 0) {
      alert("Cidade não encontrada. Tente incluir o estado (ex.: 'Santos, SP').");
      return;
    }

    const lat1 = parseFloat(origemDados[0].lat);
    const lon1 = parseFloat(origemDados[0].lon);
    const lat2 = parseFloat(destinoDados[0].lat);
    const lon2 = parseFloat(destinoDados[0].lon);

    marcadores.forEach(m => mapa.removeLayer(m));
    marcadores = [];
    if (linhaRota) mapa.removeLayer(linhaRota);

    marcadores.push(L.marker([lat1, lon1]).addTo(mapa).bindPopup(`Origem: ${origemTexto}`));
    marcadores.push(L.marker([lat2, lon2]).addTo(mapa).bindPopup(`Destino: ${destinoTexto}`));

    const rota = await calcularRota(lat1, lon1, lat2, lon2);

    linhaRota = L.geoJSON(rota.geometry, { style: { color: '#05c7f2', weight: 5 } }).addTo(mapa);
    mapa.fitBounds(linhaRota.getBounds());

    const km = rota.distance / 1000;
    const horas = rota.duration / 3600;

    distanciaEl.textContent = km.toFixed(1) + " km";
    tempoEl.textContent = horas >= 1
      ? `${Math.floor(horas)}h ${Math.round((horas % 1) * 60)}min`
      : `${Math.round(horas * 60)} min`;

    const consumoValor = Number(consumo.value);
    const gasolinaValor = Number(gasolina.value);
    const passageiros = Number(passageirosInput.value) || 1;
    let custo = 0;

    if (consumoValor > 0 && gasolinaValor > 0) {
      const litros = km / consumoValor;
      custo = litros * gasolinaValor;
      combustivelEl.textContent = "R$ " + custo.toFixed(2);
      document.getElementById('custoCombustivel').textContent = "Combustível: R$ " + custo.toFixed(2);
    } else {
      combustivelEl.textContent = "--";
    }

    const pedagioEst = km > 200 ? (km / 100) * 18.5 : 0;
    pedagioEl.textContent = "R$ " + pedagioEst.toFixed(2);
    document.getElementById('custoPedagio').textContent = "Pedágios: R$ " + pedagioEst.toFixed(2);
    document.getElementById('custoTotal').textContent = "Custo Total: R$ " + (custo + pedagioEst).toFixed(2);
    document.getElementById('custoPassageiro').textContent = "Custo por Passageiro: R$ " + ((custo + pedagioEst) / passageiros).toFixed(2);

    // Clima
    try {
      document.getElementById('climaOrigem').textContent = "Origem: " + await buscarClima(lat1, lon1);
      document.getElementById('climaDestino').textContent = "Destino: " + await buscarClima(lat2, lon2);
    } catch (e) { /* sem clima */ }

    // Paradas: links Google Maps perto do destino
    document.querySelectorAll('.parada').forEach(el => {
      el.onclick = () => {
        const cat = el.getAttribute('data-cat');
        window.open(`https://www.google.com/maps/search/${encodeURIComponent(cat)}/${lat2},${lon2}`, '_blank');
      };
    });

    ultimaRota = { lat1, lon1, lat2, lon2 };
    salvarHistorico(origemTexto, destinoTexto, km.toFixed(0));
  } catch (erro) {
    console.error(erro);
    alert("Erro ao calcular viagem. Verifique sua conexão e tente novamente.");
  } finally {
    btnCalcular.textContent = "Calcular Viagem";
    btnCalcular.disabled = false;
  }
});

// =========================
// NAVEGAÇÃO WAZE / GOOGLE
// =========================

document.getElementById('btnWaze').addEventListener('click', () => {
  if (!ultimaRota) { alert('Calcule uma viagem primeiro.'); return; }
  window.open(`https://waze.com/ul?ll=${ultimaRota.lat2},${ultimaRota.lon2}&navigate=yes`, '_blank');
});

document.getElementById('btnGoogle').addEventListener('click', () => {
  if (!ultimaRota) { alert('Calcule uma viagem primeiro.'); return; }
  window.open(`https://www.google.com/maps/dir/?api=1&origin=${ultimaRota.lat1},${ultimaRota.lon1}&destination=${ultimaRota.lat2},${ultimaRota.lon2}`, '_blank');
});

// Restaura histórico ao abrir
try {
  const hist = JSON.parse(localStorage.getItem('vp_hist') || '[]');
  if (hist.length) renderHistorico(hist);
} catch (e) { /* vazio */ }

