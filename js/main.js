// ===== Menu hambúrguer (celular) =====
const menuBtn = document.querySelector('#menu-btn');
const nav = document.querySelector('.nav');

menuBtn.addEventListener('click', () => {
    const aberto = nav.classList.toggle('aberto');
    menuBtn.setAttribute('aria-expanded', aberto);
    menuBtn.querySelector('i').className = aberto ? 'bx bx-x' : 'bx bx-menu';
});

// Fecha o menu ao clicar em um link
nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('aberto');
        menuBtn.setAttribute('aria-expanded', false);
        menuBtn.querySelector('i').className = 'bx bx-menu';
    });
});

// ===== Destaca no menu a seção visível =====
const secoes = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('.nav a');

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            links.forEach(l => l.classList.toggle('ativo', l.getAttribute('href') === '#' + entrada.target.id));
        }
    });
}, { threshold: 0.5 });

secoes.forEach(secao => observador.observe(secao));

// ===== Formulário de contato =====
const form = document.querySelector('.contato form');
const aviso = document.createElement('p');
aviso.className = 'form-aviso';
form.appendChild(aviso);

form.addEventListener('submit', (e) => {
    e.preventDefault(); // ainda sem back-end: apenas simula o envio
    aviso.textContent = 'Thanks! Your message was received.';
    form.reset();
});
