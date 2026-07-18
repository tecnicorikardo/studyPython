const trackTabsElement = document.getElementById("track-tabs");
const lessonListElement = document.getElementById("lesson-list");
const lessonContentElement = document.getElementById("lesson-content");
const heroEyebrowElement = document.getElementById("hero-eyebrow");
const heroTitleElement = document.getElementById("hero-title");
const heroTextElement = document.getElementById("hero-text");
const brandEyebrowElement = document.getElementById("brand-eyebrow");
const brandTitleElement = document.getElementById("brand-title");
const brandTextElement = document.getElementById("brand-text");

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

function getActiveTrack() {
  return studyTracks.find((track) => track.id === activeTrackId) || studyTracks[0];
}

function createTrackTabs() {
  trackTabsElement.innerHTML = "";

  studyTracks.forEach((track) => {
    const button = createElement("button", "track-tab", track.navLabel);
    button.type = "button";
    button.dataset.trackId = track.id;
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

function renderBlock(block) {
  const article = createElement("article", "content-block");
  const label = createElement("span", "block-label", block.type);
  const title = createElement("h3", "", block.title);

  article.append(label, title);

  if (block.type === "text") {
    article.appendChild(createElement("p", "", block.content));
  }

  if (block.type === "list") {
    const list = document.createElement(block.ordered ? "ol" : "ul");
    block.items.forEach((item) => list.appendChild(createElement("li", "", item)));
    article.appendChild(list);
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
    block.questions.forEach((question, questionIndex) => {
      const quizCard = createElement("div", "quiz-card");
      const prompt = createElement("p", "quiz-question", `${questionIndex + 1}. ${question.prompt}`);
      const optionsWrapper = createElement("div", "quiz-options");
      const feedback = createElement("p", "quiz-feedback");

      feedback.innerHTML = "<strong>Resposta:</strong> escolha uma opcao para conferir.";

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

          if (optionIndex !== question.answerIndex) {
            optionLabel.classList.add("incorrect");
          }

          feedback.innerHTML = `<strong>Resposta certa:</strong> ${
            question.options[question.answerIndex].label
          }<br>${question.explanation}`;
        });

        optionLabel.append(radio, optionText);
        optionsWrapper.appendChild(optionLabel);
      });

      quizCard.append(prompt, optionsWrapper, feedback);
      article.appendChild(quizCard);
    });
  }

  return article;
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
  lesson.blocks.forEach((block) => stack.appendChild(renderBlock(block)));

  header.append(eyebrow, title, description, meta);
  panel.append(header, stack);
  lessonContentElement.appendChild(panel);
}

function renderLessonButtons() {
  const track = getActiveTrack();
  lessonListElement.innerHTML = "";

  track.lessons.forEach((lesson) => {
    const button = createElement("button", "lesson-button");
    button.type = "button";
    button.dataset.lessonId = lesson.id;
    button.append(
      createElement("span", "lesson-chip", lesson.weekDay),
      createElement("strong", "", lesson.title),
      createElement("span", "", lesson.goal),
    );
    button.addEventListener("click", () => renderLesson(lesson.id));
    lessonListElement.appendChild(button);
  });
}

function renderTrack() {
  const track = getActiveTrack();

  document.querySelectorAll(".track-tab").forEach((button) => {
    button.classList.toggle("active", button.dataset.trackId === track.id);
  });

  brandEyebrowElement.textContent = track.category === "github" ? "Guia extra" : "Treino focado";
  brandTitleElement.textContent = track.title;
  brandTextElement.textContent = track.description;
  heroEyebrowElement.textContent = track.category === "github" ? "GitHub basico" : "Estrutura da semana";
  heroTitleElement.textContent = track.heroTitle;
  heroTextElement.textContent = track.heroText;

  renderLessonButtons();
  renderLesson(track.lessons[0]?.id);
}

createTrackTabs();
renderTrack();
