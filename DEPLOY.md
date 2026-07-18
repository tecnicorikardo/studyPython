# 🚀 Como publicar no GitHub Pages

## Passo 1: Preparar o repositorio

Se ainda nao tem um repositorio Git, crie:

```powershell
cd D:\projetos\python\study-site
git init
git add .
git commit -m "Initial commit: site de estudos Python"
```

## Passo 2: Criar repositorio no GitHub

1. Acesse https://github.com/new
2. Nome: `study-site` (ou outro nome)
3. Deixe publico
4. NAO adicione README, .gitignore ou licenca
5. Clique em "Create repository"

## Passo 3: Conectar e enviar

```powershell
git remote add origin https://github.com/SEU-USUARIO/study-site.git
git branch -M main
git push -u origin main
```

## Passo 4: Ativar GitHub Pages

1. No seu repositorio, va em **Settings**
2. No menu lateral, clique em **Pages**
3. Em "Source", selecione:
   - Branch: `main`
   - Folder: `/ (root)`
4. Clique em **Save**
5. Aguarde alguns minutos

## Passo 5: Acessar o site

Seu site estara disponivel em:
```
https://SEU-USUARIO.github.io/study-site/
```

## 🔄 Atualizacoes futuras

Sempre que fizer mudancas:

```powershell
git add .
git commit -m "Descricao da mudanca"
git push
```

O GitHub Pages atualiza automaticamente em poucos minutos!

## 🐛 Problemas comuns

### Site nao carrega CSS/JS
- Verifique se os caminhos nos arquivos estao corretos
- O arquivo `.nojekyll` deve estar na raiz do projeto

### Demora para atualizar
- GitHub Pages pode levar 1-5 minutos para atualizar
- Limpe o cache do navegador (Ctrl + F5)

### Erro 404
- Verifique se a branch esta correta (main)
- Confirme que o index.html esta na raiz
