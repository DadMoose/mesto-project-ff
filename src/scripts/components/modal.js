export function openModal(evt) {
    evt.classList.add('popup_is-opened');
    initCloseClick(evt);
    window.addEventListener('keypress', handleEscKeyUp);
}

export function closeModal(modal) {
    modal.classList.remove('popup_is-opened')
    window.removeEventListener('keypress', handleEscKeyUp);
}

export function initCloseClick (popup) {
    const cross = popup.querySelector('.popup__close');
    cross.addEventListener("click", () => closeModal(popup));

    popup.addEventListener("click", (event) => {
        if (event.target.classList.contains('popup_is-opened')) {
            closeModal(popup);
        }
    });
}

export function handleEscKeyUp(evt) {
    if (evt.key === "Escape") {
        const popup = document.querySelector(".popup_is-opened");
        closeModal(popup);
    }
}