import EditView from "./EditView";
import ReviewView from "./ReviewView";
import NewView from "./NewView";

class ViewManager {
    constructor(entity,isEdit,parent) {
        this.entity = entity;
        this.isEdit = isEdit;
        this.parent = parent;
        this.currentView;
        this.mode = '';
    }


    #updateViewMode(mode) {
        if(mode === 'edit') {
            this.mode = mode;
            this.currentView.unmount();
            this.currentView = new EditView(this.entity);
            this.currentView.mount(this.parent);
        } else {
            throw new Error('mode is incorrect');
        }
    }

    #setCurrentView() {
        if(Object.keys(this.entity).length === 0) {
            this.currentView = new NewView();
        } else {
            if(!this.isEdit) {
                this.currentView = new ReviewView(this.entity,this.#updateViewMode.bind(this));
            } else {
                this.currentView = new EditView(this.entity);
            }
        }
    }

    getView() {
        this.#setCurrentView();
        if(this.currentView === undefined) {
            throw new Error('View is undefined');
        } else {
            this.currentView.mount(this.parent);
        }
    }

}
export default ViewManager;
