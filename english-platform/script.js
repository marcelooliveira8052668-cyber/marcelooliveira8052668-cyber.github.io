// Desenvolvido por Prof. Marcelo Oliveira
/* ==========================================================================
   FUNÇÃO GLOBAL DE FALA (Com filtro para voz feminina nativa)
   ========================================================================== */
function falarTexto(textoParaFalar) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(textoParaFalar);
        utterance.lang = 'en-US';
        utterance.rate = 0.9;

        const voices = window.speechSynthesis.getVoices();
        const vozFeminina = voices.find(voice => 
            (voice.lang === 'en-US' || voice.lang === 'en_US' || voice.lang.startsWith('en')) && 
            (voice.name.toLowerCase().includes('female') || 
             voice.name.toLowerCase().includes('zira') || 
             voice.name.toLowerCase().includes('samantha') || 
             voice.name.toLowerCase().includes('karen') ||
             voice.name.toLowerCase().includes('google us english'))
        );

        if (vozFeminina) {
            utterance.voice = vozFeminina;
        }

        window.speechSynthesis.speak(utterance);
    } else {
        alert("Seu navegador não suporta recursos de áudio por voz.");
    }
}

if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
    };
}

/* ==========================================================================
   BANCO DE DADOS: 100 PALAVRAS DO COTIDIANO
   ========================================================================== */
