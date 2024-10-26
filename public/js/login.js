document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  try {
      const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
      });
      
      const data = await response.json();
      
      if (data.token) {
          localStorage.setItem('token', data.token);
          const message = document.getElementById('message');
          message.textContent = '¡Login exitoso! Redirigiendo...';
          message.style.color = 'green';
          message.style.fontSize = '16px';
          message.style.padding = '10px';
          message.style.backgroundColor = '#e8f5e9';
          message.style.borderRadius = '4px';
          message.style.marginTop = '10px';
          
          const tokenData = JSON.parse(atob(data.token.split('.')[1]));
          
          setTimeout(() => {
              if (tokenData.role === 'admin') {
                  window.location.href = '/vendors.html';
              } else if (tokenData.role === 'vendor') {
                  window.location.href = '/locations.html';
              } else {
                  window.location.href = '/';
              }
          }, 1500);
      } else {
          const message = document.getElementById('message');
          message.textContent = data.message;
          message.style.color = 'red';
          message.style.backgroundColor = '#ffebee';
          message.style.padding = '10px';
          message.style.borderRadius = '4px';
          message.style.marginTop = '10px';
      }
  } catch (error) {
      const message = document.getElementById('message');
      message.textContent = 'Ocurrió un error durante el login';
      message.style.color = 'red';
      message.style.backgroundColor = '#ffebee';
      message.style.padding = '10px';
      message.style.borderRadius = '4px';
      message.style.marginTop = '10px';
  }
});
