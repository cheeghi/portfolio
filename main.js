const cards = document.querySelectorAll('.card');
const nav = document.querySelector('.nav-ul');
const navAnchors = nav.querySelectorAll('a');
const sections = document.querySelectorAll('section');
highlightNavAnchor();

cards.forEach((card) => {
    const arrow = card.querySelector('.arrow');
    const cardDescription = card.querySelector('.card-description');

    card.addEventListener('click', function (e) {
        if (e.target === cardDescription || e.target.parentElement === cardDescription) {
            return;
        }

        cards.forEach((otherCard) => {
            if (otherCard !== card) {
                const otherCardDescription = otherCard.querySelector('.card-description');
                if (!otherCardDescription.classList.contains('hidden')) {
                    otherCardDescription.classList.toggle('hidden');
                    otherCardDescription.style.minHeight = '0';
                    const otherCardArrow = otherCard.querySelector('.arrow');
                    otherCardArrow.style.transform = 'rotate(0deg)';
                }
            }
        });

        const hidden = cardDescription.classList.contains('hidden');
        cardDescription.classList.toggle('hidden');
        if (hidden) {
            arrow.style.transform = 'rotate(90deg)';
            cardDescription.style.minHeight = '120px';
        } else {
            arrow.style.transform = 'rotate(0deg)';
            cardDescription.style.minHeight = '0';
        }
    })
});

document.addEventListener('scroll', (e) => {
    highlightNavAnchor();
});

function highlightNavAnchor() {
    sections.forEach((section) => {
        let y = Math.abs(section.getBoundingClientRect().y);

        if (y < (section.offsetHeight / 2)) {
            const id = section.id;
            const anchor = nav.querySelector('a[href="#' + id + '"]');
            if (!anchor.classList.contains('text-grey-300')) {
                anchor.classList.add('text-grey-300');
                anchor.classList.remove('text-white');
                navAnchors.forEach((otherAnchor) => {
                    if (otherAnchor !== anchor) {
                        if (otherAnchor.classList.contains('text-grey-300')) {
                            otherAnchor.classList.remove('text-grey-300');
                        }
                        if (!otherAnchor.classList.contains('text-white')) {
                            otherAnchor.classList.add('text-white');
                        }
                    }
                })
            }
        }
    });
}
