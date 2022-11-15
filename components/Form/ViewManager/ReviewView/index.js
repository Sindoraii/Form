class ReviewView {
    constructor(entity) {
        this.entity = entity;

        this.type = 'review';

        this.elem = document.createElement('form');
        this.elem.classList.add('review-view');

        /* form */
        this.elem.classList.add('form__review-view','review-view');
        this.elem.noValidate = true;
        this.elem.setAttribute('action','#');
        /* form elements */
        this.mainTitle = document.createElement('h1');
        this.mainTitle.classList.add('review-view__title');
        this.mainTitle.innerHTML = 'Client form';
        this.info = document.createElement('section');
        this.info.classList.add('review-view__wrapper');

        /* fields of contact information */
        this.fielsetInfo = document.createElement('fieldset');
        this.fielsetInfo.classList.add('review-view__userInfo','userInfo');
        this.fielsetInfo.disabled = true;
        this.titleInfo = document.createElement('h2');
        this.titleInfo.classList.add('userInfo__title');
        this.titleInfo.innerHTML = 'Contact information';

        /* INPUTS */
        /* wrapper for name info */
        this.nameInfoWrapper = document.createElement('article');
        this.nameInfoWrapper.classList.add('error-wrapper');
        /* name */
        this.nameInfoLabel = document.createElement('label');
        this.nameInfoLabel.setAttribute('for','userName');
        this.nameInfoLabel.innerHTML = 'Name:'
        this.nameInfo = document.createElement('input');
        this.nameInfo.setAttribute('type','text');
        this.nameInfo.id ='userName';
        this.nameInfo.value = this.entity.name;

        /* wrapper for surname info */
        this.surnameInfoWrapper = document.createElement('article');
        this.surnameInfoWrapper.classList.add('error-wrapper');
        /* surname */
        this.surnameInfoLabel = document.createElement('label');
        this.surnameInfoLabel.setAttribute('for','userSurname');
        this.surnameInfoLabel.innerHTML = 'Surname:'
        this.surnameInfo = document.createElement('input');
        this.surnameInfo.setAttribute('type','text');
        this.surnameInfo.id ='userSurname';
        this.surnameInfo.value = this.entity.surname;



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
export default ReviewView;