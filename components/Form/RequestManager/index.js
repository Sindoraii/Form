import Validator from "./Validator";
import {outputMapper} from "./outputMapper.js";
import {submitter} from "./submitter.js";

class RequestManager {
    sendRequest(entity) {
        const validator = new Validator(entity);
        const errors = validator.validate();
        if(errors.length === 0) {
            const output = outputMapper(entity);
            submitter(output);
        }
            return errors;
    }
}
export default RequestManager;
