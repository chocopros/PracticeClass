// EJERCICIO HERENCIA

//todo CLASS PEOPLE
class People {

    static countObjetPeople = 0

    constructor(firstName, lastName, age){
        this._idPeople = ++People.countObjetPeople;
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }

    get idPeople(){
        return this._idPeople
    }

    //! FIRST NAME
    get firstName(){
        return this._firstName
    }
    set firstName(firstName){
        this._firstName
    }

    //! LASTNAME
    get lastName(){
        return this._lastName
    }
    set lastName(lastName){
        this._lastName
    }

    //! AGE
    get age(){
        return this._age
    }
    set age(age){
        this._age
    }

    //! toString() -> POLIMORFISMO
    toString(){
        return `
            ID:${this._idPeople},
            NAME:${this._firstName},
            LASTNAME:${this._lastName},
            AGE:${this._age} years`
    }
};


//todo CLASS EMPLOYEE
class Employee extends People {

    static countEmployee = 0;

    constructor(firstName,lastName,age,salary, departament){
        super(firstName, lastName, age);
        this._idEmployee = ++Employee.countEmployee;
        this._salary = salary;
        this._departament = departament
    }

    //! ID EMPLOYEE
    get idEmployee(){
        return this._idEmployee;
    }

    //! SALARY
    get salary(){
        return this._salary;
    }
    set salary(mount){
        this._salary = Number(mount);
    }

    //! DEPARTAMENT
    get departament(){
        return this._departament
    }

    //! toString() -> POLIMORFISMO
    toString(){
        return `${super.toString()}, ID_EMPLOYED:${this._idEmployee}, DEPARTAMENT:${this._departament}, SALARY:${this._salary}$`
    }

};


//todo CLASS CLIENT
class Client extends People {

    static countClient = 0;

    constructor(firstName, lastName, age, dataRegister){
        super(firstName, lastName, age)
        this._idClient = ++Client.countClient;
        this._dataRegister = dataRegister;
    }

    get idClient(){
        return this._idClient;
    }

    get dataRegister(){
        return this._dataRegister;
    }
    set dataRegister(data){
        this._dataRegister = data;
    }

    toString(){
        return `${super.toString()}, ${this._idClient}, REGISTER_to: ${this._dataRegister}`;
    }

};



//? TEST TYPE PEOPLE
let persona1 = new People("jesus","arechider",28)
console.log(persona1.toString())

let persona2 = new People("anmy", "moreno", 32)
console.log(persona2.toString())

//? TEST TYPE EMPLOYEE
let employee1 = new Employee("jesus","arechider",28,3000,"IT")
console.log(employee1.toString())

//? TEST TYPE EMPLOYEE
let client1 = new Client("anmy","moreno",30,"2022/10/30")
console.log(client1.toString())
