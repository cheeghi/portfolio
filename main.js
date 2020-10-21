const cards = document.querySelectorAll('.card');
// const navElements = document.querySelector('.nav-sections').childNodes;

cards.forEach((card) => {
    card.addEventListener('click', function (e) {
        const cardDescription = card.querySelector('.card-description');
        if (e.target === cardDescription || e.target.parentElement === cardDescription) {
            return;
        }

        cards.forEach((otherCard) => {
            if (otherCard !== card) {
                const otherCardDescription = otherCard.querySelector('.card-description');
                if (!otherCardDescription.classList.contains('hidden')) {
                    otherCardDescription.classList.toggle('hidden');
                    otherCardDescription.style.minHeight = '0';
                }
            }
        });

        const hidden = cardDescription.classList.contains('hidden');
        cardDescription.classList.toggle('hidden');
        if (hidden) {
            cardDescription.style.minHeight = '120px';
        } else {
            cardDescription.style.minHeight = '0';
        }
    })
});

// navElements.forEach((e) => {
//     e.addEventListener('click')
// });

// function isElementInViewport(el) {
//     const rect = el.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
//     );
// }