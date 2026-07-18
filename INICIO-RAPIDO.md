# ⚡ Início Rápido - 5 Minutos

## 🎯 Objetivo

Ter seu site de estudos funcionando em **5 minutos**.

---

## 📋 Passo a Passo

### ✅ Passo 1: Testar localmente (1 min)

```powershell
cd D:\projetos\python\study-site
python -m http.server 8000
```

Abra: **http://localhost:8000**

**Deve aparecer:**
- ✓ Site carregado
- ✓ 3 tabs de semanas + GitHub
- ✓ Lista de aulas na lateral
- ✓ Conteúdo principal

---

### ✅ Passo 2: Testar funcionalidades (2 min)

**Teste isso:**
1. Clique em "Semana 2" → Deve trocar o conteúdo
2. Clique em "Dia 2" de qualquer semana → Deve abrir a aula
3. Responda um quiz → Deve mostrar a resposta certa
4. Clique em "Marcar como concluída" → Checkbox deve aparecer ✓
5. Recarregue a página → Progresso deve permanecer

**Tudo funcionou?** ✅ Pronto para publicar!

---

### ✅ Passo 3: Publicar no GitHub (2 min)

```powershell
# Inicializar Git (se ainda não fez)
git init
git add .
git commit -m "Site de estudos Python v2.0"

# Criar repo no GitHub e conectar
git remote add origin https://github.com/SEU-USUARIO/study-site.git
git branch -M main
git push -u origin main
```

**No GitHub:**
1. Settings → Pages
2. Source: `main` branch
3. Save
4. Aguarde 2-5 minutos

**Pronto!** Seu site está no ar! 🎉

---

## 🆘 Problemas Comuns

### Site não abre localmente

**Erro:** `python não é reconhecido`

**Solução:**
```powershell
# Abra o index.html direto no navegador
# Ou instale Python: https://www.python.org/downloads/
```

---

### Progresso não salva

**Causa:** Modo privado/anônimo do navegador

**Solução:** Use modo normal (localStorage não funciona no modo privado)

---

### CSS/JS não carrega no GitHub Pages

**Causa:** Caminhos errados

**Solução:** Os caminhos já estão corretos (`./styles.css`). Aguarde 5 minutos e limpe o cache (Ctrl + F5)

---

## 🎓 Como Estudar

```
┌─────────────────────────────────────────┐
│  1. Escolha uma semana                  │
│  2. Comece pelo Dia 1                   │
│  3. Leia a explicação                   │
│  4. Faça os exercícios no VS Code       │
│  5. Teste no terminal                   │
│  6. Responda o quiz                     │
│  7. Marque como concluída               │
│  8. Vá para o próximo dia               │
└─────────────────────────────────────────┘
```

---

## 📝 Checklist de Início

```
[✓] Python instalado
[✓] Navegador moderno
[✓] Editor de código (VS Code recomendado)
[✓] Git instalado (para publicar)
[✓] Conta no GitHub (para publicar)
```

---

## 🚀 Comandos Úteis

### Durante o estudo

```powershell
# Iniciar servidor
python -m http.server 8000

# Parar servidor
Ctrl + C
```

### Git básico

```powershell
# Ver mudanças
git status

# Salvar progresso
git add .
git commit -m "Completa Semana 1"
git push
```

---

## 💡 Dicas Rápidas

**Para estudar melhor:**
- 📅 Dedique 1 hora por dia
- 📝 Faça TODOS os exercícios
- 🧠 Não copie e cole, digite!
- 🔄 Refaça exercícios difíceis
- ✅ Use o sistema de progresso

**Para o site:**
- 🎨 Pode personalizar cores no `styles.css`
- 📚 Pode adicionar mais semanas no `lessons.js`
- 💾 Progresso fica salvo no navegador
- 📱 Funciona no celular também

---

## 📚 Próximos Passos

Depois de testar:

1. Leia o [README.md](README.md) completo
2. Veja o [RESUMO-VISUAL.md](RESUMO-VISUAL.md)
3. Siga o [DEPLOY.md](DEPLOY.md) para publicar

---

## 🎉 Tudo Pronto!

Agora é só estudar! 🐍

**Bom estudo e boa sorte!** 💪

---

## 🔗 Links Úteis

- [Python.org](https://www.python.org) - Download Python
- [GitHub.com](https://github.com) - Hospedar o site
- [VS Code](https://code.visualstudio.com) - Editor recomendado
- [Git Download](https://git-scm.com/downloads) - Controle de versão

---

```
Dúvidas? Veja os outros arquivos .md na raiz do projeto!
```
