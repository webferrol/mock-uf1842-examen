export function numberValidation(value) {
    var copyValue = value;
    if (typeof value === 'string' && value.length < 1) {
        throw new Error('Void string.');
    }
    if (typeof value !== 'string' && typeof value !== 'number') {
        throw new Error("string | number : ".concat(copyValue, " no valid format (").concat(typeof copyValue, ")"));
    }
    if (typeof value === 'string') {
        value = Number(value);
    }
    var isNumber = !isNaN(value);
    if (!isNumber) {
        throw new Error("string | number : ".concat(copyValue, " no valid format (").concat(typeof copyValue, ")"));
    }
    return true;
}
