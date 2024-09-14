const paintings = [
    {
        "id": "1",
        "name": "Starry Night",
        "author": "Vincent van Gogh",
        "about": "",
        "picture": ".././images/starrynight.jpg"
    },
    {
        "id": "2",
        "name": "Mona Lisa",
        "author": "Leonardo da Vinci",
        "about": "",
        "picture": ".././images/monalisa.jpg"
    },
    {
        "id": "3",
        "name": "The Persistence of Memory",
        "author": "Salvador Dalí",
        "about": "",
        "picture": ".././images/meltingclocks.jpg"
    },
    {
        "id": "4",
        "name": "The Scream",
        "author": "Edvard Munch",
        "about": "",
        "picture": ".././images/thescream.png"
    },
    {
        "id": "5",
        "name": "The Girl With a Pearl Earring",
        "author": "Johannes Vermeer",
        "about": "",
        "picture": ".././images/GirlwithaPearlEarring.jpg"
    },
    {
        "id": "6",
        "name": "La Nascita di Venere",
        "author": "Sandro Botticelli",
        "about": "",
        "picture": ".././images/LanascitadiVenere.jpg"
    }
]

const gridContainer = document.getElementById('grid-container-gallery');

function createGallery() {
    for(painting of paintings) {
        let gridItem = document.createElement('div');
        gridItem.className += " grid-item";
        let flipCard = document.createElement('div');
        flipCard.className += " flip-card";
        let flipCardInner = document.createElement('div');
        flipCardInner.className += " flip-card-inner";
        let flipCardFront = document.createElement('div');
        flipCardFront.className += " flip-card-front";
        let flipCardBack = document.createElement('div');
        flipCardBack.className += " flip-card-back";
        let imageCard = document.createElement('img');
        imageCard.src = painting.picture;
        imageCard.alt = painting.name;
        let nameCard = document.createElement('h3');
        nameCard.innerHTML = painting.name;
        let authorCard = document.createElement('p');
        authorCard.innerHTML = `By ${painting.author}`;
    
        flipCardFront.appendChild(imageCard);
        flipCardBack.appendChild(nameCard);
        flipCardBack.appendChild(authorCard);
        flipCardInner.appendChild(flipCardFront);
        flipCardInner.appendChild(flipCardBack);
        flipCard.appendChild(flipCardInner);
        gridItem.appendChild(flipCard);
        gridContainer.appendChild(gridItem);
    }
}

createGallery();