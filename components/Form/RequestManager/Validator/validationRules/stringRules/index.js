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