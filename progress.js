// Sistema de progresso com localStorage
const ProgressTracker = {
  storageKey: "python-study-progress",

  // Carrega progresso salvo
  load() {
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : {};
  },

  // Salva progresso
  save(progress) {
    localStorage.setItem(this.storageKey, JSON.stringify(progress));
  },

  // Marca uma licao como completa
  markComplete(lessonId) {
    const progress = this.load();
    progress[lessonId] = {
      completed: true,
      completedAt: new Date().toISOString(),
    };
    this.save(progress);
  },

  // Verifica se uma licao esta completa
  isComplete(lessonId) {
    const progress = this.load();
    return progress[lessonId]?.completed || false;
  },

  // Obtem todas as licoes completas
  getCompleted() {
    return this.load();
  },

  // Limpa o progresso
  clear() {
    localStorage.removeItem(this.storageKey);
  },

  // Estatisticas
  getStats() {
    const progress = this.load();
    const completed = Object.keys(progress).length;
    return { completed };
  },
};