const listaPalavras = [
    { en: "Always", pt: "Sempre", pron: "ól-uéis" },
    { en: "Never", pt: "Nunca", pron: "né-vêr" },
    { en: "Today", pt: "Hoje", pron: "tu-dêi" },
    { en: "Tomorrow", pt: "Amanhã", pron: "tu-mó-rôu" },
    { en: "Yesterday", pt: "Ontem", pron: "yês-têr-dêi" },
    { en: "Now", pt: "Agora", pron: "náu" },
    { en: "Later", pt: "Mais tarde", pron: "lêi-têr" },
    { en: "Here", pt: "Aqui", pron: "rîr" },
    { en: "There", pt: "Lá / Ali", pron: "ðêr" },
    { en: "Friend", pt: "Amigo", pron: "frênd" },
    { en: "Family", pt: "Família", pron: "fé-mi-li" },
    { en: "Work", pt: "Trabalho", pron: "uôrk" },
    { en: "Home", pt: "Casa", pron: "rôm" },
    { en: "Food", pt: "Comida", pron: "fûd" },
    { en: "Water", pt: "Água", pron: "uó-têr" },
    { en: "Coffee", pt: "Café", pron: "kó-fi" },
    { en: "Money", pt: "Dinheiro", pron: "mâ-ni" },
    { en: "Time", pt: "Tempo / Hora", pron: "táim" },
    { en: "Day", pt: "Dia", pron: "dêi" },
    { en: "Night", pt: "Noite", pron: "náit" },
    { en: "Morning", pt: "Manhã", pron: "mór-ning" },
    { en: "Week", pt: "Semana", pron: "uîk" },
    { en: "Year", pt: "Ano", pron: "yîr" },
    { en: "Help", pt: "Ajuda / Ajudar", pron: "hêlp" },
    { en: "Question", pt: "Pergunta", pron: "kuês-chôn" },
    { en: "Answer", pt: "Resposta", pron: "ên-sêr" },
    { en: "Problem", pt: "Problema", pron: "pró-blêm" },
    { en: "Solution", pt: "Solução", pron: "su-lû-shôn" },
    { en: "Idea", pt: "Ideia", pron: "ái-dî-a" },
    { en: "Job", pt: "Emprego", pron: "djâb" },
    { en: "Company", pt: "Empresa", pron: "câm-pa-ni" },
    { en: "Meeting", pt: "Reunião", pron: "mî-ting" },
    { en: "Project", pt: "Projeto", pron: "pró-djêct" },
    { en: "Computer", pt: "Computador", pron: "côm-pyû-têr" },
    { en: "Phone", pt: "Telefone", pron: "fôn" },
    { en: "Email", pt: "E-mail", pron: "î-mêil" },
    { en: "Message", pt: "Mensagem", pron: "mé-sê-dj" },
    { en: "Street", pt: "Rua", pron: "strît" },
    { en: "Car", pt: "Carro", pron: "câr" },
    { en: "Bus", pt: "Ônibus", pron: "bâs" },
    { en: "Train", pt: "Trem", pron: "trêin" },
    { en: "Store", pt: "Loja", pron: "stôr" },
    { en: "Price", pt: "Preço", pron: "práis" },
    { en: "Card", pt: "Cartão", pron: "cârd" },
    { en: "Cash", pt: "Dinheiro em espécie", pron: "césh" },
    { en: "Door", pt: "Porta", pron: "dôr" },
    { en: "Window", pt: "Janela", pron: "uîn-dôu" },
    { en: "Key", pt: "Chave", pron: "kî" },
    { en: "Book", pt: "Livro", pron: "bûk" },
    { en: "Pen", pt: "Caneta", pron: "pên" },
    { en: "Paper", pt: "Papel", pron: "pêi-pêr" },
    { en: "City", pt: "Cidade", pron: "sí-ti" },
    { en: "Country", pt: "País", pron: "cân-tri" },
    { en: "World", pt: "Mundo", pron: "uôrld" },
    { en: "People", pt: "Pessoas", pron: "pî-pôl" },
    { en: "Child", pt: "Criança", pron: "cháild" },
    { en: "School", pt: "Escola", pron: "skûl" },
    { en: "Student", pt: "Estudante", pron: "stû-dênt" },
    { en: "Teacher", pt: "Professor", pron: "tî-chêr" },
    { en: "Language", pt: "Idioma", pron: "lên-guê-dj" },
    { en: "Word", pt: "Palavra", pron: "uôrd" },
    { en: "Sentence", pt: "Frase", pron: "sên-têns" },
    { en: "Music", pt: "Música", pron: "myû-zic" },
    { en: "Movie", pt: "Filme", pron: "mû-vi" },
    { en: "Game", pt: "Jogo", pron: "gêim" },
    { en: "Picture", pt: "Foto / Imagem", pron: "píc-chêr" },
    { en: "Gift", pt: "Presente", pron: "gîft" },
    { en: "Shop", pt: "Comprar / Loja", pron: "shâp" },
    { en: "Market", pt: "Mercado", pron: "mâr-kêt" },
    { en: "Doctor", pt: "Médico", pron: "dôc-têr" },
    { en: "Hospital", pt: "Hospital", pron: "hôs-pi-tâl" },
    { en: "Medicine", pt: "Remédio", pron: "mé-di-sin" },
    { en: "Ticket", pt: "Passagem / Ingresso", pron: "tí-kêt" },
    { en: "Bag", pt: "Mala / Sacola", pron: "bég" },
    { en: "Clothes", pt: "Roupas", pron: "clôuðz" },
    { en: "Shoes", pt: "Sapatos", pron: "shûz" },
    { en: "Sun", pt: "Sol", pron: "sân" },
    { en: "Rain", pt: "Chuva", pron: "rêin" },
    { en: "Wind", pt: "Vento", pron: "uînd" },
    { en: "Fire", pt: "Fogo", pron: "fái-êr" },
    { en: "Air", pt: "Ar", pron: "êr" },
    { en: "Love", pt: "Amor", pron: "lâv" },
    { en: "Happy", pt: "Feliz", pron: "hé-pi" },
    { en: "Sad", pt: "Triste", pron: "séd" },
    { en: "Good", pt: "Bom", pron: "gûd" },
    { en: "Bad", pt: "Ruim", pron: "béd" },
    { en: "Big", pt: "Grande", pron: "bîg" },
    { en: "Small", pt: "Pequeno", pron: "smôl" },
    { en: "New", pt: "Novo", pron: "nû" },
    { en: "Old", pt: "Velho / Antigo", pron: "ôuld" },
    { en: "Hot", pt: "Quente", pron: "hât" },
    { en: "Cold", pt: "Frio", pron: "côuld" },
    { en: "Fast", pt: "Rápido", pron: "fést" },
    { en: "Slow", pt: "Lento", pron: "slôu" },
    { en: "Easy", pt: "Fácil", pron: "î-zi" },
    { en: "Hard", pt: "Difícil / Duro", pron: "hârd" },
    { en: "Clean", pt: "Limpo", pron: "clîn" },
    { en: "Open", pt: "Aberto", pron: "ôu-pên" },
    { en: "Closed", pt: "Fechado", pron: "clôu-zd" },
    { en: "Right", pt: "Certo / Direita", pron: "ráit" }
];

/* ==========================================================================
   BANCO DE DADOS: 50 FRASES DO DIA A DIA (Com foco em DO, DID e WILL)
   ========================================================================== */
