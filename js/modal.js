window.addEventListener('load', function () {
    var modalOpenButtons = document.querySelectorAll('[data-open-modal]');

    if (modalOpenButtons) {
        var popupOverlay = document.querySelector('.popup__overlay');
        var bodyOverflow = document.body.style.overflow;

        modalOpenButtons.forEach(function (modalOpenButton) {
            modalOpenButton.addEventListener('click', function (e) {
                popupOverlay.classList.add('popup--active');
                document.querySelector('[data-modal-id="' + this.dataset.openModal + '"]').classList.add('popup--active');

                bodyOverflow = 'hidden';

                e.preventDefault();
            })
        });

        function closePopup(e) {
            if (e.target === e.currentTarget) {
                popupOverlay.classList.add('popup__overlay--closing');

                setTimeout(function () {
                    popupOverlay.classList.remove('popup--active');
                    popupOverlay.classList.remove('popup--active');
                    popupOverlay.classList.remove('popup__overlay--closing');

                    bodyOverflow = 'auto';
                }, 600);

                e.preventDefault();
            }
        }

        popupOverlay.addEventListener('click', closePopup);

        document.querySelector('.popup__basked_title').addEventListener('click', closePopup);
    }
});