const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start' 
        });
    });
});