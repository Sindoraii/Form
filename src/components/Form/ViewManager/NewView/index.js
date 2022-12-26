import ViewComponent from "../common/ViewComponent.js";

class NewView extends ViewComponent {
    constructor(sender) {
        super(sender);
        this.elem.classList.add('new-view');
    }
}
export default NewView;
