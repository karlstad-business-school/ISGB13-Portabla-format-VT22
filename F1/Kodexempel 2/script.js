'use strict';

window.addEventListener('load', loadData);


function loadData() {
    window.fetch('https://restcountries.com/v3.1/name/nor').then(function(response){
        console.log(response);
        return response.json();
    }).then(function(data){
        console.log(data);
        document.querySelector('#preloader').classList.add('d-none');

        let main = document.querySelector('#content');

        let countryData = data[0];

        let card = document.createElement('div');
        card.className = 'card';
        card.style.maxWidth='20rem';

        main.appendChild(card);

        let cardImage = document.createElement('img');
        cardImage.className = 'card-img-top';
        cardImage.src = countryData.flags.png;
        card.appendChild(cardImage);

        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        card.appendChild(cardBody);

        let cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = countryData.name.official;
        cardBody.appendChild(cardTitle);

        let capital = document.createElement('p');
        capital.className = 'card-text';
        capital.textContent = countryData.capital;
        cardBody.appendChild(capital);

        let area = document.createElement('p');
        area.className = 'card-text';
        area.innerHTML = countryData.area + ' km<sup>2</sup>';
        cardBody.appendChild(area);

        let pop = document.createElement('p');
        pop.className = 'card-text';
        pop.textContent = countryData.population + ' st';
        cardBody.appendChild(pop);


    });
}