const listaFrases = [
    { en: "What do you do for a living?", pt: "O que você faz da vida?", pron: "uât dû iu dû fôr â lî-ving?" },
    { en: "Where do you live?", pt: "Onde você mora?", pron: "uêr dû iu lîv?" },
    { en: "Do you speak English?", pt: "Você fala inglês?", pron: "dû iu spîk íng-glîsh?" },
    { en: "I don't understand this word.", pt: "Eu não entendo esta palavra.", pron: "ái dônt ânder-sténd ðis uôrd." },
    { en: "What time do you wake up?", pt: "Que horas você acorda?", pron: "uât táim dû iu wêik âp?" },
    { en: "Do you like coffee?", pt: "Você gosta de café?", pron: "dû iu láik kó-fi?" },
    { en: "I don't have time today.", pt: "Eu não tenho tempo hoje.", pron: "ái dônt hév táim tu-dêi." },
    { en: "How do you spell your name?", pt: "Como se escreve seu nome?", pron: "háu dû iu spêl yôr nêim?" },
    { en: "Do you know the answer?", pt: "Você sabe a resposta?", pron: "dû iu nôu ðê ên-sêr?" },
    { en: "I don't know what to do.", pt: "Eu não sei o que fazer.", pron: "ái dônt nôu uât tû dû." },
    { en: "What do you usually eat for breakfast?", pt: "O que você come no café da manhã?", pron: "uât dû iu yû-zhu-li ît fôr brék-fâst?" },
    { en: "Do you need any help?", pt: "Você precisa de ajuda?", pron: "dû iu nîd é-ni hêlp?" },
    { en: "I don't remember his name.", pt: "Eu não me lembro do nome dele.", pron: "ái dônt ri-mém-bêr hîz nêim." },
    { en: "Where do you want to go?", pt: "Onde você quer ir?", pron: "uêr dû iu wânt tû gôu?" },
    { en: "Do you have any questions?", pt: "Você tem alguma dúvida?", pron: "dû iu hév é-ni kuês-chôns?" },
    { en: "I don't care about that.", pt: "Eu não me importo com isso.", pron: "ái dônt cêr â-baut ðét." },
    { en: "What do you think about this?", pt: "O que você acha disso?", pron: "uât dû iu thînk â-baut ðis?" },
    { en: "What did you do yesterday?", pt: "O que você fez ontem?", pron: "uât díd iu dû yês-têr-dêi?" },
    { en: "Where did you go last night?", pt: "Onde você foi ontem à noite?", pron: "uêr díd iu gôu lést náit?" },
    { en: "I didn't sleep well last night.", pt: "Eu não dormi bem noite passada.", pron: "ái dî-dênt slîp wél lést náit." },
    { en: "Did you enjoy the movie?", pt: "Você curtiu o filme?", pron: "díd iu ên-djói ðê mû-vi?" },
    { en: "She didn't call me back.", pt: "Ela não me ligou de volta.", pron: "shî dî-dênt côl mî bêc." },
    { en: "What time did you arrive?", pt: "Que horas você chegou?", pron: "uât táim díd iu â-ráiv?" },
    { en: "I didn't understand the question.", pt: "Eu não entendi a pergunta.", pron: "ái dî-dênt ânder-sténd ðê kuês-chôn." },
    { en: "Did you finish your homework?", pt: "Você terminou seu dever?", pron: "díd iu fî-nish yôr hûm-wôrk?" },
    { en: "He didn't want to talk about it.", pt: "Ele não quis falar sobre isso.", pron: "hî dî-dênt wânt tû tôk â-baut ít." },
    { en: "Did you see my keys anywhere?", pt: "Você viu minhas chaves?", pron: "díd iu sî mái kîz é-ni-wêr?" },
    { en: "I didn't buy anything at the store.", pt: "Eu não comprei nada na loja.", pron: "ái dî-dênt bái é-ni-thing ét ðê stôr." },
    { en: "Did you like the food?", pt: "Você gostou da comida?", pron: "díd iu láik ðê fûd?" },
    { en: "They didn't show up for the meeting.", pt: "Eles não apareceram na reunião.", pron: "ðêi dî-dênt shôu âp fôr ðê mî-ting." },
    { en: "What did you say?", pt: "O que você disse?", pron: "uât díd iu sêi?" },
    { en: "I didn't mean to do that.", pt: "Eu não fiz por mal.", pron: "ái dî-dênt mîn tû dû ðét." },
    { en: "Did you lock the front door?", pt: "Você trancou a porta da frente?", pron: "díd iu lâc ðê frânt dôr?" },
    { en: "I will help you with that.", pt: "Eu vou te ajudar com isso.", pron: "ái wûl hêlp iu wîð ðét." },
    { en: "What will you do tomorrow?", pt: "O que você vai fazer amanhã?", pron: "uât wûl iu dû tu-mó-rôu?" },
    { en: "I will never give up.", pt: "Eu nunca vou desistir.", pron: "ái wûl né-vêr gîv âp." },
    { en: "Will you marry me?", pt: "Você quer casar comigo?", pron: "wûl iu mé-ri mî?" },
    { en: "It will rain later today.", pt: "Vai chover mais tarde hoje.", pron: "ít wûl rêin lêi-têr tu-dêi." },
    { en: "I will call you back in five minutes.", pt: "Eu te ligo em 5 minutos.", pron: "ái wûl côl iu bêc ên fâiv mî-nûts." },
    { en: "Everything will be fine.", pt: "Tudo vai ficar bem.", pron: "é-vri-thing wûl bî fáin." },
    { en: "Will you come to my party?", pt: "Você virá à minha festa?", pron: "wûl iu câm tû mái pâr-ti?" },
    { en: "I will check it right now.", pt: "Vou verificar agora mesmo.", pron: "ái wûl chéc ít ráit náu." },
    { en: "She will love this present.", pt: "Ela vai adorar este presente.", pron: "shî wûl lâv ðis pré-zênt." },
    { en: "We will win this project.", pt: "Vamos vencer este projeto.", pron: "wî wûl wîn ðis pró-djêct." },
    { en: "Will you help me carry this?", pt: "Me ajuda a carregar isto?", pron: "wûl iu hêlp mî cé-ri ðis?" },
    { en: "I will always remember this day.", pt: "Sempre me lembrarei deste dia.", pron: "ái wûl ól-uéis ri-mém-bêr ðis dêi." },
    { en: "They will arrive soon.", pt: "Eles vão chegar em breve.", pron: "ðêi wûl â-ráiv sûn." },
    { en: "I will never forget your help.", pt: "Nunca esquecerei sua ajuda.", pron: "ái wûl né-vêr fêr-gét yôr hêlp." },
    { en: "Who will win the game?", pt: "Quem vai ganhar o jogo?", pron: "hû wûl wîn ðê gêim?" }
];

