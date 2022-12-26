import EditView from "./EditView";
import ReviewView from "./ReviewView";
import NewView from "./NewView";
import RequestManager from "../RequestManager";

class ViewManager {
    constructor(entity, isEdit, parent) {
        this.entity = entity;
        this.isEdit = isEdit;
        this.parent = parent;
        this.requestManager = new RequestManager(this.updateViewMode.bind(this));
        this.currentView = null;
        this.mode = this.#calcMode();
    }

    #calcMode() {
        if (Object.keys(this.entity).length === 0) {
            return 'new';
        }
        if (!this.isEdit) {
            return 'review';
        } else {
            return 'edit';
        }
    }

    updateViewMode(mode,data = this.entity) {
        this.mode = mode;

        if(this.currentView !== null) {
            this.currentView.unmount();
        }
        this.#setCurrentView(data);
        this.currentView.mount(this.parent);
    }

    #setCurrentView(data) {
        switch (this.mode) {
            case 'new':
                this.currentView = new NewView(this.requestManager);
                break;
            case 'review':
                this.currentView = new ReviewView(data, this.updateViewMode.bind(this,'edit',data));
                break;
            case 'edit':
                this.currentView = new EditView(data, this.requestManager);
                break;
            default:
                this.currentView = null;
                break;
        }
    }

    initView() {
        this.#setCurrentView(this.entity);
        if (this.currentView === null) {
            throw new Error('View is undefined');
        } else {
            this.currentView.mount(this.parent);
        }
    }
}

export default ViewManager;
