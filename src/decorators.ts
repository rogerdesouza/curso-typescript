// Para que os decorators possam ser utilizados teram que ser habilitados no
// TSCONFIG "experimentalsDecorators": true

// @component
// @selector
// @useState("dasdas")

// **** CLASS decorator ****
//
// exemplo função decorator para classe
// function setApiVersion(apiVersion: string) {
//     return (constructor) => {
//         return class extends constructor {
//             version = apiVersion
//         }
//     }
// }
// // decorator
// @setApiVersion("1.0.0")
// class Api {}

// console.log(new Api)


// **** PROPERTY decorator ****
//
// exemplo de função para decorator de parametro
// function minLength(length: number) {
//     return (target: any, key: string) => {
//         let val = target[key]
//         const getter = () => val
//         const setter = (value: string) => {
//             if (value.length < length) {
//                 console.log(`Erro: você não pode criar ${key} com tamanho menor que ${length}.`)
//             } else {
//                 val = value
//             }
//         }
//         Object.defineProperty(target, key, {
//             get: getter,
//             set: setter,
//         })
//     }
// }

// class Movie {
//     // decorator para validar o tamanho da string
//     @minLength(50)
//     title: string
//     constructor(t: string) {
//         this.title = t
//     }
// }

// const m = new Movie("Interstellar")
// console.log(m.title)


// **** METHOD decorator ****
// exemplo de decorator para métodos
function delay (ms: number) {
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value

        descriptor.value = function (...args: any) {
            console.log(`Esperando ${ms}...`)
            setTimeout(() => {
                originalMethod.apply(this, args)
            }, ms)
        }
        return descriptor
    }

}

class Greeter {
    greeting: string
    
    constructor (g: string) {
        this.greeting = g
    }

    // decorator para criar um delay na exibição da mensagem
    @delay(3000)
    greet() {
        console.log(`Hello! ${this.greeting}.`)
    }
}

const pessoa = new Greeter("Pessoa")
pessoa.greet()

// Parameter decorator
// Acessor decorator

