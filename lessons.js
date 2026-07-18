function createWeek({
  id,
  weekDay,
  title,
  goal,
  focus,
  explanation,
  examples,
  exercises,
  challenge,
  project,
}) {
  return {
    id,
    weekDay,
    title,
    goal,
    focus,
    blocks: [
      {
        type: "text",
        title: "Explicacao",
        content: explanation,
      },
      {
        type: "list",
        title: "Exemplos",
        ordered: false,
        items: examples,
      },
      {
        type: "list",
        title: "Exercicios",
        ordered: true,
        items: exercises,
      },
      {
        type: "text",
        title: "Desafio",
        content: challenge,
      },
      {
        type: "input",
        title: "Projeto semanal",
        fields: [
          {
            label: "Projeto da semana",
            inputType: "text",
            placeholder: project,
          },
          {
            label: "Mensagem de commit para fechar esta semana",
            inputType: "text",
            placeholder: `Ex.: finaliza ${weekDay.toLowerCase()} de ${title.toLowerCase()}`,
          },
        ],
      },
    ],
  };
}

const lessons = [
  createWeek({
    id: "semana-1",
    weekDay: "Semana 1",
    title: "Introducao ao Python",
    goal: "Conhecer a linguagem, preparar o ambiente e rodar os primeiros programas.",
    focus: ["python", "vscode", "print()", "comentarios", "erros basicos"],
    explanation:
      "Nesta semana voce vai entender o que e Python, onde ele e usado, como instalar a linguagem e como executar seus primeiros comandos. O foco e perder o medo do ambiente e aprender a testar ideias pequenas no terminal.",
    examples: [
      "print('Ola, mundo!')",
      "# Este e um comentario",
      "print('Meu primeiro programa em Python')",
    ],
    exercises: [
      "Instale o Python e confirme a versao no terminal.",
      "Instale o VS Code e crie um arquivo .py simples.",
      "Escreva tres mensagens diferentes usando print().",
      "Adicione comentarios explicando o que cada linha faz.",
    ],
    challenge:
      "Monte um pequeno arquivo de apresentacao com seu nome, cidade e objetivo com Python, exibindo tudo no terminal sem erros.",
    project: "Criar uma mensagem de apresentacao no terminal.",
  }),
  createWeek({
    id: "semana-2",
    weekDay: "Semana 2",
    title: "Variaveis e tipos de dados",
    goal: "Aprender a guardar informacoes em variaveis e reconhecer os tipos basicos.",
    focus: ["variaveis", "strings", "int", "float", "bool", "type()"],
    explanation:
      "Agora o foco e aprender a criar variaveis, armazenar textos e numeros e identificar o tipo de cada valor. Essa base e essencial porque praticamente todo programa usa variaveis o tempo inteiro.",
    examples: [
      "nome = 'Ricardo'",
      "idade = 30",
      "altura = 1.75",
      "ativo = True",
    ],
    exercises: [
      "Crie variaveis para nome, idade e profissao.",
      "Monte exemplos com string, int, float e bool.",
      "Use type() para descobrir o tipo de cinco valores diferentes.",
      "Reescreva variaveis com nomes melhores e mais claros.",
    ],
    challenge:
      "Crie um cadastro simples com nome, idade, profissao e salario e depois exiba tudo no terminal com frases completas.",
    project: "Cadastro simples com nome, idade e profissao.",
  }),
  createWeek({
    id: "semana-3",
    weekDay: "Semana 3",
    title: "Operadores",
    goal: "Treinar operadores matematicos, comparacoes e logica basica.",
    focus: ["+", "-", "*", "/", "%", "**", "==", "and", "or"],
    explanation:
      "Com as variaveis dominadas, voce passa a operar os valores. Nesta semana entram contas, comparacoes, ordem das operacoes e expressoes logicas que serao usadas mais a frente em condicoes e validacoes.",
    examples: [
      "soma = 10 + 5",
      "resto = 10 % 3",
      "potencia = 2 ** 3",
      "comparacao = 8 > 4",
    ],
    exercises: [
      "Some dois numeros e mostre o resultado.",
      "Calcule media, dobro e metade de um valor.",
      "Use % para verificar se um numero e par.",
      "Crie cinco comparacoes e diga se o resultado sera True ou False.",
    ],
    challenge:
      "Monte uma calculadora simples que mostre soma, subtracao, multiplicacao, divisao e uma comparacao entre dois numeros.",
    project: "Calculadora simples.",
  }),
  createWeek({
    id: "semana-4",
    weekDay: "Semana 4",
    title: "Entrada e saida de dados",
    goal: "Receber dados do usuario, converter valores e formatar mensagens.",
    focus: ["input()", "str()", "int()", "float()", "f-strings"],
    explanation:
      "Esta semana conecta o programa com o usuario. Voce vai receber textos e numeros com input(), converter tipos quando necessario e aprender a montar saidas mais bonitas usando f-strings.",
    examples: [
      "nome = input('Digite seu nome: ')",
      "idade = int(input('Digite sua idade: '))",
      "print(f'Voce tem {idade} anos')",
    ],
    exercises: [
      "Leia nome e idade e mostre uma frase completa.",
      "Receba duas notas e calcule a media.",
      "Peca salario e calcule um reajuste simples.",
      "Treine f-strings com pelo menos tres mensagens diferentes.",
    ],
    challenge:
      "Crie um programa que receba dados de uma pessoa, converta os valores numericos e exiba um resumo formatado no final.",
    project: "Calcular idade, salario ou media de notas.",
  }),
  createWeek({
    id: "semana-5",
    weekDay: "Semana 5",
    title: "Condicoes",
    goal: "Tomar decisoes com if, elif e else.",
    focus: ["if", "elif", "else", "and", "or", "not"],
    explanation:
      "Aqui o programa deixa de ser linear e passa a decidir caminhos. O foco e comparar valores, combinar condicoes e responder diferente de acordo com o resultado.",
    examples: [
      "if nota >= 7:",
      "elif nota >= 5:",
      "else:",
    ],
    exercises: [
      "Verifique se um numero e positivo, negativo ou zero.",
      "Leia uma idade e informe a faixa etaria.",
      "Monte um verificador de aprovacao com media e frequencia.",
      "Use and, or e not em validacoes pequenas.",
    ],
    challenge:
      "Crie um sistema que leia duas notas e informe se a pessoa foi aprovada, recuperacao ou reprovada.",
    project: "Sistema que informa se uma pessoa foi aprovada ou reprovada.",
  }),
  createWeek({
    id: "semana-6",
    weekDay: "Semana 6",
    title: "Laco while",
    goal: "Aprender repeticoes controladas com while.",
    focus: ["while", "contadores", "acumuladores", "break", "continue"],
    explanation:
      "O while serve para repetir um bloco enquanto uma condicao for verdadeira. Nesta semana voce aprende a controlar repeticoes, evitar loop infinito e usar contadores e acumuladores.",
    examples: [
      "while contador < 5:",
      "contador += 1",
      "if tentativa == senha: break",
    ],
    exercises: [
      "Conte de 1 ate 10 com while.",
      "Some numeros ate atingir um limite.",
      "Repita ate o usuario digitar sair.",
      "Use break e continue em exemplos curtos.",
    ],
    challenge:
      "Monte um programa de tentativas de senha com limite de erros e mensagem final de sucesso ou bloqueio.",
    project: "Sistema de tentativas de senha.",
  }),
  createWeek({
    id: "semana-7",
    weekDay: "Semana 7",
    title: "Laco for",
    goal: "Percorrer sequencias e contar repeticoes com for.",
    focus: ["for", "range()", "tabuada", "break", "continue"],
    explanation:
      "O for e excelente quando voce sabe quantas vezes quer repetir ou quando precisa percorrer textos e sequencias. Aqui entram contagens, tabuadas e lacos aninhados.",
    examples: [
      "for numero in range(5):",
      "for letra in 'Python':",
      "for i in range(1, 11):",
    ],
    exercises: [
      "Mostre os numeros de 1 a 10.",
      "Exiba apenas os numeros pares de 0 a 20.",
      "Percorra uma palavra e mostre letra por letra.",
      "Monte uma tabuada com for.",
    ],
    challenge:
      "Gere automaticamente a tabuada de varios numeros com for e range().",
    project: "Gerar tabuadas automaticamente.",
  }),
  createWeek({
    id: "semana-8",
    weekDay: "Semana 8",
    title: "Listas",
    goal: "Criar, alterar e percorrer listas.",
    focus: ["listas", "append()", "remove()", "sort()", "for"],
    explanation:
      "Listas guardam varios valores juntos. Voce vai aprender a acessar elementos, mudar itens, adicionar, remover e percorrer tudo com repeticao.",
    examples: [
      "nomes = ['Ana', 'Joao', 'Carlos']",
      "nomes.append('Maria')",
      "nomes.remove('Ana')",
    ],
    exercises: [
      "Crie uma lista com cinco nomes.",
      "Adicione e remova itens da lista.",
      "Ordene uma lista numerica.",
      "Percorra uma lista e mostre todos os elementos.",
    ],
    challenge:
      "Monte uma lista de tarefas simples que permita adicionar itens, listar tudo e remover uma tarefa.",
    project: "Lista de compras ou lista de tarefas.",
  }),
  createWeek({
    id: "semana-9",
    weekDay: "Semana 9",
    title: "Tuplas e conjuntos",
    goal: "Diferenciar estruturas imutaveis e colecoes sem repeticao.",
    focus: ["tuplas", "conjuntos", "set()", "uniao", "intersecao"],
    explanation:
      "Tuplas ajudam quando os dados nao devem mudar. Conjuntos servem muito bem para eliminar repeticoes e fazer operacoes como uniao e intersecao.",
    examples: [
      "cores = ('azul', 'verde', 'vermelho')",
      "numeros = {1, 2, 3, 3}",
      "resultado = {1, 2} | {2, 3}",
    ],
    exercises: [
      "Crie uma tupla com dias da semana.",
      "Acesse elementos de uma tupla pelo indice.",
      "Crie um conjunto com valores repetidos e veja o resultado.",
      "Teste uniao e intersecao entre dois conjuntos.",
    ],
    challenge:
      "Receba uma lista com nomes repetidos e gere uma versao sem duplicidades usando conjunto.",
    project: "Organizar uma lista sem itens repetidos.",
  }),
  createWeek({
    id: "semana-10",
    weekDay: "Semana 10",
    title: "Dicionarios",
    goal: "Organizar dados em pares de chave e valor.",
    focus: ["dict", "chaves", "valores", "items()", "keys()", "values()"],
    explanation:
      "Dicionarios sao otimos para cadastros e estruturas organizadas. Em vez de depender de posicao, voce acessa informacoes pelo nome da chave.",
    examples: [
      "pessoa = {'nome': 'Ana', 'idade': 25}",
      "pessoa['cidade'] = 'Recife'",
      "for chave, valor in pessoa.items():",
    ],
    exercises: [
      "Crie um dicionario com dados de um produto.",
      "Adicione uma nova chave em um cadastro.",
      "Altere o valor de uma chave existente.",
      "Percorra o dicionario mostrando chave e valor.",
    ],
    challenge:
      "Monte um cadastro de funcionario ou produto usando dicionarios e exiba os dados organizados no final.",
    project: "Cadastro de funcionarios ou produtos.",
  }),
  createWeek({
    id: "semana-11",
    weekDay: "Semana 11",
    title: "Funcoes",
    goal: "Separar o codigo em partes reutilizaveis.",
    focus: ["def", "parametros", "argumentos", "return", "escopo"],
    explanation:
      "Funcoes ajudam a evitar repeticao e deixam o codigo mais organizado. Nesta semana voce aprende a criar blocos reutilizaveis com entrada e retorno de valores.",
    examples: [
      "def somar(a, b):",
      "    return a + b",
      "resultado = somar(2, 3)",
    ],
    exercises: [
      "Crie uma funcao que soma dois numeros.",
      "Crie uma funcao que mostra uma saudacao personalizada.",
      "Crie uma funcao com valor padrao.",
      "Faca uma funcao que devolve o maior numero entre dois valores.",
    ],
    challenge:
      "Refatore uma calculadora simples para que cada operacao fique em uma funcao separada.",
    project: "Calculadora utilizando funcoes.",
  }),
  createWeek({
    id: "semana-12",
    weekDay: "Semana 12",
    title: "Manipulacao de strings",
    goal: "Trabalhar melhor com textos e validacoes simples.",
    focus: ["upper()", "lower()", "replace()", "split()", "strip()"],
    explanation:
      "Strings aparecem em quase todo programa. Aqui voce vai aprender a alterar, dividir, limpar e procurar informacoes em textos.",
    examples: [
      "nome.upper()",
      "frase.replace('Python', 'JavaScript')",
      "palavras = texto.split()",
    ],
    exercises: [
      "Transforme um texto em maiusculas e minusculas.",
      "Troque uma palavra por outra com replace().",
      "Separe uma frase em palavras com split().",
      "Remova espacos extras com strip().",
    ],
    challenge:
      "Crie um analisador que leia um nome completo e mostre quantidade de letras, primeira palavra e ultima palavra.",
    project: "Analisador de nomes e frases.",
  }),
  createWeek({
    id: "semana-13",
    weekDay: "Semana 13",
    title: "Tratamento de erros",
    goal: "Evitar que o programa quebre com entradas invalidas.",
    focus: ["try", "except", "else", "finally", "ValueError"],
    explanation:
      "Todo programa real precisa lidar com erros. Nesta semana voce aprende a proteger conversoes e operacoes que podem falhar, exibindo mensagens amigaveis.",
    examples: [
      "try:",
      "    numero = int(input('Digite um numero: '))",
      "except ValueError:",
    ],
    exercises: [
      "Trate erro ao converter texto para inteiro.",
      "Crie um exemplo com try e except.",
      "Adicione else e finally em um pequeno teste.",
      "Mostre uma mensagem personalizada em caso de erro.",
    ],
    challenge:
      "Monte uma calculadora que continue funcionando mesmo quando o usuario digitar algo invalido.",
    project: "Calculadora que nao fecha quando o usuario digita algo errado.",
  }),
  createWeek({
    id: "semana-14",
    weekDay: "Semana 14",
    title: "Arquivos",
    goal: "Ler e gravar dados em arquivos de texto.",
    focus: ["open()", "read()", "write()", "append", "with open"],
    explanation:
      "Arquivos permitem salvar informacoes fora do programa. Aqui voce vai criar, ler, escrever e adicionar conteudo em arquivos .txt usando boas praticas.",
    examples: [
      "with open('dados.txt', 'w') as arquivo:",
      "    arquivo.write('Ola')",
      "with open('dados.txt', 'r') as arquivo:",
    ],
    exercises: [
      "Crie um arquivo .txt e escreva uma mensagem nele.",
      "Leia o arquivo e mostre o conteudo no terminal.",
      "Adicione novas linhas ao arquivo.",
      "Use with open em todos os testes.",
    ],
    challenge:
      "Crie um bloco de notas simples em terminal capaz de salvar e ler anotacoes.",
    project: "Bloco de notas no terminal.",
  }),
  createWeek({
    id: "semana-15",
    weekDay: "Semana 15",
    title: "Modulos e bibliotecas",
    goal: "Reutilizar codigo pronto e organizar melhor seus arquivos.",
    focus: ["import", "math", "random", "datetime", "pip"],
    explanation:
      "Nesta semana voce aprende a importar modulos prontos, usar bibliotecas comuns e criar seu proprio modulo para reaproveitar funcoes.",
    examples: [
      "import math",
      "import random",
      "from datetime import datetime",
    ],
    exercises: [
      "Use math para raiz quadrada ou arredondamento.",
      "Use random para sortear um numero.",
      "Mostre a data atual com datetime.",
      "Crie um modulo proprio com pelo menos duas funcoes.",
    ],
    challenge:
      "Monte um sorteador de nomes ou numeros que use bibliotecas prontas e uma funcao criada por voce.",
    project: "Sorteador de nomes ou numeros.",
  }),
  createWeek({
    id: "semana-16",
    weekDay: "Semana 16",
    title: "Programacao orientada a objetos",
    goal: "Entender classes, objetos, atributos e metodos.",
    focus: ["class", "__init__", "objetos", "metodos", "heranca"],
    explanation:
      "A orientacao a objetos ajuda a modelar o programa em entidades do mundo real. O foco aqui e criar classes, instancias e organizar comportamento em metodos.",
    examples: [
      "class Pessoa:",
      "    def __init__(self, nome):",
      "        self.nome = nome",
    ],
    exercises: [
      "Crie uma classe Pessoa com nome e idade.",
      "Adicione um metodo para apresentar a pessoa.",
      "Crie uma classe Conta com saldo e deposito.",
      "Teste uma heranca simples entre classes.",
    ],
    challenge:
      "Monte um sistema pequeno de conta bancaria ou cadastro de pessoas usando classes e objetos.",
    project: "Sistema de conta bancaria ou cadastro de pessoas.",
  }),
  createWeek({
    id: "semana-17",
    weekDay: "Semana 17",
    title: "Banco de dados com SQLite",
    goal: "Guardar dados de forma persistente em banco local.",
    focus: ["sqlite3", "tabelas", "insert", "select", "update", "delete"],
    explanation:
      "Com SQLite voce consegue salvar registros de forma mais estruturada. Nesta semana entram criacao de tabelas, insercao, consulta e alteracao de dados.",
    examples: [
      "import sqlite3",
      "conn = sqlite3.connect('banco.db')",
      "cursor.execute('CREATE TABLE usuarios (...)')",
    ],
    exercises: [
      "Crie um banco SQLite local.",
      "Monte uma tabela simples de usuarios ou produtos.",
      "Insira registros na tabela.",
      "Consulte e exiba os dados no terminal.",
    ],
    challenge:
      "Construa um mini cadastro com inserir, listar, atualizar e excluir dados usando SQLite.",
    project: "Sistema de cadastro de usuarios.",
  }),
  createWeek({
    id: "semana-18",
    weekDay: "Semana 18",
    title: "APIs",
    goal: "Consumir dados de servicos externos pela internet.",
    focus: ["api", "requests", "get", "post", "json"],
    explanation:
      "APIs permitem que seu programa converse com outros sistemas. O foco desta semana e fazer requisicoes, trabalhar com JSON e tratar falhas de conexao.",
    examples: [
      "import requests",
      "resposta = requests.get('https://api.exemplo.com/dados')",
      "dados = resposta.json()",
    ],
    exercises: [
      "Faca uma requisicao GET simples.",
      "Leia e exiba dados retornados em JSON.",
      "Teste uma API publica de previsao, endereco ou cotacao.",
      "Trate erro quando a conexao falhar.",
    ],
    challenge:
      "Crie um programa que consulte uma API publica e mostre os dados principais de forma amigavel no terminal.",
    project: "Consultar previsao do tempo, endereco ou cotacao.",
  }),
  createWeek({
    id: "semana-19",
    weekDay: "Semana 19",
    title: "Desenvolvimento web com Flask",
    goal: "Criar um site simples com rotas, formulario e estilo.",
    focus: ["flask", "rotas", "templates", "css", "formularios"],
    explanation:
      "Aqui voce leva o Python para a web. Vai criar rotas, renderizar HTML, usar CSS, trabalhar com formularios e integrar dados com o backend.",
    examples: [
      "from flask import Flask, render_template, request",
      "@app.route('/')",
      "return render_template('index.html')",
    ],
    exercises: [
      "Crie um servidor Flask simples.",
      "Monte uma rota principal com HTML.",
      "Adicione um formulario e receba dados.",
      "Estilize a pagina com CSS basico.",
    ],
    challenge:
      "Monte um site de cadastro simples com formulario, resposta na tela e estrutura organizada.",
    project: "Site de cadastro simples.",
  }),
  createWeek({
    id: "semana-20",
    weekDay: "Semana 20",
    title: "Projeto final",
    goal: "Juntar os principais conceitos em um sistema completo.",
    focus: ["variaveis", "condicoes", "lacos", "listas", "funcoes", "flask", "sqlite"],
    explanation:
      "A ultima semana e para consolidar tudo. O ideal e escolher um projeto que use varias partes da trilha, como cadastro, validacao, persistencia, interface e organizacao do codigo.",
    examples: [
      "Sistema financeiro",
      "Agenda de consultas",
      "Lista de tarefas",
      "Controle de estoque",
    ],
    exercises: [
      "Escolha um tema de projeto e liste as funcionalidades.",
      "Defina quais telas, dados e regras serao necessarios.",
      "Separe o que vai usar de Python puro, banco e Flask.",
      "Implemente uma primeira versao funcional e depois refine.",
    ],
    challenge:
      "Crie um sistema completo com cadastro, listagem, validacoes, tratamento de erros e uma interface simples para uso real.",
    project: "Sistema completo utilizando os principais fundamentos estudados.",
  }),
  {
    id: "github-basico",
    weekDay: "Trilha extra",
    title: "GitHub basico para memorizar",
    goal: "Aprender o fluxo essencial de commit, push, pull e outros comandos que um programador usa com frequencia.",
    focus: ["git status", "git add", "git commit", "git pull", "git push", "branch"],
    blocks: [
      {
        type: "text",
        title: "Explicacao",
        content:
          "Sempre que iniciar ou retomar uma aula, vale fazer git pull para trazer a versao mais recente. Durante a aula, faca commits pequenos e claros sempre que concluir uma parte importante.",
      },
      {
        type: "list",
        title: "Exemplos",
        ordered: false,
        items: [
          "git status",
          "git pull",
          "git add .",
          "git commit -m \"mensagem clara\"",
          "git push",
        ],
      },
      {
        type: "list",
        title: "Exercicios",
        ordered: true,
        items: [
          "Use git status antes de qualquer alteracao.",
          "Faca um commit pequeno ao terminar uma aula.",
          "Envie o commit ao GitHub com git push.",
          "Repita esse fluxo ate ele ficar automatico.",
        ],
      },
      {
        type: "text",
        title: "Desafio",
        content:
          "Treine o fluxo completo em um repositorio de estudo: pull, alterar arquivo, add, commit e push.",
      },
      {
        type: "quiz",
        title: "Projeto semanal",
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
