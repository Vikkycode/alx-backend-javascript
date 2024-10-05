export default class Airport{
    constructor(code,name){
        this._validateString(code, 'Code')
        this._validateString(name,'Name')

        this._code = code
        this._name = name
    }

    get code(){
        return this._code
    }

    get name(){
        return this._name
    }

    toString(){
        return this._code
    }

    _validateString(value, fieldName){
        if (typeof value !== 'string'){
            throw new TypeError(`${fieldName} must be a string`)
        }
    }
}