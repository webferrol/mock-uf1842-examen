export function numberValidation (value: string | number) {
    const copyValue = value
    if (typeof value === 'string' && value.length < 1) {
        throw new Error('Void string.') 
    }

    if (typeof value !== 'string' && typeof value !== 'number') {
        throw new Error(`string | number : ${copyValue} no valid format (${typeof copyValue})`)
    }
   
    if (typeof value === 'string') {
        value = Number(value)
    }
  

    const isNumber = !isNaN(value)

    if (!isNumber) {
        throw new Error(`string | number : ${copyValue} no valid format (${typeof copyValue})`)
    }
    return true
}