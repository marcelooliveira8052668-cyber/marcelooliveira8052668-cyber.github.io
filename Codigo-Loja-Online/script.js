// Desenvolvido por Prof. Marcelo Oliveira
/* ============================================
   MINHA LOJA ONLINE - SISTEMA COMPLETO
   Catálogo com 50 produtos + Shopee + Mercado Livre
   ============================================ */

/* ============ BANCO DE PRODUTOS (50 PRODUTOS) ============ */
const PRODUTOS = [
  {
    id: 1,
    nome: "Notebook Lenovo IdeaPad 3 Intel Core i5 8GB 256GB SSD",
    marca: "Lenovo",
    preco: 2599.9,
    precoOriginal: 3299.9,
    categoria: "eletronicos",
    foto: "img/Notebook.jpg",
    vendidos: 1520,
    avaliacao: 4.8,
    descricao:
      "Notebook Lenovo IdeaPad 3 com processador Intel Core i5 de 11ª geração, 8GB de RAM DDR4 e SSD de 256GB. Tela Full HD de 15.6 polegadas, teclado numérico integrado e bateria de até 8 horas. Perfeito para trabalho e estudos.",
    especificacoes: [
      "Processador: Intel Core i5-1135G7",
      "Memória: 8GB DDR4",
      "Armazenamento: 256GB SSD",
      "Tela: 15.6\" Full HD 1920x1080",
      "Sistema: Windows 11 Home",
    ],
    frete: "Frete grátis",
  },
  {
    id: 2,
    nome: "Smartphone Samsung Galaxy A55 5G 128GB",
    marca: "Samsung",
    preco: 1899.9,
    precoOriginal: 2499.9,
    categoria: "eletronicos",
    foto: "img/celular.jpg",
    vendidos: 3200,
    avaliacao: 4.9,
    descricao:
      "Samsung Galaxy A55 5G com tela Super AMOLED de 6.6 polegadas, câmera triplas de 50MP, 128GB de armazenamento e 8GB de RAM. Processador Exynos 1480, bateria de 5000mAh com carregamento rápido de 25W.",
    especificacoes: [
      "Tela: 6.6\" Super AMOLED 120Hz",
      "Câmera: 50MP + 12MP + 5MP",
      "Memória: 8GB RAM + 128GB",
      "Bateria: 5000mAh",
      "5G: Sim",
    ],
    frete: "Frete grátis",
  },
  {
    id: 3,
    nome: "Smart TV 50\" 4K UHD LG UHD9500",
    marca: "LG",
    preco: 2199.9,
    precoOriginal: 2899.9,
    categoria: "eletronicos",
    foto: "",
    vendidos: 890,
    avaliacao: 4.7,
    descricao:
      "Smart TV LG 50 polegadas com resolução 4K UHD, processador α5 Gen5 AI, compatível com Alexa e Google Assistant. Comandos de voz, Wi-Fi integrado e HDMI 2.1.",
    especificacoes: [
      "Tela: 50\" 4K UHD 3840x2160",
      "Processador: α5 Gen5 AI",
      "Sistema: webOS",
      "HDMI: 3 entradas",
      "Assistente: Alexa e Google",
    ],
    frete: "Frete grátis",
  },
  {
    id: 4,
    nome: "Camiseta Básica Masculina Algodão Premium",
    marca: "Basic Wear",
    preco: 39.9,
    precoOriginal: 59.9,
    categoria: "vestuario",
    foto: "",
    vendidos: 12500,
    avaliacao: 4.6,
    descricao:
      "Camiseta básica masculina 100% algodão penteado, disponível em várias cores. Modelagem confortável, costura reforçada e tecido que não desbota. Tamanhos P, M, G e GG.",
    especificacoes: [
      "Material: 100% algodão",
      "Modelagem: Unissex",
      "Tamanhos: P, M, G, GG",
      "Cores: Branco, Preto, Cinza, Azul",
      "Cuidado: Lavar à mão ou máquina",
    ],
    frete: "Frete a calcular",
  },
  {
    id: 5,
    nome: "Chocolate ao Leite 90g Sônica Lacta",
    marca: "Lacta",
    preco: 8.9,
    precoOriginal: 11.9,
    categoria: "alimentos",
    foto: "",
    vendidos: 45000,
    avaliacao: 4.9,
    descricao:
      "Chocolate ao leite sabor Sônica da Lacta, 90g de puro prazer. Cacau selecionado com leite integral, textura cremosa e sabor inigualável. O clássico que todas as gerações amam.",
    especificacoes: [
      "Peso: 90g",
      "Sabor: ao leite",
      "Marca: Lacta",
      "Validade: 6 meses",
      "Contém glúten",
    ],
    frete: "Frete a calcular",
  },
  {
    id: 6,
    nome: "Fone de Ouvido Bluetooth JBL Tune 520BT",
    marca: "JBL",
    preco: 199.9,
    precoOriginal: 299.9,
    categoria: "eletronicos",
    foto: "",
    vendidos: 5600,
    avaliacao: 4.8,
    descricao:
      "Fone de ouvido Bluetooth JBL com som Pure Bass, 40 horas de bateria, conexão multiponto e microfone integrado. Leve e confortável, ideal para trabalho, estudos e exercícios.",
    especificacoes: [
      "Conexão: Bluetooth 5.3",
      "Bateria: até 40 horas",
      "Carregamento: USB-C",
      "Microfone: Sim",
      "Peso: 160g",
    ],
    frete: "Frete grátis",
  },
  {
    id: 7,
    nome: "Tênis Esportivo Nike Revolution 7 Masculino",
    marca: "Nike",
    preco: 349.9,
    precoOriginal: 449.9,
    categoria: "esportes",
    foto: "",
    vendidos: 2100,
    avaliacao: 4.7,
    descricao:
      "Tênis esportivo Nike Revolution 7 com entressola em espuma macia, cabedal em tecido respirável e solado de borracha durável. Ideal para corridas e atividades do dia a dia.",
    especificacoes: [
      "Marca: Nike",
      "Uso: Corrida / Casual",
      "Solado: Borracha",
      "Cabedal: Mesh respirável",
      "Tamanhos: 37 ao 44",
    ],
    frete: "Frete grátis",
  },
  {
    id: 8,
    nome: "Café Torrado e Moído 3 Corações 500g",
    marca: "3 Corações",
    preco: 22.9,
    precoOriginal: 27.9,
    categoria: "alimentos",
    foto: "",
    vendidos: 38000,
    avaliacao: 4.8,
    descricao:
      "Café torrado e moído 3 Corações Select 500g, blend de grãos selecionados com corpo encorpado e notas de chocolate. Torra média, perfeita para coado ou espresso.",
    especificacoes: [
      "Peso: 500g",
      "Tipo: Torrado e moído",
      "Torra: Média",
      "Blend: Select",
      "Validade: 12 meses",
    ],
    frete: "Frete a calcular",
  },
  {
    id: 9,
    nome: "Creme Hidratante Corporal Nivea 400ml",
    marca: "Nivea",
    preco: 29.9,
    precoOriginal: 39.9,
    categoria: "beleza",
    foto: "",
    vendidos: 21000,
    avaliacao: 4.9,
    descricao:
      "Hidratante corporal Nivea Original Care com fórmula enriquecida com óleos naturais. Absorção rápida, pele macia por até 48 horas. Indicado para todos os tipos de pele.",
    especificacoes: [
      "Volume: 400ml",
      "Tipo: Corpo",
      "Pele: Todos os tipos",
      "Hidratação: até 48h",
      "Dermatologicamente testado",
    ],
    frete: "Frete a calcular",
  },
  {
    id: 10,
    nome: "Mesa de Escritório 1,20m MDF Branco",
    marca: "MoveisFlex",
    preco: 349.9,
    precoOriginal: 449.9,
    categoria: "moveis",
    foto: "",
    vendidos: 780,
    avaliacao: 4.5,
    descricao:
      "Mesa de escritório em MDF de alta densidade com 1,20m de largura. Acabamento branco fosco, resistente a arranhões e fácil limpeza. Estrutura reforçada com capacidade de até 50kg.",
    especificacoes: [
      "Dimensões: 120 x 60 x 75cm",
      "Material: MDF 15mm",
      "Cor: Branco",
      "Capacidade: 50kg",
      "Montagem simples",
    ],
    frete: "Frete grátis",
  },
  {
    id: 11,
    nome: "Mouse Gamer Logitech G203 Lightsync RGB",
    marca: "Logitech",
    preco: 99.9,
    precoOriginal: 149.9,
    categoria: "eletronicos",
    foto: "",
    vendidos: 8900,
    avaliacao: 4.8,
    descricao:
      "Mouse gamer Logitech G203 com sensor de 8.000 DPI, iluminação RGB personalizável, 6 botões programáveis e cabo resistente. Conforto e precisão para jogos competitivos.",
    especificacoes: [
      "Sensor: 8.000 DPI",
      "RGB: Lightsync",
      "Botões: 6 programáveis",
      "Conexão: USB cabeado",
      "Peso: 85g",
    ],
    frete: "Frete grátis",
  },
  {
    id: 12,
    nome: "Calça Jeans Feminina Mom Fit Cintura Alta",
    marca: "Denim Co",
    preco: 89.9,
    precoOriginal: 129.9,
    categoria: "vestuario",
    foto: "",
    vendidos: 4500,
    avaliacao: 4.6,
    descricao:
      "Calça jeans feminina modelagem Mom Fit com cintura alta, elastano leve e lavagem stone. Corte retrô que valoriza a silhueta, ideal para compor looks casuais e elegantes.",
    especificacoes: [
      "Material: Jeans com elastano",
      "Cintura: Alta",
      "Modelagem: Mom Fit",
      "Tamanhos: 36 ao 46",
      "Lavagem: Stone",
    ],
    frete: "Frete a calcular",
  },
  {
    id: 13,
    nome: "Air Fryer Mondial 4L Preta AFN-40-BI",
    marca: "Mondial",
    preco: 299.9,
    precoOriginal: 399.9,
    categoria: "eletronicos",
    foto: "",
    vendidos: 15200,
    avaliacao: 4.7,
    descricao:
      "Air Fryer Mondial Family 4 litros com painel digital, 8 programas automáticos e timer de 60 minutos. Cozinha até 80% menos gordura, cesto antiaderente fácil de limpar.",
    especificacoes: [
      "Capacidade: 4 litros",
      "Potência: 1500W",
      "Painel: Digital",
      "Programas: 8 automáticos",
      "Timer: até 60 min",
    ],
    frete: "Frete grátis",
  },
  {
    id: 14,
    nome: "Kit Skincare Facial Sérum Vitamina C 30ml",
    marca: "VitaC",
    preco: 79.9,
    precoOriginal: 119.9,
    categoria: "beleza",
    foto: "",
    vendidos: 6700,
    avaliacao: 4.9,
    descricao:
      "Sérum facial com Vitamina C pura a 20%, Ácido Hialurônico e Vitamina E. Clareia manchas, combate sinais de idade e revitaliza a pele. Resultado visível em 4 semanas.",
    especificacoes: [
      "Volume: 30ml",
      "Ativo: Vitamina C 20%",
      "Complemento: Ácido Hialurônico",
      "Uso: Diário (manhã/noite)",
      "Não testado em animais",
    ],
    frete: "Frete grátis",
  },
  {
    id: 15,
    nome: "Bicicleta Ergométrica Domyos EM 100",
    marca: "Domyos",
    preco: 899.9,
    precoOriginal: 1199.9,
    categoria: "esportes",
    foto: "",
    vendidos: 450,
    avaliacao: 4.5,
    descricao:
      "Bicicleta ergométrica com 8 níveis de resistência, painel com monitor de batimentos cardíacos, caloria, distância e velocidade. Assento ajustável e pedais antiderrapantes.",
    especificacoes: [
      "Níveis: 8 resistências",
      "Monitor: Calorias, BPM, distância",
      "Peso usuário: até 110kg",
      "Ajuste: Assento e guidão",
      "Montagem: Simples",
    ],
    frete: "Frete grátis",
  },
  {
    id: 16,
    nome: "Kit Carrinho de Ferramentas 128 Peças",
    marca: "Tramontina",
    preco: 249.9,
    precoOriginal: 349.9,
    categoria: "automotivo",
    foto: "",
    vendidos: 2300,
    avaliacao: 4.8,
    descricao:
      "Kit completo de 128 peças com chaves de boca, allen, Phillips e chaves de fenda. Estojo em metal com rodízios, ideal para oficina e casa. Aço cromo-vanádio de alta durabilidade.",
    especificacoes: [
      "Peças: 128",
      "Material: Aço cromo-vanádio",
      "Estojo: Metal com rodízios",
      "Marca: Tramontina",
      "Garantia: 12 meses",
    ],
    frete: "Frete grátis",
  },
  {
    id: 17,
    nome: "Console PlayStation 5 Slim 1TB Digital",
    marca: "Sony",
    preco: 3499.9,
    precoOriginal: 3999.9,
    categoria: "eletronicos",
    foto: "",
    vendidos: 1200,
    avaliacao: 4.9,
    descricao:
      "PlayStation 5 Slim edição digital com SSD de 1TB, ray tracing, áudio 3D Tempest e controle DualSense com feedback háptico. Compatível com jogos PS5 e PS4.",
    especificacoes: [
      "Armazenamento: 1TB SSD",
      "Resolução: Até 8K",
      "Controle: DualSense",
      "Ray Tracing: Sim",
      "Edição: Digital (sem leitor)",
    ],
    frete: "Frete grátis",
  },
  {
    id: 18,
    nome: "Smartwatch Xiaomi Redmi Watch 5 Active",
    marca: "Xiaomi",
    preco: 249.9,
    precoOriginal: 349.9,
    categoria: "eletronicos",
    foto: "",
    vendidos: 7800,
    avaliacao: 4.7,
    descricao:
      "Smartwatch Redmi Watch 5 Active com tela LCD de 2 polegadas, GPS integrado, monitor cardíaco, oxímetro, 18 modos esportivos e bateria de até 18 dias.",
    especificacoes: [
      "Tela: 2.0\" LCD",
      "Bateria: até 18 dias",
      "GPS: Integrado",
      "Sensor: Frequência cardíaca, SpO2",
      "Resistência: 5 ATM",
    ],
    frete: "Frete grátis",
  },
  {
    id: 19,
    nome: "Batedeira Planetária 5,5L 10 Velocidades",
    marca: "Philco",
    preco: 449.9,
    precoOriginal: 599.9,
    categoria: "eletronicos",
    foto: "",
    vendidos: 3400,
    avaliacao: 4.6,
    descricao:
      "Batedeira planetária com tigela de inox de 5,5 litros, 10 velocidades e 3 batedeiras. Motor potente de 1000W, cabo enrolador e sistema planetário para mistura perfeita.",
    especificacoes: [
      "Capacidade: 5,5 litros",
      "Potência: 1000W",
      "Velocidades: 10 + Turbo",
      "Tigela: Inox",
      "Acessórios: 3 batedeiras",
    ],
    frete: "Frete grátis",
  },
  {
    id: 20,
    nome: "Jogo de Panelas Antiaderente 5 Peças",
    marca: "Cerafun",
    preco: 279.9,
    precoOriginal: 379.9,
    categoria: "moveis",
    foto: "",
    vendidos: 5600,
    avaliacao: 4.7,
    descricao:
      "Jogo de panelas 5 peças com revestimento antiaderente marble, fundo de indução e cabos cool touch. Inclui: frigideira 24cm, frigideira 28cm, 3 panelas com tampas.",
    especificacoes: [
      "Peças: 5",
      "Revestimento: Antiaderente marble",
      "Fundo: Indução",
      "Cabos: Cool touch",
      "Compatível: Fogão e indução",
    ],
    frete: "Frete grátis",
  },
  {
    id: 21,
    nome: "Perfume Eau de Parfum Feminino 100ml",
    marca: "O Boticário",
    preco: 159.9,
    precoOriginal: 219.9,
    categoria: "beleza",
    foto: "",
    vendidos: 8900,
    avaliacao: 4.8,
    descricao:
      "Perfume Eau de Parfum feminino com notas florais e amadeiradas. Fixação de até 12 horas, frasco de 100ml com borrifador. Sofisticação e elegância em cada aplicação.",
    especificacoes: [
      "Volume: 100ml",
      "Família: Floral Amadeirada",
      "Fixação: Longa duração",
      "Gênero: Feminino",
      "Borrifador: Sim",
    ],
    frete: "Frete grátis",
  },
  {
    id: 22,
    nome: "Cadeira Gamer Ergonômica Reclinável 180°",
    marca: "ThunderX3",
    preco: 799.9,
    precoOriginal: 1099.9,
    categoria: "moveis",
    foto: "",
    vendidos: 1800,
    avaliacao: 4.6,
    descricao:
      "Cadeira gamer com reclínio de 180°, apoio de braços 4D, almofadas lombar e cervical. Estrutura em aço, couro sintético premium e rodízios com freio. Suporta até 150kg.",
    especificacoes: [
      "Reclínio: até 180°",
      "Apoio braços: 4D",
      "Capacidade: 150kg",
      "Material: Couro sintético",
      "Rodízios: Com freio",
    ],
    frete: "Frete grátis",
  },
  {
    id: 23,
    nome: "Webcam Full HD 1080p com Microfone",
    marca: "Logitech",
    preco: 249.9,
    precoOriginal: 329.9,
    categoria: "eletronicos",
    foto: "",
    vendidos: 4200,
    avaliacao: 4.7,
    descricao:
      "Webcam Full HD 1080p a 30fps com microfone estéreo omnidirecional, correção automática de luz e clássico HD. Ideal para reuniões, aulas e lives. Plug and Play.",
    especificacoes: [
      "Resolução: 1920x1080p",
      "FPS: 30",
      "Microfone: Estéreo",
      "Autofoco: Sim",
      "Conexão: USB",
    ],
    frete: "Frete grátis",
  },
  {
    id: 24,
    nome: "Camiseta Manga Longa Masculina Fleece",
    marca: "Basic Wear",
    preco: 69.9,
    precoOriginal: 99.9,
    categoria: "vestuario",
    foto: "",
    vendidos: 7600,
    avaliacao: 4.5,
    descricao:
      "Camiseta manga longa em fleece macio e quente, ideal para o inverno. Modelagem slim fit, gola redonda e punhos elastificados. Perfeita para compor looks casuais.",
    especificacoes: [
      "Material: Fleece",
      "Modelagem: Slim fit",
      "Manga: Longa",
      "Tamanhos: P, M, G, GG",
      "Cores: Preto, Cinza, Verde",
    ],
    frete: "Frete a calcular",
  },
  {
    id: 25,
    nome: "Arroz Branco Tipo 1 Pacote 5kg",
    marca: "Tio João",
    preco: 24.9,
    precoOriginal: 31.9,
    categoria: "alimentos",
    foto: "",
    vendidos: 56000,
    avaliacao: 4.8,
    descricao:
      "Arroz branco tipo 1, grãos selecionados e soltos. Embalagem de 5kg, ideal para o dia a dia da família. Cozimento rápido e sabor tradicional.",
    especificacoes: [
      "Peso: 5kg",
      "Tipo: 1",
      "Grãos: Branco",
      "Validade: 12 meses",
      "Embalagem: Fácil abertura",
    ],
    frete: "Frete a calcular",
  },
  {
    id: 26,
    nome: "Teclado Mecânico Gamer RGB ABNT2",
    marca: "Redragon",
    preco: 199.9,
    precoOriginal: 279.9,
    categoria: "eletronicos",
    foto: "",
    vendidos: 5400,
    avaliacao: 4.7,
    descricao:
      "Teclado mecânico gamer com switches azuis, iluminação RGB em 18 modos, teclado ABNT2 com acentuação brasileira. Estrutura em alumínio e cabo trançado.",
    especificacoes: [
      "Switches: Azul mecânico",
      "Iluminação: RGB 18 modos",
      "Layout: ABNT2",
      "Estrutura: Alumínio",
      "Anti-ghosting: Sim",
    ],
    frete: "Frete grátis",
  },
  {
    id: 27,
    nome: "Bolsa Feminina Transversal Couro Sintético",
    marca: "Ellie",
    preco: 119.9,
    precoOriginal: 169.9,
    categoria: "vestuario",
    foto: "",
    vendidos: 6800,
    avaliacao: 4.6,
    descricao:
      "Bolsa transversal feminina em couro sintético de alta qualidade, com forro interno, múltiplos compartimentos e alça ajustável. Design moderno e elegante.",
    especificacoes: [
      "Material: Couro sintético",
      "Tipo: Transversal",
      "Alça: Ajustável",
      "Compartimentos: 4",
      "Cor: Preto, Bege, Vinho",
    ],
    frete: "Frete a calcular",
  },
  {
    id: 28,
    nome: "Aspirador de Pó Vertical 2 em 1 800W",
    marca: "Philco",
    preco: 329.9,
    precoOriginal: 449.9,
    categoria: "moveis",
    foto: "",
    vendidos: 3100,
    avaliacao: 4.5,
    descricao:
      "Aspirador de pó vertical 2 em 1 com motor de 800W, filtro HEPA, contentor de 1L e 2 velocidades. Converte em aspirador portátil para limpeza rápida.",
    especificacoes: [
      "Potência: 800W",
      "Filtro: HEPA",
      "Capacidade: 1L",
      "Funções: Vertical + Portátil",
      "Cabo: 5 metros",
    ],
    frete: "Frete grátis",
  },
  {
    id: 29,
    nome: "Kit Shampoo e Condicionador Reparador 2x400ml",
    marca: "Pantene",
    preco: 39.9,
    precoOriginal: 54.9,
    categoria: "beleza",
    foto: "",
    vendidos: 18500,
    avaliacao: 4.7,
    descricao:
      "Kit Pantene Pro-V Reparação com shampoo e condicionador 400ml cada. Fórmula com queratina, restaura cabelos danificados e devolve o brilho natural.",
    especificacoes: [
      "Itens: Shampoo + Condicionador",
      "Volume: 2x400ml",
      "Linha: Reparação Pro-V",
      "Cabelo: Danificado",
      "Uso: Diário",
    ],
    frete: "Frete a calcular",
  },
  {
    id: 30,
    nome: "Raquete de Tênis Profissional com Encosto",
    marca: "Head",
    preco: 399.9,
    precoOriginal: 549.9,
    categoria: "esportes",
    foto: "",
    vendidos: 890,
    avaliacao: 4.8,
    descricao:
      "Raquete de tênis profissional com quadro em grafite, peso 300g, cabeçalho 100 polegadas. Inclui encosto e 3 bolas de tênis. Tensão de corda 53 LBS.",
    especificacoes: [
      "Peso: 300g",
      "Cabeçalho: 100 sq.in",
      "Material: Grafite",
      "Tensão: 53 LBS",
      "Inclui: Encosto + 3 bolas",
    ],
    frete: "Frete grátis",
  },
  {
    id: 31,
    nome: "Smartphone Motorola Moto G84 5G 256GB",
    marca: "Motorola",
    preco: 1599.9,
    precoOriginal: 1999.9,
    categoria: "eletronicos",
    foto: "",
    vendidos: 2800,
    avaliacao: 4.7,
    descricao:
      "Moto G84 5G com tela pOLED de 6.5\" 120Hz, câmera de 50MP com OIS, 256GB de armazenamento, 12GB de RAM (8+4 virtual) e bateria de 5000mAh com carregamento de 30W.",
    especificacoes: [
      "Tela: 6.5\" pOLED 120Hz",
      "Câmera: 50MP OIS",
      "Memória: 12GB + 256GB",
      "Bateria: 5000mAh",
      "Carregamento: 30W TurboPower",
    ],
    frete: "Frete grátis",
  },
  {
    id: 32,
    nome: "Monitor Gamer 24\" 165Hz IPS Full HD",
    marca: "AOC",
    preco: 749.9,
    precoOriginal: 999.9,
    categoria: "eletronicos",
    foto: "",
    vendidos: 3600,
    avaliacao: 4.8,
    descricao:
      "Monitor gamer AOC de 24 polegadas com taxa de 165Hz, painel IPS, 1ms de resposta e compatibilidade AMD FreeSync. Full HD 1080p, HDR10 e 2 entradas HDMI.",
    especificacoes: [
      "Tela: 24\" Full HD",
      "Taxa: 165Hz",
      "Resposta: 1ms",
      "Painel: IPS",
      "AMD FreeSync: Sim",
    ],
    frete: "Frete grátis",
  },
  {
    id: 33,
    nome: "Vestido Midi Festa Feminino Longo",
    marca: "Fashion",
    preco: 189.9,
    precoOriginal: 259.9,
    categoria: "vestuario",
    foto: "",
    vendidos: 2400,
    avaliacao: 4.6,
    descricao:
      "Vestido midi de festa com transpasse, tecido viscolycra e brilho sutil. Modelagem que valoriza a silhueta, ideal para casamentos, formaturas e eventos especiais.",
    especificacoes: [
      "Comprimento: Midi",
      "Material: Viscolycra",
      "Estilo: Festa",
      "Tamanhos: 38 ao 48",
      "Cores: Azul, Vinho, Preto",
    ],
    frete: "Frete a calcular",
  },
  {
    id: 34,
    nome: "Feijão Carioca Tipo 1 Pacote 1kg",
    marca: "Camil",
    preco: 8.9,
    precoOriginal: 11.9,
    categoria: "alimentos",
    foto: "",
    vendidos: 67000,
    avaliacao: 4.7,
    descricao:
      "Feijão carioca tipo 1 grão selecionado, embalagem de 1kg. Grãos uniformes e de fácil cozimento, ideal para o prato brasileiro tradicional.",
    especificacoes: [
      "Peso: 1kg",
      "Tipo: 1",
      "Variedade: Carioca",
      "Validade: 18 meses",
      "Embalagem: Saca",
    ],
    frete: "Frete a calcular",
  },
  {
    id: 35,
    nome: "Cafeteira Elétrica 15 Xícaras com Filtro",
    marca: "Philco",
    preco: 89.9,
    precoOriginal: 129.9,
    categoria: "eletronicos",
    foto: "",
    vendidos: 9200,
    avaliacao: 4.6,
    descricao:
      "Cafeteira elétrica de 15 xícaras com aquecedor, filtro permanente e tanque removível. Desligamento automático e luz indicadora. Café sempre quente.",
    especificacoes: [
      "Capacidade: 15 xícaras",
      "Filtro: Permanente",
      "Aquecedor: Sim",
      "Desligamento: Automático",
      "Voltagem: 127V/220V",
    ],
    frete: "Frete grátis",
  },
  {
    id: 36,
    nome: "Luminária de Mesa LED com Braço Articulado",
    marca: "Wagner",
    preco: 79.9,
    precoOriginal: 119.9,
    categoria: "moveis",
    foto: "",
    vendidos: 4100,
    avaliacao: 4.7,
    descricao:
      "Luminária LED de mesa com braço articulado, 3 temperaturas de cor (neutra, quente e fria) e 5 níveis de intensidade. Base pesada antiderrapante.",
    especificacoes: [
      "LED: 12W",
      "Temperaturas: 3 modos",
      "Intensidade: 5 níveis",
      "Braço: Articulado 360°",
      "Timer: 30 min",
    ],
    frete: "Frete grátis",
  },
  {
    id: 37,
    nome: "Paleta de Sombras 18 Cores Matte e Glitter",
    marca: "Ruby Rose",
    preco: 49.9,
    precoOriginal: 79.9,
    categoria: "beleza",
    foto: "",
    vendidos: 14300,
    avaliacao: 4.8,
    descricao:
      "Paleta de sombras com 18 cores em acabamento matte e glitter. Pigmentação intensa e alta durabilidade, fácil de esfumar. Espelho incluído na caixa.",
    especificacoes: [
      "Cores: 18",
      "Acabamento: Matte + Glitter",
      "Pigmentação: Alta",
      "Espelho: Sim",
      "Cruelty-free: Sim",
    ],
    frete: "Frete a calcular",
  },
  {
    id: 38,
    nome: "Bola de Futebol Campo Profissional Tambores",
    marca: "Penalty",
    preco: 149.9,
    precoOriginal: 199.9,
    categoria: "esportes",
    foto: "",
    vendidos: 3800,
    avaliacao: 4.7,
    descricao:
      "Bola de futebol campo costura híbrida com câmara de butil. Aprovada para jogos oficiais, excelente retenção de ar e durabilidade. Tamanho oficial.",
    especificacoes: [
      "Tamanho: Oficial (5)",
      "Costura: Híbrida",
      "Câmara: Butil",
      "Material: PU 1.2mm",
      "Aprovada: CBF",
    ],
    frete: "Frete grátis",
  },
  {
    id: 39,
    nome: "Suporte de Celular Veicular Magnético",
    marca: "Baseus",
    preco: 49.9,
    precoOriginal: 79.9,
    categoria: "automotivo",
    foto: "",
    vendidos: 11200,
    avaliacao: 4.8,
    descricao:
      "Suporte veicular magnético com 6 ímãs de alta força, instalação no ventilador, rotação 360° e compatível com todos os smartphones. Design minimalista.",
    especificacoes: [
      "Ímãs: 6 potentes",
      "Instalação: Ventilador",
      "Rotação: 360°",
      "Compatível: Todos os celulares",
      "Material: Metal + ABS",
    ],
    frete: "Frete a calcular",
  },
  {
    id: 40,
    nome: "Cubo Mágico Profissional 3x3 Velocidade",
    marca: "MoYu",
    preco: 59.9,
    precoOriginal: 89.9,
    categoria: "brinquedos",
    foto: "",
    vendidos: 7600,
    avaliacao: 4.9,
    descricao:
      "Cubo mágico profissional 3x3 com ímãs ajustáveis, alto deslize e stickers coloridos duráveis. Ideal para cubers de todos os níveis. Peso ultraleve.",
    especificacoes: [
      "Tamanho: 56mm",
      "Ímãs: Ajustáveis",
      "Deslize: Alto",
      "Peso: 78g",
      "Acessório: Torre de treino",
    ],
    frete: "Frete a calcular",
  },
  {
    id: 41,
    nome: "Headset Gamer 7.1 Surround com RGB",
    marca: "HyperX",
    preco: 299.9,
    precoOriginal: 399.9,
    categoria: "eletronicos",
    foto: "",
    vendidos: 4900,
    avaliacao: 4.7,
    descricao:
      "Headset gamer com som surround 7.1, drivers de 53mm, microfone removível com cancelamento de ruído e iluminação RGB. Almofadas em espuma memory foam.",
    especificacoes: [
      "Áudio: 7.1 Surround",
      "Drivers: 53mm",
      "Microfone: Removível",
      "RGB: Sim",
      "Conexão: USB + 3.5mm",
    ],
    frete: "Frete grátis",
  },
  {
    id: 42,
    nome: "Mochila Escolar Resistente à Água 25L",
    marca: "Ariston",
    preco: 89.9,
    precoOriginal: 129.9,
    categoria: "vestuario",
    foto: "",
    vendidos: 9800,
    avaliacao: 4.6,
    descricao:
      "Mochila escolar com 25 litros, tecido impermeável, compartimento para notebook de 15.6\", costuras reforçadas e alças acolchoadas. Organize seus estudos.",
    especificacoes: [
      "Capacidade: 25L",
      "Notebook: até 15.6\"",
      "Tecido: Impermeável",
      "Alças: Acolchoadas",
      "Compartimentos: 6",
    ],
    frete: "Frete grátis",
  },
  {
    id: 43,
    nome: "Açucareiro de Vidro com Tampa 500g",
    marca: "Vieira",
    preco: 29.9,
    precoOriginal: 39.9,
    categoria: "moveis",
    foto: "",
    vendidos: 6200,
    avaliacao: 4.5,
    descricao:
      "Açucareiro de vidro temperado com tampa hermética de bambu. Capacidade de 500g, design minimalista que combina com qualquer decoração de cozinha.",
    especificacoes: [
      "Material: Vidro temperado",
      "Capacidade: 500g",
      "Tampa: Bambu hermética",
      "Dimensões: 10x10x15cm",
      "Lavagem: Máquina",
    ],
    frete: "Frete a calcular",
  },
  {
    id: 44,
    nome: "Óculos de Sol Feminino Retro UV400",
    marca: "Ray Vision",
    preco: 79.9,
    precoOriginal: 119.9,
    categoria: "vestuario",
    foto: "",
    vendidos: 8700,
    avaliacao: 4.7,
    descricao:
      "Óculos de sol modelo retro com lentes polarizadas UV400, proteção total contra raios solares. Armação leve em acetato, acompanha estojo rígido.",
    especificacoes: [
      "Proteção: UV400",
      "Lentes: Polarizadas",
      "Armação: Acetato",
      "Acessório: Estojo rígido",
      "Estilo: Retro",
    ],
    frete: "Frete a calcular",
  },
  {
    id: 45,
    nome: "Purificador de Água Gelado Frio Compacto",
    marca: "Electrolux",
    preco: 549.9,
    precoOriginal: 699.9,
    categoria: "moveis",
    foto: "",
    vendidos: 1400,
    avaliacao: 4.6,
    descricao:
      "Purificador de água com dispensador gelado e ambiente, 20 litros por hora, filtro de carvão ativado e design compacto ideal para escritórios e casas.",
    especificacoes: [
      "Capacidade: 20L/h",
      "Filtro: Carvão ativado",
      "Funções: Gelado + Ambiente",
      "Tensão: 127V",
      "Cuba: Inox",
    ],
    frete: "Frete grátis",
  },
  {
    id: 46,
    nome: "Kit Canetas Hidrograficas 24 Cores",
    marca: "Faber Castell",
    preco: 59.9,
    precoOriginal: 89.9,
    categoria: "brinquedos",
    foto: "",
    vendidos: 12400,
    avaliacao: 4.9,
    descricao:
      "Kit com 24 canetas hidrográficas de cores vivas e intensas, ponta firme de 0.8mm. Tinta permanente, secagem rápida e lavável. Ideais para arte e estudo.",
    especificacoes: [
      "Cores: 24",
      "Ponta: 0.8mm",
      "Tinta: Permanente",
      "Secagem: Rápida",
      "Lavável: Sim",
    ],
    frete: "Frete a calcular",
  },
  {
    id: 47,
    nome: "Aspirador Robô Inteligente com Mapeamento",
    marca: "Xiaomi",
    preco: 1499.9,
    precoOriginal: 1999.9,
    categoria: "eletronicos",
    foto: "",
    vendidos: 2100,
    avaliacao: 4.7,
    descricao:
      "Aspirador robô com mapeamento laser LDS, navegação inteligente, potência de 4000Pa, controle por app e Alexa. Aspira e passa pano simultaneamente.",
    especificacoes: [
      "Potência: 4000Pa",
      "Mapeamento: Laser LDS",
      "Controle: App + Alexa",
      "Função: Aspira + Passa pano",
      "Bateria: 5200mAh",
    ],
    frete: "Frete grátis",
  },
  {
    id: 48,
    nome: "Tênis de Corrida Asics Gel Contend 8",
    marca: "Asics",
    preco: 449.9,
    precoOriginal: 599.9,
    categoria: "esportes",
    foto: "",
    vendidos: 1900,
    avaliacao: 4.8,
    descricao:
      "Tênis de corrida Asics Gel Contend 8 com tecnologia GEL no calcanhar, entressola AMPLIFOAM e cabedal em mesh respirável. Estabilidade e conforto em cada passo.",
    especificacoes: [
      "Tecnologia: GEL",
      "Entressola: AMPLIFOAM",
      "Cabedal: Mesh",
      "Uso: Corrida",
      "Tamanhos: 36 ao 44",
    ],
    frete: "Frete grátis",
  },
  {
    id: 49,
    nome: "Máquina de Costura Portátil Compacta",
    marca: "Riccar",
    preco: 399.9,
    precoOriginal: 549.9,
    categoria: "moveis",
    foto: "",
    vendidos: 870,
    avaliacao: 4.5,
    descricao:
      "Máquina de costura portátil com 12 pontos, pedal e agulha dupla. Compacta e leve, ideal para reparos e projetos de costura. Inclui acessórios básicos.",
    especificacoes: [
      "Pontos: 12 tipos",
      "Recursos: Agulha dupla",
      "Alimentação: 127V",
      "Acessórios: Inclusos",
      "Peso: 5kg",
    ],
    frete: "Frete grátis",
  },
  {
    id: 50,
    nome: "Kit Presente Chocolates Finos caixa 18 unidades",
    marca: "Dengo",
    preco: 129.9,
    precoOriginal: 169.9,
    categoria: "alimentos",
    foto: "",
    vendidos: 5300,
    avaliacao: 4.9,
    descricao:
      "Caixa presente com 18 chocolates finos artesanais, recheios variados: caramelo salgado, maracujá, pistache e brigadeiro gourmet. Embalagem premium.",
    especificacoes: [
      "Unidades: 18",
      "Sabores: 6 variados",
      "Marca: Dengo",
      "Embalagem: Presente",
      "Validade: 3 meses",
    ],
    frete: "Frete grátis",
  },
];

