document.addEventListener('DOMContentLoaded', function() {
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
      newsletterForm.addEventListener('submit', function(e) {
          e.preventDefault();
          const email = this.querySelector('input[type="email"]').value;
          alert('Thank you for subscribing! ' + email);
          this.reset();
      });
  }

  const token = localStorage.getItem('token');
  if (token) {
      try {
          const payload = JSON.parse(atob(token.split('.')[1]));
          if (payload.role === 'admin') {
              console.log('Usuario administrador detectado');
          }
      } catch (e) {
          console.error('Error al decodificar el token');
      }
  }
});
