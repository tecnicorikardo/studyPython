const trackTabsElement = document.getElementById("track-tabs");
const lessonListElement = document.getElementById("lesson-list");
const lessonContentElement = document.getElementById("lesson-content");
const supportPanelsElement = document.getElementById("support-panels");
const progressSummaryElement = document.getElementById("progress-summary");
const heroEyebrowElement = document.getElementById("hero-eyebrow");
const heroTitleElement = document.getElementById("hero-title");
const heroTextElement = document.getElementById("hero-text");
const brandEyebrowElement = document.getElementById("brand-eyebrow");
const brandTitleElement = document.getElementById("brand-title");
const brandTextElement = document.getElementById("brand-text");

const TRACK_SUPPORT = {
  python: {
    resources: [
      {
        label: "Documentacao oficial do Python",
        href: "https://docs.python.org/3/",
      },
      {
        label: "Tutorial oficial do Python",
        href: "https://docs.python.org/3/tutorial/",
      },
      {
        label: "Testar no Replit",
        href: "https://replit.com/languages/python3",
      },
      {
        label: "Executar no PythonAnywhere",
        href: "https://www.pythonanywhere.com/try-ipython/",
      },
    ],
    practices: [
      {
        title: "Nomeie variaveis pelo que elas guardam",
        body:
          "Nomes claros economizam tempo de leitura. Quando voce usa preco_total, idade ou cidade, fica mais facil revisar o codigo e achar erros.",
      },
      {
        title: "Teste em pedaços pequenos",
        body:
          "Depois de criar uma variavel ou uma conta, use print() para conferir o resultado imediatamente. Isso reduz erro acumulado.",
      },
    ],
  },
  github: {
    resources: [
      {
        label: "Documentacao oficial do GitHub",
        href: "https://docs.github.com/pt",
      },
      {
        label: "Livro oficial do Git",
        href: "https://git-scm.com/book/pt-br/v2",
      },
      {
        label: "Cheat sheet do GitHub",
        href: "https://training.github.com/downloads/pt_BR/github-git-cheat-sheet/",
      },
    ],
    practices: [
      {
        title: "Commits pequenos sao mais faceis de revisar",
        body:
          "Quando voce registra uma mudanca curta e bem nomeada, fica mais simples voltar atras, revisar o historico e entender sua evolucao.",
      },
    ],
  },
};

