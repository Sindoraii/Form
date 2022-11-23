class NewView {
    constructor(sendRequest) {
        this.sendRequest = sendRequest;
        this.elem =  document.createElement('form');
        this.type = 'new';
        /* form */
        this.elem.classList.add('form__new-view','new-view');
        this.elem.noValidate = true;
        this.elem.setAttribute('action','#');
        /* form elements */
        this.mainTitle = document.createElement('h1');
        this.mainTitle.classList.add('new-view__title');
        this.mainTitle.innerHTML = 'Client form';
        this.info = document.createElement('section');
        this.info.classList.add('new-view__wrapper');

        /* FIELSETS */
        /* fieldset of contact information */
        this.fielsetInfo = document.createElement('fieldset');
        this.fielsetInfo.classList.add('new-view__userInfo','userInfo');
        this.titleInfo = document.createElement('h2');
        this.titleInfo.classList.add('userInfo__title');
        this.titleInfo.innerHTML = 'Contact information';

        /*fieldset of card info*/
        this.fielsetCardInfo = document.createElement('fieldset');
        this.fielsetCardInfo.classList.add('new-view__cardInfo','cardInfo');
        this.titleCardInfo = document.createElement('h2');
        this.titleCardInfo.classList.add('cardInfo__title');
        this.titleCardInfo.innerHTML = 'Payment information';

        /* INPUTS */
        /* contact info */
        /* wrapper for name info */
        this.nameInfoWrapper = document.createElement('article');
        this.nameInfoWrapper.classList.add('error-wrapper');
        /* name */
        this.nameInfoLabel = document.createElement('label');
        this.nameInfoLabel.setAttribute('for','name');
        this.nameInfoLabel.innerHTML = 'Name:'
        this.nameInfo = document.createElement('input');
        this.nameInfo.setAttribute('type','text');
        this.nameInfo.id ='name';

        /* wrapper for surname info */
        this.surnameInfoWrapper = document.createElement('article');
        this.surnameInfoWrapper.classList.add('error-wrapper');
        /* surname */
        this.surnameInfoLabel = document.createElement('label');
        this.surnameInfoLabel.setAttribute('for','surname');
        this.surnameInfoLabel.innerHTML = 'Surname:'
        this.surnameInfo = document.createElement('input');
        this.surnameInfo.setAttribute('type','text');
        this.surnameInfo.id ='surname';

        /* wrapper for email info */
        this.emailInfoWrapper = document.createElement('article');
        this.emailInfoWrapper.classList.add('error-wrapper');
        /* email */
        this.emailInfoLabel = document.createElement('label');
        this.emailInfoLabel.setAttribute('for','email');
        this.emailInfoLabel.innerHTML = 'Email:'
        this.emailInfo = document.createElement('input');
        this.emailInfo.setAttribute('type','email');
        this.emailInfo.id ='email';

        /* wrapper for date of birth info */
        this.dateOfBirthInfoWrapper = document.createElement('article');
        this.dateOfBirthInfoWrapper.classList.add('error-wrapper');
        /* date of birth */
        this.dateOfBirthInfoLabel = document.createElement('label');
        this.dateOfBirthInfoLabel.setAttribute('for','dateOfBirth');
        this.dateOfBirthInfoLabel.innerHTML = 'Date of birth:'
        this.dateOfBirthInfo = document.createElement('input');
        this.dateOfBirthInfo.setAttribute('type','date');
        this.dateOfBirthInfo.id ='dateOfBirth';

        /* card info*/
        /* wrapper for the card number info */
        this.cardNumberhInfoWrapper = document.createElement('article');
        this.cardNumberhInfoWrapper.classList.add('error-wrapper');
        /* card number */
        this.cardNumberInfoLabel = document.createElement('label');
        this.cardNumberInfoLabel.setAttribute('for','cardNumber');
        this.cardNumberInfoLabel.innerHTML = 'Card number:';
        this.cardNumberInfo = document.createElement('input');
        this.cardNumberInfo.setAttribute('type','text');
        this.cardNumberInfo.id ='cardNumber';

        /* wrapper for expiration card info */
        this.cardExpirationInfoWrapper = document.createElement('article');
        this.cardExpirationInfoWrapper.classList.add('error-wrapper');
        /* expiration card */
        this.cardExpirationInfoLabel = document.createElement('label');
        this.cardExpirationInfoLabel.setAttribute('for','cardNumber');
        this.cardExpirationInfoLabel.innerHTML = 'Expiration month and year:';
        this.cardExpirationInfo = document.createElement('input');
        this.cardExpirationInfo.setAttribute('type','month');
        this.cardExpirationInfo.min=`${new Date().getFullYear()}-${new Date().getMonth()}`;

        this.cardExpirationInfo.id ='cardExpiration';

        /* wrapper for cvc of card info */
        this.cardCvcInfoWrapper = document.createElement('article');
        this.cardCvcInfoWrapper.classList.add('error-wrapper');
        /* cvc of card */
        this.cardCvcInfoLabel = document.createElement('label');
        this.cardCvcInfoLabel.setAttribute('for','cardCvc');
        this.cardCvcInfoLabel.innerHTML = 'CVC:';
        this.cardCvcInfo = document.createElement('input');
        this.cardCvcInfo.setAttribute('type','text');
        this.cardCvcInfo.id ='cardCvc';


        /* BUTTONS */
        this.submitButton = document.createElement('button');
        this.submitButton.innerHTML = 'Submit';
        this.submitButton.setAttribute('type','submit');

        /* EVENTS */
        this.submitButton.addEventListener('click',()=> {
            const data = this.#getDataFromInputs();
            const errorsArr = this.sendRequest(data);
            if(errorsArr.length !== 0) {
                /* creating view of error */
                this.#showError(errorsArr);
            } else {
                this.#deleteErrors();
            }
        })


        /* append form title and contact info*/
        this.elem.append(this.mainTitle);
        this.elem.append(this.info);
        this.info.append(this.fielsetInfo);
        this.fielsetInfo.append(this.titleInfo);
        this.fielsetInfo.append(this.nameInfoWrapper);
        this.nameInfoWrapper.append(this.nameInfoLabel);
        this.nameInfoWrapper.append(this.nameInfo);
        this.fielsetInfo.append(this.surnameInfoWrapper);
        this.surnameInfoWrapper.append(this.surnameInfoLabel);
        this.surnameInfoWrapper.append(this.surnameInfo);
        this.fielsetInfo.append(this.emailInfoWrapper);
        this.emailInfoWrapper.append(this.emailInfoLabel);
        this.emailInfoWrapper.append(this.emailInfo);
        this.fielsetInfo.append(this.dateOfBirthInfoWrapper);
        this.dateOfBirthInfoWrapper.append(this.dateOfBirthInfoLabel);
        this.dateOfBirthInfoWrapper.append(this.dateOfBirthInfo);

        /* append card info */
        this.elem.append(this.fielsetCardInfo);
        this.fielsetCardInfo.append(this.titleCardInfo);
        this.fielsetCardInfo.append(this.cardNumberInfoLabel);
        this.fielsetCardInfo.append(this.cardNumberInfo);
        this.fielsetCardInfo.append(this.cardExpirationInfoLabel);
        this.fielsetCardInfo.append(this.cardExpirationInfo);
        this.fielsetCardInfo.append(this.cardCvcInfoLabel);
        this.fielsetCardInfo.append(this.cardCvcInfo);

        /* append common */
        this.elem.append(this.submitButton);
    }

    #getDataFromInputs() {
        return {
            name: this.nameInfo.value,
            surname: this.surnameInfo.value,
        }
    }

    #showError(errors) { // type: array
        errors.forEach((error)=> {
            const input = document.querySelector(`#${error.field}`);
            if(input === undefined) {
                throw new Error('Input is not founded');
            } else {
                input.parentNode.setAttribute('data-error',error.message);
                input.classList.add('invalid');
            }
        })
    }

    #deleteErrors() {
        const wrappersError = this.info.querySelectorAll('.error-wrapper');
        wrappersError.forEach((wrapper)=> {
            if(wrapper.getAttribute('data-error') !== null) {
                wrapper.setAttribute('data-error',' ');
                wrapper.children[1].classList.remove('invalid');
            }
        })
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
}
export default NewView;
