import Validator from "./Validator";
import {outputMapper} from "./outputMapper.js";
import {submitter} from "./submitter.js";

class RequestManager {
    constructor(changeView) {
        this.changeView = changeView;
    }
    sendRequest(entity) {
        const validator = new Validator(entity);
        const errors = validator.validate();

        if(errors.length === 0) {
            const output = outputMapper(entity);
            const response = submitter(output);

            response.then( () => {
                this.changeView('review');
            });
        }
            return errors;
    }
}
export default RequestManager;
