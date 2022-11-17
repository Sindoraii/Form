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
