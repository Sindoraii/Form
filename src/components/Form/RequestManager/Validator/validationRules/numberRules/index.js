export function checkNumberWithWhiteSpace(fieldName, value) {
    const copy = JSON.parse(JSON.stringify(value))
    const chars = Array.from(copy);
    let error = {};

        chars.forEach((char) => {
        if (isNaN(Number(char)) && value !== " ") {
            error = {
                field: fieldName,
                message: 'Value must include only numbers'
            }
            return error;
        }
    })
    return error;
}

export function checkNumbers(fieldName, value) {
    const copy = JSON.parse(JSON.stringify(value))
    const chars = Array.from(copy);
    let error = {};

    chars.forEach((char) => {
        if (isNaN(Number(char)) || char === " ") {
            error = {
                field: fieldName,
                message: 'Value must include only numbers'
            }
            return error;
        }
    })
    return error;
}
