// Função para carregar o conteúdo das páginas
function loadPageContent(pageName) {
    // Cria uma requisição para o cabeçalho
    var headRequest = new XMLHttpRequest();
    headRequest.open('GET', 'head.html', true);
    headRequest.onreadystatechange = function () {
      if (headRequest.readyState === 4 && headRequest.status === 200) {
        // Insere o cabeçalho na página atual
        document.querySelector('head').innerHTML = headRequest.responseText;
      }
    };
    headRequest.send(null);
  
    // Cria uma requisição para o rodapé
    var footerRequest = new XMLHttpRequest();
    footerRequest.open('GET', 'footer.html', true);
    footerRequest.onreadystatechange = function () {
      if (footerRequest.readyState === 4 && footerRequest.status === 200) {
        // Insere o rodapé na página atual
        document.querySelector('footer').innerHTML = footerRequest.responseText;
      }
    };
    footerRequest.send(null);
  
    // Cria uma requisição para o conteúdo da página
    var pageRequest = new XMLHttpRequest();
    pageRequest.open('GET', pageName, true);
    pageRequest.onreadystatechange = function () {
      if (pageRequest.readyState === 4 && pageRequest.status === 200) {
        // Insere o conteúdo na seção principal da página
        document.querySelector('main').innerHTML = pageRequest.responseText;
      }
    };
    pageRequest.send(null);
  }
  
  // Obtém o nome da página atual
  const currentPage = window.location.pathname.split('/').pop();
  
  // Carrega o conteúdo da página atual
  loadPageContent(currentPage);
  