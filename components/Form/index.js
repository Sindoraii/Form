import ViewManager from "./ViewManager";

class Form {
    constructor(entity,isEdit) {
        this.entity = entity;
        this.isEdit = isEdit;
        this.elem = document.createElement('div');

        this.elem.classList.add('form');
    }

    mount(parent) {
        if(parent instanceof HTMLElement) {
            const viewManager = new ViewManager(this.entity,this.isEdit,this.elem);
            viewManager.getView();
            parent.append(this.elem);
        } else {
            throw new Error("Form: type of parent is`t correct");
        }
    }

    unmount() {
        this.elem.remove();
    }


}

export default Form;