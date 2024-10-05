const uniqueSymbol = Symbol('uniqueSymbol')

export default class Car{
    constructor(brand,motor,color){
        this._brand = brand
        this._motor = motor
        this._color = color
        this[uniqueSymbol] = true
    }

    cloneCar(){
        return new this.constructor(this._brand, this._motor, this._color)
    }

    getDetails(){
        return `Brand car:${this._brand} Motor:${this._motor} Color:${this._color}`
    }
}