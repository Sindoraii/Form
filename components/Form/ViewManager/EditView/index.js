class EditView {
    constructor(entity,sendRequest) {
        this.entity = entity;
        this.sendRequest = sendRequest;
        this.type = 'edit';
        this.elem = document.createElement('form');
        this.elem.classList.add('edit-view');

        /* form */
        this.elem.classList.add('form__edit-view', 'edit-view');
        this.elem.noValidate = true;
        this.elem.setAttribute('action', '#');
        /* form elements */
        this.mainTitle = document.createElement('h1');
        this.mainTitle.classList.add('edit-view__title');
        this.mainTitle.innerHTML = 'Client form';
        this.info = document.createElement('section');
        this.info.classList.add('edit-view__wrapper');

        /* fields of contact information */
        this.fielsetInfo = document.createElement('fieldset');
        this.fielsetInfo.classList.add('edit-view__userInfo', 'userInfo');
        this.titleInfo = document.createElement('h2');
        this.titleInfo.classList.add('userInfo__title');
        this.titleInfo.innerHTML = 'Contact information';

        /* INPUTS */
        /* wrapper for name info */
        this.nameInfoWrapper = document.createElement('article');
        this.nameInfoWrapper.classList.add('error-wrapper');
        /* name */
        this.nameInfoLabel = document.createElement('label');
        this.nameInfoLabel.setAttribute('for', 'name');
        this.nameInfoLabel.innerHTML = 'Name:'
        this.nameInfo = document.createElement('input');
        this.nameInfo.setAttribute('type', 'text');
        this.nameInfo.id = 'name';
        this.nameInfo.value = this.entity.name;
        /* wrapper for surname info */
        this.surnameInfoWrapper = document.createElement('article');
        this.surnameInfoWrapper.classList.add('error-wrapper');
        /* surname */
        this.surnameInfoLabel = document.createElement('label');
        this.surnameInfoLabel.setAttribute('for', 'surname');
        this.surnameInfoLabel.innerHTML = 'Surname:'
        this.surnameInfo = document.createElement('input');
        this.surnameInfo.setAttribute('type', 'text');
        this.surnameInfo.id = 'surname';
        this.surnameInfo.value = this.entity.surname;

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
export default EditView;
