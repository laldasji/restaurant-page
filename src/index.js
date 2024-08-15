import "./style.css"
import images from "./images.js"

import audioFile from './loop.mp3';

const audio = new Audio(audioFile);
audio.loop = true;

console.log('Javascript Working!');

const mainContent = document.querySelector('#content');

function showHome() {
    mainContent.className = '';
    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to The Bannered Mare';

    const emphasize = document.createElement('hr');
    emphasize.classList.add('emphasize');

    const br = [
        document.createElement('br'),
        document.createElement('br'),
        document.createElement('br')
    ];

    const heads = [
        document.createElement('h3'),
        document.createElement('h3'),
        document.createElement('h3')
    ];

    heads[0].textContent = 'Your hearth away from home in the Heart of Whiterun';
    heads[1].textContent = 'Location';
    heads[2].textContent = 'Our Offerings';

    const underlines = [
        document.createElement('hr'),
        document.createElement('hr'),
        document.createElement('hr')
    ];
    underlines.forEach((element) => {
        element.classList.add('underline');
    })

    const paragraphs = [
        document.createElement('p'),
        document.createElement('p'),
        document.createElement('p')
    ];
    paragraphs[0].textContent = 'Welcome to The Bannered Mare, Whiterun’s most beloved inn and tavern, where travelers and locals alike gather to share stories, enjoy hearty meals, and savor the finest mead in all of Skyrim. Whether you’re a weary adventurer seeking rest after a long journey or a local looking for good company, you’ll find a warm fire, comfortable beds, and a friendly atmosphere waiting for you here.';
    paragraphs[1].textContent = 'Nestled in the bustling city of Whiterun, The Bannered Mare is conveniently located just inside the city’s gates, across from the marketplace. Our central location makes us the perfect stop for adventurers heading to and from Dragonsreach, as well as traders and townsfolk going about their daily business.';
    paragraphs[2].textContent = 'At The Bannered Mare, we take pride in offering a wide selection of traditional Nord cuisine. Our menu features everything from hearty stews and freshly baked bread to grilled meats and, of course, the finest selection of mead, wine, and ale. After a day of exploring the wilds of Skyrim, there’s no better place to unwind.';
    mainContent.replaceChildren();
    mainContent.appendChild(heading);
    mainContent.appendChild(emphasize);
    for (let i = 0; i < 3; i++)
    {
        mainContent.appendChild(heads[i]);
        mainContent.appendChild(underlines[i]);
        mainContent.appendChild(paragraphs[i]);
        mainContent.appendChild(br[i]);
    }
}

function showMenu() {
    mainContent.className = '';
    mainContent.replaceChildren();
    const heading = document.createElement('h1');
    heading.textContent = 'Our Menu';

    const emphasize = document.createElement('hr');
    emphasize.classList.add('emphasize');

    const menu = document.createElement('div');
    menu.id = 'menu';
    const menuItems = [
        'Horker Stew',
        'Venison Chop',
        'Nord Mead',
        'Apple Cabbage Stew',
        'Mammoth Steak',
        'Honey Nut Treat',
        'Grilled Leeks',
        'Elsweyr Fondue',
        'Back-Briar Reserve',
        'Sweetroll'
    ];

    const itemDescription = [
        'A rich and savory stew made from tender horker meat, slow-cooked with potatoes, leeks, and a blend of hearty spices.',
        'Grilled venison served with a side of roasted root vegetables, seasoned to perfection.',
        'A classic beverage brewed from the finest honey in Skyrim, served cold or warm.',
        'A sweet and tangy stew made with fresh apples, cabbage, and a dash of juniper berries.',
        'A large, juicy steak from the great mammoths of Skyrim, cooked to your liking and served with a side of mashed potatoes.',
        'A delightful sweet treat made from honey and a mix of crunchy nuts, perfect for dessert.',
        'Fresh leeks grilled to bring out their natural sweetness, a simple yet delicious side dish.',
        'A rich and creamy cheese fondue spiced with moon sugar, served with bread for dipping. A favorite among Khajiit visitors.',
        'A premium ale from the famous Black-Briar Meadery, known for its smooth taste and potent kick.',
        'A Skyrim favorite! Soft, sweet, and topped with a generous layer of icing, perfect for ending your meal on a high note.'
    ];

    const prices = [
        8, 5, 5, 8, 8, 2, 2, 5, 100, 2
    ];

    mainContent.appendChild(heading);
    mainContent.appendChild(emphasize);

    for (let i = 0; i < menuItems.length; i++)
    {
        const item = document.createElement('div');
        item.classList.add('item');

        // name
        const name = document.createElement('h3');
        name.textContent = menuItems[i];

        // image
        const image = document.createElement('img');
        image.src = images[i];
        image.alt = menuItems[i];

        // description
        const description = document.createElement('p');
        description.textContent = itemDescription[i];

        // price
        const price = document.createElement('price');
        price.textContent = `Price: ${prices[i]} Septim`;

        item.appendChild(name);
        item.appendChild(image);
        item.appendChild(description);
        item.appendChild(price);
        menu.appendChild(item);
    }
    mainContent.appendChild(menu);
}

