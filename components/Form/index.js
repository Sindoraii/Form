import ViewManager from "./ViewManager";
import RequestManager from "./RequestManager";

class Form {
    constructor(entity,isEdit) {
        this.entity = JSON.parse(JSON.stringify(entity));
        this.isEdit = isEdit;
        this.elem = document.createElement('div');
        this.elem.classList.add('form');
        this.requestManager = new RequestManager();
    }

    mount(parent) {
        if(parent instanceof HTMLElement) {
            const viewManager = new ViewManager(this.entity,this.isEdit,this.elem,this.requestManager.sendRequest.bind(this));
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
