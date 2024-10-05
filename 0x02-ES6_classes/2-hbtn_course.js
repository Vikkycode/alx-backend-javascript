export default class HolbertonCourse{
    constructor(name,length,students){
        this._validateString(name,'Name')
        this._validateNumber(length,'Length')
        this._validateStudentArray(students, 'Students')

        this._name = name,
        this._length = length,
        this._students = students
    }

    get name(){
        return this._name
    }

    get length(){
        return this._length
    }

    get students(){
        return this._students
    }

    set name(newName){
        this._validateString(newName,'Name')
        this._name = newName
    }

    set length(newLength){
        this._validateNumber(newLength,'Length')
        this._length = newLength
    
    }

    set students(newStudents){
        this._validateStudentArray(newStudents, 'Students')
        this._students = newStudents
    }

    _validateString(value, fieldName){
        if (typeof value !== 'string'){
            throw new TypeError(`${fieldName} must be a string`)
        }
    }

    _validateNumber(value, fieldName){
        if (typeof value !== 'number'){
            throw new TypeError(`${fieldName} must be a string`)
        }
    }

    _validateStudentArray(value, fieldName){
        if(!Array.isArray(value) || !value.every(student => typeof student === 'string')){
            throw new TypeError(`${fieldName} must be an array of strings`)
        }
    }


}