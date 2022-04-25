'use strict';

window.addEventListener('load', ()=> {
    window.fetch('http://cors-anywhere.herokuapp.com/https://www3.kau.se/tentamenslista/rss.xml').then(response=>response.text()).then((handlerData))
});

function handlerData(xmlString) {
    //console.log(xmlString);
    let parser = new window.DOMParser();
    let xmlDom = parser.parseFromString(xmlString,'application/xml');

    let ul = document.createElement('ul');
    ul.className = 'list-group';
    document.querySelector('main').appendChild(ul);


    let items = xmlDom.querySelectorAll('item');

    items.forEach(item=> {
        let title = item.querySelector('title').textContent;
        let desc = item.querySelector('description').textContent;

        let li = document.createElement('li');
        li.className = 'list-group-item';

        let titleNode = document.createElement('h5');
        titleNode.textContent = title;

        li.appendChild(titleNode);

        let p = document.createElement('p');
        p.innerHTML = desc;
        li.appendChild(p);

        ul.appendChild(li);

    });


}