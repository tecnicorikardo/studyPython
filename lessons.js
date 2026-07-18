const studyTracks = [
  {
    id: "semana-1",
    category: "python",
    navLabel: "Semana 1",
    title: "Variaveis e operadores",
    description: "Uma semana inteira para memorizar variaveis e operadores com leitura, exercicios e multipla escolha.",
    heroTitle: "Uma semana, um assunto, muita repeticao",
    heroText:
      "O foco desta semana e estudar apenas variaveis e operadores durante 7 dias, com dificuldade crescente e bastante repeticao para memorizacao.",
    lessons: [
      {
        id: "s1-dia-1",
        weekDay: "Dia 1",
        title: "Variaveis do zero",
        goal: "Entender o que e variavel, como criar e como dar nomes claros.",
        focus: ["variaveis", "nomes", "atribuicao"],
        blocks: [
          {
            type: "text",
            title: "Leitura",
            content:
              "Variavel e um nome usado para guardar um valor dentro do programa. Em Python, voce cria uma variavel usando o sinal de igual. O objetivo do primeiro dia e se acostumar com a ideia de guardar textos e numeros em nomes simples e claros.",
          },
          {
            type: "list",
            title: "Exemplos",
            ordered: false,
            items: ["nome = 'Ricardo'", "idade = 30", "cidade = 'Sao Paulo'", "saldo = 150.75"],
          },
          {
            type: "list",
            title: "Exercicios",
            ordered: true,
            items: [
              "Crie variaveis para nome, idade e profissao.",
              "Crie uma variavel para guardar o nome de uma cidade.",
              "Crie uma variavel para guardar o preco de um produto.",
              "Reescreva nomes ruins como x, y, z para nomes mais claros.",
              "Mostre no terminal o valor de cada variavel criada.",
            ],
          },
          {
            type: "quiz",
            title: "Multipla escolha",
            questions: [
              {
                prompt: "O que uma variavel faz em Python?",
                options: [{ label: "Guarda um valor" }, { label: "Apaga o programa" }, { label: "Instala bibliotecas" }],
                answerIndex: 0,
                explanation: "Variavel serve para armazenar dados que o programa vai usar.",
              },
              {
                prompt: "Qual nome de variavel e mais claro?",
                options: [{ label: "preco_produto" }, { label: "x1" }, { label: "abc" }],
                answerIndex: 0,
                explanation: "Nomes descritivos deixam o codigo mais facil de entender.",
              },
            ],
          },
        ],
      },
      {
        id: "s1-dia-2",
        weekDay: "Dia 2",
        title: "Tipos de dados",
        goal: "Treinar string, int, float e bool com bastante repeticao.",
        focus: ["string", "int", "float", "bool", "type()"],
        blocks: [
          {
            type: "text",
            title: "Leitura",
            content:
              "Cada valor tem um tipo. Strings guardam texto, int guarda numeros inteiros, float guarda numeros com casas decimais e bool guarda verdadeiro ou falso. Hoje a meta e reconhecer esses tipos sem hesitar.",
          },
          {
            type: "list",
            title: "Exemplos",
            ordered: false,
            items: ["nome = 'Ana' -> string", "idade = 20 -> int", "altura = 1.72 -> float", "ativo = True -> bool"],
          },
          {
            type: "list",
            title: "Exercicios",
            ordered: true,
            items: [
              "Crie duas strings diferentes.",
              "Crie dois numeros inteiros e dois decimais.",
              "Crie duas variaveis booleanas.",
              "Use type() em pelo menos seis valores.",
              "Misture varios tipos em um pequeno cadastro.",
            ],
          },
          {
            type: "quiz",
            title: "Multipla escolha",
            questions: [
              {
                prompt: "Qual tipo representa texto?",
                options: [{ label: "string" }, { label: "int" }, { label: "bool" }],
                answerIndex: 0,
                explanation: "Texto em Python e tratado como string.",
              },
              {
                prompt: "Qual valor representa um float?",
                options: [{ label: "10.5" }, { label: "10" }, { label: "True" }],
                answerIndex: 0,
                explanation: "Float e usado para numeros com casas decimais.",
              },
            ],
          },
        ],
      },
      {
        id: "s1-dia-3",
        weekDay: "Dia 3",
        title: "Conversao e combinacao de valores",
        goal: "Converter tipos e reforcar a ligacao entre variavel e dado.",
        focus: ["int()", "float()", "str()", "conversao"],
        blocks: [
          {
            type: "text",
            title: "Leitura",
            content:
              "Nem sempre o valor esta no formato que voce precisa. Com int(), float() e str(), voce transforma textos em numeros e numeros em textos. Esse passo e essencial para trabalhar depois com input e calculos.",
          },
          {
            type: "list",
            title: "Exemplos",
            ordered: false,
            items: ["idade = int('25')", "preco = float('19.90')", "codigo = str(2026)"],
          },
          {
            type: "list",
            title: "Exercicios",
            ordered: true,
            items: [
              "Converta o texto '100' para inteiro.",
              "Converta o texto '45.8' para float.",
              "Converta o numero 900 para string.",
              "Junte uma string com um numero convertido.",
              "Simule um cadastro com textos e numeros convertidos corretamente.",
            ],
          },
          {
            type: "quiz",
            title: "Multipla escolha",
            questions: [
              {
                prompt: "Qual funcao transforma texto numerico em inteiro?",
                options: [{ label: "int()" }, { label: "type()" }, { label: "print()" }],
                answerIndex: 0,
                explanation: "int() converte um texto como '25' em numero inteiro.",
              },
              {
                prompt: "Qual funcao transforma numero em texto?",
                options: [{ label: "str()" }, { label: "float()" }, { label: "bool()" }],
                answerIndex: 0,
                explanation: "str() devolve uma representacao em texto.",
              },
            ],
          },
        ],
      },
      {
        id: "s1-dia-4",
        weekDay: "Dia 4",
        title: "Operadores matematicos basicos",
        goal: "Fixar soma, subtracao, multiplicacao e divisao com repeticao.",
        focus: ["+", "-", "*", "/"],
        blocks: [
          {
            type: "text",
            title: "Leitura",
            content:
              "Agora voce vai usar as variaveis em contas. Os quatro operadores basicos aparecem o tempo todo em exercicios de media, total, preco, idade e saldo. O treino aqui e fazer contas pequenas ate virar reflexo.",
          },
          {
            type: "list",
            title: "Exemplos",
            ordered: false,
            items: ["10 + 5 = 15", "10 - 5 = 5", "10 * 5 = 50", "10 / 5 = 2.0"],
          },
          {
            type: "list",
            title: "Exercicios",
            ordered: true,
            items: [
              "Some dois numeros guardados em variaveis.",
              "Calcule a diferenca entre dois precos.",
              "Calcule o dobro e o triplo de um numero.",
              "Calcule a metade de um valor.",
              "Calcule a media de tres notas.",
              "Monte um mini recibo com subtotal e total.",
            ],
          },
          {
            type: "quiz",
            title: "Multipla escolha",
            questions: [
              {
                prompt: "Qual operador faz multiplicacao?",
                options: [{ label: "*" }, { label: "+" }, { label: "/" }],
                answerIndex: 0,
                explanation: "O simbolo * e usado para multiplicar valores.",
              },
              {
                prompt: "Qual operador faz divisao?",
                options: [{ label: "/" }, { label: "-" }, { label: "%" }],
                answerIndex: 0,
                explanation: "A barra / representa divisao em Python.",
              },
            ],
          },
        ],
      },
      {
        id: "s1-dia-5",
        weekDay: "Dia 5",
        title: "Operadores avancados",
        goal: "Treinar resto, divisao inteira e potenciacao.",
        focus: ["%", "//", "**"],
        blocks: [
          {
            type: "text",
            title: "Leitura",
            content:
              "Hoje entram operadores muito comuns em desafios. O resto da divisao ajuda em pares e impares, a divisao inteira ajuda em agrupamentos, e a potenciacao aparece em quadrado, cubo e outras contas.",
          },
          {
            type: "list",
            title: "Exemplos",
            ordered: false,
            items: ["10 % 3 = 1", "10 // 3 = 3", "2 ** 3 = 8"],
          },
          {
            type: "list",
            title: "Exercicios",
            ordered: true,
            items: [
              "Use % para descobrir se 8 e par.",
              "Use % para descobrir se 15 e impar.",
              "Use // para dividir 23 pessoas em grupos de 5.",
              "Calcule o quadrado e o cubo de tres numeros diferentes.",
              "Crie um problema que misture %, // e **.",
            ],
          },
          {
            type: "quiz",
            title: "Multipla escolha",
            questions: [
              {
                prompt: "Qual operador mostra o resto da divisao?",
                options: [{ label: "%" }, { label: "//" }, { label: "**" }],
                answerIndex: 0,
                explanation: "% devolve o resto da divisao.",
              },
              {
                prompt: "Qual operador faz potenciacao?",
                options: [{ label: "**" }, { label: "/" }, { label: "+" }],
                answerIndex: 0,
                explanation: "** e usado para elevar um numero a uma potencia.",
              },
            ],
          },
        ],
      },
      {
        id: "s1-dia-6",
        weekDay: "Dia 6",
        title: "Comparacao e logica basica",
        goal: "Comparar valores e prever resultados True e False.",
        focus: ["==", "!=", ">", "<", ">=", "<="],
        blocks: [
          {
            type: "text",
            title: "Leitura",
            content:
              "Comparacoes ajudam o programa a verificar se um valor e maior, menor, igual ou diferente de outro. Mesmo antes de estudar condicoes mais a fundo, vale memorizar bem esses operadores e prever o resultado deles.",
          },
          {
            type: "list",
            title: "Exemplos",
            ordered: false,
            items: ["10 > 5 -> True", "7 == 8 -> False", "9 != 4 -> True", "6 <= 6 -> True"],
          },
          {
            type: "list",
            title: "Exercicios",
            ordered: true,
            items: [
              "Compare duas idades e descubra qual e maior.",
              "Verifique se um numero e igual a 100.",
              "Mostre se um preco e menor que 50.",
              "Crie cinco comparacoes e tente prever o resultado antes de executar.",
              "Misture variaveis numericas e comparacoes no mesmo programa.",
            ],
          },
          {
            type: "quiz",
            title: "Multipla escolha",
            questions: [
              {
                prompt: "Qual operador significa diferente de?",
                options: [{ label: "!=" }, { label: "==" }, { label: ">=" }],
                answerIndex: 0,
                explanation: "!= verifica se dois valores sao diferentes.",
              },
              {
                prompt: "Qual resultado de 8 > 10?",
                options: [{ label: "False" }, { label: "True" }, { label: "8" }],
                answerIndex: 0,
                explanation: "8 nao e maior que 10, entao o resultado e False.",
              },
            ],
          },
        ],
      },
      {
        id: "s1-dia-7",
        weekDay: "Dia 7",
        title: "Revisao forte e desafio final",
        goal: "Misturar tudo em varios exercicios para memorizar de verdade.",
        focus: ["variaveis", "tipos", "operadores", "comparacoes", "revisao"],
        blocks: [
          {
            type: "text",
            title: "Leitura",
            content:
              "O ultimo dia e para consolidar. Em vez de aprender conceito novo, voce vai repetir bastante os fundamentos da semana em exercicios variados. A ideia e sair com seguranca no uso de variaveis e operadores.",
          },
          {
            type: "list",
            title: "Exercicios de revisao",
            ordered: true,
            items: [
              "Monte um cadastro com nome, idade, profissao e salario.",
              "Calcule bonus e salario final usando operadores.",
              "Verifique se o salario final ficou acima de um valor alvo.",
              "Descubra se uma idade e par ou impar usando %.",
              "Converta textos numericos em numeros e refaca as contas.",
              "Crie uma ficha de produto com nome, preco, desconto e preco final.",
              "Refaca dois exercicios antigos sem olhar a resposta.",
            ],
          },
          {
            type: "quiz",
            title: "Multipla escolha",
            questions: [
              {
                prompt: "Qual ordem faz mais sentido nesta semana?",
                options: [
                  { label: "Criar variavel, operar valor, comparar resultado" },
                  { label: "Instalar Flask antes de somar dois numeros" },
                  { label: "Criar API antes de aprender variavel" },
                ],
                answerIndex: 0,
                explanation: "A semana trabalha fundamentos em progressao: guardar, operar e comparar.",
              },
              {
                prompt: "Se numero = 9, qual expressao mostra que ele e impar?",
                options: [{ label: "numero % 2 != 0" }, { label: "numero // 2" }, { label: "numero + 2" }],
                answerIndex: 0,
                explanation: "Numero impar deixa resto diferente de zero ao dividir por 2.",
              },
              {
                prompt: "Qual e o foco principal do dia 7?",
                options: [
                  { label: "Revisar e misturar os conceitos estudados" },
                  { label: "Comecar banco de dados" },
                  { label: "Estudar HTML e CSS" },
                ],
                answerIndex: 0,
                explanation: "O ultimo dia serve para fixacao e memoria, nao para abrir outro assunto.",
              },
            ],
          },
          {
            type: "input",
            title: "Projeto da semana",
            fields: [
              {
                label: "Qual desafio final voce vai montar?",
                inputType: "text",
                placeholder: "Ex.: cadastro com salario, bonus e comparacao final",
              },
              {
                label: "Mensagem de commit para fechar sua semana",
                inputType: "text",
                placeholder: "Ex.: finaliza semana de variaveis e operadores",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "semana-2",
    category: "python",
    navLabel: "Semana 2",
    title: "Entrada e saida de dados",
    description: "Uma semana para fixar input, conversoes, exibicao de mensagens e tratamento basico da entrada.",
    heroTitle: "Ler, converter e mostrar dados com seguranca",
    heroText:
      "O foco desta semana e treinar entrada e saida de dados com repeticao: receber textos e numeros, converter valores e exibir respostas claras.",
    lessons: [
      {
        id: "s2-dia-1",
        weekDay: "Dia 1",
        title: "Primeiros inputs",
        goal: "Entender como receber texto do usuario com input().",
        focus: ["input()", "texto", "saida"],
        blocks: [
          {
            type: "text",
            title: "Leitura",
            content:
              "A funcao input() permite que o programa receba dados digitados pela pessoa usuaria. O primeiro treino e simples: pedir um valor e mostrar esse valor na tela com uma mensagem clara.",
          },
          {
            type: "list",
            title: "Exemplos",
            ordered: false,
            items: [
              "nome = input('Digite seu nome: ')",
              "cidade = input('Digite sua cidade: ')",
              "print('Ola,', nome)",
            ],
          },
          {
            type: "list",
            title: "Exercicios",
            ordered: true,
            items: [
              "Peca o nome e mostre uma saudacao.",
              "Peca cidade e estado e mostre uma frase completa.",
              "Peca profissao e hobby e exiba tudo no terminal.",
              "Monte uma apresentacao com tres dados digitados pela pessoa.",
              "Treine mensagens de entrada mais claras e curtas.",
            ],
          },
          {
            type: "quiz",
            title: "Multipla escolha",
            questions: [
              {
                prompt: "Para que serve input()?",
                options: [{ label: "Receber dados digitados" }, { label: "Apagar variaveis" }, { label: "Criar arquivos" }],
                answerIndex: 0,
                explanation: "input() coleta um valor digitado durante a execucao do programa.",
              },
              {
                prompt: "Qual valor normalmente sai de input()?",
                options: [{ label: "Texto" }, { label: "Lista" }, { label: "Booleano puro" }],
                answerIndex: 0,
                explanation: "Por padrao, input() devolve string.",
              },
            ],
          },
        ],
      },
      {
        id: "s2-dia-2",
        weekDay: "Dia 2",
        title: "Convertendo entradas numericas",
        goal: "Transformar textos digitados em int e float.",
        focus: ["input()", "int()", "float()", "conversao"],
        blocks: [
          {
            type: "text",
            title: "Leitura",
            content:
              "Como input() devolve texto, toda entrada numerica precisa ser convertida antes de fazer contas. Hoje o foco e receber numeros e transformar corretamente em int ou float.",
          },
          {
            type: "list",
            title: "Exemplos",
            ordered: false,
            items: [
              "idade = int(input('Digite sua idade: '))",
              "preco = float(input('Digite o preco: '))",
              "print(idade + 1)",
            ],
          },
          {
            type: "list",
            title: "Exercicios",
            ordered: true,
            items: [
              "Leia dois numeros inteiros e mostre a soma.",
              "Leia um valor decimal e mostre o dobro.",
              "Leia idade e mostre quantos anos faltam para 100.",
              "Leia um produto e um preco decimal.",
              "Misture texto e numero no mesmo cadastro.",
            ],
          },
          {
            type: "quiz",
            title: "Multipla escolha",
            questions: [
              {
                prompt: "Qual funcao converte a entrada para inteiro?",
                options: [{ label: "int()" }, { label: "str()" }, { label: "type()" }],
                answerIndex: 0,
                explanation: "int() converte texto numerico em numero inteiro.",
              },
              {
                prompt: "Quando usar float()?",
                options: [
                  { label: "Quando o numero pode ter casas decimais" },
                  { label: "Quando quero criar um comentario" },
                  { label: "Quando preciso de um booleano" },
                ],
                answerIndex: 0,
                explanation: "float() e ideal para valores como 10.5 ou 99.90.",
              },
            ],
          },
        ],
      },
      {
        id: "s2-dia-3",
        weekDay: "Dia 3",
        title: "Montando respostas claras",
        goal: "Exibir mensagens legiveis e organizar melhor a saida.",
        focus: ["print()", "mensagens", "saida"],
        blocks: [
          {
            type: "text",
            title: "Leitura",
            content:
              "Nao basta receber o dado: e importante mostrar o resultado de um jeito claro. Hoje o treino e montar saidas legiveis, com frases completas e boa organizacao.",
          },
          {
            type: "list",
            title: "Exemplos",
            ordered: false,
            items: [
              "print('Nome:', nome)",
              "print('Idade:', idade)",
              "print('Preco final:', preco_final)",
            ],
          },
          {
            type: "list",
            title: "Exercicios",
            ordered: true,
            items: [
              "Monte um resumo com nome, idade e cidade.",
              "Exiba o preco de um produto com mensagem clara.",
              "Leia nota e media e mostre o resultado em frase completa.",
              "Imprima um cadastro com quatro linhas separadas.",
              "Refatore um exercicio antigo para melhorar a saida.",
            ],
          },
          {
            type: "quiz",
            title: "Multipla escolha",
            questions: [
              {
                prompt: "Qual e o objetivo principal de uma boa saida?",
                options: [
                  { label: "Facilitar a leitura do resultado" },
                  { label: "Esconder o valor digitado" },
                  { label: "Evitar usar print()" },
                ],
                answerIndex: 0,
                explanation: "Saidas claras ajudam a entender o que o programa fez.",
              },
            ],
          },
        ],
      },
      {
        id: "s2-dia-4",
        weekDay: "Dia 4",
        title: "F-strings na pratica",
        goal: "Aprender a interpolar valores em frases com mais clareza.",
        focus: ["f-strings", "print()", "formatacao"],
        blocks: [
          {
            type: "text",
            title: "Leitura",
            content:
              "F-strings deixam a exibicao de mensagens mais natural. Em vez de quebrar a frase em varias partes, voce coloca as variaveis dentro do texto usando chaves.",
          },
          {
            type: "list",
            title: "Exemplos",
            ordered: false,
            items: [
              "print(f'Ola, {nome}')",
              "print(f'Voce tem {idade} anos')",
              "print(f'O preco final e {preco_final}')",
            ],
          },
          {
            type: "list",
            title: "Exercicios",
            ordered: true,
            items: [
              "Crie uma saudacao usando f-string.",
              "Mostre idade e cidade na mesma frase.",
              "Leia dois numeros e exiba a soma com f-string.",
              "Exiba preco, desconto e total final com frases completas.",
              "Transforme um exercicio antigo para usar f-strings.",
            ],
          },
          {
            type: "quiz",
            title: "Multipla escolha",
            questions: [
              {
                prompt: "Qual sintaxe indica uma f-string?",
                options: [{ label: "f'...'" }, { label: "#..." }, { label: "int(...)" }],
                answerIndex: 0,
                explanation: "O prefixo f antes da string ativa a interpolacao com chaves.",
              },
            ],
          },
        ],
      },
      {
        id: "s2-dia-5",
        weekDay: "Dia 5",
        title: "Entradas para calculos reais",
        goal: "Misturar input, conversao e operacoes em problemas praticos.",
        focus: ["input()", "conversao", "calculos"],
        blocks: [
          {
            type: "text",
            title: "Leitura",
            content:
              "Hoje o treino e juntar a entrada com as contas. O objetivo e perder o medo de criar programinhas que recebem dados e devolvem um resultado numerico util.",
          },
          {
            type: "list",
            title: "Exemplos",
            ordered: false,
            items: [
              "nota1 = float(input('Nota 1: '))",
              "nota2 = float(input('Nota 2: '))",
              "media = (nota1 + nota2) / 2",
            ],
          },
          {
            type: "list",
            title: "Exercicios",
            ordered: true,
            items: [
              "Leia duas notas e calcule a media.",
              "Leia salario e percentual de bonus.",
              "Leia idade e mostre idade no ano que vem.",
              "Leia largura e altura e calcule a area.",
              "Leia valor de produto e quantidade e calcule total.",
            ],
          },
          {
            type: "quiz",
            title: "Multipla escolha",
            questions: [
              {
                prompt: "Antes de somar duas entradas numericas, o que voce normalmente faz?",
                options: [
                  { label: "Converte os textos para numero" },
                  { label: "Apaga as variaveis" },
                  { label: "Cria uma lista" },
                ],
                answerIndex: 0,
                explanation: "Sem conversao, a entrada continua como texto.",
              },
            ],
          },
        ],
      },
      {
        id: "s2-dia-6",
        weekDay: "Dia 6",
        title: "Validacao basica de entrada",
        goal: "Criar cuidados simples para evitar respostas ruins.",
        focus: ["input()", "validacao", "comparacao"],
        blocks: [
          {
            type: "text",
            title: "Leitura",
            content:
              "Mesmo antes de estudar tratamento de erros, voce ja pode fazer validacoes simples. Por exemplo, conferir se idade e positiva, se nota esta dentro de um intervalo ou se o texto nao veio vazio.",
          },
          {
            type: "list",
            title: "Exemplos",
            ordered: false,
            items: [
              "if idade >= 0:",
              "if nota <= 10:",
              "if nome != '':",
            ],
          },
          {
            type: "list",
            title: "Exercicios",
            ordered: true,
            items: [
              "Leia idade e verifique se ela e valida.",
              "Leia nota e confira se esta entre 0 e 10.",
              "Leia nome e mostre se veio vazio ou preenchido.",
              "Leia quantidade e recuse valores negativos.",
              "Crie um mini formulario com tres validacoes simples.",
            ],
          },
          {
            type: "quiz",
            title: "Multipla escolha",
            questions: [
              {
                prompt: "Qual e o objetivo da validacao basica?",
                options: [
                  { label: "Conferir se a entrada faz sentido" },
                  { label: "Instalar bibliotecas" },
                  { label: "Criar um banco de dados" },
                ],
                answerIndex: 0,
                explanation: "Validar entrada ajuda a evitar resultados estranhos e erros bobos.",
              },
            ],
          },
        ],
      },
      {
        id: "s2-dia-7",
        weekDay: "Dia 7",
        title: "Revisao forte e projeto semanal",
        goal: "Consolidar input, conversao e exibicao em exercicios variados.",
        focus: ["input()", "saida", "f-strings", "revisao"],
        blocks: [
          {
            type: "text",
            title: "Leitura",
            content:
              "No ultimo dia, a ideia e repetir bastante os fundamentos da semana. Em vez de abrir assunto novo, voce vai montar programinhas completos que recebem dados, convertem, calculam e exibem respostas claras.",
          },
          {
            type: "list",
            title: "Exercicios de revisao",
            ordered: true,
            items: [
              "Monte um cadastro com nome, idade e profissao usando input.",
              "Leia duas notas e exiba a media com f-string.",
              "Leia salario e bonus e mostre total final.",
              "Leia largura e altura e exiba a area.",
              "Valide se idade e positiva antes de exibir.",
              "Refaca dois exercicios da semana sem olhar a resposta.",
            ],
          },
          {
            type: "quiz",
            title: "Multipla escolha",
            questions: [
              {
                prompt: "Qual e a sequencia mais comum nesta semana?",
                options: [
                  { label: "Receber -> converter -> calcular -> exibir" },
                  { label: "Apagar -> instalar -> clonar" },
                  { label: "Desenhar -> animar -> publicar" },
                ],
                answerIndex: 0,
                explanation: "Essa semana gira em torno desse fluxo basico de dados.",
              },
              {
                prompt: "Qual o foco principal do dia 7?",
                options: [
                  { label: "Revisar e juntar o que foi estudado" },
                  { label: "Comecar APIs" },
                  { label: "Entrar em banco de dados" },
                ],
                answerIndex: 0,
                explanation: "O dia final serve para consolidacao e memoria.",
              },
            ],
          },
          {
            type: "input",
            title: "Projeto da semana",
            fields: [
              {
                label: "Qual projeto voce vai fazer nesta semana?",
                inputType: "text",
                placeholder: "Ex.: cadastro com media de notas e resumo final",
              },
              {
                label: "Mensagem de commit para fechar a semana 2",
                inputType: "text",
                placeholder: "Ex.: finaliza semana de entrada e saida de dados",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "github-guia",
    category: "github",
    navLabel: "GitHub",
    title: "GitHub basico para lembrar todo dia",
    description: "Guia separado com leitura e perguntas de multipla escolha sobre o fluxo basico.",
    heroTitle: "Fluxo basico de estudo e envio",
    heroText:
      "Use esta guia como apoio diario: atualizar o projeto, revisar mudancas, registrar progresso e enviar para o GitHub.",
    lessons: [
      {
        id: "github-guia-1",
        weekDay: "Guia extra",
        title: "GitHub basico para lembrar todo dia",
        goal: "Ter uma referencia separada com leitura e perguntas de multipla escolha sobre o fluxo basico.",
        focus: ["git status", "git pull", "git add", "git commit", "git push"],
        blocks: [
          {
            type: "text",
            title: "Leitura",
            content:
              "Antes de comecar a estudar, vale lembrar o fluxo basico do GitHub. Normalmente voce puxa o que esta no remoto com git pull, olha o estado com git status, faz sua aula, prepara as mudancas com git add, registra com git commit e envia com git push.",
          },
          {
            type: "list",
            title: "Resumo rapido",
            ordered: true,
            items: [
              "git pull para atualizar o projeto local.",
              "git status para ver o que mudou.",
              "git add . para preparar alteracoes.",
              "git commit -m \"mensagem clara\" para registrar uma etapa.",
              "git push para enviar ao GitHub.",
            ],
          },
          {
            type: "quiz",
            title: "Multipla escolha",
            questions: [
              {
                prompt: "Qual comando atualiza seu projeto local com o remoto?",
                options: [{ label: "git pull" }, { label: "git push" }, { label: "git status" }],
                answerIndex: 0,
                explanation: "git pull traz as atualizacoes do repositorio remoto.",
              },
              {
                prompt: "Qual comando mostra os arquivos alterados?",
                options: [{ label: "git status" }, { label: "git clone" }, { label: "git branch" }],
                answerIndex: 0,
                explanation: "git status mostra o estado atual da sua pasta de trabalho.",
              },
              {
                prompt: "Depois de git add, qual passo normalmente vem a seguir?",
                options: [
                  { label: "git commit -m \"mensagem clara\"" },
                  { label: "git clone" },
                  { label: "git init" },
                ],
                answerIndex: 0,
                explanation: "O commit registra oficialmente aquela mudanca como uma etapa do trabalho.",
              },
              {
                prompt: "Qual comando envia seus commits para o GitHub?",
                options: [{ label: "git push" }, { label: "git pull" }, { label: "git status" }],
                answerIndex: 0,
                explanation: "git push publica os commits no repositorio remoto.",
              },
            ],
          },
        ],
      },
    ],
  },
];
