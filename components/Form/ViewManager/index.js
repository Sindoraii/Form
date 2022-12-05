import EditView from "./EditView";
import ReviewView from "./ReviewView";
import NewView from "./NewView";

class ViewManager {
    constructor(entity, isEdit, parent, sendRequest) {
        this.entity = entity;
        this.isEdit = isEdit;
        this.parent = parent;
        this.sendRequest = sendRequest;
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

    #updateViewMode(mode) {
        this.mode = mode;
        this.currentView.unmount();
        this.#setCurrentView();
        this.currentView.mount(this.parent);
    }

    #setCurrentView() {
        switch (this.mode) {
            case 'new':
                this.currentView = new NewView(this.sendRequest);
                break;
            case 'review':
                this.currentView = new ReviewView(this.entity, this.#updateViewMode.bind(this, 'edit'));
                break;
            case 'edit':
                this.currentView = new EditView(this.entity, this.sendRequest);
                break;
            default:
                this.currentView = null;
        }
    }

    initView() {
        this.#setCurrentView();
        if (this.currentView === null) {
            throw new Error('View is undefined');
        } else {
            this.currentView.mount(this.parent);
        }
    }
}

export default ViewManager;
