// Lógica JS para la UI irá aquí 

// Mostrar/ocultar submenú en dispositivos táctiles o click
const submenuParent = document.querySelector('.has-submenu > a');
if (submenuParent) {
  submenuParent.addEventListener('click', function(e) {
    e.preventDefault();
    const submenu = this.parentElement.querySelector('.submenu');
    if (submenu) {
      submenu.style.display = submenu.style.display === 'flex' ? 'none' : 'flex';
    }
  });
} 