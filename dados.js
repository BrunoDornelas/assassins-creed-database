let dados = [
  {
    nome: "Assassin's Creed",
    protagonista: "Altaïr Ibn-La'Ahad",
    dataLancamento: "13/11/2007",
    cenario: "Terra Santa",
    periodoHistorico: "Terceira Cruzada",
    sinopse:
      "Ambientado na Terra Santa durante a Terceira Cruzada, o jogador controla Altaïr Ibn-La'Ahad, um mestre Assassino que, após um fracasso em uma missão, é despojado de seu posto e deve reconquistar a confiança da Ordem dos Assassinos. Ao longo da jornada, Altaïr descobre uma conspiração que ameaça tanto os Cruzados quanto os Sarracenos, e se envolve em uma luta épica contra a poderosa Ordem dos Templários.",
  },
  {
    nome: "Assassin's Creed II",
    protagonista: "Ezio Auditore da Firenze",
    dataLancamento: "17/11/2009",
    cenario: "Itália Renascentista",
    periodoHistorico: "Séculos XV e XVI",
    sinopse:
      "O jogador assume o papel de Ezio Auditore da Firenze, um jovem nobre italiano que se torna um Assassino após a traição e execução de sua família pelas poderosas famílias de Florença. Em sua jornada, Ezio busca vingança e se envolve nos conflitos políticos da Renascença italiana, confrontando a poderosa Ordem dos Templários.",
  },
  {
    nome: "Assassin's Creed: Brotherhood",
    protagonista: "Ezio Auditore da Firenze",
    dataLancamento: "16/11/2010",
    cenario: "Roma, Itália",
    periodoHistorico: "Renascimento Italiano",
    sinopse:
      "Após os eventos de Assassin's Creed II, Ezio retorna a Roma para reconstruir a Irmandade dos Assassinos. Ele se envolve em uma guerra sangrenta contra a família Borgia, liderada pelo poderoso Cesare Borgia, enquanto busca proteger a cidade e seus cidadãos.",
  },
  {
    nome: "Assassin's Creed: Revelations",
    protagonista: "Ezio Auditore da Firenze e Altaïr Ibn-La'Ahad",
    dataLancamento: "15/11/2011",
    cenario: "Constantinopla e Masyaf",
    periodoHistorico: "Império Otomano",
    sinopse:
      "Ezio, agora um mestre Assassino, viaja para Constantinopla em busca de respostas sobre os mistérios da Ordem dos Assassinos. Ele encontra Altaïr Ibn-La'Ahad em visões, e juntos, eles desvendam os segredos da Primeira Civilização e o destino da Irmandade.",
  },
  {
    nome: "Assassin's Creed III",
    protagonista: "Connor Kenway/Ratonhnhaké:ton",
    dataLancamento: "30/10/2012",
    cenario: "América Colonial, principalmente Boston e a Fronteira",
    periodoHistorico: "Guerra da Independência Americana",
    sinopse:
      "Connor, um jovem de ascendência nativa americana e inglesa, é arrastado para a Guerra da Independência Americana e se junta à Ordem dos Assassinos para proteger seu povo e sua terra natal.",
  },
  {
    nome: "Assassin's Creed: Liberation",
    protagonista: "Aveline de Grandpré",
    dataLancamento: "30/11/2012",
    cenario: "Nova Orleans, Louisiana",
    periodoHistorico: "Final do século XVIII, durante a Revolução Haitiana",
    sinopse:
      "Aveline, uma mulher livre de cor em Nova Orleans, se envolve na luta pela liberdade e se junta à Ordem dos Assassinos para proteger sua cidade e seu povo.",
  },
  {
    nome: "Assassin's Creed IV: Black Flag",
    protagonista: "Edward Kenway",
    dataLancamento: "20/10/2013",
    cenario: "Caribe, durante a Era Dourada da Pirataria",
    periodoHistorico: "Século XVIII",
    sinopse:
      "Edward Kenway, um jovem capitão, é arrastado para uma guerra entre Assassinos e Templários enquanto navega pelos mares do Caribe. Ele se torna um lendário pirata e descobre os segredos da Ordem dos Templários.",
  },
  {
    nome: "Assassin's Creed Rogue",
    protagonista: "Shay Patrick Cormac",
    dataLancamento: "11/11/2014",
    cenario: "Atlântico Norte, durante a Guerra dos Sete Anos",
    periodoHistorico: "Século XVIII",
    sinopse:
      "Shay Patrick Cormac, um jovem Assassino, se torna um Templário após questionar os métodos da Irmandade. Ele embarca em uma jornada para caçar seus antigos aliados e proteger a Ordem dos Templários.",
  },
  {
    nome: "Assassin's Creed: Unity",
    protagonista: "Arno Dorian",
    dataLancamento: "11/11/2014",
    cenario: "Paris, durante a Revolução Francesa",
    periodoHistorico: "Século XVIII",
    sinopse:
      "Arno Dorian, um jovem aristocrata, se envolve na Revolução Francesa após a morte de seu pai adotivo. Ele se junta à Ordem dos Assassinos para buscar vingança e proteger a cidade de Paris.",
  },
  {
    nome: "Assassin's Creed Chronicles: China",
    protagonista: "Shao Jun",
    dataLancamento: "21/04/2015",
    cenario: "China, Dinastia Ming",
    periodoHistorico: "Século 16",
    sinopse:
      "Shao Jun, a última Assassina da China, retorna para sua terra natal para proteger seu povo e vingar a morte de seu mestre. Ela deve navegar pelas intrigas da corte imperial e enfrentar as forças dos Templários.",
  },
  {
    nome: "Assassin's Creed Syndicate",
    protagonista: "Jacob e Evie Frye",
    dataLancamento: "23/10/2015",
    cenario: "Londres, durante a Revolução Industrial",
    periodoHistorico: "Século XIX",
    sinopse:
      "Os gêmeos Frye, Jacob e Evie, lideram a Irmandade dos Assassinos em Londres, durante a Revolução Industrial, em uma luta contra os Templários e para libertar a cidade do controle das gangues.",
  },
  {
    nome: "Assassin's Creed Chronicles: Russia",
    protagonista: "Nikolai Orelov",
    dataLancamento: "12/01/2016",
    cenario: "Rússia, durante a Revolução Russa",
    periodoHistorico: "Início do século XX",
    sinopse:
      "Nikolai Orelov, um ex-oficial do exército russo, se torna um Assassino para proteger sua família e vazar informações sobre os planos dos Templários durante a Revolução Russa.",
  },
  {
    nome: "Assassin's Creed Chronicles: India",
    protagonista: "Arbaaz Mir",
    dataLancamento: "09/02/2016",
    cenario: "Índia, durante o Raj Britânico",
    periodoHistorico: "Início do século XX",
    sinopse:
      "Arbaaz Mir, um príncipe indiano, se junta aos Assassinos para proteger seu povo e recuperar um artefato sagrado dos Templários.",
  },
  {
    nome: "Assassin's Creed Origins",
    protagonista: "Bayek de Siwa",
    dataLancamento: "29/10/2017",
    cenario: "Egito Antigo",
    periodoHistorico: "Século I a.C.",
    sinopse:
      "Bayek de Siwa, um Medjay, busca vingança pela morte de sua família e testemunha o nascimento da Irmandade dos Assassinos no Egito Antigo.",
  },
  {
    nome: "Assassin's Creed Odyssey",
    protagonista: "Alexios ou Kassandra",
    dataLancamento: "05/10/2018",
    cenario: "Grécia Antiga",
    periodoHistorico: "Século V a.C.",
    sinopse:
      "Alexios ou Kassandra, um mercenário espartano, se envolve em uma guerra civil e descobre seus laços com a Ordem dos Anciões.",
  },
  {
    nome: "Assassin's Creed Valhalla",
    protagonista: "Eivor Varinsdottir",
    dataLancamento: "10/10/2020",
    cenario: "Inglaterra, Noruega",
    periodoHistorico: "Século IX d.C.",
    sinopse:
      "Eivor Varinsdottir, um Viking, lidera seu clã em uma jornada pela Inglaterra, estabelecendo assentamentos e enfrentando os Saxões e a Ordem dos Anciões.",
  },
  {
    nome: "Assassin's Creed Mirage",
    protagonista: "Basim Ibn Ishaq",
    dataLancamento: "05/10/2023",
    cenario: "Bagdá, durante o Século IX",
    periodoHistorico: "Era Áurea Islâmica",
    sinopse:
      "Basim Ibn Ishaq, um ladrão de rua em Bagdá, descobre seus poderes sobrenaturais e se junta à Irmandade dos Assassinos, embarcando em uma jornada para entender seu passado e seu destino.",
  },
  {
    nome: "Assassin's Creed Nexus",
    protagonista:
      "Ezio Auditore da Firenze, Kassandra, Connor Kenway/Ratonhnhaké:ton",
    dataLancamento: "16/11/2023",
    cenario:
      "Múltiplos cenários (Renascença Italiana, Grécia Antiga, Revolução Americana)",
    periodoHistorico:
      "Múltiplos períodos históricos (Séculos XV e XVI, Século V a.C., Século XVIII)",
    sinopse:
      "Uma experiência imersiva em realidade virtual que permite aos jogadores reviver momentos-chave da história de Assassin's Creed, controlando personagens icônicos como Ezio, Kassandra e Connor.",
  },
];
