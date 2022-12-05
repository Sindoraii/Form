import ViewComponent from "../common/ViewComponent.js";

class ReviewView extends ViewComponent{
    constructor(entity,updateMode) {
        super()
        this.entity = entity;
        this.elem.classList.add('review-view');

        const fieldsets = this.elem.querySelectorAll('fieldset');
        fieldsets.forEach((fieldset)=> fieldset.disabled = true);

        const submitButton = this.elem.querySelector('.button-submit');
        submitButton.remove();

        /* setting inputs value */
        for(let key in this.entity) {
            let input = this.elem.querySelector(`#${key}`);
            input.value = this.entity[key];
        }

        /* edit button */
        const editModeButton = document.createElement('button');
        editModeButton.setAttribute('type','button');
        editModeButton.innerHTML = 'Edit form';
        editModeButton.addEventListener('click', updateMode);

        this.elem.append(editModeButton);
    }
}
export default ReviewView;
