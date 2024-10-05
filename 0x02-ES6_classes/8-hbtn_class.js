export default class HolbertonClass{
    constructor(size,location){
        this._validateNumber(size, 'Size')
        this._validateString(location, 'Location')

        this._size = size
        this._location = location
    }

    get size(){
        return this._size
    }

    get location(){
        return this._location
    }

    valueOf(){
        return this._size()
    }

    toString(){
        return this._location
    }


    _validateNumber(value, fieldName){
        if (typeof value !== 'number'){
            throw new TypeError(`${fieldName} must be a number`)
        }
    }

    _validateString(value, fieldName){
        if (typeof value !== 'string'){
            throw new TypeError(`${fieldName} must be a string`)
        }
    }
}
