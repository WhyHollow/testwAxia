window.addEventListener('load', function () {
    var modalOpenButtons = document.querySelectorAll('[data-open-modal]');

    if (modalOpenButtons) {
        modalOpenButtons.forEach(function (modalOpenButton) {
            modalOpenButton.addEventListener('click', function (e) {
                document.querySelector('.popup__overlay').classList.add('popup--active');
                document.querySelector('[data-modal-id="' + this.dataset.openModal + '"]').classList.add('popup--active');

                document.body.style.overflow = 'hidden';

                e.preventDefault();
            })
        });

        function closePopup(e) {
            if (e.target === e.currentTarget) {
                document.querySelector('.popup__overlay').classList.add('popup__overlay--closing');

                setTimeout(function () {
                    document.querySelector('.popup__overlay').classList.remove('popup--active');
                    document.querySelector('.popup--active').classList.remove('popup--active');
                    document.querySelector('.popup__overlay').classList.remove('popup__overlay--closing');

                    document.body.style.overflow = 'auto';
                }, 2000);

                e.preventDefault();
            }
        }

        document.querySelector('.popup__overlay').addEventListener('click', closePopup);

        document.querySelector('.popup__basked_title').addEventListener('click', closePopup);
    }
});