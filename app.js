let searchBtn = document.querySelector('.search-btn');
let inputField = document.querySelector('.search-input')
let resultConrtainer = document.querySelector('.results')


searchBtn.addEventListener('click', function(e) {
    e.preventDefault();
    resultConrtainer.innerHTML = ''
    let searchInput = inputField.value;
    inputField.value = '';
    
    getDogs(searchInput);
});

async function getDogs(input) {
    let url = `https://dog.ceo/api/breed/${input}/images/random/5`;
    alert(url);
    let data = await fetch(url);
    let results = await data.json();

    if(results.status == 'success') {
        processDogs(results.message);
    }
    else {
        resultConrtainer.innerHTML = '<h2>Breed not found</h2>'
    }

    // fetch(link)
    // .then(response => response.json())
    // .then(responseData => {
    //     if(responseData.status == 'success') {
    //         processDogs(responseData.message);
    //     }
    //     else {
    //         resultConrtainer.innerHTML = '<h2>Breed not found</h2>'
    //     }
    // })
    
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