/* ============ ESTADO DO SISTEMA ============ */
let carrinho = [];
let total = 0;
let lucroTotal = Number(localStorage.getItem("lucroTotal")) || 0;
let gastoTotal = Number(localStorage.getItem("gastoTotal")) || 0;
let plataformaAtual = localStorage.getItem("plataforma") || "local";
let pagamentoSelecionado = "pix";
let entregaSelecionada = "shopee";
let cupomDesconto = 0;
let cupomCodigo = "";
let produtoModalAtual = null;
let quantidadeModal = 1;
let avaliacoesProdutoAtual = [];
let notaSelecionada = 0;
let fotoAvaliacaoBase64 = "";

/* ============ TAXAS POR PLATAFORMA ============ */
const TAXAS = {
  local: { taxa: 0.05, nome: "Loja Local" },
  shopee: { taxa: 0.14, nome: "Shopee" },
  "mercado-livre": { taxa: 0.16, nome: "Mercado Livre" },
};

/* ============ DESCONTOS POR PAGAMENTO ============ */
const PAGAMENTOS = {
  pix: { desconto: 0.05, nome: "PIX (5% de desconto)" },
  cartao: { desconto: 0, nome: "Cartão de Crédito (3x sem juros)" },
  boleto: { desconto: 0, nome: "Boleto Bancário" },
  dinheiro: { desconto: 0.1, nome: "Dinheiro (10% de desconto)" },
};

