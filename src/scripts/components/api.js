// import {apiToken} from '../../../env'

const config = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/wff-cohort-27',
  headers: {
    authorization: '2069e1e7-1fc1-4853-b683-9a0d07c1d4f9',
    'Content-Type': 'application/json'
  }
}

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
  .then(checkResponse);
}

const getProfileInfo = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
  .then(checkResponse);
}

export const getProfileAndCards = () => {
  return Promise.all([getProfileInfo(), getInitialCards()])
  .then(([profileData, cards]) => {
    return {profileData, cards};
  })
}

export const updateProfile = (name, description) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: `${name}`,
      about: `${description}`,
    })
  })
  .then(checkResponse);
}

export const addNewCard = (name, link) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: `${name}`,
      link: `${link}`,
    })
  })
  .then(checkResponse);
}

export const deleteCardAPI = (cardID) => {
  return fetch(`${config.baseUrl}/cards/${cardID}`, {
    method: 'DELETE',
    headers: config.headers
  })
}

export const toggleLike = (cardID, isLiked) => {
  const method = isLiked ? 'DELETE' : 'PUT';

  return fetch(`${config.baseUrl}/cards/likes/${cardID}`, {
    method: `${method}`,
    headers: config.headers
  })
  .then(checkResponse);
}

export const updateAvatar = (link) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: `${link}`,
    })
  })
  .then(checkResponse);
}
