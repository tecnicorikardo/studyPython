# 🧪 Como testar localmente

## Opcao 1: Abrir direto no navegador (Simples)

1. Navegue ate a pasta do projeto no Windows Explorer
2. Clique duas vezes no arquivo `index.html`
3. O site abrira no seu navegador padrao

⚠️ **Limitacao**: Alguns navegadores podem bloquear funcoes por seguranca (CORS)

## Opcao 2: Servidor HTTP com Python (Recomendado)

### Python 3.x

```powershell
cd D:\projetos\python\study-site
python -m http.server 8000
```

Acesse: http://localhost:8000

### Python 2.x (legado)

```powershell
cd D:\projetos\python\study-site
python -m SimpleHTTPServer 8000
```

## Opcao 3: Live Server (VS Code)

1. Instale a extensao "Live Server" no VS Code
2. Abra a pasta do projeto no VS Code
3. Clique com botao direito no `index.html`
4. Selecione "Open with Live Server"

✨ **Vantagem**: Recarrega automaticamente ao salvar mudancas!

## Opcao 4: Outros servidores simples

### Node.js (http-server)

```powershell
npm install -g http-server
cd D:\projetos\python\study-site
http-server -p 8000
```

### PHP

```powershell
cd D:\projetos\python\study-site
php -S localhost:8000
```

## 🧹 Testando o sistema de progresso

1. Abra o site em modo de desenvolvimento (F12)
2. Va na aba "Application" > "Local Storage"
3. Veja a chave `python-study-progress`
4. Marque algumas licoes como concluidas
5. Recarregue a pagina - o progresso deve persistir

### Limpar progresso para testar novamente

No console do navegador (F12):

```javascript
localStorage.clear();
location.reload();
```

## 🐛 Verificando erros

Abra o console do navegador (F12) e verifique:

- ❌ Erros em vermelho: problemas de codigo
- ⚠️ Avisos em amarelo: possíveis melhorias
- ℹ️ Informacoes em azul: mensagens normais

## ✅ Checklist antes de publicar

- [ ] Site abre sem erros no console
- [ ] Todas as 3 semanas aparecem nas tabs
- [ ] Quiz funciona e mostra respostas corretas
- [ ] Sistema de progresso salva e carrega
- [ ] Layout responsivo em mobile (F12 > Toggle device toolbar)
- [ ] Botao de conclusao funciona
- [ ] Navegacao entre licoes funciona
