!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var i=function(){let e=document.getElementById("content");e.innerHTML="";let t=document.createElement("div");t.id="home-page";let n=document.createElement("div");n.id="upper-content";let i=document.createElement("h1");i.innerText="Nice Breakfast Place",n.appendChild(i);let o=document.createElement("div");o.id="lower-content";let a=document.createElement("span");a.innerText="Expand your culinary horizons in a welcoming and relaxing environment. Our Michelin-starred chef Dante Jacuzzi will serve you some of the most innovative dishes your eyes have ever gazed upon and will ensure to leave them as satisfied as your appetite. Feast on a conglomerate of carefully selected meals from around the world.",o.appendChild(a),t.appendChild(n),t.appendChild(o),e.appendChild(t)};var o=function(){const e=document.getElementById("content");e.innerHTML="";const t=document.createElement("ul");t.id="menu-page",[{image:"./assets/food/eggs.jpg",name:"Eggs",description:"some delicious eggs",price:12},{image:"./assets/food/eggs.jpg",name:"Eggs2",description:"some delicious eggs",price:12},{image:"./assets/food/eggs.jpg",name:"Eggs3",description:"some delicious eggs",price:12},{image:"./assets/food/eggs.jpg",name:"Eggs4",description:"some delicious eggs",price:12},{image:"./assets/food/eggs.jpg",name:"Eggs5",description:"some delicious eggs",price:12},{image:"./assets/food/eggs.jpg",name:"Eggs6",description:"some delicious eggs",price:12},{image:"./assets/food/eggs.jpg",name:"Eggs123",description:"some very delicious eggs",price:123}].forEach(e=>{const n=document.createElement("li");n.className="menu-entry";const i=document.createElement("div");i.className="menu-item";const o=document.createElement("div");o.className="menu-item-image",o.style.backgroundImage=`url(${e.image})`;const a=document.createElement("div");a.className="menu-item-name",a.innerText=e.name;const c=document.createElement("div");c.className="menu-item-description",c.innerText=e.description;const d=document.createElement("div");d.className="menu-item-price",d.innerText=e.price+"€",i.appendChild(o),i.appendChild(a),i.appendChild(c),i.appendChild(d),n.appendChild(i),t.appendChild(n)}),e.appendChild(t)};function a(e){return e.slice(0,1).toUpperCase()+e.slice(1)}var c=function(){let e={phone:"234 356 2362",email:"contact@nicerestaurant.com",address:"123 Nice Street, Nice, France"};const t=document.getElementById("content");t.innerHTML="";const n=document.createElement("div");n.id="contact-page";const i=document.createElement("div");i.id="contact-window";const o=document.createElement("div");o.id="contact-heading",o.textContent="Contact Us",i.appendChild(o);for(let t in e){const n=document.createElement("span"),o=document.createElement("span");o.className="contact-entry-heading",o.textContent=a(t)+": ";const c=document.createElement("span");c.className="contact-entry-text",c.textContent=e[t],n.appendChild(o),n.appendChild(c),i.appendChild(n)}n.appendChild(i),t.appendChild(n)};const d=document.getElementById("navbar"),s=document.createElement("div");s.className="nav-btn",s.textContent="Home";const r=document.createElement("div");r.className="nav-btn",r.textContent="Menu";const l=document.createElement("div");l.className="nav-btn",l.textContent="Contact",d.appendChild(s),d.appendChild(r),d.appendChild(l),s.addEventListener("click",i),r.addEventListener("click",o),l.addEventListener("click",c),i()}]);