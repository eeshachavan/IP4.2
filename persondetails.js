class Person {
    constructor(name, age, gender) {
        this._name = name;  
        this._age = age;
        this._gender = gender;
    }

    // Traditional method 
    showDetails() {
        console.log(`Traditional Method - Name: ${this._name}, Age: ${this._age}, Gender: ${this._gender}`);
    }

    // Getter for 'name'
    get name() {
        return this._name;
    }

    // Setter for 'name'
    set name(newName) {
        if (typeof newName === 'string' && newName.length > 0) {
            this._name = newName;
        } else {
            console.log('Invalid name');
        }
    }

    // Getter for 'age'
    get age() {
        return this._age;
    }

    // Setter for 'age'
    set age(newAge) {
        if (typeof newAge === 'number' && newAge > 0) {
            this._age = newAge;
        } else {
            console.log('Invalid age');
        }
    }

    // Getter for 'gender'
    get gender() {
        return this._gender;
    }

    // Setter for 'gender'
    set gender(newGender) {
        if (newGender === 'Male' || newGender === 'Female') {
            this._gender = newGender;
        } else {
            console.log('Invalid gender');
        }
    }
}

// Non-member arrow function to display person details
const printPersonInfo = (person) => {
    console.log(`Non-Member Function - Name: ${person.name}, Age: ${person.age}, Gender: ${person.gender}`);
};

// Create a Person object
const person1 = new Person('Eesha Chavan', 20, 'Female');

// Call the traditional method
person1.showDetails();  

// Call the non-member arrow function
printPersonInfo(person1);  

// Modify properties using setters
person1.name = 'Alice Green';  // Valid name update
person1.age = 25;              // Valid age update
person1.gender = 'Male';       // Valid gender update

// Access the updated properties using getters
console.log(person1.name);    
console.log(person1.age);     
console.log(person1.gender);  

// Try setting invalid values
person1.name = '';            // Invalid name
person1.age = -5;             // Invalid age
person1.gender = 'Other';     // Invalid gender

// Access again after trying invalid inputs
console.log(person1.name);    
console.log(person1.age);     
console.log(person1.gender);  


