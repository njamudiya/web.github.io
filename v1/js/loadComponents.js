document.addEventListener("DOMContentLoaded", () => {
    loadComponent('footer', 'footer.html');
  });
  
  function loadComponent(elementId, url) {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        document.getElementById(elementId).innerHTML = data;
      })
      .catch(error => console.error('Error loading component:', error));
  }
  