/* ============ ENTREGAS ============ */
const ENTREGAS = {
  shopee: { custo: 0, prazo: "5 a 7 dias úteis", nome: "Shopee Entrega Rápida" },
  "mercado-livre": { custo: 19.9, prazo: "3 a 5 dias úteis", nome: "Mercado Livre Envio" },
  correios: { custo: 24.9, prazo: "7 a 15 dias úteis", nome: "Correios (via CEP)" },
  retirada: { custo: 0, prazo: "Hoje mesmo", nome: "Retirada na Loja" },
};

/* ============ MUDAR PLATAFORMA ============ */
function mudarPlataforma(plataforma) {
  plataformaAtual = plataforma;
  localStorage.setItem("plataforma", plataforma);
  atualizarTela();
}

/* ============ RENDERIZAR PRODUTOS ============ */
function renderizarProdutos(lista = PRODUTOS) {
  const catalogo = document.getElementById("catalogo-produtos");
  catalogo.innerHTML = "";

  lista.forEach((produto) => {
    const card = document.createElement("div");
    card.className = "card";
    card.onclick = () => abrirProduto(produto.id);

    const desconto = produto.precoOriginal > produto.preco
      ? Math.round(((produto.precoOriginal - produto.preco) / produto.precoOriginal) * 100)
      : 0;

    const fotoHTML = produto.foto
      ? `<img src="${produto.foto}" alt="${produto.nome}">`
      : `<div class="icone-sem-foto">📦</div>`;

    const estrelas = "★".repeat(Math.floor(produto.avaliacao));

    card.innerHTML = `
      <div class="card-imagem">
        ${fotoHTML}
        ${desconto > 0 ? `<span class="badge">-${desconto}%</span>` : ""}
        <span class="badge-ver-detalhes">👁️ Ver detalhes</span>
      </div>
      <div class="card-conteudo">
        <h3>${produto.nome}</h3>
        <span class="marca">${produto.marca}</span>
        <div class="card-preco">R$ ${produto.preco.toFixed(2).replace(".", ",")}</div>
        <div class="card-vendido">
          <span>${estrelas} ${produto.avaliacao}</span>
          <span>${formatarNumero(produto.vendidos)} vendidos</span>
        </div>
        <button class="botao-adicionar" onclick="event.stopPropagation(); adicionar(${produto.id})">
          🛒 Adicionar ao Carrinho
        </button>
      </div>
    `;

    catalogo.appendChild(card);
  });
}

