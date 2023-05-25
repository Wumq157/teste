// Função para carregar o conteúdo do cabeçalho
function loadHeader() {
    fetch('head.html')
      .then(response => response.text())
      .then(headerContent => {
        const headerElement = document.createElement('header');
        headerElement.innerHTML = headerContent;
        document.body.insertBefore(headerElement, document.body.firstChild);
        return headerContent;
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
        return footerContent;
      });
  }
  
  // Função para carregar o conteúdo do index.html
  function loadContent() {
    fetch('index.html')
      .then(response => response.text())
      .then(indexContent => {
        const mainElement = document.createElement('main');
        mainElement.innerHTML = indexContent;
  
        // Carregar cabeçalho e rodapé após o carregamento do conteúdo principal
        Promise.all([loadHeader(), loadFooter()])
          .then(() => {
            document.body.appendChild(mainElement);
          });
      });
  }
  
  // Chamar a função para carregar a página
  loadContent();
  