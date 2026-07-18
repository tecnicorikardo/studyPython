const lessons = [
  {
    id: "dia-1",
    category: "python",
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
        items: [
          "nome = 'Ricardo'",
          "idade = 30",
          "cidade = 'Sao Paulo'",
          "saldo = 150.75",
        ],
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
            options: [
              { label: "Guarda um valor" },
              { label: "Apaga o programa" },
              { label: "Instala bibliotecas" },
            ],
            answerIndex: 0,
            explanation: "Variavel serve para armazenar dados que o programa vai usar.",
          },
          {
            prompt: "Qual nome de variavel e mais claro?",
            options: [
              { label: "preco_produto" },
              { label: "x1" },
              { label: "abc" },
            ],
            answerIndex: 0,
            explanation: "Nomes descritivos deixam o codigo mais facil de entender.",
          },
        ],
      },
    ],
  },
  {
    id: "dia-2",
    category: "python",
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
        items: [
          "nome = 'Ana' -> string",
          "idade = 20 -> int",
          "altura = 1.72 -> float",
          "ativo = True -> bool",
        ],
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
    id: "dia-3",
    category: "python",
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
        items: [
          "idade = int('25')",
          "preco = float('19.90')",
          "codigo = str(2026)",
        ],
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
    id: "dia-4",
    category: "python",
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
        items: [
          "10 + 5 = 15",
          "10 - 5 = 5",
          "10 * 5 = 50",
          "10 / 5 = 2.0",
        ],
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
    id: "dia-5",
    category: "python",
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
        items: [
          "10 % 3 = 1",
          "10 // 3 = 3",
          "2 ** 3 = 8",
        ],
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
    id: "dia-6",
    category: "python",
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
        items: [
          "10 > 5 -> True",
          "7 == 8 -> False",
          "9 != 4 -> True",
          "6 <= 6 -> True",
        ],
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
    id: "dia-7",
    category: "python",
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
  {
    id: "github-guia",
    category: "github",
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
];
