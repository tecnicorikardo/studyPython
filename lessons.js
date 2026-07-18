const lessons = [
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
