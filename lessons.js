const lessons = [
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
        type: "qa",
        title: "Perguntas e respostas rapidas",
        items: [
          {
            question: "Preciso dar commit no comeco da aula?",
            answer: "Normalmente voce faz commit quando conclui uma mudanca com sentido. No comeco da aula, o mais importante e fazer pull e checar status.",
          },
          {
            question: "Quando usar push?",
            answer: "Depois de fazer um ou mais commits e querer enviar essas alteracoes para o GitHub.",
          },
          {
            question: "Quando usar pull?",
            answer: "Antes de continuar trabalhando, para garantir que voce esta com a versao mais atual do repositorio.",
          },
        ],
      },
      {
        type: "quiz",
        title: "Quiz de multipla escolha",
        questions: [
          {
            prompt: "Qual comando mostra quais arquivos foram alterados no projeto?",
            options: [
              { label: "git status" },
              { label: "git push" },
              { label: "git clone" },
            ],
            answerIndex: 0,
            explanation: "Use git status para entender o estado atual do repositorio antes de tomar qualquer acao.",
          },
          {
            prompt: "Qual comando baixa atualizacoes do repositorio remoto e integra no seu projeto local?",
            options: [
              { label: "git add ." },
              { label: "git pull" },
              { label: "git commit -m \"inicio\"" },
            ],
            answerIndex: 1,
            explanation: "git pull traz mudancas do remoto. E um bom habito antes de retomar o estudo ou comecar uma tarefa.",
          },
          {
            prompt: "Depois de alterar arquivos e preparar tudo com git add, qual e o proximo passo natural?",
            options: [
              { label: "git commit -m \"mensagem clara\"" },
              { label: "git branch" },
              { label: "git clone" },
            ],
            answerIndex: 0,
            explanation: "O commit registra um ponto da sua evolucao com uma mensagem que explica a mudanca.",
          },
          {
            prompt: "Qual comando envia seus commits locais para o GitHub?",
            options: [
              { label: "git push" },
              { label: "git status" },
              { label: "git checkout" },
            ],
            answerIndex: 0,
            explanation: "git push sincroniza seus commits locais com o repositorio remoto.",
          },
          {
            prompt: "Se voce quer criar uma copia local de um repositorio que ainda nao esta no seu computador, qual comando usa?",
            options: [
              { label: "git clone" },
              { label: "git merge" },
              { label: "git pull" },
            ],
            answerIndex: 0,
            explanation: "git clone baixa o repositorio inteiro pela primeira vez.",
          },
          {
            prompt: "Qual destes itens tambem e importante memorizar no GitHub alem de commit, push e pull?",
            options: [
              { label: "Branch e pull request" },
              { label: "Apenas mudar o nome dos arquivos" },
              { label: "Somente abrir o site do GitHub" },
            ],
            answerIndex: 0,
            explanation: "Branch e pull request fazem parte do fluxo normal de colaboracao e organizacao de trabalho.",
          },
        ],
      },
      {
        type: "list",
        title: "Fluxo simples para decorar",
        ordered: true,
        items: [
          "git pull",
          "git status",
          "fazer a aula ou exercicio",
          "git add .",
          "git commit -m \"descreve o que mudou\"",
          "git push",
        ],
      },
      {
        type: "input",
        title: "Memorizacao",
        fields: [
          {
            label: "Escreva com suas palavras quando usar pull, commit e push",
            inputType: "textarea",
            placeholder: "Ex.: pull antes de comecar, commit ao fechar uma etapa, push para enviar...",
          },
        ],
      },
    ],
  },
  {
    id: "dia-1",
    weekDay: "Dia 1",
    title: "Fundamentos e primeiros passos",
    goal: "Revisar variaveis, tipos, entrada e saida de dados.",
    focus: ["variaveis", "strings", "input", "print"],
    blocks: [
      {
        type: "text",
        title: "Objetivo da aula",
        content:
          "Comece reforcando a base. A ideia aqui e se acostumar com a leitura do problema, entrada de dados e exibicao de resultados.",
      },
      {
        type: "list",
        title: "Exercicios sugeridos",
        ordered: true,
        items: [
          "Crie um programa que peca nome, idade e cidade e mostre uma frase completa.",
          "Receba duas notas e calcule a media.",
          "Leia uma string e mostre ela em maiusculas, minusculas e com o total de caracteres.",
        ],
      },
      {
        type: "qa",
        title: "Perguntas e respostas rapidas",
        items: [
          {
            question: "Quando usar input()?",
            answer: "Quando o programa precisa receber um valor digitado pelo usuario.",
          },
          {
            question: "O que e uma string?",
            answer: "Um tipo de dado usado para armazenar texto.",
          },
        ],
      },
      {
        type: "input",
        title: "Campo de treino",
        fields: [
          {
            label: "Escreva com suas palavras o que voce aprendeu hoje",
            inputType: "textarea",
            placeholder: "Resumo do dia...",
          },
          {
            label: "Qual exercicio voce quer revisar depois?",
            inputType: "text",
            placeholder: "Ex.: media de notas",
          },
          {
            label: "Mensagem de commit para fechar essa aula",
            inputType: "text",
            placeholder: "Ex.: conclui exercicios de variaveis e strings",
          },
        ],
      },
    ],
  },
  {
    id: "dia-2",
    weekDay: "Dia 2",
    title: "Condicionais e decisoes",
    goal: "Treinar if, elif e else com problemas pequenos.",
    focus: ["if", "comparacoes", "logica"],
    blocks: [
      {
        type: "text",
        title: "Leitura do problema",
        content:
          "Antes de codar, tente responder: quais condicoes existem, quais caminhos o programa pode seguir e qual resultado deve aparecer em cada caso?",
      },
      {
        type: "list",
        title: "Desafios",
        ordered: true,
        items: [
          "Verifique se um numero e positivo, negativo ou zero.",
          "Leia a idade e informe se a pessoa e menor de idade, adulta ou idosa.",
          "Crie um mini sistema de login que compara usuario e senha.",
        ],
      },
      {
        type: "qa",
        title: "Perguntas comuns",
        items: [
          {
            question: "Quando usar elif?",
            answer: "Quando ha mais de uma condicao intermediaria alem do if principal e do else final.",
          },
        ],
      },
    ],
  },
  {
    id: "dia-3",
    weekDay: "Dia 3",
    title: "Repeticao com for e while",
    goal: "Praticar lacos e repeticoes controladas.",
    focus: ["for", "while", "range"],
    blocks: [
      {
        type: "list",
        title: "Sequencia de pratica",
        ordered: true,
        items: [
          "Conte de 1 ate 10 com for.",
          "Mostre apenas os numeros pares de 0 a 20.",
          "Use while para repetir ate o usuario digitar 'sair'.",
        ],
      },
      {
        type: "input",
        title: "Checklist pessoal",
        fields: [
          {
            label: "Qual laco ainda te confunde mais?",
            inputType: "select",
            options: ["for", "while", "ambos"],
          },
        ],
      },
    ],
  },
  {
    id: "dia-4",
    weekDay: "Dia 4",
    title: "Listas e colecoes",
    goal: "Manipular listas, adicionar, remover e percorrer itens.",
    focus: ["listas", "append", "for"],
    blocks: [
      {
        type: "text",
        title: "Aplicacao pratica",
        content:
          "Esse e um bom ponto para criar exercicios parecidos com cadastro simples, carrinho de compras ou lista de tarefas.",
      },
      {
        type: "list",
        title: "Ideias de exercicios",
        ordered: false,
        items: [
          "Adicionar nomes em uma lista e mostrar todos no final.",
          "Somar todos os numeros de uma lista.",
          "Descobrir o maior e o menor valor armazenado.",
        ],
      },
    ],
  },
  {
    id: "dia-5",
    weekDay: "Dia 5",
    title: "Funcoes e reutilizacao",
    goal: "Separar responsabilidades e evitar repeticao.",
    focus: ["def", "parametros", "retorno"],
    blocks: [
      {
        type: "qa",
        title: "Perguntas de revisao",
        items: [
          {
            question: "Por que criar funcoes?",
            answer: "Para dividir o codigo em partes reutilizaveis, mais legiveis e mais faceis de testar.",
          },
          {
            question: "O que e retorno?",
            answer: "E o valor que a funcao devolve para quem a chamou.",
          },
        ],
      },
      {
        type: "list",
        title: "Exercicios",
        ordered: true,
        items: [
          "Crie uma funcao que soma dois numeros.",
          "Crie uma funcao que valida se uma senha tem tamanho minimo.",
          "Crie uma funcao que recebe uma lista e devolve o maior valor.",
        ],
      },
    ],
  },
  {
    id: "dia-6",
    weekDay: "Dia 6",
    title: "Mini projeto guiado",
    goal: "Juntar varios conceitos em algo mais real.",
    focus: ["menus", "listas", "funcoes", "condicoes"],
    blocks: [
      {
        type: "text",
        title: "Projeto da semana",
        content:
          "Monte uma lista de tarefas em terminal: adicionar tarefa, listar, concluir e remover. Isso conecta variaveis, listas, funcoes e repeticao.",
      },
      {
        type: "input",
        title: "Planejamento",
        fields: [
          {
            label: "Quais funcionalidades voce quer no mini projeto?",
            inputType: "textarea",
            placeholder: "Ex.: cadastrar, listar, marcar como concluida...",
          },
        ],
      },
    ],
  },
  {
    id: "dia-7",
    weekDay: "Dia 7",
    title: "Revisao, correcao e proximos passos",
    goal: "Consolidar o aprendizado e planejar novas aulas.",
    focus: ["revisao", "erros", "novas metas"],
    blocks: [
      {
        type: "list",
        title: "Fechamento da semana",
        ordered: true,
        items: [
          "Refaca um exercicio de cada dia sem olhar a resposta.",
          "Anote os erros que mais se repetiram.",
          "Escolha o proximo tema: arquivos, dicionarios, orientacao a objetos ou APIs.",
        ],
      },
      {
        type: "input",
        title: "Proxima aula",
        fields: [
          {
            label: "Tema da nova aula",
            inputType: "text",
            placeholder: "Ex.: dicionarios em Python",
          },
          {
            label: "Descricao curta",
            inputType: "textarea",
            placeholder: "O que essa nova aula deve cobrir?",
          },
        ],
      },
    ],
  },
];
