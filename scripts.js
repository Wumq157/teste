// Função para carregar o conteúdo do index.html e adicionar à tag <main>
function loadContent() {
    fetch('index.html')
      .then(response => response.text())
      .then(indexContent => {
        const mainElement = document.querySelector('main');
        mainElement.innerHTML = indexContent;
      });
  }
  
  // Chamar a função para carregar o conteúdo do index.html
  loadContent();
  