/* ============ FORMATAR NÚMERO ============ */
function formatarNumero(num) {
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(".", ",") + "k";
  }
  return num.toString();
}

/* ============ FILTRAR PRODUTOS ============ */
function filtrarProdutos() {
  const busca = document.getElementById("busca-produtos").value.toLowerCase();
  const categoria = document.getElementById("filtro-categoria").value;
  const faixaPreco = document.getElementById("filtro-preco").value;

  const todosProdutos = [...PRODUTOS, ...produtosCadastrados];

  let filtrados = todosProdutos.filter((p) => {
    const nomeMatch = p.nome.toLowerCase().includes(busca);
    const categoriaMatch = categoria === "todos" || p.categoria === categoria;
    return nomeMatch && categoriaMatch;
  });

  if (faixaPreco !== "todos") {
    filtrados = filtrados.filter((p) => {
      if (faixaPreco === "0-50") return p.preco <= 50;
      if (faixaPreco === "50-100") return p.preco >= 50 && p.preco <= 100;
      if (faixaPreco === "100-500") return p.preco >= 100 && p.preco <= 500;
      if (faixaPreco === "500-1000") return p.preco >= 500 && p.preco <= 1000;
      if (faixaPreco === "1000-plus") return p.preco >= 1000;
      return true;
    });
  }

  renderizarProdutos(filtrados);

  const contador = document.getElementById("totalResultados");
  if (contador) {
    contador.textContent = `(${filtrados.length} ${filtrados.length === 1 ? "produto encontrado" : "produtos encontrados"})`;
  }
}

