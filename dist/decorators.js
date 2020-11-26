"use strict";
// Para que os decorators possam ser utilizados teram que ser habilitados no
// TSCONFIG "experimentalsDecorators": true
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
function delay(ms) {
    return function (target, key, descriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log("Esperando " + ms + "...");
            setTimeout(function () {
                originalMethod.apply(_this, args);
            }, ms);
        };
        return descriptor;
    };
}
var Greeter = /** @class */ (function () {
    function Greeter(g) {
        this.greeting = g;
    }
    // decorator para criar um delay na exibição da mensagem
    Greeter.prototype.greet = function () {
        console.log("Hello! " + this.greeting + ".");
    };
    __decorate([
        delay(3000)
    ], Greeter.prototype, "greet", null);
    return Greeter;
}());
var pessoa = new Greeter("Pessoa");
pessoa.greet();
// Parameter decorator
// Acessor decorator
