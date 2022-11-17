import {checkStringMinLength, checkStringWithoutNumbers} from "./validationRules/stringRules";

class Validator {
    constructor(entity) {
        this.entity = entity;
    }


    #check(fieldName,fieldValue) {
        switch (fieldName) {
            case 'name':
                const nameErrors = [];
                addError(checkStringWithoutNumbers(fieldName,fieldValue),nameErrors);
                addError(checkStringMinLength(fieldName,fieldValue,4),nameErrors);
                return nameErrors;
            case 'surname':
                const surnameErrors = [];
                addError(checkStringWithoutNumbers(fieldName,fieldValue),surnameErrors);
                addError(checkStringMinLength(fieldName,fieldValue,5),surnameErrors);
                return  surnameErrors;
            default:
                throw new Error("Field name is undefined");
        }

        function addError(error,arr) {
            if(Object.keys(error).length !== 0) {
                arr.push(error);
            }
        }
    }

    validate() {
        let errors = [];
        for (let key in this.entity) {
            const checkResult = this.#check(key,this.entity[key]);

            if(checkResult.length !== 0) {
                errors = errors.concat(checkResult);
            }
        }
        return errors;
    }
}
export default Validator;