/* ============ ATUALIZAR TELA ============ */
function atualizarTela() {
  const lista = document.getElementById("listaCarrinho");
  const contador = document.getElementById("contadorCarrinho");
  const vazio = document.getElementById("carrinhoVazio");

  lista.innerHTML = "";

  carrinho.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="item-info">
        <strong>${item.nome}</strong>
        <small>Qtd: ${item.qtd || 1}</small>
      </div>
      <span class="preco-item">R$ ${(item.preco * (item.qtd || 1)).toFixed(2).replace(".", ",")}</span>
      <span class="remover" onclick="removerItem(${index})">❌</span>
    `;
    lista.appendChild(li);
  });

  vazio.style.display = carrinho.length === 0 ? "block" : "none";
  contador.textContent = carrinho.reduce((s, i) => s + (i.qtd || 1), 0);

  document.getElementById("lucroTotal").textContent = lucroTotal.toFixed(2).replace(".", ",");
  document.getElementById("gastoTotal").textContent = gastoTotal.toFixed(2).replace(".", ",");

  atualizarResumo();
}

/* ============ SELECIONAR PAGAMENTO ============ */
function selecionarPagamento(el) {
  document.querySelectorAll(".opcao-pagamento").forEach((o) => o.classList.remove("ativo"));
  el.classList.add("ativo");
  pagamentoSelecionado = el.dataset.valor;
  el.querySelector("input").checked = true;
  atualizarResumo();
}

/* ============ SELECIONAR ENTREGA ============ */
function selecionarEntrega(el) {
  document.querySelectorAll(".opcao-entrega").forEach((o) => o.classList.remove("ativo"));
  el.classList.add("ativo");
  entregaSelecionada = el.dataset.valor;
  el.querySelector("input").checked = true;
  atualizarResumo();
}

/* ============ APLICAR CUPOM ============ */
function aplicarCupom() {
  const campo = document.getElementById("cupom");
  const status = document.getElementById("cupomStatus");
  const codigo = campo.value.trim().toUpperCase();

  const CUPONS = {
    PROMO10: 0.10,
    QUANTUM15: 0.15,
    LOJA20: 0.20,
    BEMVINDO5: 0.05,
  };

  if (!codigo) {
    status.textContent = "Digite um código de cupom.";
    status.className = "cupom-status erro";
    return;
  }

  if (CUPONS[codigo]) {
    cupomDesconto = CUPONS[codigo];
    cupomCodigo = codigo;
    status.textContent = `✅ Cupom ${codigo} aplicado! ${cupomDesconto * 100}% de desconto.`;
    status.className = "cupom-status sucesso";
    campo.value = codigo;
    atualizarResumo();
  } else {
    cupomDesconto = 0;
    cupomCodigo = "";
    status.textContent = `❌ Cupom "${codigo}" inválido. Tente: PROMO10, QUANTUM15 ou LOJA20`;
    status.className = "cupom-status erro";
    atualizarResumo();
  }
}

/* ============ CALCULAR TOTAIS ============ */
function calcularTotais() {
  const taxaPlataforma = TAXAS[plataformaAtual].taxa;
  const descontoPagamento = PAGAMENTOS[pagamentoSelecionado].desconto;
  const custoEntrega = ENTREGAS[entregaSelecionada].custo;

  const taxa = total * taxaPlataforma;
  const descontoPagamentoValor = total * descontoPagamento;
  const descontoCupom = total * cupomDesconto;
  const desconto = descontoPagamentoValor + descontoCupom;
  const valorFinal = total + taxa + custoEntrega - desconto;

  return { taxa, desconto, custoEntrega, valorFinal, taxaPlataforma, descontoPagamento };
}

/* ============ ATUALIZAR RESUMO ============ */
function atualizarResumo() {
  const { taxa, desconto, custoEntrega, valorFinal, taxaPlataforma } = calcularTotais();

  document.getElementById("precoFinal").textContent =
    `R$ ${total.toFixed(2).replace(".", ",")}`;
  document.getElementById("taxasFinal").textContent =
    `R$ ${taxa.toFixed(2).replace(".", ",")} (${(taxaPlataforma * 100).toFixed(0)}%)`;
  document.getElementById("descontoFinal").textContent =
    `- R$ ${desconto.toFixed(2).replace(".", ",")}`;
  document.getElementById("entregaValor").textContent =
    custoEntrega === 0 ? "Grátis" : `R$ ${custoEntrega.toFixed(2).replace(".", ",")}`;
  document.getElementById("valorTotalFinal").textContent =
    `R$ ${valorFinal.toFixed(2).replace(".", ",")}`;

  const info = document.getElementById("infoParcelamento");
  if (pagamentoSelecionado === "cartao" && valorFinal > 0) {
    info.textContent = `ou 3x de R$ ${(valorFinal / 3).toFixed(2).replace(".", ",")} sem juros`;
  } else if (pagamentoSelecionado === "pix" && valorFinal > 0) {
    info.textContent = `⚡ à vista no PIX com 5% de desconto já aplicado`;
  } else {
    info.textContent = "";
  }
}

/* ============ ADICIONAR PRODUTO ============ */
function adicionar(id, qtd = 1) {
  const produto = [...PRODUTOS, ...produtosCadastrados].find((p) => p.id === id);
  if (!produto) return;

  const existente = carrinho.find((i) => i.id === id);
  if (existente) {
    existente.qtd = (existente.qtd || 1) + qtd;
  } else {
    carrinho.push({
      id: produto.id,
      nome: produto.nome,
      preco: produto.preco,
      categoria: produto.categoria,
      qtd,
    });
  }

  total += produto.preco * qtd;
  atualizarTela();
}

/* ============ REMOVER ITEM ============ */
function removerItem(index) {
  const item = carrinho[index];
  total -= item.preco * (item.qtd || 1);
  carrinho.splice(index, 1);
  atualizarTela();
}

/* ============ FINALIZAR COMPRA ============ */
function finalizarCompra() {
  if (carrinho.length === 0) {
    toast("Carrinho vazio! Adicione produtos antes de finalizar.", "aviso");
    return;
    return;
  }

  const { taxa, desconto, custoEntrega, valorFinal } = calcularTotais();

  const custoLoja = total * 0.7;
  const lucroVenda = valorFinal - custoLoja;

  lucroTotal += lucroVenda;
  gastoTotal += custoLoja;

  localStorage.setItem("lucroTotal", lucroTotal);
  localStorage.setItem("gastoTotal", gastoTotal);

  salvarPedido(valorFinal, lucroVenda);

  toast(`Compra finalizada! Total: R$ ${valorFinal.toFixed(2).replace(".", ",")} • ${PAGAMENTOS[pagamentoSelecionado].nome.split("(")[0].trim()} • ${ENTREGAS[entregaSelecionada].nome} 🎉`);

  carrinho = [];
  total = 0;
  cupomDesconto = 0;
  cupomCodigo = "";
  document.getElementById("cupom").value = "";
  document.getElementById("cupomStatus").textContent = "";

  atualizarTela();
}

/* ============ SALVAR PEDIDO ============ */
function salvarPedido(valorFinal, lucroVenda) {
  const pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

  pedidos.push({
    data: new Date().toLocaleString("pt-BR"),
    total: valorFinal.toFixed(2),
    lucro: lucroVenda.toFixed(2),
    pagamento: PAGAMENTOS[pagamentoSelecionado].nome,
    entrega: ENTREGAS[entregaSelecionada].nome,
    plataforma: TAXAS[plataformaAtual].nome,
    cupom: cupomCodigo || "Nenhum",
    itens: carrinho.reduce((s, i) => s + (i.qtd || 1), 0),
  });

  localStorage.setItem("pedidos", JSON.stringify(pedidos));
  carregarPedidos();
}

/* ============ CARREGAR PEDIDOS ============ */
function carregarPedidos() {
  const pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
  const listaPedidos = document.getElementById("listaPedidos");

  listaPedidos.innerHTML = "";

  pedidos.forEach((pedido, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div>
        <strong>Pedido ${index + 1}</strong> | ${pedido.data}<br>
        <small>${pedido.plataforma} | ${pedido.pagamento} | ${pedido.entrega} | ${pedido.itens} item(ns)</small>
      </div>
      <div>
        Total: R$ ${Number(pedido.total).toFixed(2).replace(".", ",")}<br>
        Lucro: R$ ${Number(pedido.lucro).toFixed(2).replace(".", ",")}
      </div>
    `;
    listaPedidos.appendChild(li);
  });
}

/* ============ LIMPAR HISTÓRICO ============ */
function limparPedidos() {
  if (confirm("Deseja realmente limpar o histórico de pedidos?")) {
    localStorage.removeItem("pedidos");
    carregarPedidos();
  }
}

/* ============================================
   ÁREA DE CADASTRO DE PRODUTOS
   ============================================ */

/* PRODUTOS CADASTRADOS PELO CLIENTE */
let produtosCadastrados = JSON.parse(localStorage.getItem("produtosCadastrados")) || [];
let fotoBase64 = "";
let editandoId = null;

/* ABRIR/FECHAR FORMULÁRIO */
function alternarCadastro() {
  const form = document.getElementById("formCadastro");
  const seta = document.getElementById("setaCadastro");
  const aberto = form.style.display !== "none";

  form.style.display = aberto ? "none" : "block";
  seta.classList.toggle("aberta");
  seta.textContent = aberto ? "▼" : "▲";
}

