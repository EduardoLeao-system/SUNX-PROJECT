# Aplicativo

## Intalação de dependências .
```
npm install
```
## Tecnologias utilizadas

- **vite (^6.3.5)**  
  Ferramenta rápida para construção de aplicações web modernas (alternativa ao Webpack). Oferece HMR (Hot Module Replacement) e builds otimizados.  
  🔗 Documentação do
  Vite: https://vitejs.dev/
  
- **vue (^3.5.13)**  
  O framework Vue 3 para criar interfaces reativas.  
  🔗 Documentação do
  Vue.js: https://vuejs.org/
  
- **esbuild (^0.25.4)**  
  Um bundler (empacotador) de JavaScript super rápido (usado internamente pelo Vite).  

- **rollup (^4.40.2)**  
  Outro bundler de módulos (usado pelo Vite para builds de produção).

### Compila e recarrega rapidamente para a execução.
```
npm run serve
```
### Estrutura de Pastas
```
📦 app
├── 📂 node_modules  
├── 📂 public 
│   └── 📄 index.html  
├── 📂 src  
│   ├── 📂 assets   
│   ├── 📂 components  
│   │   ├── TheSidebar.vue  
│   │   └── App.vue  
│   └── 📄 main.js  
├── 📄 .gitignore  
├── 📄 package-lock.json  
├── 📄 package.json  
└── 📄 vite.config.js  
```
### Lints e correções de arquivos.
```
npm run lint
```


