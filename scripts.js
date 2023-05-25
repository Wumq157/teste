// Função para carregar o conteúdo do cabeçalho
function loadHeader() {
    fetch('head.html')
      .then(response => response.text())
      .then(headerContent => {
        const headerElement = document.createElement('header');
        headerElement.innerHTML = headerContent;
        document.body.insertBefore(headerElement, document.body.firstChild);
      });
  }
  
  // Função para carregar o conteúdo do rodapé
  function loadFooter() {
    fetch('footer.html')
      .then(response => response.text())
      .then(footerContent => {
        const footerElement = document.createElement('footer');
        footerElement.innerHTML = footerContent;
        document.body.appendChild(footerElement);
      });
  }
  
  // Função para carregar o conteúdo do index.html
  function loadContent() {
    fetch('index.html')
      .then(response => response.text())
      .then(indexContent => {
        const mainElement = document.createElement('main');
        mainElement.innerHTML = indexContent;
        document.body.appendChild(mainElement);
      });
  }
  
  // Carregar o cabeçalho, conteúdo e rodapé
  function loadPage() {
    loadHeader();
    loadContent();
    loadFooter();
  }
  
  // Chamar a função para carregar a página
  loadPage();
  