/* CARREGAR FOTO DO PRODUTO */
function carregarFoto(event) {
  const arquivo = event.target.files[0];
  if (!arquivo) return;

  if (!arquivo.type.startsWith("image/")) {
    toast("Selecione um arquivo de imagem válido.", "erro");
    return;
  }

  if (arquivo.size > 2 * 1024 * 1024) {
    toast("A imagem deve ter no máximo 2MB.", "erro");
    return;
  }

  const leitor = new FileReader();
  leitor.onload = function (e) {
    fotoBase64 = e.target.result;
    const preview = document.getElementById("previewFoto");
    preview.innerHTML = `<img src="${fotoBase64}" alt="Foto do produto">`;
    document.querySelector(".btn-remover-foto").style.display = "block";
  };
  leitor.readAsDataURL(arquivo);
}

/* REMOVER FOTO */
function removerFoto() {
  fotoBase64 = "";
  document.getElementById("previewFoto").innerHTML =
    "<span>📷<br>Clique para enviar a foto</span>";
  document.getElementById("fotoProduto").value = "";
  document.querySelector(".btn-remover-foto").style.display = "none";
}

/* SALVAR PRODUTO */
function salvarProduto() {
  const nome = document.getElementById("cadNome").value.trim();
  const marca = document.getElementById("cadMarca").value.trim();
  const preco = parseFloat(document.getElementById("cadPreco").value);
  const precoOriginal = parseFloat(document.getElementById("cadPrecoOriginal").value) || preco;
  const categoria = document.getElementById("cadCategoria").value;
  const avaliacao = parseFloat(document.getElementById("cadAvaliacao").value) || 4.5;
  const vendidos = parseInt(document.getElementById("cadVendidos").value) || 0;
  const frete = document.getElementById("cadFrete").value;
  const descricao = document.getElementById("cadDescricao").value.trim();
  const especificacoesTexto = document.getElementById("cadEspecificacoes").value.trim();

  // VALIDAÇÕES
  if (!nome) {
    toast("Preencha o nome do produto!", "erro");
    document.getElementById("cadNome").focus();
    return;
  }
  if (!marca) {
    toast("Preencha a marca do produto!", "erro");
    document.getElementById("cadMarca").focus();
    return;
  }
  if (!preco || preco <= 0) {
    toast("Informe um preço válido!", "erro");
    document.getElementById("cadPreco").focus();
    return;
  }
  if (!categoria) {
    toast("Selecione uma categoria!", "erro");
    document.getElementById("cadCategoria").focus();
    return;
  }
  if (!descricao) {
    toast("Preencha a descrição do produto!", "erro");
    document.getElementById("cadDescricao").focus();
    return;
  }

  // Converter especificações em array
  const especificacoes = especificacoesTexto
    ? especificacoesTexto.split("\n").filter((l) => l.trim() !== "")
    : [];

  const produto = {
    id: editandoId || Date.now(),
    nome,
    marca,
    preco,
    precoOriginal: precoOriginal >= preco ? precoOriginal : preco,
    categoria,
    avaliacao: Math.min(Math.max(avaliacao, 1), 5),
    vendidos,
    frete,
    descricao,
    especificacoes,
    foto: fotoBase64,
    cadastrado: true,
  };

  if (editandoId) {
    // EDITAR PRODUTO EXISTENTE
    const index = produtosCadastrados.findIndex((p) => p.id === editandoId);
    if (index !== -1) {
      produtosCadastrados[index] = produto;
    }
    editandoId = null;
    toast("Produto atualizado com sucesso! ✨");
  } else {
    // ADICIONAR NOVO
    produtosCadastrados.push(produto);
    toast("Produto cadastrado com sucesso! 🎉");
  }

  localStorage.setItem("produtosCadastrados", JSON.stringify(produtosCadastrados));

  limparFormulario();
  renderizarProdutosCadastrados();
  atualizarCatalogo();
}

/* EDITAR PRODUTO */
function editarProduto(id) {
  const produto = produtosCadastrados.find((p) => p.id === id);
  if (!produto) return;

  editandoId = id;

  document.getElementById("cadNome").value = produto.nome;
  document.getElementById("cadMarca").value = produto.marca;
  document.getElementById("cadPreco").value = produto.preco;
  document.getElementById("cadPrecoOriginal").value = produto.precoOriginal;
  document.getElementById("cadCategoria").value = produto.categoria;
  document.getElementById("cadAvaliacao").value = produto.avaliacao;
  document.getElementById("cadVendidos").value = produto.vendidos;
  document.getElementById("cadFrete").value = produto.frete;
  document.getElementById("cadDescricao").value = produto.descricao;
  document.getElementById("cadEspecificacoes").value = produto.especificacoes.join("\n");

  // Carregar foto
  fotoBase64 = produto.foto || "";
  if (fotoBase64) {
    document.getElementById("previewFoto").innerHTML =
      `<img src="${fotoBase64}" alt="Foto do produto">`;
    document.querySelector(".btn-remover-foto").style.display = "block";
  }

  // Abrir formulário se estiver fechado
  const form = document.getElementById("formCadastro");
  if (form.style.display === "none") {
    alternarCadastro();
  }

  // Rolar até o formulário
  document.querySelector(".cadastro-produto").scrollIntoView({ behavior: "smooth" });
}

/* EXCLUIR PRODUTO CADASTRADO */
function excluirProduto(id) {
  if (!confirm("Deseja realmente excluir este produto?")) return;

  produtosCadastrados = produtosCadastrados.filter((p) => p.id !== id);
  localStorage.setItem("produtosCadastrados", JSON.stringify(produtosCadastrados));

  renderizarProdutosCadastrados();
  atualizarCatalogo();
}

/* LIMPAR FORMULÁRIO */
function limparFormulario() {
  document.getElementById("cadNome").value = "";
  document.getElementById("cadMarca").value = "";
  document.getElementById("cadPreco").value = "";
  document.getElementById("cadPrecoOriginal").value = "";
  document.getElementById("cadCategoria").value = "";
  document.getElementById("cadAvaliacao").value = "4.5";
  document.getElementById("cadVendidos").value = "0";
  document.getElementById("cadFrete").value = "Frete grátis";
  document.getElementById("cadDescricao").value = "";
  document.getElementById("cadEspecificacoes").value = "";
  removerFoto();
  editandoId = null;
}

/* RENDERIZAR LISTA DE PRODUTOS CADASTRADOS */
function renderizarProdutosCadastrados() {
  const area = document.getElementById("areaProdutosCadastrados");
  const lista = document.getElementById("listaCadastrados");
  const contador = document.getElementById("contadorCadastrados");

  contador.textContent = produtosCadastrados.length;

  if (produtosCadastrados.length === 0) {
    area.style.display = "none";
    return;
  }

  area.style.display = "block";
  lista.innerHTML = "";

  produtosCadastrados.forEach((produto) => {
    const item = document.createElement("div");
    item.className = "item-cadastrado";

    const fotoHTML = produto.foto
      ? `<img src="${produto.foto}" alt="${produto.nome}">`
      : "📦";

    item.innerHTML = `
      <div class="foto-mini">${fotoHTML}</div>
      <div class="info-mini">
        <h4>${produto.nome}</h4>
        <div class="preco-mini">R$ ${produto.preco.toFixed(2).replace(".", ",")}</div>
        <small>${produto.marca} | ${produto.categoria}</small>
      </div>
      <div class="acoes-mini">
        <button class="btn-editar-mini" onclick="editarProduto(${produto.id})">✏️ Editar</button>
        <button class="btn-excluir-mini" onclick="excluirProduto(${produto.id})">🗑️ Excluir</button>
      </div>
    `;

    lista.appendChild(item);
  });
}

/* ATUALIZAR CATÁLOGO COM CADASTRADOS + PADRÃO */
function atualizarCatalogo() {
  const todos = [...PRODUTOS, ...produtosCadastrados];
  renderizarProdutos(todos);
}

/* ============================================
   MODAL DE DETALHES DO PRODUTO
   ============================================ */

/* NOMES DE USUÁRIOS PARA AVALIAÇÕES */
const NOMES_USUARIOS = [
  "Maria Silva", "João Santos", "Ana Oliveira", "Pedro Costa", "Juliana Lima",
  "Carlos Souza", "Fernanda Rocha", "Rafael Almeida", "Camila Pereira", "Lucas Martins",
  "Beatriz Nunes", "Gabriel Ribeiro", "Larissa Dias", "Thiago Carvalho", "Patrícia Gomes",
  "Rodrigo Teixeira", "Amanda Barbosa", "Bruno Cardoso", "Mariana Freitas", "Eduardo Moraes",
];

/* COMENTÁRIOS DE AVALIAÇÃO POR NOTA */
const COMENTARIOS_5 = [
  "Produto excelente! Superou minhas expectativas, chegou antes do prazo e a qualidade é incrível. Recomendo demais!",
  "Perfeito! Exatamente como na descrição. Embalagem caprichada e entrega rápida. Comprarei novamente!",
  "Adorei o produto, qualidade top e preço justo. Muito satisfeito com a compra, nota 10!",
  "Maravilhoso! Melhor que eu esperava. A loja é muito atenciosa e o envio foi rápido. Recomendo!",
  "Produto de altíssima qualidade. Uso todos os dias e continua como novo. Vale cada centavo!",
  "Incrível! Chegou tudo certinho, bem embalado. Já indiquei para toda a família. Nota 1000!",
];

const COMENTARIOS_4 = [
  "Muito bom produto, cumpre o que promete. Só achei um pouco pequeno, mas geralmente estou satisfeito.",
  "Ótima compra! Entrega dentro do prazo e boa qualidade. Perdeu uma estrela apenas porque o acabamento poderia ser melhor.",
  "Gostei bastante do produto, funciona bem. Recomendo, mas leiam as especificações com atenção antes de comprar.",
  "Bom produto pelo preço. Atendeu minhas necessidades, mas o manual poderia ser mais detalhado.",
];

const COMENTARIOS_3 = [
  "Produto razoável, cumpre sua função básica, mas esperava mais pela descrição. Mediano no geral.",
  "Chegou no prazo, mas a qualidade não é tudo isso que dizem. Aceitável pelo valor pago.",
  "Produto mediano, nem bom nem ruim. Serve para o uso básico, mas não espere muito.",
];

const COMENTARIOS_1_2 = [
  "Produto diferente da descrição, esperava mais qualidade. Não recomendo muito.",
  "Recebi com um pequeno defeito, mas o atendimento da loja foi rápido para resolver.",
];