function mostrarSecao(tipo) {
    const container = document.getElementById("glossario-container");
    const btnPalavras = document.getElementById("btn-tab-palavras");
    const btnFrases = document.getElementById("btn-tab-frases");
    
    container.innerHTML = "";

    if (tipo === 'palavras') {
        if(btnPalavras) btnPalavras.style.backgroundColor = "#0ea5e9";
        if(btnFrases) btnFrases.style.backgroundColor = "#64748b";

        listaPalavras.forEach((item, index) => {
            const div = document.createElement("div");
            div.style.cssText = "display: flex; justify-content: space-between; align-items: center; background: #1e293b; padding: 12px 15px; border-radius: 8px; border: 1px solid #334155; color: #f1f5f9; margin-bottom: 8px;";
            
            div.innerHTML = `
                <div style="padding-right: 10px;">
                    <strong style="color: #ffffff; font-size: 15px;">${index + 1}. ${item.en}</strong> — <span style="color: #cbd5e1;">${item.pt}</span>
                    <br><small style="color: #38bdf8;">Pronúncia: *${item.pron}*</small>
                </div>
            `;

            const btnAudio = document.createElement("button");
            btnAudio.innerText = "🔊 Ouvir";
            btnAudio.style.cssText = "background: #0ea5e9; color: white; border: none; padding: 6px 12px; border-radius: 6px; cursor: pointer; font-size: 13px; white-space: nowrap;";
            
            btnAudio.onclick = () => falarTexto(item.en);

            div.appendChild(btnAudio);
            container.appendChild(div);
        });
    } else {
        if(btnFrases) btnFrases.style.backgroundColor = "#0ea5e9";
        if(btnPalavras) btnPalavras.style.backgroundColor = "#64748b";

        listaFrases.forEach((item, index) => {
            const div = document.createElement("div");
            div.style.cssText = "display: flex; justify-content: space-between; align-items: center; background: #1e293b; padding: 12px 15px; border-radius: 8px; border: 1px solid #334155; color: #f1f5f9; margin-bottom: 8px;";
            
            div.innerHTML = `
                <div style="padding-right: 10px;">
                    <strong style="color: #ffffff; font-size: 15px;">${index + 1}. ${item.en}</strong>
                    <br><span style="color: #cbd5e1;">💡 ${item.pt}</span>
                    <br><small style="color: #38bdf8;">🗣️ *${item.pron}*</small>
                </div>
            `;

            const btnAudio = document.createElement("button");
            btnAudio.innerText = "🔊 Ouvir";
            btnAudio.style.cssText = "background: #0ea5e9; color: white; border: none; padding: 6px 12px; border-radius: 6px; cursor: pointer; font-size: 13px; white-space: nowrap; height: fit-content;";
            
            btnAudio.onclick = () => falarTexto(item.en);

            div.appendChild(btnAudio);
            container.appendChild(div);
        });
    }
}

