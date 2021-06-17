// Object Literals, Pseudo Classes and methods
// Step 2 Continued
// function Random (name, age, city){
//     this.name = name;
//     this.age = age;
//     this.city = city;
//     this.div = document.createElement("div")
//     this.div.id = "personas";
//     document.body.appendChild(this.div);
// }

// Random.prototype.sayHello = function (){
//     this.div.append(`Hey! My name is ${this.name} I am ${this.age} years old and live in ${this.city}`)
// }

//Step 2 Continued Even Further
class Random {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.div = document.createElement("div");
    this.div.id = "personas";
    document.body.appendChild(this.div);
    // //Step 3  2
    //     let  sayHello = person => {
    //     this.h2 = document.createElement("h2")
    //    this.h2.append(`Hey! My name is ${this.name} I am ${this.age} years old and live in ${this.city}`)}

    //    this.div.append(sayHello())
  }
  // }
  //Step 3  1
  sayHello(person) {
    this.div.append(
      `Hey! My name is ${this.name} I am ${this.age} years old and live in ${this.city}`
    );
  }
}
// Step 1
let person1 = {
  name: "Uganda",
  age: 12,
  city: "Nigeria",
  //   sayHello: function () {
  //     console.log(`Hi! My name is ${this.name}`);
  //   },
};
let person2 = {
  name: "Cameron",
  age: 19,
  city: "Gaza",
  //   sayHello: function () {
  //     console.log(`Hi! My name is ${this.name}`);
  //   },
};
let person3 = {
  name: "Jordan",
  age: 28,
  city: "Egypt",
  //   sayHello: function () {
  //     console.log(`Hi! My name is ${this.name}`);
  //   },
};
let person4 = {
  name: "Egypt",
  age: 34,
  city: "Cameron",
  //   sayHello: function () {
  //     console.log(`Hi! My name is ${this.name}`);
  //   },
};
let person5 = {
  name: "Gaza",
  age: 8,
  city: "Uganda",
  //   sayHello: function () {
  //     console.log(`Hi! My name is ${this.name}`);
  //   },
};
// Step 2
// person1.sayHello();
// person2.sayHello();
// person3.sayHello();
// person4.sayHello();
// person5.sayHello();

// Step 4
// let p1 = new Random("Uganda", 12,"Nigeria");
// let p2 = new Random("Cameron", 19,"Gaza");
// let p3 = new Random("Jordan", 28,"Egypt");
// let p4 = new Random("Egypt", 34,"Cameron");
// let p5 = new Random("Gaza", 8,"Uganda");

let p1 = new Random(person1.name, person1.age, person1.city);
let p2 = new Random(person2.name, person2.age, person2.city);
let p3 = new Random(person3.name, person3.age, person3.city);
let p4 = new Random(person4.name, person4.age, person4.city);
let p5 = new Random(person5.name, person5.age, person5.city);
p1.sayHello();
p2.sayHello();
p3.sayHello();
p4.sayHello();
p5.sayHello();

// Inheritance
//Step 1
class Vehicle {
  constructor(type, manufacturer, numOfWheels) {
    this.type = type;
    this.manufacturer = manufacturer;
    this.numOfWheels = numOfWheels;
  }
} // Step 4
class Sedan extends Vehicle {
  constructor(type, manufacturer, numOfWheels, gasMileage, size, numOfDoors) {
    super(type, manufacturer, numOfWheels);
    this.gasMileage = gasMileage;
    this.size = size;
    this.numOfDoors = numOfDoors;
  }
  aboutVehicle() {
    console.log(
      `This ${this.size}${this.type} is made by ${this.manufacturer}, it has ${this.gasMileage} gas mileage, and ${this.numOfWheels} wheels.`
    );
  }
}
class Truck extends Vehicle {
  constructor(type, manufacturer, numOfWheels, fourWheelDrive, numOfDoors, hasBed) {
    super(type, manufacturer, numOfWheels);
    this.fourWheelDrive = fourWheelDrive;
    this.numOfDoors = numOfDoors;
    this.hasBed = hasBed;
  }// Step 2
  aboutVehicle() {
      if (this.fourWheelDrive === false  && this.hasBed === false) {
      console.log(
        `This ${this.type} is made by ${this.manufacturer}, it has ${this.numOfWheels} sturdy wheels.`
      );
    } else if (this.fourWheelDrive === false && this.hasBed === true){
      console.log(
        `This ${this.type} is made by ${this.manufacturer}, it has a convinent and reliable bed, and ${this.numOfWheels} sturdy wheels.`
        );
    }else if (this.fourWheelDrive === true && this.hasBed === false){
        console.log(
        `This ${this.type} is made by ${this.manufacturer}, it has ${this.fourWheelDrive}, ${this.numOfWheels} sturdy wheels.`
        );
    } else if (this.fourWheelDrive === true && this.hasBed === true) {
        console.log(
     `This ${this.type} is made by ${this.manufacturer}, it has ${this.fourWheelDrive}, a convinent and reliable bed, and ${this.numOfWheels} sturdy wheels.`
        );
    }
  }
} // Step 5
class Motorcycle extends Vehicle {
  constructor(type, manufacturer, numOfWheels, typeOfHandles, numOfSeats) {
    super(type, manufacturer, numOfWheels);
    this.typeOfHandles = typeOfHandles;
    this.numOfSeats = numOfSeats;
  }
  aboutVehicle() {
    console.log(
      `This ${this.type} is made by ${this.manufacturer}, it has ${this.typeOfHandles} handlebars, ${this.numOfSeats}seats, and ${this.numOfWheels} wheels.`
    );
  }
}
class Boat extends Vehicle {
  constructor(type, manufacturer, motor, surrondSystem) {
    super(type, manufacturer);
    this.motor = motor;
    this.surrondSystem = surrondSystem;
  }
  aboutVehicle() {
    if (this.motor === false && this.surrondSystem === false) {
      console.log(
        `This ${this.type} is made by ${this.manufacturer}, it's quite spaceous and can hold tons of cargo. Motor sold seperately`
      );
    } else if (this.motor === false && this.surrondSystem === true) {
      console.log(
        `This ${this.type} is made by ${this.manufacturer}, it's quite spaceous and can hold tons of cargo, premium waterproof surrond sound. Motor sold seperately`
      );
    } else if (this.motor === true && this.surrondSystem === false) {
      console.log(
        `This ${this.type} is made by ${this.manufacturer}, it has a powerful motor, and luxury seating for family, friends, and all.`
      );
    } else if (this.motor === true && this.surrondSystem === true)
      console.log(
        `This ${this.type} is made by ${this.manufacturer}, it has a powerful motor, premium waterproof surrond sound, and luxury seating for: family, friends, and all.`
      );
  }
}
let aTruck = new Truck("truck", "Ford", 4, true, 4, true)
let aSedan = new Sedan("sedan", "Dodge", "great", "mid-sized", 4)
let aCycle = new Motorcycle("motorcycle", "Kawasaki", 2, "non-slip grip", 2)
let aBoat = new Boat("boat", "Steelson", true, true)
aTruck.aboutVehicle();
aSedan.aboutVehicle();
aCycle.aboutVehicle();
aBoat.aboutVehicle();