/* GERAR AVALIAÇÕES ALEATÓRIAS MAS DETERMINÍSTICAS */
function gerarAvaliacoes(produto) {
  const seed = produto.id;
  const qtdAvaliacoes = 6 + (seed % 9);
  const avaliacoes = [];

  for (let i = 0; i < qtdAvaliacoes; i++) {
    const pseudoRandom = (seed * (i + 1) * 9301 + 49297) % 233280;
    const rnd = pseudoRandom / 233280;

    let estrelas;
    if (produto.avaliacao >= 4.7) {
      estrelas = rnd < 0.75 ? 5 : rnd < 0.92 ? 4 : 3;
    } else if (produto.avaliacao >= 4.5) {
      estrelas = rnd < 0.55 ? 5 : rnd < 0.85 ? 4 : 3;
    } else {
      estrelas = rnd < 0.35 ? 5 : rnd < 0.65 ? 4 : rnd < 0.85 ? 3 : 2;
    }

    const nomeIndex = (seed + i * 7) % NOMES_USUARIOS.length;
    const nome = NOMES_USUARIOS[nomeIndex];

    let comentario;
    if (estrelas >= 5) {
      comentario = COMENTARIOS_5[(seed + i) % COMENTARIOS_5.length];
    } else if (estrelas === 4) {
      comentario = COMENTARIOS_4[(seed + i) % COMENTARIOS_4.length];
    } else if (estrelas === 3) {
      comentario = COMENTARIOS_3[(seed + i) % COMENTARIOS_3.length];
    } else {
      comentario = COMENTARIOS_1_2[(seed + i) % COMENTARIOS_1_2.length];
    }

    const diasAtras = 1 + ((seed * (i + 3)) % 90);
    const data = new Date();
    data.setDate(data.getDate() - diasAtras);

    avaliacoes.push({
      nome,
      iniciais: nome.split(" ").map((n) => n[0]).slice(0, 2).join(""),
      estrelas,
      comentario,
      data: data.toLocaleDateString("pt-BR"),
      verificado: rnd > 0.3,
      variacao: produto.especificacoes && produto.especificacoes[i % produto.especificacoes.length]
        ? produto.especificacoes[i % produto.especificacoes.length]
        : "",
      respondeu: rnd > 0.7,
    });
  }

  return avaliacoes;
}

