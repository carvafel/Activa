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

// Minimizar/mostrar sidebar
const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.sidebar-toggle');
const fabBtn = document.querySelector('.sidebar-fab');
const mainHeader = document.querySelector('.main-header');
const mainContent = document.querySelector('.main-content');

function setSidebarCollapsed(collapsed) {
  if (collapsed) {
    sidebar.classList.add('sidebar-collapsed');
    if (fabBtn) fabBtn.style.display = 'flex';
  } else {
    sidebar.classList.remove('sidebar-collapsed');
    if (fabBtn) fabBtn.style.display = 'none';
  }
}

if (sidebar && toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    setSidebarCollapsed(true);
  });
}
if (fabBtn) {
  fabBtn.addEventListener('click', () => {
    setSidebarCollapsed(false);
  });
}
// Al cargar, asegúrate de que el botón flotante esté oculto si la sidebar está visible
setSidebarCollapsed(false);

// Dropdown de settings
const headerLeft = document.querySelector('.header-left');
const settingsBtn = document.querySelector('.settings-btn');
const settingsDropdown = document.querySelector('.settings-dropdown');

if (settingsBtn && headerLeft && settingsDropdown) {
  settingsBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    headerLeft.classList.toggle('show-dropdown');
  });
  document.addEventListener('click', (e) => {
    if (!headerLeft.contains(e.target)) {
      headerLeft.classList.remove('show-dropdown');
    }
  });
}

// Dropdown de perfil
const userAvatar = document.querySelector('.user-avatar');
const profileDropdown = document.querySelector('.profile-dropdown');

if (userAvatar && profileDropdown) {
  userAvatar.addEventListener('click', (e) => {
    e.stopPropagation();
    userAvatar.classList.toggle('show-dropdown');
  });
  document.addEventListener('click', (e) => {
    if (!userAvatar.contains(e.target)) {
      userAvatar.classList.remove('show-dropdown');
    }
  });
} 