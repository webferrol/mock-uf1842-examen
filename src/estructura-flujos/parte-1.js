// Crea un programa que solicite al usuario su edad y muestre un mensaje indicando si es mayor de 18 años o no
import { numberValidation } from '../functions.js';
var MAYOR_EDAD = 18;
function handleMayorDeEdad(e) {
    e.preventDefault();
    var form = e.currentTarget;
    var isForm = form instanceof HTMLFormElement;
    if (!isForm || form === null)
        return;
    var elements = form.elements;
    var input = elements.namedItem('edad');
    var isInput = input instanceof HTMLInputElement;
    if (!isInput || input === null)
        return;
    var value = input.value;
    try {
        var isMayorEdad = numberValidation(value) && Number(value) >= MAYOR_EDAD;
        if (isMayorEdad)
            console.log('Eres mayor de edad');
        else
            console.log('Todavía no eres mayor de edad');
    }
    catch (error) {
        var ERROR = error instanceof Error ? error.message : 'Error';
        console.log(ERROR);
    }
}
document.forms[0].addEventListener('submit', handleMayorDeEdad);
