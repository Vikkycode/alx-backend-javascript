export default class Building{
    constructor(sqft){
        this._validateNumber(sqft, 'Square Feet')

        this._sqft = sqft

        if(this.constructor !== Building && !this.evacuationWarningMessage){
            throw new Error('Class extending Building must override evacuationWarningMessage')
        }
    }

    get sqft(){
        return this._sqft
    }

    _validateNumber(value, fieldName){
        if (typeof value !== 'number'){
            throw new TypeError(`${fieldName} must be a number`)
        }
    }
}