import Validator from "./Validator";
import {outputMapper} from "./outputMapper.js";
import {submitter} from "./submitter.js";

class RequestManager {
    sendRequest(entity) {
        const validator = new Validator(entity);
        console.log('RM validate',validator.validate());

        if(validator.validate().length === 0) {
            const output = outputMapper(entity);
            submitter(output);
        }
    }
}
export default RequestManager;
