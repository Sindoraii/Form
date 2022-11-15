import EditView from "./EditView";
import ReviewView from "./ReviewView";
import NewView from "./NewView";

class ViewManager {
    constructor(entity,isEdit,parent) {
        this.entity = entity;
        this.isEdit = isEdit;
        this.parent = parent;
        this.currentView;
    }

    #checkCurrentView() {
        switch (this.mode) {
            case 'new':
                if(this.currentView.type === 'new') {
                    if(this.currentView.type)
                    this.currentView.unmount();
                    this.currentView = new NewView();
                }
                break;
            case 'review':
                if(this.currentView.type === 'review') {
                    this.currentView.unmount();
                    this.currentView = new ReviewView(this.entity);
                }
                break;
            case 'edit':
                if(this.currentView.type === 'edit') {
                    this.currentView.unmount();
                    this.currentView = new EditView(this.entity);
                }
                break;
            default:
                this.currentView = new NewView();
                break;
        }
    }

    #setCurrentView() {
        if(Object.keys(this.entity).length === 0) {
            this.currentView = new NewView();
        } else {
            if(!this.isEdit) {
                this.currentView = new ReviewView(this.entity);
            } else {
                this.currentView = new EditView(this.entity);
            }
        }
    }

    getView() {
        // this.#checkCurrentView();
        this.#setCurrentView();
        if(this.currentView === undefined) {
            throw new Error('View is undefined');
        } else {
            this.currentView.mount(this.parent);
        }
    }

}
export default ViewManager;
