import Currency from "./3-currency"

export default class Pricing{
    constructor(amount, currency){
        this._validateNumber(amount, 'Amount')
        this._validateCurrency(currency, 'Currency')

        this._amount = amount
        this._currency = currency
    }

    get amount(){
        return this._amount
    }

    get currency(){
        return this._currency
    }

    set amount(newAmount){
        this._validateNumber(newAmount, 'Amount')
        this._amount = newAmount
    }

    set currency(newCurrency){
        this._validateCurrency(newCurrency, 'Currency')
        this._currency = newCurrency
    }

    displayFullPrice(){
        return `${this._amount} ${this._currency.displayFullCurrency()}`
    }

    static convertPrice(amount,conversionRate){
        if (typeof amount !== 'number' || typeof conversionRate !== 'number'){
            throw new TypeError('Both amount and conversion Rate must be a numbers')
        }
        return amount * conversionRate
    }

    _validateNumber(value, fieldName){
        if (typeof value !== 'number'){
            throw new TypeError(`${fieldName} must be a number`)
        }
    }

    _validateCurrency(value, fieldName){
        if (!(value instanceof Currency)){
            throw new TypeError(`${fieldName} must be a Currency instance`)
        }
    }
}