/* ==========================================================================
   BANCO DE DADOS DO QUIZ INTERATIVO (50 PERGUNTAS)
   ========================================================================== */
const questionsDatabase = [
    {
        question: "How do you say at US immigration: 'I am staying here for two weeks'?",
        translation: "Tradução: Como você diz na imigração: 'Estarei aqui por duas semanas'?",
        options: ["I will live here for two years.", "I am staying here for two weeks.", "I am working at the airport."],
        correct: 1
    },
    {
        question: "Where is the baggage claim?",
        translation: "Tradução: Onde fica a retirada de bagagens?",
        options: ["Where is the baggage claim?", "Where is the bathroom?", "How much is the ticket?"],
        correct: 0
    },
    {
        question: "An American is lost and you want to say: 'You need to take the subway'?",
        translation: "Tradução: 'Você precisa pegar o metrô'",
        options: ["You need to take the subway.", "You bought a new car.", "She loves eating pizza."],
        correct: 0
    },
    {
        question: "How do you ask for the check in a restaurant in English?",
        translation: "Tradução: Como pedir a conta em inglês?",
        options: ["Can I have the menu, please?", "Can I have the check, please?", "Where is the kitchen?"],
        correct: 1
    },
    {
        question: "In an interview, how to talk about your experience: 'I worked with web development for three years'?",
        translation: "Tradução: 'Eu trabalhei com desenvolvimento web por três anos'",
        options: ["I will work at home tomorrow.", "I worked with web development for three years.", "I never touch a computer."],
        correct: 1
    },
    {
        question: "How do you ask someone what they do for a living?",
        translation: "Tradução: Como você pergunta com o que a pessoa trabalha?",
        options: ["What do you do for a living?", "Where do you live?", "Do you like water?"],
        correct: 0
    },
    {
        question: "How do you say 'Eu não entendo esta palavra' in English?",
        translation: "Tradução: Como dizer 'Eu não entendo esta palavra'?",
        options: ["I know this word very well.", "I don't understand this word.", "What does this mean?"],
        correct: 1
    },
    {
        question: "What is the correct translation for: 'What time do you wake up?'",
        translation: "Tradução: Qual a tradução correta para 'What time do you wake up?'?",
        options: ["Que horas você dorme?", "Que horas você acorda?", "Quanto tempo você tem?"],
        correct: 1
    },
    {
        question: "How do you say 'Você gosta de café?' in English?",
        translation: "Tradução: Como dizer 'Você gosta de café?'",
        options: ["Do you want some water?", "Do you like coffee?", "Where is the coffee shop?"],
        correct: 1
    },
    {
        question: "How do you say 'Eu não tenho tempo hoje'?",
        translation: "Tradução: Como dizer 'Eu não tenho tempo hoje'?",
        options: ["I have a lot of time today.", "I don't have time today.", "Tomorrow is a new day."],
        correct: 1
    },
    {
        question: "How do you ask 'Como se escreve seu nome?' in English?",
        translation: "Tradução: Como perguntar 'Como se escreve seu nome?'?",
        options: ["What is your name?", "How do you spell your name?", "Where are you from?"],
        correct: 1
    },
    {
        question: "How do you say 'Você sabe a resposta?'",
        translation: "Tradução: Como dizer 'Você sabe a resposta?'",
        options: ["Do you know the answer?", "Did you find the solution?", "What is the question?"],
        correct: 0
    },
    {
        question: "What does 'I don't know what to do' mean in Portuguese?",
        translation: "Tradução: O que significa 'I don't know what to do' em português?",
        options: ["Eu sei o que fazer.", "Eu não sei o que fazer.", "Eu não quero fazer isso."],
        correct: 1
    },
    {
        question: "How do you ask 'Você precisa de ajuda?' in English?",
        translation: "Tradução: Como perguntar 'Você precisa de ajuda?'",
        options: ["Can you help me?", "Do you need any help?", "Where is the help desk?"],
        correct: 1
    },
    {
        question: "What is the meaning of 'I don't remember his name'?",
        translation: "Tradução: Qual o significado de 'I don't remember his name'?",
        options: ["Eu não me lembro do nome dele.", "Eu esqueci onde ele mora.", "Eu não conheço esse homem."],
        correct: 0
    },
    {
        question: "How do you ask 'Onde você quer ir?' in English?",
        translation: "Tradução: Como perguntar 'Onde você quer ir?'",
        options: ["Where did you go?", "Where do you want to go?", "How can I get there?"],
        correct: 1
    },
    {
        question: "How do you say 'Você tem alguma dúvida / pergunta?'?",
        translation: "Tradução: Como dizer 'Você tem alguma dúvida?'",
        options: ["Do you have any questions?", "Is everything clear?", "What is your problem?"],
        correct: 0
    },
    {
        question: "What does 'I don't care about that' mean?",
        translation: "Tradução: O que significa 'I don't care about that'?",
        options: ["Eu me importo muito com isso.", "Eu não me importo com isso.", "Eu não sei de nada."],
        correct: 1
    },
    {
        question: "How do you ask 'O que você acha disso?' in English?",
        translation: "Tradução: Como perguntar 'O que você acha disso?'",
        options: ["What do you think about this?", "How do you feel today?", "Why did you do that?"],
        correct: 0
    },
    {
        question: "How do you say 'O que você fez ontem?' in English?",
        translation: "Tradução: Como dizer 'O que você fez ontem?'",
        options: ["What will you do tomorrow?", "What did you do yesterday?", "What are you doing now?"],
        correct: 1
    },
    {
        question: "What is the translation of 'Where did you go last night?'",
        translation: "Tradução: Qual a tradução de 'Where did you go last night?'?",
        options: ["Onde você foi ontem à noite?", "Onde você vai amanhã?", "O que você fez no fim de semana?"],
        correct: 0
    },
    {
        question: "How do you say 'Eu não dormi bem noite passada'?",
        translation: "Tradução: Como dizer 'Eu não dormi bem noite passada'?",
        options: ["I sleep very well every night.", "I didn't sleep well last night.", "I woke up early today."],
        correct: 1
    },
    {
        question: "How do you ask 'Você curtiu o filme?' in English?",
        translation: "Tradução: Como perguntar 'Você curtiu o filme?'",
        options: ["Did you enjoy the movie?", "Do you like watching TV?", "Was the theater good?"],
        correct: 0
    },
    {
        question: "What does 'She didn't call me back' mean?",
        translation: "Tradução: O que significa 'She didn't call me back'?",
        options: ["Ela vai me ligar mais tarde.", "Ela não me ligou de volta.", "Ela atendeu o telefone."],
        correct: 1
    },
    {
        question: "How do you ask 'Que horas você chegou?' in English?",
        translation: "Tradução: Como perguntar 'Que horas você chegou?'",
        options: ["What time did you leave?", "What time did you arrive?", "When are you coming back?"],
        correct: 1
    },
    {
        question: "How do you say 'Eu não entendi a pergunta'?",
        translation: "Tradução: Como dizer 'Eu não entendi a pergunta'?",
        options: ["I didn't understand the question.", "I know the answer.", "Please repeat the word."],
        correct: 0
    },
    {
        question: "How do you ask 'Você terminou seu dever / trabalho?'?",
        translation: "Tradução: Como perguntar 'Você terminou seu dever?'",
        options: ["Did you finish your homework?", "Are you working right now?", "Where is your project?"],
        correct: 0
    },
    {
        question: "What does 'He didn't want to talk about it' mean?",
        translation: "Tradução: O que significa 'He didn't want to talk about it'?",
        options: ["Ele quis falar sobre o assunto.", "Ele não quis falar sobre isso.", "Ele não sabe de nada."],
        correct: 1
    },
    {
        question: "How do you ask 'Você viu minhas chaves?' in English?",
        translation: "Tradução: Como perguntar 'Você viu minhas chaves?'",
        options: ["Did you see my keys anywhere?", "Where is my car?", "Can you find my bag?"],
        correct: 0
    },
    {
        question: "How do you say 'Eu não comprei nada na loja'?",
        translation: "Tradução: Como dizer 'Eu não comprei nada na loja'?",
        options: ["I bought everything at the store.", "I didn't buy anything at the store.", "The store is closed."],
        correct: 1
    },
    {
        question: "How do you ask 'Você gostou da comida?' in English?",
        translation: "Tradução: Como perguntar 'Você gostou da comida?'",
        options: ["Did you like the food?", "Is the restaurant good?", "What do you want to eat?"],
        correct: 0
    },
    {
        question: "What does 'They didn't show up for the meeting' mean?",
        translation: "Tradução: O que significa 'They didn't show up for the meeting'?",
        options: ["Eles chegaram cedo para a reunião.", "Eles não apareceram na reunião.", "Eles cancelaram o projeto."],
        correct: 1
    },
    {
        question: "How do you ask 'O que você disse?' em inglês?",
        translation: "Tradução: Como perguntar 'O que você disse?'",
        options: ["What did you say?", "Who are you talking to?", "Can you speak louder?"],
        correct: 0
    },
    {
        question: "What does 'I didn't mean to do that' mean?",
        translation: "Tradução: O que significa 'I didn't mean to do that'?",
        options: ["Eu fiz isso de propósito.", "Eu não fiz por mal / não foi minha intenção.", "Eu esqueci como faz."],
        correct: 1
    },
    {
        question: "How do you ask 'Você trancou a porta da frente?'?",
        translation: "Tradução: Como perguntar 'Você trancou a porta da frente?'",
        options: ["Did you lock the front door?", "Where is the house key?", "Is the window open?"],
        correct: 0
    },
    {
        question: "How do you say 'Eu vou te ajudar com isso' (usando WILL)?",
        translation: "Tradução: Como dizer 'Eu vou te ajudar com isso'?",
        options: ["I helped you yesterday.", "I will help you with that.", "Do you need help?"],
        correct: 1
    },
    {
        question: "How do you ask 'O que você vai fazer amanhã?'?",
        translation: "Tradução: Como perguntar 'O que você vai fazer amanhã?'",
        options: ["What did you do yesterday?", "What will you do tomorrow?", "What are you doing now?"],
        correct: 1
    },
    {
        question: "What does 'I will never give up' mean?",
        translation: "Tradução: O que significa 'I will never give up'?",
        options: ["Eu nunca vou desistir.", "Eu sempre vou tentar mudar.", "Eu desisto de tudo."],
        correct: 0
    },
    {
        question: "How do you propose marriage in English?",
        translation: "Tradução: Como você faz um pedido de casamento em inglês?",
        options: ["Will you marry me?", "Do you love me?", "Let's live together?"],
        correct: 0
    },
    {
        question: "How do you say 'Vai chover mais tarde hoje'?",
        translation: "Tradução: Como dizer 'Vai chover mais tarde hoje'?",
        options: ["It was sunny yesterday.", "It will rain later today.", "The weather is very hot."],
        correct: 1
    },
    {
        question: "How do you say 'Eu te ligo em 5 minutos'?",
        translation: "Tradução: Como dizer 'Eu te ligo em 5 minutos'?",
        options: ["I will call you back in five minutes.", "Call me later today.", "See you in five minutes."],
        correct: 0
    },
    {
        question: "What does 'Everything will be fine' mean?",
        translation: "Tradução: O que significa 'Everything will be fine'?",
        options: ["Tudo vai ficar bem.", "Nada está funcionando.", "O problema foi resolvido."],
        correct: 0
    },
    {
        question: "How do you invite someone: 'Você virá à minha festa?'?",
        translation: "Tradução: Como convidar alguém: 'Você virá à minha festa?'",
        options: ["Will you come to my party?", "Did you go to the party?", "Do you like parties?"],
        correct: 0
    },
    {
        question: "How do you say 'Vou verificar agora mesmo'?",
        translation: "Tradução: Como dizer 'Vou verificar agora mesmo'?",
        options: ["I will check it right now.", "I checked it yesterday.", "Let's wait for tomorrow."],
        correct: 0
    },
    {
        question: "What does 'She will love this present' mean?",
        translation: "Tradução: O que significa 'She will love this present'?",
        options: ["Ela comprou um presente.", "Ela vai adorar este presente.", "Ela não gostou da surpresa."],
        correct: 1
    },
    {
        question: "How do you say 'Vamos vencer este projeto'?",
        translation: "Tradução: Como dizer 'Vamos vencer este projeto'?",
        options: ["We will win this project.", "The project is finished.", "I hate this job."],
        correct: 0
    },
    {
        question: "How do you ask 'Me ajuda a carregar isto?' in English?",
        translation: "Tradução: Como perguntar 'Me ajuda a carregar isto?'",
        options: ["Will you help me carry this?", "Can you open the box?", "Where is my bag?"],
        correct: 0
    },
    {
        question: "What does 'I will always remember this day' mean?",
        translation: "Tradução: O que significa 'I will always remember this day'?",
        options: ["Sempre me lembrarei deste dia.", "Eu esqueci o que aconteceu.", "Hoje é um dia ruim."],
        correct: 0
    },
    {
        question: "How do you say 'Eles vão chegar em breve'?",
        translation: "Tradução: Como dizer 'Eles vão chegar em breve'?",
        options: ["They left early.", "They will arrive soon.", "They are already here."],
        correct: 1
    },
    {
        question: "What does 'Who will win the game?' mean?",
        translation: "Tradução: O que significa 'Who will win the game?'?",
        options: ["Quem perdeu o jogo?", "Quem vai ganhar o jogo?", "Quando começa a partida?"],
        correct: 1
    }
];

