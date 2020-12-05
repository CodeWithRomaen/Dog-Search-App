let searchBtn = document.querySelector('.search-btn');
let inputField = document.querySelector('.search-input')
let resultConrtainer = document.querySelector('.results')


searchBtn.addEventListener('click', function(e) {
    e.preventDefault();
    resultConrtainer.innerHTML = ''
    let searchInput = inputField.value;
    inputField.value = '';

    let url = `https://dog.ceo/api/breed/${searchInput}/images/random/5`;
    getDogs(url);
});

async function getDogs(link) {
    let data = await fetch(link);
    let results = await data.json();

    if(results.status == 'success') {
        processDogs(results.message);
    }
    else {
        resultConrtainer.innerHTML = '<h2>Breed not found</h2>'
    }
    
}

function processDogs(data) {
    data.forEach(i => {
        displayDog(i);
    });
}

function displayDog(image) {
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <div class="image">
            <img src="${image}" alt="">
        </div>
    `
    resultConrtainer.append(card);
}