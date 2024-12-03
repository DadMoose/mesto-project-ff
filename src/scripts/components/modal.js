export function openModal(popup) {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', handleEscKeyUp);
}

export function closeModal(popup) {
  const form = popup.querySelector('.popup__form');

  popup.classList.remove('popup_is-opened')
  document.removeEventListener('keydown', handleEscKeyUp);

  if (form) {
    form.reset();
  }
}

export function initCloseClick(popups) {
  popups.forEach((popup) => {
    const cross = popup.querySelector('.popup__close');

    cross.addEventListener("click", () => closeModal(popup));
    popup.addEventListener("click", (event) => {
      if (event.target.classList.contains('popup_is-opened')) {
        closeModal(popup);
      }
    });
  });
}

export function handleEscKeyUp(evt) {
  if (evt.key === "Escape") {
    const popup = document.querySelector('.popup_is-opened');
    closeModal(popup);
  }
}