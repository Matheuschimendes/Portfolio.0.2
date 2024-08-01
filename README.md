# Portfólio Pessoal

Este é um projeto de portfólio pessoal desenvolvido com React e Next.js, com o objetivo de apresentar informações sobre mim, minhas experiências e meus projetos. O layout é responsivo e otimizado para uma experiência de usuário agradável e moderna.

![alt portfolio web](<Screenshot 2024-08-01 alle 09.55.45.png>)

## Estrutura do Projeto

A estrutura principal do projeto é dividida em componentes para facilitar a manutenção e a escalabilidade. Abaixo estão os principais componentes e suas responsabilidades:

### Componentes

1. **Home**
   - Este é o componente principal da aplicação. Ele renderiza o conteúdo principal e a barra lateral.
   - Utiliza os componentes `MainContent` e `SideBar`.

2. **NavBar**
   - Um componente de navegação que fornece links para diferentes seções da página (Sobre mim, Experiências, Projetos).
   - É exibido apenas em telas grandes.

3. **MainContent**
   - Contém o conteúdo principal do portfólio, dividido em seções: Sobre mim, Experiências e Projetos.
   - Utiliza os componentes `SobreMim`, `Skils`, `Projetos` e `Experincia`.

### Estilização

- Utiliza classes utilitárias do Tailwind CSS para estilização.
- A classe `bg-black bg-slate leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900` é aplicada ao fundo para um tema escuro com seleção customizada.

### Responsividade

- A estrutura do layout muda conforme o tamanho da tela:
  - Em telas pequenas, o conteúdo é exibido em uma única coluna.
  - Em telas grandes, a barra lateral e o conteúdo principal são exibidos lado a lado.

## Como Executar o Projeto

### Pré-requisitos

- Node.js instalado
- Gerenciador de pacotes (npm ou yarn)

### Passos para Executar

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

2. Navegue até o diretório do projeto:

```bash
cd seu-repositorio
```

3. Instale as dependências:

```bash
npm install
```

ou

```bash
yarn install
```

4. Execute o servidor de desenvolvimento:

```bash
npm run dev
```

ou

```bash
yarn dev
```

5. Abra o navegador e acesse `http://localhost:3000`.

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Contribuição

Contribuições são bem-vindas! Se você tiver sugestões, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para obter mais informações.

---

Espero que este README forneça uma visão clara do projeto e ajude você a começar rapidamente. Se tiver alguma dúvida ou precisar de mais informações, não hesite em entrar em contato.