/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});



    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();  // Impede o envio padrão do formulário
      
        // Captura os valores dos inputs
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const tel = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        
      
        // Cria o objeto com os dados do usuário
        const userData = {
          name: name,
          email: email,
          tel: tel,
          message: message
        };
      
        console.log(userData);
        // Faz a requisição para a API
        fetch('https://backend-hjp7.onrender.com/customer', {
          method: 'POST', // Método HTTP para envio de dados
          headers: {
            'Content-Type': 'application/json' // Informa que os dados estão no formato JSON
          },
          body: JSON.stringify(userData) // Converte o objeto JavaScript em JSON
        })
        .then(response => response.json())
        .then(data => {
          console.log('Sucesso:', data); // Mostra o resultado no console
          alert('Usuário cadastrado com sucesso!');
        })
        .catch((error) => {
          console.error('Erro:', error); // Mostra erros no console
          alert('Erro ao cadastrar o usuário.');
        });
      });

