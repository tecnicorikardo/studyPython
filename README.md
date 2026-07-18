# Site de estudos

Esse projeto e um site estatico simples para organizar uma semana de exercicios e revisoes de Python.

## Como abrir

Abra o arquivo `index.html` no navegador ou rode um servidor simples:

```powershell
cd D:\projetos\python\study-site
python -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Como adicionar novas aulas

As aulas ficam em `lessons.js`, dentro do array `lessons`.

Cada aula aceita esta estrutura:

```js
{
  id: "dia-8",
  weekDay: "Dia 8",
  title: "Novo tema",
  goal: "Descricao curta da aula.",
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
    }
  ]
}
```

## Estrutura atual

- `index.html`: layout principal
- `styles.css`: visual do site
- `lessons.js`: conteudo das aulas
- `app.js`: renderizacao dinamica
