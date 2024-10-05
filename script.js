// Dodaj event listener do formularza
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Wyslij dane do serwera
    fetch('/contakt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        message
      })
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
  });
  
  // Add event listener to scroll-to buttons
  document.querySelectorAll('.scroll-to').forEach(button => {
    button.addEventListener('click', () => {
      const target = button.getAttribute('data-target');
      const section = document.querySelector(target);
      section.scrollIntoView({ behavior: 'smooth' });
    });
  });