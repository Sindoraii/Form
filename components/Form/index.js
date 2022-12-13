import ViewManager from "./ViewManager";
// import RequestManager from "./RequestManager";

class Form {
    constructor(entity,isEdit) {
        this.entity = JSON.parse(JSON.stringify(entity));
        this.isEdit = isEdit;
        this.elem = document.createElement('div');
        this.elem.classList.add('form');
        // this.requestManager =  RequestManager;
        // this.viewManager = new ViewManager(this.entity,this.isEdit,this.elem,this.requestManager.sendRequest.bind(this));
        // this.requestManager = new RequestManager(this.viewManager.updateViewMode('review'));
        // this.viewManager = new ViewManager(this.entity,this.isEdit,this.elem,this.requestManager);

        this.viewManager = new ViewManager(this.entity,this.isEdit,this.elem);


    }

    mount(parent) {
        if(parent instanceof HTMLElement) {
            this.viewManager.initView();
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
