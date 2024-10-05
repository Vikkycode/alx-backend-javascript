import Building from "./5-building";

export default class SkyHighBuilding extends Building{
    constructor(floors, sqft){
        super(sqft)

        this._validateNumber(floors, 'Floors')
        this._floors = floors
    }

    get floors(){
        return this._floors
    }

    evacuationWarningMessage(){
        return `Evacuate slowly the ${this._floors} floors`
    }

    _validateNumber(value, fieldName){
        if (typeof value !== 'number'){
            throw new TypeError(`${fieldName} must be a number`)
        }
    }
}