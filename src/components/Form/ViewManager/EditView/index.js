import ViewComponent from "../common/ViewComponent.js";

class EditView extends ViewComponent {
    constructor(entity, sender) {
        super(sender);
        this.entity = entity;
        this.elem.classList.add('edit-view');

        /* setting inputs value */
        for(let key in this.entity) {
            let input = this.elem.querySelector(`#${key}`);
            input.value = this.entity[key];
        }
    }
}

export default EditView;
