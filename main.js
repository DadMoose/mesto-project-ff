(()=>{"use strict";var e={543:e=>{e.exports="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},240:e=>{e.exports="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"},567:e=>{e.exports="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},320:e=>{e.exports="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},355:e=>{e.exports="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},205:e=>{e.exports="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var p=t[r]={exports:{}};return e[r](p,p.exports,n),p.exports}function r(e){var t;e.classList.add("popup_is-opened"),(t=e).querySelector(".popup__close").addEventListener("click",(function(){return o(t)})),t.addEventListener("click",(function(e){e.target.classList.contains("popup_is-opened")&&o(t)})),window.addEventListener("keypress",p)}function o(e){e.classList.remove("popup_is-opened"),window.removeEventListener("keypress",p)}function p(e){"Escape"===e.key&&o(document.querySelector(".popup_is-opened"))}n.m=e,n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.b=document.baseURI||self.location.href;var c=[{name:"Архыз",link:new URL(n(543),n.b),alt:"Горные хребты Архыза"},{name:"Челябинская область",link:new URL(n(567),n.b),alt:"Ручей в зимнем лесу"},{name:"Иваново",link:new URL(n(320),n.b),alt:"Ряд панельных домов вечером, вид сверху"},{name:"Камчатка",link:new URL(n(355),n.b),alt:"Камчатский пейзаж, земля поросшая мхом простирается до заснеженного вулкана"},{name:"Холмогорский район",link:new URL(n(205),n.b),alt:"Одинокая железная дорога посреди леса вечером"},{name:"Байкал",link:new URL(n(240),n.b),alt:"Заснеженная скала острова Ольхон на Байкале"}];function a(e,t,n,r){var o=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),p=o.querySelector(".card__delete-button"),c=o.querySelector(".card__image"),a=o.querySelector(".card__like-button");return o.querySelector(".card__title").textContent=e.name,c.src=e.link,c.alt=e.alt,p.addEventListener("click",(function(){return t(o)})),a.addEventListener("click",(function(){return n(a)})),c.addEventListener("click",(function(){return r(e)})),o}function s(e){e.remove()}function i(e){e.classList.toggle("card__like-button_is-active")}var u=document.querySelector(".content"),l=u.querySelector(".places__list"),d=document.querySelector(".popup_type_edit"),_=document.querySelector(".popup_type_new-card"),y=document.querySelector(".popup_type_image"),v=d.querySelector(".popup__input_type_name"),m=d.querySelector(".popup__input_type_description"),f=u.querySelector(".profile__title"),k=u.querySelector(".profile__description"),q=_.querySelector(".popup__form"),S=_.querySelector(".popup__input_type_card-name"),L=_.querySelector(".popup__input_type_url"),x=u.querySelector(".profile__edit-button"),b=u.querySelector(".profile__add-button");function g(e){var t=y.querySelector(".popup__image"),n=y.querySelector(".popup__caption");t.src=e.link,t.alt=e.alt,n.textContent=e.name}c.forEach((function(e){var t=a(e,s,i,g);l.append(t)})),x.addEventListener("click",(function(){r(d),v.value=f.textContent,m.value=k.textContent})),b.addEventListener("click",(function(){return r(_)})),l.addEventListener("click",(function(e){e.target.classList.contains("card__image")&&r(y)})),d.addEventListener("submit",(function(e){e.preventDefault(),f.textContent=v.value,k.textContent=m.value,o(d)})),_.addEventListener("submit",(function(e){e.preventDefault(),c.unshift({name:S.value,link:L.value,alt:""});var t=a(c[0]);l.prepend(t),q.reset(),o(_)}))})();