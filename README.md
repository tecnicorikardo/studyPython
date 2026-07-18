# Site de estudos Python

Esse projeto e um site estatico para organizar estudo progressivo de Python com cronograma semanal.

## 🎯 Funcionalidades

- ✅ **3 semanas de conteudo** (Variaveis, Entrada/Saida, Condicionais)
- ✅ **Guia extra de GitHub** para referencia diaria
- ✅ **Sistema de progresso** com localStorage
- ✅ **Quiz interativo** com feedback imediato
- ✅ **Design responsivo** para mobile e desktop
- ✅ **Acessibilidade** com ARIA labels

## 📚 Estrutura de cada semana

Cada semana tem 7 dias com dificuldade crescente:

- **Leitura**: explicacao do conceito
- **Exemplos**: codigo demonstrativo
- **Exercicios**: pratica guiada
- **Quiz**: multipla escolha com feedback
- **Projeto semanal**: consolidacao

## 🚀 Como usar

Abra o arquivo `index.html` no navegador ou rode um servidor simples:

```powershell
cd D:\projetos\python\study-site
python -m http.server 8000
```

## 🚀 Como usar

### Localmente

Abra o arquivo `index.html` no navegador ou rode um servidor simples:

```powershell
cd D:\projetos\python\study-site
python -m http.server 8000
```

Depois acesse `http://localhost:8000`.

### GitHub Pages

1. Faca push do projeto para GitHub
2. Va em Settings > Pages
3. Escolha branch main e pasta root
4. Seu site estara disponivel em `https://seu-usuario.github.io/study-site`

## 📊 Sistema de progresso

O site salva automaticamente seu progresso no navegador:

- ✓ Marque aulas como concluidas
- ✓ Veja percentual de progresso
- ✓ Indicadores visuais nas licoes completas
- ✓ Dados persistem entre sessoes

## 🎨 Estrutura do projeto

```
study-site/
├── index.html       # Layout principal
├── styles.css       # Estilos e design
├── app.js           # Renderizacao dinamica
├── lessons.js       # Conteudo das semanas
├── progress.js      # Sistema de progresso
└── README.md        # Documentacao
```

## Como adicionar novas semanas ou aulas

As semanas e aulas ficam em `lessons.js`, dentro do array `studyTracks`.

### Adicionar uma nova semana

```js
const novaSemana = {
  id: "semana-4",
  category: "python",
  navLabel: "Semana 4",
  title: "Loops",
  description: "Descricao da semana",
  heroTitle: "Titulo do hero",
  heroText: "Texto do hero",
  lessons: [
    // suas aulas aqui
  ],
};

studyTracks.push(novaSemana);
```

### Estrutura de uma aula

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

## 🏗️ Tipos de blocos disponiveis

### Bloco de texto
```js
{ type: "text", title: "Titulo", content: "Texto da explicacao" }
```

### Bloco de lista
```js
{ type: "list", title: "Exercicios", ordered: true, items: ["Item 1", "Item 2"] }
```

### Bloco de quiz
```js
{
  type: "quiz",
  title: "Quiz",
  questions: [{
    prompt: "Pergunta?",
    options: [{ label: "Opcao A" }, { label: "Opcao B" }],
    answerIndex: 0,
    explanation: "Explicacao da resposta"
  }]
}
```

### Bloco de input
```js
{
  type: "input",
  title: "Projeto",
  fields: [{
    label: "Nome",
    inputType: "text",
    placeholder: "Digite aqui"
  }]
}
```

## 🤝 Como contribuir

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-semana`)
3. Commit suas mudancas (`git commit -m 'Adiciona Semana 4'`)
4. Push para a branch (`git push origin feature/nova-semana`)
5. Abra um Pull Request