function showContacts() {
    mainContent.replaceChildren();
    mainContent.classList.add('forContacts');

    const parchment = document.createElement('div');
    parchment.id = 'parchment';

    const visitingCard = document.createElement('div');
    visitingCard.id = 'visitingCard';

    const contactInfo = document.createElement('div');
    const address = document.createElement('h3');
    address.textContent = 'Address: ';
    const realAddress = document.createElement('p');
    realAddress.innerHTML = 'The Bannered Mare<br>Market District,<br> Whiterun Hold,<br>Skyrim';
    const lineBreak = document.createElement('br');
    const talkTo = document.createElement('p');
    talkTo.innerHTML = 'Once inside, please speak to Hulda <s>or Saadia</s>';

    contactInfo.appendChild(address);
    contactInfo.appendChild(realAddress);
    contactInfo.appendChild(lineBreak);
    contactInfo.append(talkTo);

    const map = document.createElement('div');
    const image = document.createElement('img');
    image.src = images[10];
    image.alt = 'Whiterun Map';
    map.appendChild(image);

    mainContent.appendChild(parchment);

    visitingCard.appendChild(contactInfo);
    visitingCard.appendChild(map);

    mainContent.appendChild(visitingCard);
}

let TabNumber = 1;

const homeButton = document.querySelector('#homeButton');
const menuButton = document.querySelector('#menuButton');
const contactButton = document.querySelector('#contactButton');

homeButton.addEventListener('click', () => {
    if (TabNumber != 1) {
        TabNumber = 1;
        mainContent.classList.add('fadeOut');
        setTimeout(() => {
            showHome();
            mainContent.classList.remove('fadeOut');
            mainContent.classList.add('fadeIn');
            setTimeout(() => {
                mainContent.classList.remove('fadeIn');
            }, 500);
        }, 500);
    }
});
menuButton.addEventListener('click', () => {
    if (TabNumber != 2) {
        TabNumber = 2;
        mainContent.classList.add('fadeOut');
        setTimeout(() => {
            showMenu();
            mainContent.classList.remove('fadeOut');
            mainContent.classList.add('fadeIn');
            setTimeout(() => {
                mainContent.classList.remove('fadeIn');
            }, 500);
        }, 500);
    }
});
contactButton.addEventListener('click', () => {
    if (TabNumber != 3) {
        TabNumber = 3;
        mainContent.classList.add('fadeOut');
        setTimeout(() => {
            showContacts();
            mainContent.classList.remove('fadeOut');
            mainContent.classList.add('fadeIn');
            setTimeout(() => {
                mainContent.classList.remove('fadeIn');
            }, 500);
        }, 500);
    }
});

mainContent.classList.add('fadeOut');
setTimeout(() => {
    showHome();
    mainContent.classList.remove('fadeOut');
    mainContent.classList.add('fadeIn');
    setTimeout(() => {
        mainContent.classList.remove('fadeIn');
    }, 500);
}, 500);

window.addEventListener('click', () => {
    audio.play();
})