let currentQuestionIndex = 0;

const questionText = document.getElementById("question-text");
const translationBox = document.getElementById("translation-box");
const optionsBox = document.getElementById("options-box");
const quizContainer = document.getElementById("quiz-container");
const resultBox = document.getElementById("result-box");
const feedbackText = document.getElementById("feedback-text");

function loadQuiz() {
    if (currentQuestionIndex < questionsDatabase.length) {
        const currentData = questionsDatabase[currentQuestionIndex];
        
        questionText.innerHTML = `
            <div style="margin-bottom: 12px; font-weight: 500; font-size: 16px;">
                Questão ${currentQuestionIndex + 1} de ${questionsDatabase.length}: ${currentData.question}
            </div>
            <div style="display: flex; gap: 10px; margin-bottom: 15px;">
                <button onclick="falarTexto('${currentData.question.replace(/'/g, "\\'")}')" style="background: #0ea5e9; color: white; border: none; padding: 6px 14px; border-radius: 6px; cursor: pointer; font-size: 13px;">🔊 Ouvir Pergunta</button>
                <button onclick="toggleTranslation()" style="background: #334155; color: #cbd5e1; border: 1px solid #475569; padding: 6px 14px; border-radius: 6px; cursor: pointer; font-size: 13px;">💡 Tradução</button>
            </div>
        `;
        
        translationBox.innerText = currentData.translation;
        translationBox.className = "translation-hidden";
        translationBox.style.display = "none";
        
        optionsBox.innerHTML = "";
        
        currentData.options.forEach((optionText, index) => {
            const wrapperDiv = document.createElement("div");
            wrapperDiv.style.cssText = "display: flex; align-items: center; justify-content: space-between; background: #334155; margin: 8px 0; padding: 8px 12px; border-radius: 6px; border: 1px solid #475569;";

            const btnOption = document.createElement("button");
            btnOption.innerText = optionText;
            btnOption.style.cssText = "background: transparent; color: #f1f5f9; border: none; text-align: left; cursor: pointer; font-size: 14px; flex-grow: 1; padding: 4px;";
            btnOption.onclick = () => selectOption(index);

            const btnOuvirOpt = document.createElement("button");
            btnOuvirOpt.innerText = "🔊";
            btnOuvirOpt.title = "Ouvir opção";
            btnOuvirOpt.style.cssText = "background: #0ea5e9; color: white; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer; font-size: 12px; margin-left: 8px;";
            btnOuvirOpt.onclick = (e) => {
                e.stopPropagation();
                falarTexto(optionText);
            };

            wrapperDiv.appendChild(btnOption);
            wrapperDiv.appendChild(btnOuvirOpt);
            optionsBox.appendChild(wrapperDiv);
        });

        if (resultBox) resultBox.style.display = "none";
    } else {
        if (questionText) questionText.innerHTML = "<h3>Parabéns! Você concluiu todas as 50 questões do quiz.</h3>";
        if (optionsBox) optionsBox.innerHTML = "";
        if (translationBox) translationBox.style.display = "none";
        if (resultBox) resultBox.style.display = "block";
        if (feedbackText) feedbackText.innerText = "Excelente trabalho praticando o inglês!";
    }
}

function toggleTranslation() {
    if (translationBox) {
        if (translationBox.style.display === "none") {
            translationBox.style.display = "block";
        } else {
            translationBox.style.display = "none";
        }
    }
}

function selectOption(selectedIndex) {
    const currentData = questionsDatabase[currentQuestionIndex];
    const optionDivs = optionsBox.children;

    for (let i = 0; i < optionDivs.length; i++) {
        const btn = optionDivs[i].querySelector("button");
        if (i === currentData.correct) {
            optionDivs[i].style.background = "#15803d"; // Verde para a correta
        } else if (i === selectedIndex) {
            optionDivs[i].style.background = "#b91c1c"; // Vermelho se errar
        }
        if (btn) btn.disabled = true;
    }

    setTimeout(() => {
        currentQuestionIndex++;
        loadQuiz();
    }, 1500);
}

// Inicia o quiz automaticamente
loadQuiz();
