(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(i){if(i.ep)return;i.ep=!0;const r=o(i);fetch(i.href,r)}})();const d=[{path:"https://pro-dachnikov.com/uploads/posts/2021-10/1634075867_13-p-planirovka-otkritogo-ofisa-dizain-foto-13.jpg",id:"0"},{path:"https://static.tildacdn.com/tild3130-3130-4666-b230-363665613336/chto-takoe-kouching-.jpg",id:"1"},{path:"https://darfix.ru/wp-content/uploads/c/f/b/cfb44c8b0b3cd4b22ec66092e3e3084d.jpeg",id:"2"},{path:"https://static.tildacdn.com/tild6665-6538-4865-a334-616462343735/invest_in_your_busin.jpg",id:"3"},{path:"https://hr-portal.ru/files/mini/oprosnik_po_opredeleniyu_sostoyaniya_korporativnoy_kultury.jpg",id:"4"}];console.clear();const s={mapNav:document.querySelector(".header_navigate-JS"),cities:document.querySelector(".cities-JS"),softlineOffice:document.querySelector(".office-softline-JS"),softlineOfficeInner:document.querySelector(".office__inner")},n={img:document.querySelector(".section-gallery__center"),buttons:document.querySelector(".section-gallery__buttons"),navigation:document.querySelector(".section-gallery__bottom")};s.mapNav.addEventListener("click",p);s.softlineOffice.addEventListener("click",g);n.navigation.addEventListener("click",u);n.buttons.addEventListener("click",f);n.img.style.backgroundImage="url(https://pro-dachnikov.com/uploads/posts/2021-10/1634075867_13-p-planirovka-otkritogo-ofisa-dizain-foto-13.jpg)";d.forEach(t=>{n.navigation.insertAdjacentHTML("beforeend",`<div class="pagination-item ${t.id=="0"?"active-pagination":""}" data-id="${t.id}"></div>`)});function f(t){t.preventDefault();const e=Array.from(n.navigation.children);for(let o=0;o<e.length;o+=1){let a=t.target.dataset.btn==="right"?o+1:o-1;if(a=a===-1&&t.target.dataset.btn==="left"?e.length-1:a,a=a===e.length&&t.target.dataset.btn==="right"?0:a,e[o].classList.contains("active-pagination")){e[o].classList.remove("active-pagination"),e[a].classList.add("active-pagination"),l(`${a}`);break}}}function u(t){if(typeof t=="string"){Array.from(n.navigation.children).forEach(e=>{e.classList.remove("active-pagination"),t===e.dataset.id&&(e.classList.add("active-pagination"),l(t))});return}else if(t.target.dataset.id!==void 0){Array.from(n.navigation.children).forEach(e=>{if(e.classList.remove("active-pagination"),t.target.dataset.id===e.dataset.id){e.classList.add("active-pagination"),l(t.target.dataset.id);return}});return}}function l(t){d.forEach(e=>{e.id===t&&(n.img.style.backgroundImage=`url(${e.path})`)})}function p(t){t.preventDefault(),t.target.tagName==="A"&&(Array.from(t.currentTarget.children).forEach(e=>e.firstElementChild.classList.remove("navigate__link--active")),t.target.classList.add("navigate__link--active"),Array.from(s.cities.children).forEach(e=>{e.dataset.location.includes(t.target.text)?e.classList.add("map__city-active"):e.classList.remove("map__city-active")}))}function g(t){return t.preventDefault(),t.currentTarget.children[1].classList.toggle("office-softline__icon--active"),Array.from(t.currentTarget.children[1].classList).includes("office-softline__icon--active")?s.softlineOfficeInner.classList.remove("hide"):s.softlineOfficeInner.classList.add("hide")}
