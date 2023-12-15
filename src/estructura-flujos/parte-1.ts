// Crea un programa que solicite al usuario su edad y muestre un mensaje indicando si es mayor de 18 años o no
import { numberValidation } from '../functions'

const MAYOR_EDAD = 18

function handleMayorDeEdad (e: Event) {
    e.preventDefault()

    const form = e.currentTarget
    const isForm = form instanceof HTMLFormElement
    if (!isForm || form === null) return

    const {elements} = form

    const input = elements.namedItem('edad')
    const isInput = input instanceof HTMLInputElement

    if (!isInput || input === null) return
    const { value } = input

    try {
        const isMayorEdad = numberValidation(value) && Number(value)>=MAYOR_EDAD
        if (isMayorEdad) 
            console.log('Eres mayor de edad')
        else 
            console.log('Todavía no eres mayor de edad')   
    } catch (error) {
        const ERROR = error instanceof Error ? error.message : 'Error'
        console.log(ERROR)
    }
    
}


document.forms[0].addEventListener(
    'submit',
    handleMayorDeEdad
)

// Escribe una función llamada `calcularPromedio` que acepte tres números como parámetros y devuelva el promedio de esos números.


function calcularPromedio (...numbers: number[]): number {
    return numbers.reduce((ac, current) => ac + current) / numbers.length
}