/* ABRIR MODAL DO PRODUTO */
function abrirProduto(id) {
  const produto = [...PRODUTOS, ...produtosCadastrados].find((p) => p.id === id);
  if (!produto) return;

  produtoModalAtual = produto;
  quantidadeModal = 1;

  const desconto = produto.precoOriginal > produto.preco
    ? Math.round(((produto.precoOriginal - produto.preco) / produto.precoOriginal) * 100)
    : 0;

  /* Galeria de fotos: principal + geradas para demonstração */
  const fotos = [];
  if (produto.foto) fotos.push(produto.foto);
  fotos.push(null); // placeholder
  fotos.push(null); // placeholder

  const fotoPrincipal = document.getElementById("fotoPrincipal");
  fotoPrincipal.innerHTML = produto.foto
    ? `<img src="${produto.foto}" alt="${produto.nome}">`
    : `<div class="sem-foto-modal"><span>📦</span><p>Foto do produto indisponível</p></div>`;

  const miniaturas = document.getElementById("miniaturasFotos");
  miniaturas.innerHTML = "";
  fotos.forEach((f, i) => {
    const mini = document.createElement("div");
    mini.className = `miniatura ${i === 0 ? "ativa" : ""}`;
    mini.innerHTML = f
      ? `<img src="${f}" alt="Foto ${i + 1}">`
      : (i === 0 && produto.foto ? `<img src="${produto.foto}" alt="Foto 1">` : "📷");
    mini.onclick = () => trocarFoto(f, i);
    miniaturas.appendChild(mini);
  });

  /* Informações */
  document.getElementById("modalCategoria").textContent =
    { eletronicos: "Eletrônicos", vestuario: "Vestuário", alimentos: "Alimentos", moveis: "Móveis", beleza: "Beleza", esportes: "Esportes", jardinagem: "Jardinagem", brinquedos: "Brinquedos", automotivo: "Automotivo" }[produto.categoria] || produto.categoria;

  const seloFrete = document.getElementById("modalFrete");
  seloFrete.textContent = produto.frete || "Frete grátis";

  document.getElementById("modalNome").textContent = produto.nome;
  document.getElementById("modalMarca").textContent = `Marca: ${produto.marca}`;

  const estrelasTxt = "★".repeat(Math.floor(produto.avaliacao)) + "☆".repeat(5 - Math.floor(produto.avaliacao));
  document.getElementById("modalEstrelas").textContent = estrelasTxt;
  document.getElementById("modalNota").textContent = produto.avaliacao.toFixed(1);
  document.getElementById("modalVendidos").textContent = `${formatarNumero(produto.vendidos)} vendidos`;

  /* Avaliações: reais (salvas pelo cliente) + geradas */
  avaliacoesProdutoAtual = [
    ...carregarAvaliacoesReais(produto.id),
    ...gerarAvaliacoes(produto),
  ];
  document.getElementById("modalQtdAvaliacoes").textContent = `${avaliacoesProdutoAtual.length} avaliações`;
  document.getElementById("notaGrande").textContent = produto.avaliacao.toFixed(1);
  document.getElementById("estrelasGrandes").textContent = estrelasTxt;
  document.getElementById("totalAvaliacoes").textContent = `${avaliacoesProdutoAtual.length} avaliações`;

  /* Limpar formulário de avaliação */
  notaSelecionada = 0;
  fotoAvaliacaoBase64 = "";
  document.getElementById("nomeCliente").value = "";
  document.getElementById("comentarioCliente").value = "";
  document.getElementById("contadorCaracteres").textContent = "0/500";
  document.getElementById("previewFotoAvaliacao").innerHTML = "";
  document.getElementById("notaSelecionada").textContent = "Clique nas estrelas";
  document.querySelectorAll(".estrela-cli").forEach((e) => e.classList.remove("ativa"));

  /* Preços */
  document.getElementById("modalPreco").textContent = `R$ ${produto.preco.toFixed(2).replace(".", ",")}`;
  document.getElementById("modalPrecoOriginal").textContent = produto.precoOriginal > produto.preco
    ? `R$ ${produto.precoOriginal.toFixed(2).replace(".", ",")}` : "";
  const descontoEl = document.getElementById("modalDesconto");
  descontoEl.textContent = desconto > 0 ? `-${desconto}%` : "";
  descontoEl.style.display = desconto > 0 ? "inline-block" : "none";

  /* Envio */
  document.getElementById("modalEnvio").textContent =
    `Receba entre 5 a 7 dias úteis. Frete calculado no checkout (Shopee e Mercado Livre com envio grátis em compras acima de R$ 79).`;

  /* Quantidade e estoque */
  document.getElementById("modalQuantidade").value = 1;
  const estoque = 10 + (produto.id % 50);
  document.getElementById("modalEstoque").textContent = `(${estoque} disponíveis)`;
  document.getElementById("modalQuantidade").max = estoque;

  /* Descrição */
  document.getElementById("modalDescricao").textContent = produto.descricao;

  /* Especificações */
  const tabela = document.getElementById("modalEspecificacoes");
  tabela.innerHTML = "";
  (produto.especificacoes || []).forEach((spec) => {
    const [chave, ...resto] = spec.split(":");
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${chave}</td><td>${resto.join(":").trim() || chave}</td>`;
    tabela.appendChild(tr);
  });
  if (!produto.especificacoes || produto.especificacoes.length === 0) {
    tabela.innerHTML = `<tr><td>Marca</td><td>${produto.marca}</td></tr><tr><td>Categoria</td><td>${produto.categoria}</td></tr>`;
  }

  /* Renderizar avaliações */
  renderizarAvaliacoes(0);

  /* Ativar filtro "Todas" */
  document.querySelectorAll(".filtro-estrelas").forEach((f, i) => {
    f.classList.toggle("ativo", i === 0);
  });

  /* Abrir modal */
  const modal = document.getElementById("modalProduto");
  modal.classList.add("aberto");
  document.body.style.overflow = "hidden";
}

/* TROCAR FOTO NA GALERIA */
function trocarFoto(foto, indice) {
  const fotoPrincipal = document.getElementById("fotoPrincipal");
  if (foto) {
    fotoPrincipal.innerHTML = `<img src="${foto}" alt="${produtoModalAtual.nome}">`;
  } else {
    fotoPrincipal.innerHTML = `<div class="sem-foto-modal"><span>📦</span><p>Foto ${indice + 1} do produto</p></div>`;
  }
  document.querySelectorAll(".miniatura").forEach((m, i) => {
    m.classList.toggle("ativa", i === indice);
  });
}

/* FECHAR MODAL */
function fecharProduto() {
  document.getElementById("modalProduto").classList.remove("aberto");
  document.body.style.overflow = "";
  produtoModalAtual = null;
}

function fecharModalExterior(event) {
  if (event.target.id === "modalProduto") {
    fecharProduto();
  }
}

/* FECHAR COM ESC */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && produtoModalAtual) fecharProduto();
});

/* MUDAR QUANTIDADE NO MODAL */
function mudarQuantidadeModal(delta) {
  const input = document.getElementById("modalQuantidade");
  const max = parseInt(input.max) || 99;
  quantidadeModal = Math.max(1, Math.min(max, quantidadeModal + delta));
  input.value = quantidadeModal;
}

/* ADICIONAR DO MODAL AO CARRINHO */
function adicionarDoModal() {
  if (!produtoModalAtual) return;
  const qtd = parseInt(document.getElementById("modalQuantidade").value) || 1;
  adicionar(produtoModalAtual.id, qtd);
  toast(`${qtd}x "${produtoModalAtual.nome}" adicionado ao carrinho! 🛒`);
}

/* COMPRAR AGORA */
function comprarAgora() {
  adicionarDoModal();
  fecharProduto();
  document.querySelector(".carrinho-futurista").scrollIntoView({ behavior: "smooth" });
}

/* RENDERIZAR AVALIAÇÕES */
function renderizarAvaliacoes(filtroEstrela) {
  const lista = document.getElementById("listaAvaliacoes");
  lista.innerHTML = "";

  const filtradas = filtroEstrela > 0
    ? avaliacoesProdutoAtual.filter((a) => a.estrelas === filtroEstrela)
    : avaliacoesProdutoAtual;

  if (filtradas.length === 0) {
    lista.innerHTML = `<p style="text-align:center; color:#adb5bd; padding:30px;">Nenhuma avaliação com essa nota.</p>`;
    return;
  }

  filtradas.forEach((av) => {
    const el = document.createElement("div");
    el.className = `avaliacao-item ${av.real ? "avaliacao-real" : ""}`;
    const estrelasTxt = "★".repeat(av.estrelas) + "☆".repeat(5 - av.estrelas);

    el.innerHTML = `
      <div class="avaliacao-topo">
        <div class="usuario-avaliacao">
          <div class="avatar-usuario">${av.iniciais}</div>
          <div>
            <div class="nome-usuario">${av.nome}${av.real ? `<span class="selo-real">Avaliação Real</span>` : ""}</div>
            ${av.verificado ? `<div class="usuario-verificado">✔ Compra verificada</div>` : ""}
          </div>
        </div>
        <div style="text-align:right;">
          <div class="estrelas-avaliacao">${estrelasTxt}</div>
          <div class="data-avaliacao">${av.data}</div>
        </div>
      </div>
      <p class="texto-avaliacao">${av.comentario}</p>
      ${av.foto ? `<img class="foto-avaliacao-cliente" src="${av.foto}" alt="Foto da avaliação de ${av.nome}">` : ""}
      ${av.variacao ? `<span class="variacao-avaliacao">📦 ${av.variacao}</span>` : ""}
      ${av.respondeu ? `<div class="resposta-loja"><strong>🏪 Resposta da loja:</strong> Obrigado pela avaliação! Ficamos felizes com sua satisfação. Volte sempre! 💛</div>` : ""}
    `;

    lista.appendChild(el);
  });
}

/* FILTRAR AVALIAÇÕES */
function filtrarAvaliacoes(estrela, botao) {
  document.querySelectorAll(".filtro-estrelas").forEach((f) => f.classList.remove("ativo"));
  botao.classList.add("ativo");
  renderizarAvaliacoes(estrela);
}

/* ============================================
   AVALIAÇÕES REIS DOS CLIENTES
   ============================================ */

/* CARREGAR AVALIAÇÕES REAIS SALVAS */
function carregarAvaliacoesReais(produtoId) {
  const todas = JSON.parse(localStorage.getItem("avaliacoesReais")) || {};
  return todas[produtoId] || [];
}

/* SALVAR AVALIAÇÃO REAL */
function salvarAvaliacaoReal(produtoId, avaliacao) {
  const todas = JSON.parse(localStorage.getItem("avaliacoesReais")) || {};
  if (!todas[produtoId]) todas[produtoId] = [];
  todas[produtoId].unshift(avaliacao);
  localStorage.setItem("avaliacoesReais", JSON.stringify(todas));
}

/* SELECIONAR ESTRELAS */
function selecionarEstrela(n) {
  notaSelecionada = n;
  document.querySelectorAll(".estrela-cli").forEach((estrela, index) => {
    estrela.classList.toggle("ativa", index < n);
  });

  const textos = {
    1: "★ Ruim",
    2: "★★ Regular",
    3: "★★★ Bom",
    4: "★★★★ Muito bom",
    5: "★★★★★ Excelente!",
  };
  document.getElementById("notaSelecionada").textContent = textos[n];
}

/* CARREGAR FOTO DA AVALIAÇÃO */
function carregarFotoAvaliacao(event) {
  const arquivo = event.target.files[0];
  if (!arquivo) return;

  if (!arquivo.type.startsWith("image/")) {
    toast("Selecione um arquivo de imagem válido.", "erro");
    return;
  }

  if (arquivo.size > 1.5 * 1024 * 1024) {
    toast("A foto deve ter no máximo 1,5MB.", "erro");
    return;
  }

  const leitor = new FileReader();
  leitor.onload = function (e) {
    fotoAvaliacaoBase64 = e.target.result;
    document.getElementById("previewFotoAvaliacao").innerHTML = `
      <img src="${fotoAvaliacaoBase64}" alt="Foto da avaliação">
      <span class="remover-foto-av" onclick="removerFotoAvaliacao()">✖</span>
    `;
  };
  leitor.readAsDataURL(arquivo);
}

/* REMOVER FOTO DA AVALIAÇÃO */
function removerFotoAvaliacao() {
  fotoAvaliacaoBase64 = "";
  document.getElementById("fotoAvaliacao").value = "";
  document.getElementById("previewFotoAvaliacao").innerHTML = "";
}

/* ENVIAR AVALIAÇÃO */
function enviarAvaliacao() {
  if (!produtoModalAtual) return;

  const nome = document.getElementById("nomeCliente").value.trim();
  const comentario = document.getElementById("comentarioCliente").value.trim();

  if (!nome) {
    toast("Digite seu nome para avaliar!", "erro");
    document.getElementById("nomeCliente").focus();
    return;
  }

  if (notaSelecionada === 0) {
    toast("Clique nas estrelas para dar uma nota!", "erro");
    return;
  }

  if (comentario.length < 10) {
    toast("Escreva um comentário com pelo menos 10 caracteres.", "erro");
    document.getElementById("comentarioCliente").focus();
    return;
  }

  const iniciais = nome.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();

  const novaAvaliacao = {
    nome,
    iniciais,
    estrelas: notaSelecionada,
    comentario,
    data: new Date().toLocaleDateString("pt-BR"),
    verificado: false,
    variacao: "",
    respondeu: false,
    real: true,
    foto: fotoAvaliacaoBase64,
  };

  salvarAvaliacaoReal(produtoModalAtual.id, novaAvaliacao);

  /* Recarregar lista com a nova avaliação no topo */
  avaliacoesProdutoAtual = [
    ...carregarAvaliacoesReais(produtoModalAtual.id),
    ...gerarAvaliacoes(produtoModalAtual),
  ];

  /* Atualizar contadores */
  document.getElementById("modalQtdAvaliacoes").textContent = `${avaliacoesProdutoAtual.length} avaliações`;
  document.getElementById("totalAvaliacoes").textContent = `${avaliacoesProdutoAtual.length} avaliações`;

  /* Reativar filtro "Todas" */
  document.querySelectorAll(".filtro-estrelas").forEach((f, i) => {
    f.classList.toggle("ativo", i === 0);
  });

  renderizarAvaliacoes(0);

  /* Limpar formulário */
  notaSelecionada = 0;
  fotoAvaliacaoBase64 = "";
  document.getElementById("nomeCliente").value = "";
  document.getElementById("comentarioCliente").value = "";
  document.getElementById("contadorCaracteres").textContent = "0/500";
  document.getElementById("previewFotoAvaliacao").innerHTML = "";
  document.getElementById("fotoAvaliacao").value = "";
  document.getElementById("notaSelecionada").textContent = "Clique nas estrelas";
  document.querySelectorAll(".estrela-cli").forEach((e) => e.classList.remove("ativa"));

  toast("Avaliação publicada com sucesso! Obrigado por contribuir! ⭐");
}

/* ============================================
   NOTIFICAÇÕES TOAST (no lugar de alert)
   ============================================ */
function toast(mensagem, tipo = "sucesso") {
  const container = document.getElementById("toastContainer");
  const el = document.createElement("div");
  el.className = `toast ${tipo === "erro" ? "erro" : tipo === "aviso" ? "aviso" : ""}`;

  const icones = { sucesso: "✅", erro: "❌", aviso: "⚠️" };
  el.innerHTML = `<span class="toast-icone">${icones[tipo] || "✅"}</span><span>${mensagem}</span>`;

  container.appendChild(el);

  setTimeout(() => {
    el.classList.add("saiu");
    setTimeout(() => el.remove(), 300);
  }, 3500);
}

/* ============================================
   NAVEGAÇÃO SUAVE E CATEGORIAS RÁPIDAS
   ============================================ */
function rolarCatalogo() {
  document.getElementById("catalogo-produtos").scrollIntoView({ behavior: "smooth" });
}

function rolarCarrinho() {
  setTimeout(() => {
    document.querySelector(".carrinho-futurista").scrollIntoView({ behavior: "smooth" });
  }, 100);
}

function filtrarCategoria(categoria, botao) {
  document.getElementById("filtro-categoria").value = categoria;

  document.querySelectorAll(".categorias-rapidas button").forEach((b) => {
    b.classList.remove("ativo");
  });
  if (botao) botao.classList.add("ativo");

  filtrarProdutos();
  rolarCatalogo();
}

/* NEWSLETTER */
function cadastrarEmail() {
  const email = document.getElementById("emailNewsletter").value.trim();

  if (!email || !email.includes("@") || !email.includes(".")) {
    toast("Digite um e-mail válido!", "erro");
    return;
  }

  const emails = JSON.parse(localStorage.getItem("emailsNewsletter")) || [];
  if (!emails.includes(email)) {
    emails.push(email);
    localStorage.setItem("emailsNewsletter", JSON.stringify(emails));
  }

  document.getElementById("emailNewsletter").value = "";
  toast("Inscrição confirmada! Use o cupom BEMVINDO5 e ganhe 10% de desconto 🎉");
}

/* BOTÃO VOLTAR AO TOPO */
window.addEventListener("scroll", function () {
  const btn = document.getElementById("btnTopo");
  if (window.scrollY > 400) {
    btn.classList.add("visivel");
  } else {
    btn.classList.remove("visivel");
  }
});

/* BANNER COM AUTO-ROTAÇÃO */
let bannerIndex = 0;
function rotacaoBanner() {
  const bolinhas = document.querySelectorAll(".banner-bolinhas .bolinha");
  if (bolinhas.length === 0) return;
  bannerIndex = (bannerIndex + 1) % bolinhas.length;
  bolinhas.forEach((b, i) => b.classList.toggle("ativa", i === bannerIndex));
}
setInterval(rotacaoBanner, 3000);

/* ============ INICIAR SISTEMA ============ */
window.onload = function () {
  renderizarProdutosCadastrados();
  atualizarCatalogo();
  carregarPedidos();
  atualizarTela();

  document.getElementById("busca-produtos").addEventListener("input", filtrarProdutos);
  document.getElementById("filtro-categoria").addEventListener("change", filtrarProdutos);
  document.getElementById("filtro-preco").addEventListener("change", filtrarProdutos);

  /* Contador de caracteres do comentário de avaliação */
  const comentario = document.getElementById("comentarioCliente");
  if (comentario) {
    comentario.addEventListener("input", function () {
      document.getElementById("contadorCaracteres").textContent =
        `${this.value.length}/500`;
    });
  }

  document.getElementById("selector-plataforma").value = plataformaAtual;
};