const LESSON_SUPPORT = {
  "s1-dia-1": {
    hints: [
      "Comece com tres variaveis simples: nome, idade e cidade.",
      "Se o nome da variavel ja explica o valor, voce esta no caminho certo.",
    ],
    practice: {
      title: "Boa pratica: nomes que contam a historia",
      body:
        "Evite x, y e dado1 quando o valor tem um papel claro. Isso deixa o codigo mais facil de estudar depois.",
    },
  },
  "s1-dia-2": {
    hints: [
      "Use type() depois de cada exemplo para comparar os tipos.",
      "Pense em string como texto, int como numero inteiro e float como numero decimal.",
    ],
  },
  "s1-dia-3": {
    hints: [
      "Lembre que input() entrega texto, por isso a conversao aparece bastante.",
      "Se quiser somar numeros digitados, converta antes de fazer a conta.",
    ],
    practice: {
      title: "Boa pratica: converta o mais perto possivel da entrada",
      body:
        "Isso evita esquecer a conversao no meio do programa e deixa mais claro qual tipo de dado voce espera usar.",
    },
  },
  "s1-dia-4": {
    hints: [
      "Monte a conta primeiro no papel e depois passe para o codigo.",
      "Use variaveis curtas como nota1, nota2 e media para enxergar melhor a formula.",
    ],
  },
  "s1-dia-5": {
    hints: [
      "Para saber se um numero e par, veja se numero % 2 resulta em 0.",
      "Use ** quando quiser quadrado, cubo ou outras potencias.",
    ],
  },
  "s1-dia-6": {
    hints: [
      "Leia cada comparacao como uma pergunta: idade > 18?",
      "Tente prever True ou False antes de executar para treinar logica.",
    ],
  },
  "s1-dia-7": {
    hints: [
      "Reaproveite exercicios antigos e mude os numeros ou nomes.",
      "Se travar, divida o desafio em cadastro, calculo e comparacao final.",
    ],
  },
  "s2-dia-1": {
    hints: [
      "Comece pedindo um dado de cada vez com mensagens claras.",
      "Mostre o valor digitado logo depois para validar o fluxo.",
    ],
  },
  "s2-dia-2": {
    hints: [
      "Se a conta esta saindo errada, verifique se voce converteu com int() ou float().",
      "Idade e contagem costumam usar int; preco costuma usar float.",
    ],
    practice: {
      title: "Boa pratica: converta de forma explicita",
      body:
        "Nao dependa de adivinhacao. Quando o dado precisa virar numero, mostre isso claramente no codigo.",
    },
  },
  "s2-dia-3": {
    hints: [
      "Escreva frases completas como se estivesse explicando o resultado para outra pessoa.",
      "Separe cada informacao importante em uma linha se a saida estiver muito longa.",
    ],
  },
  "s2-dia-4": {
    hints: [
      "Coloque as variaveis entre chaves dentro da f-string.",
      "Troque uma saida antiga com virgulas por uma frase unica usando f-string.",
    ],
  },
  "s2-dia-5": {
    hints: [
      "Monte o fluxo em quatro passos: ler, converter, calcular e exibir.",
      "Use nomes como largura, altura, area, nota1 e media para enxergar melhor o calculo.",
    ],
  },
  "s2-dia-6": {
    hints: [
      "Valide primeiro o intervalo mais obvio, como idade >= 0 ou nota <= 10.",
      "Uma validacao simples ja evita muita entrada sem sentido.",
    ],
  },
  "s2-dia-7": {
    hints: [
      "Pegue dois exercicios da semana e una em um problema so.",
      "Use f-strings no resumo final para deixar a resposta mais legivel.",
    ],
  },
  "github-guia-1": {
    hints: [
      "Pense no fluxo do GitHub como: atualizar, verificar, registrar e enviar.",
      "Se esquecer a ordem, releia o resumo rapido e tente recitar sem olhar.",
    ],
  },
};

let activeTrackId = studyTracks[0]?.id;

function createElement(tagName, className, textContent) {
  const element = document.createElement(tagName);

  if (className) {
    element.className = className;
  }

  if (textContent) {
    element.textContent = textContent;
  }

  return element;
}

