const lessons = [
  {
    id: "semana-1-visao-geral",
    weekDay: "Semana 1",
    title: "Variaveis e operadores",
    goal: "Estudar durante 7 dias apenas variaveis, tipos de dados e operadores basicos.",
    focus: ["variaveis", "strings", "int", "float", "operadores", "comparacao"],
    blocks: [
      {
        type: "text",
        title: "Explicacao da semana",
        content:
          "Nesta primeira semana o foco e aprender como guardar valores em variaveis, entender tipos de dados e usar operadores matematicos e de comparacao. A ideia e repetir bastante os mesmos conceitos ate eles ficarem naturais.",
      },
      {
        type: "list",
        title: "O que voce vai ver nesta semana",
        ordered: true,
        items: [
          "Criacao de variaveis e regras de nomes.",
          "Textos com strings.",
          "Numeros inteiros e decimais.",
          "Uso de type() e conversao de tipos.",
          "Operadores de soma, subtracao, multiplicacao e divisao.",
          "Operadores como %, // e **.",
          "Comparacoes como ==, >, <, >= e <=.",
        ],
      },
      {
        type: "qa",
        title: "Perguntas e respostas rapidas",
        items: [
          {
            question: "O que e uma variavel?",
            answer: "E um nome usado para guardar um valor dentro do programa.",
          },
          {
            question: "Para que serve o type()?",
            answer: "Para descobrir o tipo de dado armazenado em uma variavel.",
          },
        ],
      },
      {
        type: "input",
        title: "Meta da semana",
        fields: [
          {
            label: "Escreva o que voce quer memorizar ate o fim desta semana",
            inputType: "textarea",
            placeholder: "Ex.: criar variaveis sem travar e resolver contas simples com operadores",
          },
        ],
      },
    ],
  },
  {
    id: "dia-1",
    weekDay: "Dia 1",
    title: "Variaveis e nomes",
    goal: "Aprender a criar variaveis e dar nomes claros para cada valor.",
    focus: ["variaveis", "nomes", "atribuicao"],
    blocks: [
      {
        type: "text",
        title: "Explicacao",
        content:
          "Variavel e um espaco com nome para guardar um valor. Em Python, voce cria uma variavel usando o sinal de igual. Bons nomes ajudam a entender o codigo sem precisar de explicacao extra.",
      },
      {
        type: "list",
        title: "Exemplos",
        ordered: false,
        items: [
          "nome = 'Ricardo'",
          "idade = 30",
          "cidade = 'Sao Paulo'",
          "salario = 2500.50",
        ],
      },
      {
        type: "list",
        title: "Exercicios",
        ordered: true,
        items: [
          "Crie variaveis para nome, idade e profissao.",
          "Crie uma variavel para guardar o valor de um produto.",
          "Crie duas variaveis com nomes ruins e depois reescreva com nomes melhores.",
        ],
      },
      {
        type: "text",
        title: "Desafio do dia",
        content:
          "Monte um pequeno cadastro com cinco variaveis diferentes e depois mostre no terminal o que cada uma representa.",
      },
    ],
  },
  {
    id: "dia-2",
    weekDay: "Dia 2",
    title: "Tipos de dados",
    goal: "Entender strings, inteiros, floats e booleanos.",
    focus: ["string", "int", "float", "bool", "type"],
    blocks: [
      {
        type: "text",
        title: "Explicacao",
        content:
          "Cada valor tem um tipo. Strings guardam texto, int guarda numero inteiro, float guarda numero com casas decimais e bool representa verdadeiro ou falso.",
      },
      {
        type: "list",
        title: "Exemplos",
        ordered: false,
        items: [
          "nome = 'Ana' -> string",
          "idade = 20 -> int",
          "altura = 1.75 -> float",
          "ativo = True -> bool",
        ],
      },
      {
        type: "list",
        title: "Exercicios",
        ordered: true,
        items: [
          "Crie uma variavel de cada tipo e use type() para conferir.",
          "Escreva tres exemplos de string, tres de int e tres de float.",
          "Crie dois exemplos com True e False.",
        ],
      },
      {
        type: "text",
        title: "Desafio do dia",
        content:
          "Crie um bloco de variaveis para representar uma pessoa e identifique o tipo de cada dado usado.",
      },
    ],
  },
  {
    id: "dia-3",
    weekDay: "Dia 3",
    title: "Conversao de tipos",
    goal: "Aprender a converter valores com int(), float() e str().",
    focus: ["conversao", "int()", "float()", "str()"],
    blocks: [
      {
        type: "text",
        title: "Explicacao",
        content:
          "Nem sempre o valor ja vem no tipo que voce precisa. A conversao ajuda a transformar texto em numero, numero em texto e ajustar os dados para a conta ou exibicao.",
      },
      {
        type: "list",
        title: "Exemplos",
        ordered: false,
        items: [
          "idade = int('25')",
          "preco = float('19.90')",
          "mensagem = str(2026)",
        ],
      },
      {
        type: "list",
        title: "Exercicios",
        ordered: true,
        items: [
          "Converta o texto '100' para inteiro.",
          "Converta o texto '45.8' para float.",
          "Converta o numero 500 para string e junte com uma frase.",
        ],
      },
      {
        type: "text",
        title: "Desafio do dia",
        content:
          "Simule a leitura de dois numeros em texto e converta os dois antes de somar.",
      },
    ],
  },
  {
    id: "dia-4",
    weekDay: "Dia 4",
    title: "Operadores matematicos",
    goal: "Treinar soma, subtracao, multiplicacao e divisao.",
    focus: ["+", "-", "*", "/"],
    blocks: [
      {
        type: "text",
        title: "Explicacao",
        content:
          "Os operadores matematicos fazem contas entre valores. Eles sao a base para calcular media, total, desconto, salario, idade e muitos outros problemas simples.",
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
          "Crie duas variaveis numericas e mostre a soma delas.",
          "Crie um programa que calcule o dobro e a metade de um numero.",
          "Calcule a media de tres notas.",
        ],
      },
      {
        type: "text",
        title: "Desafio do dia",
        content:
          "Monte uma conta com varias operacoes juntas e confira se o resultado ficou como voce esperava.",
      },
    ],
  },
  {
    id: "dia-5",
    weekDay: "Dia 5",
    title: "Operadores avancados",
    goal: "Entender resto, divisao inteira e potenciacao.",
    focus: ["%", "//", "**"],
    blocks: [
      {
        type: "text",
        title: "Explicacao",
        content:
          "Alguns operadores aparecem muito em exercicios: % mostra o resto da divisao, // devolve a divisao inteira e ** faz potenciacao.",
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
          "Descubra se um numero e par usando %.",
          "Mostre quantos grupos completos de 4 pessoas cabem em 19 pessoas usando //.",
          "Calcule o quadrado e o cubo de um numero com **.",
        ],
      },
      {
        type: "text",
        title: "Desafio do dia",
        content:
          "Crie um exercicio que misture %, // e ** no mesmo problema, como vagas, grupos ou pontos de jogo.",
      },
    ],
  },
  {
    id: "dia-6",
    weekDay: "Dia 6",
    title: "Operadores de comparacao",
    goal: "Aprender a comparar valores e entender resultados True e False.",
    focus: ["==", "!=", ">", "<", ">=", "<="],
    blocks: [
      {
        type: "text",
        title: "Explicacao",
        content:
          "Comparacoes servem para verificar se um valor e maior, menor, igual ou diferente de outro. O resultado sempre sera verdadeiro ou falso.",
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
          "Compare duas idades e diga qual e maior.",
          "Verifique se um numero e igual a 100.",
          "Mostre se um salario e maior ou menor que 3000.",
        ],
      },
      {
        type: "text",
        title: "Desafio do dia",
        content:
          "Crie cinco comparacoes diferentes e tente prever o resultado antes de rodar.",
      },
    ],
  },
  {
    id: "dia-7",
    weekDay: "Dia 7",
    title: "Projeto semanal",
    goal: "Fechar a semana com um mini projeto usando variaveis e operadores.",
    focus: ["projeto", "cadastro", "calculos", "comparacoes"],
    blocks: [
      {
        type: "text",
        title: "Explicacao",
        content:
          "Hoje o foco e juntar tudo o que voce treinou na semana. O projeto nao precisa ser grande; ele precisa apenas usar bem os fundamentos.",
      },
      {
        type: "list",
        title: "Exemplos de projeto",
        ordered: false,
        items: [
          "Cadastro simples com nome, idade e profissao.",
          "Calculadora basica com duas entradas numericas.",
          "Ficha de produto com nome, preco, desconto e preco final.",
        ],
      },
      {
        type: "list",
        title: "Exercicios finais",
        ordered: true,
        items: [
          "Escolha um dos projetos e escreva as variaveis que vai usar.",
          "Adicione pelo menos quatro operacoes matematicas ou comparacoes.",
          "Mostre tudo com frases claras no terminal.",
        ],
      },
      {
        type: "text",
        title: "Desafio final",
        content:
          "Crie um sistema de cadastro simples com nome, idade, profissao, salario, bonus e salario final. Depois compare se o salario final ficou acima de um valor definido por voce.",
      },
      {
        type: "input",
        title: "Projeto semanal",
        fields: [
          {
            label: "Qual projeto voce vai fazer nesta semana?",
            inputType: "text",
            placeholder: "Ex.: cadastro simples com calculo de bonus",
          },
          {
            label: "Escreva a mensagem de commit para quando terminar essa semana",
            inputType: "text",
            placeholder: "Ex.: finaliza semana 1 de variaveis e operadores",
          },
        ],
      },
    ],
  },
  {
    id: "github-basico",
    weekDay: "Trilha extra",
    title: "GitHub basico para memorizar",
    goal: "Aprender o fluxo essencial de commit, push, pull e outros comandos que um programador usa com frequencia.",
    focus: ["git status", "git add", "git commit", "git pull", "git push", "branch"],
    blocks: [
      {
        type: "text",
        title: "Regra pratica para comecar",
        content:
          "Sempre que iniciar ou retomar uma aula, vale fazer git pull para trazer a versao mais recente. Durante a aula, faca commits pequenos e claros sempre que concluir uma parte importante.",
      },
      {
        type: "list",
        title: "O que memorizar primeiro",
        ordered: true,
        items: [
          "git status para ver o que mudou no projeto.",
          "git pull para baixar atualizacoes do repositorio remoto antes de continuar.",
          "git add . para preparar alteracoes para o commit.",
          "git commit -m \"mensagem clara\" para registrar uma etapa concluida.",
          "git push para enviar seus commits ao GitHub.",
          "git branch para ver em qual branch voce esta trabalhando.",
        ],
      },
      {
        type: "quiz",
        title: "Quiz de multipla escolha",
        questions: [
          {
            prompt: "Qual comando mostra quais arquivos foram alterados no projeto?",
            options: [{ label: "git status" }, { label: "git push" }, { label: "git clone" }],
            answerIndex: 0,
            explanation: "Use git status para entender o estado atual do repositorio antes de tomar qualquer acao.",
          },
          {
            prompt: "Qual comando baixa atualizacoes do repositorio remoto e integra no seu projeto local?",
            options: [{ label: "git add ." }, { label: "git pull" }, { label: "git commit -m \"inicio\"" }],
            answerIndex: 1,
            explanation: "git pull traz mudancas do remoto. E um bom habito antes de retomar o estudo ou comecar uma tarefa.",
          },
          {
            prompt: "Qual comando envia seus commits locais para o GitHub?",
            options: [{ label: "git push" }, { label: "git status" }, { label: "git checkout" }],
            answerIndex: 0,
            explanation: "git push sincroniza seus commits locais com o repositorio remoto.",
          },
        ],
      },
    ],
  },
];
