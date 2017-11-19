export class User {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    dOb: number;

    constructor(id: number, firstName: string, lastName: string, gender: string, dOb: number){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.dOb = dOb;
    }

}
