class ViewComponent {
    constructor(sender) {
        this.sender = sender;
        /* form */
        this.elem =  document.createElement('form');
        this.elem.classList.add('form');
        this.elem.noValidate = true;

        /* form elements */
        const mainTitle = document.createElement('h1');
        mainTitle.classList.add('form__title');
        mainTitle.innerHTML = 'Client form';


        /* FIELSETS */
        /* fieldset of contact information */
        const fielsetInfo = document.createElement('fieldset');
        fielsetInfo.classList.add('userInfo');
        const titleInfo = document.createElement('h2');
        titleInfo.classList.add('userInfo__title');
        titleInfo.innerHTML = 'Contact information';

        /*fieldset of card info*/
        const fielsetCardInfo = document.createElement('fieldset');
        fielsetCardInfo.classList.add('cardInfo');
        const titleCardInfo = document.createElement('h2');
        titleCardInfo.classList.add('cardInfo__title');
        titleCardInfo.innerHTML = 'Payment information';

        /* INPUTS */
        /* contact info */
        /* wrapper for name info */
        const nameInfoWrapper = document.createElement('article');
        nameInfoWrapper.classList.add('error-wrapper');
        /* name */
        const nameInfoLabel = document.createElement('label');
        nameInfoLabel.setAttribute('for', 'name');
        nameInfoLabel.innerHTML = 'Name:'
        const nameInfo = document.createElement('input');
        nameInfo.setAttribute('type', 'text');
        nameInfo.id = 'name';

        /* wrapper for surname info */
        const surnameInfoWrapper = document.createElement('article');
        surnameInfoWrapper.classList.add('error-wrapper');
        /* surname */
        const surnameInfoLabel = document.createElement('label');
        surnameInfoLabel.setAttribute('for', 'surname');
        surnameInfoLabel.innerHTML = 'Surname:'
        const surnameInfo = document.createElement('input');
        surnameInfo.setAttribute('type', 'text');
        surnameInfo.id = 'surname';

        /* wrapper for email info */
        const emailInfoWrapper = document.createElement('article');
        emailInfoWrapper.classList.add('error-wrapper');
        /* email */
        const emailInfoLabel = document.createElement('label');
        emailInfoLabel.setAttribute('for', 'email');
        emailInfoLabel.innerHTML = 'Email:'
        const emailInfo = document.createElement('input');
        emailInfo.setAttribute('type', 'email');
        emailInfo.id = 'email';

        /* wrapper for date of birth info */
        const dateOfBirthInfoWrapper = document.createElement('article');
        dateOfBirthInfoWrapper.classList.add('error-wrapper');
        /* date of birth */
        const dateOfBirthInfoLabel = document.createElement('label');
        dateOfBirthInfoLabel.setAttribute('for', 'dateOfBirth');
        dateOfBirthInfoLabel.innerHTML = 'Birthday:'
        const dateOfBirthInfo = document.createElement('input');
        dateOfBirthInfo.setAttribute('type', 'date');
        dateOfBirthInfo.id = 'dateOfBirth';

        /* card info*/
        /* wrapper for the card number info */
        const cardNumberInfoWrapper = document.createElement('article');
        cardNumberInfoWrapper.classList.add('error-wrapper');
        /* card number */
        const cardNumberInfoLabel = document.createElement('label');
        cardNumberInfoLabel.setAttribute('for', 'cardNumber');
        cardNumberInfoLabel.innerHTML = 'Card:';
        const cardNumberInfo = document.createElement('input');
        cardNumberInfo.setAttribute('type', 'text');
        cardNumberInfo.id = 'cardNumber';

        /* wrapper for expiration card info */
        const cardExpirationInfoWrapper = document.createElement('article');
        cardExpirationInfoWrapper.classList.add('error-wrapper');
        /* expiration card */
        const cardExpirationInfoLabel = document.createElement('label');
        cardExpirationInfoLabel.setAttribute('for', 'cardExpiration');
        cardExpirationInfoLabel.innerHTML = 'Expiration:';
        const cardExpirationInfo = document.createElement('input');
        cardExpirationInfo.setAttribute('type', 'month');
        cardExpirationInfo.min = `${new Date().getFullYear()}-${new Date().getMonth()}`;
        cardExpirationInfo.id = 'cardExpiration';

        /* wrapper for cvc of card info */
        const cardCvcInfoWrapper = document.createElement('article');
        cardCvcInfoWrapper.classList.add('error-wrapper');
        /* cvc of card */
        const cardCvcInfoLabel = document.createElement('label');
        cardCvcInfoLabel.setAttribute('for', 'cardCvc');
        cardCvcInfoLabel.innerHTML = 'CVC:';
        const cardCvcInfo = document.createElement('input');
        cardCvcInfo.setAttribute('type', 'password');
        cardCvcInfo.id = 'cardCvc';

        /* BUTTON */
        const submitButton = document.createElement('button');
        submitButton.innerHTML = 'Submit';
        submitButton.classList.add('button-submit');
        submitButton.setAttribute('type','submit');

        /* EVENTS */
        submitButton.addEventListener('click',()=> {
            const data = this.#getDataFromInputs();
            const errorsArr = this.sender.sendRequest(data);

            if(errorsArr.length !== 0) {
                /* creating view of error */
                this.#showError(errorsArr);
            } else {
                this.#deleteErrors();
            }
        })

        /* append form title and contact info*/
        this.elem.append(mainTitle);
        this.elem.append(fielsetInfo);
        fielsetInfo.append(titleInfo);
        fielsetInfo.append(nameInfoWrapper);
        nameInfoWrapper.append(nameInfoLabel);
        nameInfoWrapper.append(nameInfo);
        fielsetInfo.append(surnameInfoWrapper);
        surnameInfoWrapper.append(surnameInfoLabel);
        surnameInfoWrapper.append(surnameInfo);
        fielsetInfo.append(emailInfoWrapper);
        emailInfoWrapper.append(emailInfoLabel);
        emailInfoWrapper.append(emailInfo);
        fielsetInfo.append(dateOfBirthInfoWrapper);
        dateOfBirthInfoWrapper.append(dateOfBirthInfoLabel);
        dateOfBirthInfoWrapper.append(dateOfBirthInfo);
        /* append card info */
        this.elem.append(fielsetCardInfo);
        fielsetCardInfo.append(titleCardInfo);
        fielsetCardInfo.append(cardNumberInfoWrapper);
        cardNumberInfoWrapper.append(cardNumberInfoLabel);
        cardNumberInfoWrapper.append(cardNumberInfo);

        fielsetCardInfo.append(cardExpirationInfoWrapper);
        cardExpirationInfoWrapper.append(cardExpirationInfoLabel);
        cardExpirationInfoWrapper.append(cardExpirationInfo);

        fielsetCardInfo.append(cardCvcInfoWrapper);
        cardCvcInfoWrapper.append(cardCvcInfoLabel);
        cardCvcInfoWrapper.append(cardCvcInfo);
        /* append common */
        this.elem.append(submitButton);
    }
    mount(parent) {
        if(parent instanceof HTMLElement) {
            parent.append(this.elem);
        } else {
            throw new Error("The type of parent is`t correct");
        }
    }

    unmount() {
        this.elem.remove();
    }

     #getDataFromInputs() {
        return {
            name: this.elem.querySelector('#name').value,
            surname: this.elem.querySelector('#surname').value,
            /* fields for the next validation step*/
            // email: this.elem.querySelector("#email").value,
            // date: this.elem.querySelector("#dateOfBirth").value,
            // card: this.elem.querySelector('#cardNumber').value,
            // cardExpiration: this.elem.querySelector('#cardExpiration').value,
            // cvc: this.elem.querySelector('#cardCvc').value,
        }
    }

     #showError(errors) { // type: array
        errors.forEach((error)=> {
            const input = this.elem.querySelector(`#${error.field}`);
            if(input === undefined) {
                throw new Error('Input is not founded');
            } else {
                input.parentNode.setAttribute('data-error',error.message);
                input.classList.add('invalid');
            }
        })
    }

      #deleteErrors() {
        const wrappersError = this.elem.querySelectorAll('.error-wrapper');
        wrappersError.forEach((wrapper)=> {
            if(wrapper.getAttribute('data-error') !== null) {
                wrapper.setAttribute('data-error',' ');
                wrapper.children[1].classList.remove('invalid');
            }
        })
    }
}
export default ViewComponent;
