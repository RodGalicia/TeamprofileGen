const employee = require("./Employee");

class Manager extends employee {
    constructor (name, id, email, officeNumber) {

        this.officeNumber = officeNumber;

        super(name, id, email)
    }

    getOfficeNumber(){
        return this.officeNumber
    }

    getRole(){
        return "Manager"
    }


}

module.exports = Manager;