function createIconMarkup(type, title) {
  if (type === "text") {
    return `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6 5.5h12M6 10.5h12M6 15.5h8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      </svg>
    `;
  }

  if (type === "input") {
    return `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4.5" y="5" width="15" height="14" rx="2.5" stroke="currentColor" stroke-width="1.8"/>
        <path d="M8 9h8M8 13h5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      </svg>
    `;
  }

  if (type === "quiz") {
    return `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.8"/>
        <path d="M9.8 9.3a2.4 2.4 0 1 1 4.2 1.6c-.8.7-1.7 1.2-1.7 2.4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        <circle cx="12" cy="16.8" r="0.9" fill="currentColor"/>
      </svg>
    `;
  }

  if (type === "list" && /Exemplos/i.test(title)) {
    return `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8.2 8 5.5 12l2.7 4M15.8 8l2.7 4-2.7 4M13.2 6l-2.4 12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;
  }

  if (type === "list") {
    return `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 7.5h9M9 12h9M9 16.5h9M5.5 7.5h.01M5.5 12h.01M5.5 16.5h.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      </svg>
    `;
  }

  return `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="7" stroke="currentColor" stroke-width="1.8"/>
    </svg>
  `;
}

function getActiveTrack() {
  return studyTracks.find((track) => track.id === activeTrackId) || studyTracks[0];
}

function getTrackSupport(track) {
  return TRACK_SUPPORT[track.category] || { resources: [], practices: [] };
}

function getLessonSupport(lessonId) {
  return LESSON_SUPPORT[lessonId] || { hints: [] };
}

function createTrackTabs() {
  trackTabsElement.innerHTML = "";

  studyTracks.forEach((track) => {
    const button = createElement("button", "track-tab", track.navLabel);
    button.type = "button";
    button.role = "tab";
    button.dataset.trackId = track.id;
    button.setAttribute("aria-selected", track.id === activeTrackId ? "true" : "false");
    button.addEventListener("click", () => {
      activeTrackId = track.id;
      renderTrack();
    });
    trackTabsElement.appendChild(button);
  });
}

function renderInputField(field) {
  const wrapper = createElement("div", "input-preview");
  const label = createElement("label", "", field.label);
  let inputElement;

  if (field.inputType === "textarea") {
    inputElement = document.createElement("textarea");
  } else if (field.inputType === "select") {
    inputElement = document.createElement("select");

    field.options.forEach((optionValue) => {
      const option = document.createElement("option");
      option.value = optionValue;
      option.textContent = optionValue;
      inputElement.appendChild(option);
    });
  } else {
    inputElement = document.createElement("input");
    inputElement.type = field.inputType || "text";
  }

  if (field.placeholder) {
    inputElement.placeholder = field.placeholder;
  }

  wrapper.append(label, inputElement);
  return wrapper;
}

function renderCodeExamples(block, article, lesson) {
  const codeGroup = createElement("div", "code-example-group");
  const language =
    block.language || (getActiveTrack().category === "github" ? "bash" : "python");

  block.items.forEach((item) => {
    const pre = createElement("pre", "code-example");
    const code = document.createElement("code");
    code.className = `language-${language}`;
    code.textContent = item;
    pre.appendChild(code);
    codeGroup.appendChild(pre);
  });

  article.appendChild(codeGroup);
}

function renderHintPanel(hints) {
  const details = document.createElement("details");
  details.className = "hint-panel";

  const summary = createElement("summary", "hint-summary", "Mostrar dicas para comecar");
  const list = createElement("ul", "hint-list");

  hints.forEach((hint) => list.appendChild(createElement("li", "", hint)));

  details.append(summary, list);
  return details;
}

function renderPracticeCard(practice) {
  const card = createElement("section", "practice-card");
  card.append(
    createElement("h4", "", practice.title),
    createElement("p", "", practice.body),
  );
  return card;
}

function renderQuizBlock(block, article) {
  block.questions.forEach((question, questionIndex) => {
    const quizCard = createElement("div", "quiz-card");
    const prompt = createElement(
      "p",
      "quiz-question",
      `${questionIndex + 1}. ${question.prompt}`,
    );
    const optionsWrapper = createElement("div", "quiz-options");
    const feedback = createElement("p", "quiz-feedback");

    feedback.innerHTML =
      "<strong>Resposta:</strong> escolha uma opcao para ver o motivo da resposta.";
    feedback.setAttribute("aria-live", "polite");

    question.options.forEach((option, optionIndex) => {
      const optionLabel = createElement("label", "quiz-option");
      const radio = document.createElement("input");
      const optionText = createElement("span", "", option.label);

      radio.type = "radio";
      radio.name = `${block.title}-${questionIndex}-${question.prompt}`;
      radio.value = String(optionIndex);

      radio.addEventListener("change", () => {
        const optionNodes = optionsWrapper.querySelectorAll(".quiz-option");
        optionNodes.forEach((node, index) => {
          node.classList.remove("correct", "incorrect");
          if (index === question.answerIndex) {
            node.classList.add("correct");
          }
        });

        feedback.classList.remove("is-correct", "is-incorrect");

        if (optionIndex === question.answerIndex) {
          feedback.classList.add("is-correct");
          feedback.innerHTML = `<strong>Correto.</strong> ${question.explanation}`;
        } else {
          optionLabel.classList.add("incorrect");
          feedback.classList.add("is-incorrect");
          feedback.innerHTML =
            `<strong>Ainda nao.</strong> Voce marcou <em>${option.label}</em>. ` +
            `A resposta correta e <strong>${question.options[question.answerIndex].label}</strong>. ` +
            `${question.explanation}`;
        }
      });

      optionLabel.append(radio, optionText);
      optionsWrapper.appendChild(optionLabel);
    });

    quizCard.append(prompt, optionsWrapper, feedback);
    article.appendChild(quizCard);
  });
}

function renderBlock(block, lesson) {
  const article = createElement("article", "content-block");
  article.dataset.blockType = block.type;

  const header = createElement("div", "block-header");
  const icon = createElement("span", "block-icon");
  const headingWrap = createElement("div", "block-heading");
  const label = createElement("span", "block-label", block.type);
  const title = createElement("h3", "", block.title);

  icon.innerHTML = createIconMarkup(block.type, block.title);
  headingWrap.append(label, title);
  header.append(icon, headingWrap);
  article.appendChild(header);

  const isExampleBlock = block.type === "list" && /Exemplos/i.test(block.title);
  const isExerciseBlock = block.type === "list" && /Exercicios/i.test(block.title);

  if (block.type === "text") {
    article.appendChild(createElement("p", "", block.content));
  }

  if (block.type === "list" && isExampleBlock) {
    renderCodeExamples(block, article, lesson);
  } else if (block.type === "list") {
    const list = document.createElement(block.ordered ? "ol" : "ul");
    block.items.forEach((item) => list.appendChild(createElement("li", "", item)));
    article.appendChild(list);

    if (isExerciseBlock) {
      const lessonSupport = getLessonSupport(lesson.id);
      if (lessonSupport.hints?.length) {
        article.appendChild(renderHintPanel(lessonSupport.hints));
      }
      if (lessonSupport.practice) {
        article.appendChild(renderPracticeCard(lessonSupport.practice));
      }
    }
  }

  if (block.type === "input") {
    block.fields.forEach((field) => article.appendChild(renderInputField(field)));
    article.appendChild(
      createElement(
        "p",
        "input-hint",
        "Esses campos servem como area de treino visual e podem virar formulario real depois.",
      ),
    );
  }

  if (block.type === "quiz") {
    renderQuizBlock(block, article);
  }

  return article;
}

function updateProgressSummary() {
  const track = getActiveTrack();
  const totalLessons = track.lessons.length;
  const completedCount = track.lessons.filter((lesson) =>
    ProgressTracker.isComplete(lesson.id),
  ).length;
  const percentage = Math.round((completedCount / totalLessons) * 100);

  progressSummaryElement.innerHTML = `
    <div class="progress-header">
      <p class="progress-title">Progresso da semana</p>
      <span class="progress-badge">${percentage}%</span>
    </div>
    <div class="progress-bar" aria-hidden="true">
      <div class="progress-fill" style="width: ${percentage}%"></div>
    </div>
    <p class="progress-text">
      <strong>${completedCount}</strong> de <strong>${totalLessons}</strong> licoes completas
    </p>
  `;
}

function addLessonCompleteButton(lessonId) {
  const isComplete = ProgressTracker.isComplete(lessonId);
  const button = createElement(
    "button",
    isComplete ? "complete-btn completed" : "complete-btn",
    isComplete ? "OK Aula concluida" : "Marcar como concluida",
  );

  button.type = "button";
  button.setAttribute("aria-pressed", isComplete ? "true" : "false");

  if (isComplete) {
    button.disabled = true;
  }

  button.addEventListener("click", () => {
    ProgressTracker.markComplete(lessonId);
    renderTrack(lessonId);
  });

  return button;
}

function renderLesson(lessonId) {
  const track = getActiveTrack();
  const lesson = track.lessons.find((item) => item.id === lessonId) || track.lessons[0];
  lessonContentElement.innerHTML = "";

  document.querySelectorAll(".lesson-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.lessonId === lesson.id);
  });

  const panel = createElement("section", "lesson-panel");
  const header = createElement("header", "lesson-header");
  const eyebrow = createElement("p", "eyebrow", lesson.weekDay);
  const title = createElement("h2", "", lesson.title);
  const description = createElement("p", "lesson-description", lesson.goal);
  const meta = createElement("div", "lesson-meta");
  const stack = createElement("div", "block-stack");

  lesson.focus.forEach((item) => meta.appendChild(createElement("span", "lesson-chip", item)));
  lesson.blocks.forEach((block) => stack.appendChild(renderBlock(block, lesson)));
  stack.appendChild(addLessonCompleteButton(lesson.id));

  header.append(eyebrow, title, description, meta);
  panel.append(header, stack);
  lessonContentElement.appendChild(panel);

  renderSupportPanels(track, lesson);

  if (window.Prism?.highlightAllUnder) {
    window.Prism.highlightAllUnder(lessonContentElement);
  }
}

function renderLessonButtons() {
  const track = getActiveTrack();
  lessonListElement.innerHTML = "";

  track.lessons.forEach((lesson) => {
    const button = createElement("button", "lesson-button");
    const isComplete = ProgressTracker.isComplete(lesson.id);
    const checkbox = createElement("span", "lesson-checkbox", isComplete ? "OK" : "");

    button.type = "button";
    button.dataset.lessonId = lesson.id;
    button.setAttribute("aria-label", `${lesson.weekDay}: ${lesson.title}`);

    if (isComplete) {
      button.classList.add("completed");
    }

    checkbox.setAttribute("aria-hidden", "true");

    button.append(
      checkbox,
      createElement("span", "lesson-chip", lesson.weekDay),
      createElement("strong", "", lesson.title),
      createElement("span", "", lesson.goal),
    );

    button.addEventListener("click", () => renderLesson(lesson.id));
    lessonListElement.appendChild(button);
  });

  updateProgressSummary();
}

function renderSupportPanels(track, lesson) {
  const trackSupport = getTrackSupport(track);
  const lessonSupport = getLessonSupport(lesson.id);

  const resourcesCard = createElement("section", "support-card");
  resourcesCard.append(
    createElement("p", "eyebrow", "Recursos"),
    createElement("h3", "", "Onde estudar e testar"),
    createElement(
      "p",
      "",
      track.category === "github"
        ? "Use estes links como consulta rapida para revisar o fluxo e a documentacao oficial."
        : "Abra a documentacao oficial e teste os exemplos em um executor online sempre que quiser reforcar a pratica.",
    ),
  );

  const linkGroup = createElement("div", "resource-links");
  trackSupport.resources.forEach((resource) => {
    const link = createElement("a", "resource-link", resource.label);
    link.href = resource.href;
    link.target = "_blank";
    link.rel = "noreferrer";
    linkGroup.appendChild(link);
  });
  resourcesCard.appendChild(linkGroup);

  const practiceCard = createElement("section", "support-card");
  practiceCard.append(
    createElement("p", "eyebrow", "Boas praticas"),
    createElement("h3", "", "Por que isso importa"),
    createElement(
      "p",
      "",
      "Pequenas decisoes de organizacao deixam o codigo mais facil de revisar, corrigir e memorizar.",
    ),
  );

  const practiceList = createElement("div", "practice-stack");
  trackSupport.practices.forEach((practice) =>
    practiceList.appendChild(renderPracticeCard(practice)),
  );
  if (lessonSupport.practice) {
    practiceList.appendChild(renderPracticeCard(lessonSupport.practice));
  }
  practiceCard.appendChild(practiceList);

  supportPanelsElement.innerHTML = "";
  supportPanelsElement.append(resourcesCard, practiceCard);
}

function renderTrack(preferredLessonId) {
  const track = getActiveTrack();

  document.querySelectorAll(".track-tab").forEach((button) => {
    const isActive = button.dataset.trackId === track.id;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", isActive ? "true" : "false");
  });

  brandEyebrowElement.textContent = track.category === "github" ? "Guia extra" : "Treino focado";
  brandTitleElement.textContent = track.title;
  brandTextElement.textContent = track.description;
  heroEyebrowElement.textContent = track.category === "github" ? "GitHub basico" : "Estrutura da semana";
  heroTitleElement.textContent = track.heroTitle;
  heroTextElement.textContent = track.heroText;

  renderLessonButtons();
  renderLesson(preferredLessonId || track.lessons[0]?.id);
}

createTrackTabs();
renderTrack();
