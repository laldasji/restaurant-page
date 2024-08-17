(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(601),a=t.n(r),o=t(314),i=t.n(o),d=t(417),s=t.n(d),c=new URL(t(260),t.b),l=new URL(t(201),t.b),p=new URL(t(561),t.b),m=new URL(t(658),t.b),u=new URL(t(86),t.b),f=i()(a()),h=s()(c),g=s()(l),b=s()(p),v=s()(m),y=s()(u);f.push([e.id,`* {\n    margin: 0;\n    padding: 0;\n}\n\n:root {\n    --muddy: #e9e09f;\n    --olive-brown: #a7a058;\n    --brown: #8e7444;\n    --gray: #999886;\n    --peat-brown: #a66e53;\n    font-size: calc(20px + 1vw);\n}\n\n@font-face {\n    font-family: Balgruf;\n    src: url(${h});\n}\n\n@font-face {\n    font-family: Balgruf-italic;\n    src: url(${g});\n}\n\nbody {\n    z-index: 99;\n    background-color: var(--muddy);\n    font-family: Balgruf;\n    display: grid;\n    grid-template-rows: auto 1fr;\n    height: calc(100svh);\n    place-items: center;\n}\n\nbody::before\n{\n    z-index: -1;\n    content: ' ';\n    display: block;\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 0.25;\n    background-image: url(${b});\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\nheader {\n    width: min(1280px, 100%);\n    text-align: center;\n    display: grid;\n    grid-template-rows: 2fr 1fr;\n    -webkit-text-stroke: 0.033rem var(--muddy);\n    font-weight: bold;\n    place-items: center;\n    font-size: 2rem;\n    background: url(${v}) no-repeat center;\n}\n\nnav {\n    z-index: inherit;\n    width: 100%;\n    font-size: 1.25rem;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    & > div {\n        background: rgba(0, 0, 0, 0.5);\n        text-align: center;\n        transition-duration: 0.5s;\n        display: grid;\n        justify-items: center;\n        align-items: center;\n        grid-template-columns: 1fr 1fr 1fr;\n        gap: 1px;\n        cursor: pointer;\n        & .frame {\n            transition-duration: inherit;\n            width: 80%;\n            min-width: none;\n            height: 0.1em;\n            border-radius: 1em;\n            border: 1px solid black;\n            background: var(--peat-brown);\n        }\n    }\n    & > div:hover {\n        text-shadow: 0.1em 0.1em 0.2em black;\n        background: rgba(0, 0, 0, 0.8);\n        & .frame {\n            box-shadow: 0.1em 0.1em 0.2em black;\n        }\n    }\n}\n\n#content\n{\n    width: min(1280px, 95%);\n    padding-left: 2.5%;\n    padding-right: 2.5%;\n    height: 100%;\n    overflow-y: scroll;\n    scrollbar-width: none;\n    h1 {\n        text-align: center;\n    }\n}\n\n.forContacts\n{\n    display: grid;\n    place-items: center;\n}\n\n.emphasize {\n    height: 0.1rem;\n    border: 1px solid black;\n    border-radius: 1em;\n    margin-bottom: 0.5rem;\n    background-color: var(--peat-brown);\n}\n\n.underline {\n    height: 0.05rem;\n    border: 1px solid var(--peat-brown);\n    border-radius: 1em;\n    background-color: var(--peat-brown);\n}\n\n#menu {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n    justify-items: center;\n    gap: 0.75rem;\n    padding-bottom: 0.75rem;\n    & > .item\n    {\n        border: 5px double black;\n        padding: 0.5em;\n        display: grid;\n        font-size:xx-large;\n        h3 {\n            justify-self: center;\n        }\n        img {\n            width: 50%;\n            justify-self: center;\n        }\n        price {\n            color: var(--brown);\n            font-weight: bold;\n        }\n    }\n}\n\n#parchment {\n    z-index: -1;\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n    position: relative;\n    width: 70%;\n    height: 70%;\n    display: block;\n    position: relative;\n    opacity: 0.5;\n    background-image: url(${y});\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n#visitingCard {\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n    width: 65%;\n    padding: 2.5%;\n    height: 65%;\n    display: grid;\n    gap: 1rem;\n    grid-template-columns: 4fr 3fr;\n    overflow: hidden;\n    & img {\n        width: 100%;\n        height: 100%;\n        object-fit: contain;\n    }\n}\n\n@media (max-aspect-ratio: 3 / 4) {\n    #visitingCard {\n        grid-template-columns: 1fr;\n        grid-template-rows: 50% 50%;\n    }\n}\n\n@keyframes fadeOut {\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n\n@keyframes fadeIn {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n.fadeOut {\n    animation-name: fadeOut;\n    animation-duration: 0.5s;\n    animation-timing-function: ease-out;\n}\n\n.fadeIn {\n    animation-name: fadeIn;\n    animation-duration: 0.5s;\n    animation-timing-function: ease-in;\n}`,""]);const w=f},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(i[s]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},417:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],d=0;d<e.length;d++){var s=e[d],c=r.base?s[0]+r.base:s[0],l=o[c]||0,p="".concat(c," ").concat(l);o[c]=l+1;var m=t(p),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)n[m].references++,n[m].updater(u);else{var f=a(u,r);r.byIndex=d,n.splice(d,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var d=t(o[i]);n[d].references--}for(var s=r(e,a),c=0;c<o.length;c++){var l=t(o[c]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=s}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},201:(e,n,t)=>{e.exports=t.p+"341634fe0b9879e3a993.ttf"},260:(e,n,t)=>{e.exports=t.p+"0ff87c78d07afa799501.ttf"},658:(e,n,t)=>{e.exports=t.p+"images/bannered-mare-background.c93936fd.jpg"},86:(e,n,t)=>{e.exports=t.p+"images/contact-page.21abcd8d.jpg"},561:(e,n,t)=>{e.exports=t.p+"images/parchment texture.1f7c290d.jpg"}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var r=t(72),a=t.n(r),o=t(825),i=t.n(o),d=t(659),s=t.n(d),c=t(56),l=t.n(c),p=t(540),m=t.n(p),u=t(113),f=t.n(u),h=t(208),g={};g.styleTagTransform=f(),g.setAttributes=l(),g.insert=s().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=m(),a()(h.A,g),h.A&&h.A.locals&&h.A.locals;const b=[t.p+"images/1.0cfc1b55.jpg",t.p+"images/2.362c7bb8.jpg",t.p+"images/3.126bd6c4.jpg",t.p+"images/4.af039435.jpg",t.p+"images/5.760a54ef.jpg",t.p+"images/6.3d5d3fe4.jpg",t.p+"images/7.d4fb8b96.jpg",t.p+"images/8.a085a53e.jpg",t.p+"images/9.b2c6306a.jpg",t.p+"images/10.66489c52.jpg",t.p+"images/map.3bcbb2b8.png"],v=t.p+"d635cede4fe76179110f.mp3",y=new Audio(v);y.loop=!0,console.log("Javascript Working!");const w=document.querySelector("#content");function k(){w.className="";const e=document.createElement("h1");e.textContent="Welcome to The Bannered Mare";const n=document.createElement("hr");n.classList.add("emphasize");const t=[document.createElement("br"),document.createElement("br"),document.createElement("br")],r=[document.createElement("h3"),document.createElement("h3"),document.createElement("h3")];r[0].textContent="Your hearth away from home in the Heart of Whiterun",r[1].textContent="Location",r[2].textContent="Our Offerings";const a=[document.createElement("hr"),document.createElement("hr"),document.createElement("hr")];a.forEach((e=>{e.classList.add("underline")}));const o=[document.createElement("p"),document.createElement("p"),document.createElement("p")];o[0].textContent="Welcome to The Bannered Mare, Whiterun’s most beloved inn and tavern, where travelers and locals alike gather to share stories, enjoy hearty meals, and savor the finest mead in all of Skyrim. Whether you’re a weary adventurer seeking rest after a long journey or a local looking for good company, you’ll find a warm fire, comfortable beds, and a friendly atmosphere waiting for you here.",o[1].textContent="Nestled in the bustling city of Whiterun, The Bannered Mare is conveniently located just inside the city’s gates, across from the marketplace. Our central location makes us the perfect stop for adventurers heading to and from Dragonsreach, as well as traders and townsfolk going about their daily business.",o[2].textContent="At The Bannered Mare, we take pride in offering a wide selection of traditional Nord cuisine. Our menu features everything from hearty stews and freshly baked bread to grilled meats and, of course, the finest selection of mead, wine, and ale. After a day of exploring the wilds of Skyrim, there’s no better place to unwind.",w.replaceChildren(),w.appendChild(e),w.appendChild(n);for(let e=0;e<3;e++)w.appendChild(r[e]),w.appendChild(a[e]),w.appendChild(o[e]),w.appendChild(t[e])}let x=1;const C=document.querySelector("#homeButton"),E=document.querySelector("#menuButton"),L=document.querySelector("#contactButton");C.addEventListener("click",(()=>{1!=x&&(x=1,w.classList.add("fadeOut"),setTimeout((()=>{k(),w.classList.remove("fadeOut"),w.classList.add("fadeIn"),setTimeout((()=>{w.classList.remove("fadeIn")}),500)}),500))})),E.addEventListener("click",(()=>{2!=x&&(x=2,w.classList.add("fadeOut"),setTimeout((()=>{!function(){w.className="",w.replaceChildren();const e=document.createElement("h1");e.textContent="Our Menu";const n=document.createElement("hr");n.classList.add("emphasize");const t=document.createElement("div");t.id="menu";const r=["Horker Stew","Venison Chop","Nord Mead","Apple Cabbage Stew","Mammoth Steak","Honey Nut Treat","Grilled Leeks","Elsweyr Fondue","Back-Briar Reserve","Sweetroll"],a=["A rich and savory stew made from tender horker meat, slow-cooked with potatoes, leeks, and a blend of hearty spices.","Grilled venison served with a side of roasted root vegetables, seasoned to perfection.","A classic beverage brewed from the finest honey in Skyrim, served cold or warm.","A sweet and tangy stew made with fresh apples, cabbage, and a dash of juniper berries.","A large, juicy steak from the great mammoths of Skyrim, cooked to your liking and served with a side of mashed potatoes.","A delightful sweet treat made from honey and a mix of crunchy nuts, perfect for dessert.","Fresh leeks grilled to bring out their natural sweetness, a simple yet delicious side dish.","A rich and creamy cheese fondue spiced with moon sugar, served with bread for dipping. A favorite among Khajiit visitors.","A premium ale from the famous Black-Briar Meadery, known for its smooth taste and potent kick.","A Skyrim favorite! Soft, sweet, and topped with a generous layer of icing, perfect for ending your meal on a high note."],o=[8,5,5,8,8,2,2,5,100,2];w.appendChild(e),w.appendChild(n);for(let e=0;e<r.length;e++){const n=document.createElement("div");n.classList.add("item");const i=document.createElement("h3");i.textContent=r[e];const d=document.createElement("img");d.src=b[e],d.alt=r[e];const s=document.createElement("p");s.textContent=a[e];const c=document.createElement("price");c.textContent=`Price: ${o[e]} Septim`,n.appendChild(i),n.appendChild(d),n.appendChild(s),n.appendChild(c),t.appendChild(n)}w.appendChild(t)}(),w.classList.remove("fadeOut"),w.classList.add("fadeIn"),setTimeout((()=>{w.classList.remove("fadeIn")}),500)}),500))})),L.addEventListener("click",(()=>{3!=x&&(x=3,w.classList.add("fadeOut"),setTimeout((()=>{!function(){w.replaceChildren(),w.classList.add("forContacts");const e=document.createElement("div");e.id="parchment";const n=document.createElement("div");n.id="visitingCard";const t=document.createElement("div"),r=document.createElement("h3");r.textContent="Address: ";const a=document.createElement("p");a.innerHTML="The Bannered Mare<br>Market District,<br> Whiterun Hold,<br>Skyrim";const o=document.createElement("br"),i=document.createElement("p");i.innerHTML="Once inside, please speak to Hulda <s>or Saadia</s>",t.appendChild(r),t.appendChild(a),t.appendChild(o),t.append(i);const d=document.createElement("div"),s=document.createElement("img");s.src=b[10],s.alt="Whiterun Map",d.appendChild(s),w.appendChild(e),n.appendChild(t),n.appendChild(d),w.appendChild(n)}(),w.classList.remove("fadeOut"),w.classList.add("fadeIn"),setTimeout((()=>{w.classList.remove("fadeIn")}),500)}),500))})),w.classList.add("fadeOut"),setTimeout((()=>{k(),w.classList.remove("fadeOut"),w.classList.add("fadeIn"),setTimeout((()=>{w.classList.remove("fadeIn")}),500)}),500),window.addEventListener("click",(()=>{y.play()}))})();