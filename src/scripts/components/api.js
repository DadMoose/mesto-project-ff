import {apiToken} from '../../../env'

const config = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/wff-cohort-27',
  headers: {
    authorization: apiToken,
    'Content-Type': 'application/json'
  }
}

export const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch(err => console.log(err));
}

const getProfileInfo = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch(err => console.log(err));
}

export function loadProfile(title, description, image) {
  getProfileInfo()
    .then(data => {
      if(data) {
        title.textContent = data.name;
        description.textContent = data.about;
        image.style.backgroundImage = `url('${data.avatar}')`;
        console.log('Профиль успешно загружен');
      }
    })
    .catch(err => {
      console.log(`Не удалось загрузить профиль: ${err}`);
      description.textContent = `Не удалось загрузить профиль: ${err}`;
    });
}

export function loadCard(add) {
  getInitialCards()
    .then(cards => {
      if(cards) {
        cards.forEach(add);
        console.log('Карточки успешно загружены');
      }
    })
    .catch(err => {
      console.log(`Не удалось загрузить карточки: ${err}`);
    });
}

export function updateProfile(name, description) {
  return fetch(`${config.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: config.headers,
      body: JSON.stringify({
        name: `${name}`,
        about: `${description}`,
      })
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch(err => console.log(err));
}

export function addNewCard(name, link) {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: `${name}`,
      link: `${link}`,
      alt: `${name}`,
    })
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch(err => console.log(err));
}






