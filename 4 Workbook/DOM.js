'use strcit';

function showStars() {
    const nodes = document.querySelectorAll('.rating');

    for (const node of nodes) {
        const { stars } = node.dataset;

        if (stars === '4') {
            node.innerHTML += ' <b>****</b>';
        }

    }

    const bests = document.querySelectorAll('.best');

    for (const bs of bests) {
        bs.classList.add('is-best');
    }



}

showStars();