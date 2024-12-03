(()=>{"use strict";function e(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",n)}function t(e){var t=e.querySelector(".popup__form");e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",n),t&&t.reset()}function n(e){"Escape"===e.key&&t(document.querySelector(".popup_is-opened"))}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var o={baseUrl:"https://mesto.nomoreparties.co/v1/wff-cohort-27",headers:{authorization:"2069e1e7-1fc1-4853-b683-9a0d07c1d4f9","Content-Type":"application/json"}},c=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))};function a(e,t,n,r,o){var c=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),a=c.querySelector(".card__delete-button"),u=c.querySelector(".card__image"),i=c.querySelector(".card__title"),s=c.querySelector(".card__like-button"),d=c.querySelector(".card__like-count"),p=e._id;return i.textContent=e.name,u.src=e.link,u.alt=e.name,d.textContent=e.likes.length,s.addEventListener("click",(function(){return r(s,e,t,d)})),u.addEventListener("click",(function(){return o(u,i)})),e.owner._id===t?a.addEventListener("click",(function(){return n(c,p)})):a.remove(),l(e,t)?s.classList.add("card__like-button_is-active"):s.classList.remove("card__like-button_is-active"),c}function u(e,t){(function(e){return fetch("".concat(o.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:o.headers}).then(c)})(t).then((function(){e.remove()})).catch((function(e){return console.error("Ошибка при выполнении операции: ".concat(e))}))}function i(e,t,n,r){var a=l(t,n);(function(e,t){var n=t?"DELETE":"PUT";return fetch("".concat(o.baseUrl,"/cards/likes/").concat(e),{method:"".concat(n),headers:o.headers}).then(c)})(t._id,a).then((function(n){t.likes=n.likes,r.textContent=t.likes.length,a?e.classList.remove("card__like-button_is-active"):e.classList.add("card__like-button_is-active")})).catch((function(e){"Не удалось поставить лайк: ".concat(e)}))}function l(e,t){return e.likes.some((function(e){return e._id===t}))}function s(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""}function d(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n.inactiveButtonClass),t.disabled=!1):(t.classList.add(n.inactiveButtonClass),t.disabled=!0)}function p(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector));d(n,e.querySelector(t.submitButtonSelector),t),n.forEach((function(n){s(e,n,t)}))}var f=document.querySelector(".content"),_=f.querySelector(".profile__image"),y=f.querySelector(".profile__title"),v=f.querySelector(".profile__description"),m=f.querySelector(".places__list"),h=document.querySelector(".popup_type_edit"),S=document.querySelector(".popup_type_new-card"),b=document.querySelector(".popup_type_image"),q=document.querySelector(".popup_type_edit-avatar"),C=q.querySelector(".popup__input_type_url"),E=f.querySelector(".profile__avatar-edit-button"),L=h.querySelector(".popup__input_type_name"),k=h.querySelector(".popup__input_type_description"),g=S.querySelector(".popup__input_type_card-name"),x=S.querySelector(".popup__input_type_url"),A=f.querySelector(".profile__edit-button"),U=f.querySelector(".profile__add-button"),w=document.querySelectorAll(".popup"),T=b.querySelector(".popup__image"),j=b.querySelector(".popup__caption");function D(t,n){T.src=t.src,T.alt=n.textContent,j.textContent=n.textContent,e(b)}A.addEventListener("click",(function(){L.value=y.textContent,k.value=v.textContent,p(h,O),e(h)})),U.addEventListener("click",(function(){p(S,O),e(S)})),E.addEventListener("click",(function(){p(q,O),e(q)})),w.forEach((function(e){e.querySelector(".popup__close").addEventListener("click",(function(){return t(e)})),e.addEventListener("click",(function(n){n.target.classList.contains("popup_is-opened")&&t(e)}))})),h.addEventListener("submit",(function(e){e.preventDefault();var n,r,a=e.submitter;a.textContent="Сохранение...",(n=L.value,r=k.value,fetch("".concat(o.baseUrl,"/users/me"),{method:"PATCH",headers:o.headers,body:JSON.stringify({name:"".concat(n),about:"".concat(r)})}).then(c)).then((function(e){e&&(y.textContent=e.name,v.textContent=e.about),t(h)})).catch((function(e){return console.log("Ошибка при обновлении профиля: ".concat(e))})).finally((function(){a.textContent="Сохранить"}))})),S.addEventListener("submit",(function(e){e.preventDefault();var n,r,l=S.querySelector(".popup__button");l.textContent="Сохранение...",(n=g.value,r=x.value,fetch("".concat(o.baseUrl,"/cards"),{method:"POST",headers:o.headers,body:JSON.stringify({name:"".concat(n),link:"".concat(r)})}).then(c)).then((function(e){if(e){var n=a(e,e.owner._id,u,i,D);m.prepend(n),t(S)}})).catch((function(e){return console.log("Ошибка при добавлении карточки: ".concat(e))})).finally((function(){l.textContent="Сохранить"}))})),q.addEventListener("submit",(function(e){e.preventDefault();var n,r=q.querySelector(".popup__button");r.textContent="Cохранение...",(n=C.value,fetch("".concat(o.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:o.headers,body:JSON.stringify({avatar:"".concat(n)})}).then(c)).then((function(e){e&&(_.style.backgroundImage="url('".concat(e.avatar,"')"),t(q))})).catch((function(e){return console.log("Ошибка при обновлении аватара: ".concat(e))})).finally((function(){r.textContent="Сохранить"}))}));var O={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"};!function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);d(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){var r=t.getAttribute("data-error-message");t.validity.patternMismatch?t.setCustomValidity(r):t.setCustomValidity(""),t.validity.valid?s(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),d(n,r,t)}))}))}(t,e)}))}(O),Promise.all([fetch("".concat(o.baseUrl,"/users/me"),{headers:o.headers}).then(c),fetch("".concat(o.baseUrl,"/cards"),{headers:o.headers}).then(c)]).then((function(e){var t,n,o=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());return{profileData:o[0],cards:o[1]}})).then((function(e){var t=e.profileData,n=e.cards;t&&(y.textContent=t.name,v.textContent=t.about,_.style.backgroundImage="url('".concat(t.avatar,"')")),n&&n.forEach((function(e){!function(e,t){var n=a(e,t,u,i,D);m.append(n)}(e,t._id)}))})).catch((function(e){console.log("Произошла ошибка при загрузке данных: ".concat(e))}))})();