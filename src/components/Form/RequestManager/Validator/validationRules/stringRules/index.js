export function checkStringWithoutNumbers (fieldName,value) {
     const chars = value.split("");

     if(chars.find((item) => !isNaN(Number(item))) !== undefined) {
          return {
               field: fieldName,
               message: "This field should not include numbers",
          }
     } else {
          return {};
     }
}

export function checkStringMinLength(fieldName,value, minLength) {
     if(value.length < minLength) {
          return {
               field: fieldName,
               message: `Length should not be less than ${minLength} symbols`,
          }
     } else {
          return {};
     }
}

export function checkRequiredString(fieldName,value) {
     if(value === "") {
          return {
               field: fieldName,
               message: 'This field is required'
          }
     } else {
          return {};
     }
}

/* email validation */
export function checkEmail(fieldName, value) {
     let regExp = /[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,6}/

     if (regExp.test(value)) {
          return {}
     } else {
          return {
               field: fieldName,
               message: 'Email is incorrect'
          }
     }
}

export function checkMinYear(fieldName, value) {
     const OLDEST_AGE = 100;
     const yearOfUser = Number(value.slice(0, 4));
     const inputMinYear = new Date().getFullYear() - OLDEST_AGE;

     if (yearOfUser < inputMinYear) {
          return {
               field: fieldName,
               message: `Value of year must be ${inputMinYear} or later`
          }
     } else {
          return {};
     }
}

export function checkMinInputDate(fieldName, value) {
     const yearOfUser = Number(value.slice(0, 4));
     const inputMinYear = new Date().getFullYear();
     const monthOfUserStr = value.slice(5);
     let monthOfUserNumber = 0;
     const inputMinMonth = new Date().getMonth() + 1;

     if(monthOfUserStr[0] === '0') {
          monthOfUserNumber = Number(monthOfUserStr[1]);
     } else {
          monthOfUserNumber = Number(monthOfUserStr);
     }

     /* comparison of dates  */
     if(yearOfUser < inputMinYear) {
          return {
               field: fieldName,
               message: `Value of year is incorrect`
          }
     } else if(yearOfUser === inputMinYear) {

          if(monthOfUserNumber < inputMinMonth) {
               return {
                    field: fieldName,
                    message: `Value of month is incorrect`
               }
          } else {
               return {};
          }
     } else {
          return {};
     }
}

export function checkMaxInputDate(fieldName, value) {
     const EXPIRATION = 5;
     const yearOfUser = Number(value.slice(0, 4));
     const inputMaxYear = new Date().getFullYear() + EXPIRATION;
     const monthOfUserStr = value.slice(5);
     let monthOfUserNumber = 0;
     const inputMaxMonth = new Date().getMonth() + 1;

     if(monthOfUserStr[0] === '0') {
          monthOfUserNumber = Number(monthOfUserStr[1]);
     } else {
          monthOfUserNumber = Number(monthOfUserStr);
     }
     /* comparison of dates  */
     if(yearOfUser > inputMaxYear) {
          return {
               field: fieldName,
               message: `Value of year is incorrect`
          }
     } else {
          if(monthOfUserNumber > inputMaxMonth) {
               return {
                    field: fieldName,
                    message: `Value of month is incorrect`
               }
          } else {
               return {};
          }
     }
}
