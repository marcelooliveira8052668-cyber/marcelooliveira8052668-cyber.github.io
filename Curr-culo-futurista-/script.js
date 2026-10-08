// Desenvolvido por Prof. Marcelo Oliveira
const cards = document.querySelectorAll('.timeline-card');

cards.forEach(card => {

    const btn = card.querySelector('.timeline-btn');

    btn.addEventListener('click', () => {

        cards.forEach(item => {
            if(item !== card){
                item.classList.remove('active');
            }
        });

        card.classList.toggle('active');

    });

});
