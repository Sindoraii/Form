import NewView from "./NewView";

class ViewManager {
    constructor(entity,mode,parent) {
        this.entity = entity;
        this.mode = mode;
        this.parent = parent;
        this.currentView;
    }
    
    #checkCurrentView() {
        switch (this.mode) {
            case 'new':
                if(this.currentView.type !== 'new') {
                    this.currentView.unmount();
                    this.currentView = new NewView();
                }
                break;
            case 'review':
                if(this.currentView.type !== 'review') {
                    this.currentView.unmount();
                    this.currentView = new ReviewView(this.entity);
                }
                break;
            case 'edit':
                if(this.currentView.type !== 'edit') {
                    this.currentView.unmount();
                    this.currentView = new EditView(this.entity);
                }
                break;
            default:
                this.currentView = new NewView();
                break;
        }
    }

    getView() {
        this.#checkCurrentView();
        this.currentView.mount(this.parent);
    }

}
export default ViewManager;
