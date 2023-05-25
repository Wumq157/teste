// Função para carregar o conteúdo das páginas
function loadPageContent(pageName) {
    // Carrega o cabeçalho
    fetch('head.html')
      .then(response => response.text())
      .then(headContent => {
        // Insere o cabeçalho na página atual
        document.querySelector('head').innerHTML = headContent;
      });
  
    // Carrega o rodapé
    fetch('footer.html')
      .then(response => response.text())
      .then(footerContent => {
        // Insere o rodapé na página atual
        document.querySelector('footer').innerHTML = footerContent;
      });
  
    // Carrega o conteúdo específico da página
    fetch(pageName)
      .then(response => response.text())
      .then(pageContent => {
        // Insere o conteúdo na seção principal da página
        document.querySelector('main').innerHTML = pageContent;
      });
  }
  
  // Obtém o nome da página atual
  const currentPage = window.location.pathname.split('/').pop();
  
  // Carrega o conteúdo da página atual
  loadPageContent(currentPage);
  