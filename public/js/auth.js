function checkAuth() {
  const token = localStorage.getItem('token');
  const authLinks = document.querySelector('.auth-links');
  
  if (token) {
      authLinks.innerHTML = `
          <a href="#" onclick="logout()">Logout</a>
      `;
  } else {
      authLinks.innerHTML = `
          <a href="/login">Login</a>
      `;
  }
}

function logout() {
  localStorage.removeItem('token');
  window.location.href = '/login';
}

document.addEventListener('DOMContentLoaded', checkAuth);
