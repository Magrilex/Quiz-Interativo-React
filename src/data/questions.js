 var questions = [
  {
    id: 1,
    category: "League of Legends",
    question: "Qual é o principal objetivo para vencer uma partida de League of Legends?",
    options: [
      "Destruir o Nexus inimigo",
      "Conseguir mais ouro",
      "Destruir todas as torres",
      "Derrotar o maior número de campeões"
    ],
    correctAnswer: 0
  },
  {
    id: 2,
    category: "League of Legends",
    question: "Quantos jogadores existem em cada equipe no Summoner's Rift?",
    options: [
      "4",
      "5",
      "6",
      "7"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    category: "League of Legends",
    question: "Qual destes é um dos três caminhos principais de Summoner's Rift?",
    options: [
      "Top",
      "Middle",
      "Bottom",
      "Todos os anteriores"
    ],
    correctAnswer: 3
  },
  {
    id: 4,
    category: "League of Legends",
    question: "Qual recurso é usado pela maioria dos campeões para comprar itens?",
    options: [
      "XP",
      "Essência Azul",
      "Ouro",
      "Mana"
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    category: "League of Legends",
    question: "Qual destes monstros épicos aparece no Rio de Summoner's Rift?",
    options: [
      "Barão Nashor",
      "Wither",
      "Ender Dragon",
      "Creeper"
    ],
    correctAnswer: 0
  },
  {
    id: 6,
    category: "League of Legends",
    question: "Qual função normalmente atua como suporte da equipe?",
    options: [
      "Support",
      "Top",
      "Jungle",
      "Mid"
    ],
    correctAnswer: 0
  },
  {
    id: 7,
    category: "League of Legends",
    question: "O que acontece quando um campeão chega ao nível 6?",
    options: [
      "Recebe automaticamente um item",
      "Normalmente pode liberar sua habilidade ultimate",
      "Ganha uma torre",
      "Recebe 1000 de ouro"
    ],
    correctAnswer: 1
  },
  {
    id: 8,
    category: "League of Legends",
    question: "Qual destes é um campeão de League of Legends?",
    options: [
      "Jett",
      "Ahri",
      "Sage",
      "Steve"
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    category: "League of Legends",
    question: "Qual é o nome do mapa usado nas partidas competitivas tradicionais de LoL?",
    options: [
      "Summoner's Rift",
      "Mirage",
      "Ascent",
      "Dust II"
    ],
    correctAnswer: 0
  },
  {
    id: 10,
    category: "League of Legends",
    question: "Qual estrutura precisa ser destruída para finalizar a partida?",
    options: [
      "Inibidor",
      "Torre",
      "Nexus",
      "Barão"
    ],
    correctAnswer: 2
  },
  {
    id: 11,
    category: "Counter-Strike 2",
    question: "Qual é o objetivo principal dos Terroristas no modo competitivo?",
    options: [
      "Defender os bombsites",
      "Plantar a bomba ou eliminar os adversários",
      "Capturar uma bandeira",
      "Destruir o Nexus"
    ],
    correctAnswer: 1
  },
  {
    id: 12,
    category: "Counter-Strike 2",
    question: "Qual destes é um mapa conhecido de Counter-Strike 2?",
    options: [
      "Mirage",
      "Ascent",
      "Summoner's Rift",
      "Haven"
    ],
    correctAnswer: 0
  },
  {
    id: 13,
    category: "Counter-Strike 2",
    question: "Qual arma é conhecida como AWP?",
    options: [
      "Um rifle de assalto",
      "Uma pistola",
      "Um sniper rifle",
      "Uma submetralhadora"
    ],
    correctAnswer: 2
  },
  {
    id: 14,
    category: "Counter-Strike 2",
    question: "Qual arma é conhecida por ser uma das principais rifles dos Terroristas?",
    options: [
      "AK-47",
      "M4A1-S",
      "FAMAS",
      "USP-S"
    ],
    correctAnswer: 0
  },
  {
    id: 15,
    category: "Counter-Strike 2",
    question: "Qual é o objetivo dos Contra-Terroristas quando a bomba é plantada?",
    options: [
      "Plantar outra bomba",
      "Desarmar a bomba",
      "Capturar o bombsite",
      "Comprar uma AWP"
    ],
    correctAnswer: 1
  },
  {
    id: 16,
    category: "Counter-Strike 2",
    question: "Quantos jogadores normalmente existem em cada equipe no modo competitivo 5v5?",
    options: [
      "3",
      "4",
      "5",
      "6"
    ],
    correctAnswer: 2
  },
  {
    id: 17,
    category: "Counter-Strike 2",
    question: "Qual destes mapas possui os bombsites A e B?",
    options: [
      "Mirage",
      "Minecraft",
      "Summoner's Rift",
      "Ascent"
    ],
    correctAnswer: 0
  },
  {
    id: 18,
    category: "Counter-Strike 2",
    question: "Qual arma é uma pistola?",
    options: [
      "AK-47",
      "AWP",
      "Glock-18",
      "M4A1-S"
    ],
    correctAnswer: 2
  },
  {
    id: 19,
    category: "Counter-Strike 2",
    question: "O que acontece quando um jogador fica sem vida?",
    options: [
      "Ele renasce imediatamente",
      "Ele fica morto até a próxima rodada",
      "Ele ganha uma arma",
      "Ele muda de equipe"
    ],
    correctAnswer: 1
  },
  {
    id: 20,
    category: "Counter-Strike 2",
    question: "Qual equipamento pode ser usado para bloquear temporariamente a visão dos inimigos?",
    options: [
      "Smoke Grenade",
      "Kevlar",
      "Defuse Kit",
      "Zeus"
    ],
    correctAnswer: 0
  },
  {
    id: 21,
    category: "Valorant",
    question: "Quantos jogadores existem em cada equipe no modo competitivo tradicional?",
    options: [
      "3",
      "4",
      "5",
      "6"
    ],
    correctAnswer: 2
  },
  {
    id: 22,
    category: "Valorant",
    question: "Qual é o objetivo dos atacantes na maioria das rodadas?",
    options: [
      "Plantar a Spike",
      "Destruir o Nexus",
      "Capturar uma bandeira",
      "Construir uma base"
    ],
    correctAnswer: 0
  },
  {
    id: 23,
    category: "Valorant",
    question: "Qual agente possui uma parede de fogo chamada Blaze?",
    options: [
      "Sage",
      "Phoenix",
      "Jett",
      "Sova"
    ],
    correctAnswer: 1
  },
  {
    id: 24,
    category: "Valorant",
    question: "Qual agente é conhecido por usar um arco e flechas?",
    options: [
      "Sova",
      "Omen",
      "Brimstone",
      "Chamber"
    ],
    correctAnswer: 0
  },
  {
    id: 25,
    category: "Valorant",
    question: "Qual destes é um mapa de Valorant?",
    options: [
      "Mirage",
      "Ascent",
      "Dust II",
      "Summoner's Rift"
    ],
    correctAnswer: 1
  },
  {
    id: 26,
    category: "Valorant",
    question: "Qual é o nome do dispositivo que os atacantes plantam?",
    options: [
      "Bomb",
      "Spike",
      "Core",
      "Orb"
    ],
    correctAnswer: 1
  },
  {
    id: 27,
    category: "Valorant",
    question: "Qual agente possui a habilidade Healing Orb?",
    options: [
      "Sage",
      "Jett",
      "Raze",
      "Reyna"
    ],
    correctAnswer: 0
  },
  {
    id: 28,
    category: "Valorant",
    question: "Qual agente é conhecido por utilizar granadas e um lançador de foguetes?",
    options: [
      "Sova",
      "Raze",
      "Killjoy",
      "Cypher"
    ],
    correctAnswer: 1
  },
  {
    id: 29,
    category: "Valorant",
    question: "Qual é a função principal de um Duelista?",
    options: [
      "Entrar em combate e criar oportunidades para a equipe",
      "Curar todos os aliados",
      "Controlar exclusivamente a economia",
      "Plantar a Spike automaticamente"
    ],
    correctAnswer: 0
  },
  {
    id: 30,
    category: "Valorant",
    question: "Qual destes é um agente de Valorant?",
    options: [
      "Ahri",
      "Phoenix",
      "Steve",
      "Gordon"
    ],
    correctAnswer: 1
  },
  {
    id: 31,
    category: "Minecraft",
    question: "Qual criatura é conhecida por explodir perto do jogador?",
    options: [
      "Zombie",
      "Skeleton",
      "Creeper",
      "Spider"
    ],
    correctAnswer: 2
  },
  {
    id: 32,
    category: "Minecraft",
    question: "Qual dimensão possui o Ender Dragon?",
    options: [
      "Nether",
      "Overworld",
      "The End",
      "Deep Dark"
    ],
    correctAnswer: 2
  },
  {
    id: 33,
    category: "Minecraft",
    question: "Qual material é necessário para criar uma mesa de trabalho?",
    options: [
      "Madeira",
      "Diamante",
      "Ferro",
      "Redstone"
    ],
    correctAnswer: 0
  },
  {
    id: 34,
    category: "Minecraft",
    question: "Qual item é usado para ativar um portal para o Nether?",
    options: [
      "Redstone",
      "Flint and Steel",
      "Diamond",
      "Bucket"
    ],
    correctAnswer: 1
  },
  {
    id: 35,
    category: "Minecraft",
    question: "Qual criatura normalmente aparece em áreas escuras e ataca o jogador?",
    options: [
      "Cow",
      "Pig",
      "Zombie",
      "Villager"
    ],
    correctAnswer: 2
  },
  {
    id: 36,
    category: "Minecraft",
    question: "Qual minério é necessário para criar uma picareta de diamante?",
    options: [
      "Carvão",
      "Ferro",
      "Diamante",
      "Redstone"
    ],
    correctAnswer: 2
  },
  {
    id: 37,
    category: "Minecraft",
    question: "Qual destes animais pode fornecer lã?",
    options: [
      "Vaca",
      "Ovelha",
      "Porco",
      "Galinha"
    ],
    correctAnswer: 1
  },
  {
    id: 38,
    category: "Minecraft",
    question: "Qual item é usado para transportar água?",
    options: [
      "Balde",
      "Baú",
      "Fornalha",
      "Bússola"
    ],
    correctAnswer: 0
  },
  {
    id: 39,
    category: "Minecraft",
    question: "Qual criatura pode se teleportar e pegar alguns blocos?",
    options: [
      "Creeper",
      "Enderman",
      "Skeleton",
      "Blaze"
    ],
    correctAnswer: 1
  },
  {
    id: 40,
    category: "Minecraft",
    question: "Qual chefe precisa ser invocado pelo jogador usando três cabeças de Wither Skeleton?",
    options: [
      "Ender Dragon",
      "Warden",
      "Wither",
      "Elder Guardian"
    ],
    correctAnswer: 2
  }
];

export default questions;