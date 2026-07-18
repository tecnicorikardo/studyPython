# Site de estudos

Esse projeto e um site estatico simples para organizar uma semana intensiva de estudo.

O conteudo principal esta focado apenas em variaveis e operadores, distribuido em 7 dias com dificuldade crescente. Cada dia usa a estrutura:

- explicacao
- exemplos
- exercicios
- desafio
- projeto semanal

Tambem existe uma guia separada de GitHub basico com leitura e perguntas de multipla escolha.

## Como abrir

Abra o arquivo `index.html` no navegador ou rode um servidor simples:

```powershell
cd D:\projetos\python\study-site
python -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Como adicionar novas semanas ou aulas

As semanas e aulas ficam em `lessons.js`, dentro do array `lessons`.

Cada item aceita esta estrutura:

```js
{
  id: "dia-8",
  weekDay: "Dia 1",
  title: "Tema da aula",
  goal: "Descricao curta da aula ou semana.",
  focus: ["tema-1", "tema-2"],
  blocks: [
    {
      type: "text",
      title: "Explicacao",
      content: "Texto livre da aula."
    },
    {
      type: "list",
      title: "Exercicios",
      ordered: true,
      items: ["Item 1", "Item 2"]
    },
    {
      type: "qa",
      title: "Perguntas e respostas",
      items: [
        {
          question: "Pergunta?",
          answer: "Resposta."
        }
      ]
    },
    {
      type: "input",
      title: "Campos de treino",
      fields: [
        {
          label: "Seu texto",
          inputType: "text",
          placeholder: "Digite aqui"
        },
        {
          label: "Resumo",
          inputType: "textarea",
          placeholder: "Escreva aqui"
        },
        {
          label: "Escolha uma opcao",
          inputType: "select",
          options: ["A", "B", "C"]
        }
      ]
    },
    {
      type: "quiz",
      title: "Quiz",
      questions: [
        {
          prompt: "Pergunta?",
          options: [
            { label: "Opcao A" },
            { label: "Opcao B" },
            { label: "Opcao C" }
          ],
          answerIndex: 1,
          explanation: "Motivo da resposta certa."
        }
      ]
    }
  ]
}
```

## Estrutura atual

- `index.html`: layout principal
- `styles.css`: visual do site
- `lessons.js`: conteudo das semanas e aulas
- `app.js`: renderizacao dinamica
