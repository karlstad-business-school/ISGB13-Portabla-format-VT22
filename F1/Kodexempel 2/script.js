'use strict';

window.addEventListener('load', loadData);


function loadData() {
    window.fetch('https://restcountries.com/v3.1/name/sweden').then(function(response){
        console.log(response);
        return response.json();
    }).then(function(data){
        console.log(data);
        document.querySelector('#preloader').classList.add('d-none');

        let countryName=data[0].name.official;
        console.log(countryName);





    });
}