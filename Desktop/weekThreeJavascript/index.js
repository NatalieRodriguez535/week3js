// EASY

function exercise(sport){
    return function() { return "Today's exercise: " + sport
    ;}
};

var run = exercise('running');

console.log(run());

var swim = exercise('swimming');

console.log(swim());   

// MEDIUM

function cutPizzaSlices(slices){
    return function(person){
        return "Each Person gets " + (slices / person) + " slices of pizza.";
    }
}

var sharePizza = cutPizzaSlices(8);
console.log(sharePizza(2));                                                                                                                                                                    
  // prints "Each person gets 4.00 slices of pizza"
console.log(sharePizza(3)); 
  // prints "Each person gets 2.67 slices of pizza"

//HARD

var person = function() {
  //our object to hold our stuff
    var pii = {
        firstName: "Natalie",
        SSN: 000000000,
    }
    //goinf to show the first name but not our SSN, right because ssn is scoped to only be
    //in this function
    return function(){
      //get pii.firstname because of scope
            return pii.firstName
    }
}
var person1 = person()
 var person1Name = person1()
 console.log(person1)
console.log(person1Name);

//VERY HARD
class Person {
  //set up actual object
  // passing in three parameters
  constructor(name, job, age) {
      this.name = name;
      this.job = job;
      this.age = age;
  }
  exercise(activity) {
      return ` ${activity}  is fun!`
  }
  fetchJob() {
      return `${this.name} is a ${this.job}`
  }
}
// new is creating a new instance of person
const person1 = new Person("Natalie", "Developer", "20")
console.log(person1.exercise("Swimming"));
console.log(person1.fetchJob());
class Programmer extends Person {
  constructor (languages) {
      super(languages);
      this.busy = true;
      this.languages = languages;
  }
  completeTask() {
      this.busy = false;
  }
  acceptNewTask() {
      this.busy = true;
  }
  offerNewTask() {
      if(this.busy) {
          return `${this.name} can't accept any new tasks right now`
      }
      return `${this.name} would love to take on a new responsibility.`
  }
  learnLanguage(newLanguage) {
      this.languages.push(newLanguage)
  }
  listLanguages() {
      for (let i = 0; i < this.languages.length; i++) {
          console.log(this.languages[i])
      }
  }
}
const natalie = new Programmer(["English", "French", "Mandarin"])
natalie.name = "Natalie";
console.log(natalie.offerNewTask());
natalie.learnLanguage("Dutch");
natalie.listLanguages();
white_check_mark
eyes
raised_hands





