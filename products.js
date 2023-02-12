/*
Дан макет сайта https://www.figma.com/file/mnLY69cYE5cqWM5w6n5hXx/Seo-%26-Digital-Marketing-Landing-Page?node-id=190%3A1194&t=q4NMnXTnwyyTSGA6-0

В блоке Featured Items небходимо реализовать шаблон товаров.

Для этого необходимо создать json формат данных по всем товарам.

Из этого файла сформировать блок Featured Items.

Всю вёрстку остальных частей реализовывать не нужно, если у вас она была сделана на html/css можно использовать, заново создавать не требуется.
*/


const dataProducts = `[
   {
   "title": "ELLERY X M'O CAPSULE",
   "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
   "price": "$52.00",
   "img": "img/Rectangle15.jpg",
   "img2": "img/Hover.png"
   },
   {
   "title": "ELLERY X M'O CAPSULE",
   "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
   "price": "$52.00",
   "img": "img/15.1.jpg",
   "img2": "img/Hover.png"
   },
   {
   "title": "ELLERY X M'O CAPSULE",
   "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
   "price": "$52.00",
   "img": "img/Rectangle15(2).jpg",
   "img2": "img/Hover.png"
   },
   {
   "title": "ELLERY X M'O CAPSULE",
   "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
   "price": "$52.00",
   "img": "img/Rectangle15(3).jpg",
   "img2": "img/Hover.png"
   },
   {
   "title": "ELLERY X M'O CAPSULE",
   "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
   "price": "$52.00",
   "img": "img/Rectangle15(4).jpg",
   "img2": "img/Hover.png"
   },
   {
   "title": "ELLERY X M'O CAPSULE",
   "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
   "price": "$52.00",
   "img": "img/Rectangle15(5).jpg",
   "img2": "img/Hover.png"
   }
]`;

const itemsFistBlock = document.querySelector('.items__first');

const data = JSON.parse(dataProducts);

data.forEach(element => {
// a - items__link
const itemsLinkEl =  document.createElement('a');
itemsLinkEl.href = '#';
itemsLinkEl.classList.add('items__link');
itemsFistBlock.append(itemsLinkEl);
//div - items__figure
const itemsFigureBlock = document.createElement('div');
itemsFigureBlock.classList.add('items__figure');
itemsLinkEl.append(itemsFigureBlock);
// div - items__pic
const itemsPicBlock = document.createElement('div');
itemsPicBlock.classList.add('items__pic');
itemsFigureBlock.append(itemsPicBlock);
//img - items__img
const itemsImgEl = document.createElement('img');
itemsImgEl.classList.add('items__img');
itemsImgEl.src = element.img;
itemsImgEl.alt = 'Photo1';
itemsPicBlock.append(itemsImgEl);
//img - items__img_hover
const itemsImgHoverEl = document.createElement('img');
itemsImgHoverEl.classList.add('items__img_hover');
itemsImgHoverEl.src = element.img2;
itemsImgHoverEl.alt = 'Photo2';
itemsPicBlock.append(itemsImgHoverEl);
//div - items__dsc
const itemsDscBlock = document.createElement('div');
itemsDscBlock.classList.add('items__dsc');
itemsFigureBlock.append(itemsDscBlock);
//  div - items__figcaption
const itemsFigcaptionBlock = document.createElement('div');
itemsFigcaptionBlock.classList.add('items__figcaption');
itemsDscBlock.append(itemsFigcaptionBlock);
//h6 - items-link__header
const h6El = document.createElement('h6');
h6El.classList.add('items-link__header');
h6El.textContent = element.title;
itemsFigcaptionBlock.append(h6El);
//p - items-link__text
const pEl = document.createElement('p');
pEl.classList.add('items-link__text');
pEl.textContent = element.description;
itemsFigcaptionBlock.append(pEl);
//p - items-link__cost
const pElem = document.createElement('p');
pElem.classList.add('items-link__cost');
pElem.textContent = element.price;
itemsFigcaptionBlock.append(pElem);
});

