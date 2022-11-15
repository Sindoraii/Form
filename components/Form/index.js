import ViewManager from "./ViewManager";

class Form {
    constructor(entity,mode) {
        this.entity = entity;
        this.mode = mode;  // mode: 'new','edit','review'
        this.elem = document.createElement('div');

        this.elem.classList.add('form');
    }

    mount(parent) {
        if(parent instanceof HTMLElement) {
            const viewManager = new ViewManager(this.entity,this.mode,this.elem);
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