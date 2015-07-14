//Once you complete a problem, open up Chrome and check the answer in the console.


//Create an object called me. Give it a key of name with the value being your name, and another key of age with the value being your age. Then alert your name using dot notation.

  //Code here
var me = {
    name: "Andy Bolos",
    age: 25
};

alert(me.name);



//NEXT PROBLEM




//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.

  //Code here
  var favoriteThings = {
      band: "All-American Rejects",
      food: "Marks almond",
      person: "My beautiful wife",
      book: "Richest Man in Babylon",
      movie: "Fast and the Furious Saga",
      holiday: "None, I am a hater"
  };


//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

  //Code here
favoriteThings["car"] = "Nissan Skyline GTR";
favoriteThings["brand"] = "Vans";


//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'.

  //Code here
favoriteThings["food"] = "Lettuce";
favoriteThings["book"] = "50 Shades of Gray";



//NEXT PROBLEM



/*Create an empty Object called backPack. Now, create a variable called 'item'
and set it equal to the string 'firstPocket'. Using bracket notation,
add a 'firstPocket' key (or property) to backPack, using 'item'.
Set the value of that key to 'chapstick'.

Using dot notation, add another key (or property) to your backPack object
that is named color, with the value being the color of your backpack. */

  //Code here
  var backPack = {};

  var item = "firstPocket";

  backPack[item] = "chapstick";
  backPack.color = "Green";


//After you do the above, alert your entire backPack object.

  //Code here
  alert(backPack);


/*You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console. */

  //Code here
console.log(backPack);



//NEXT PROBLEM




//Create another 'me' object with the following properties name, age, height, gender, married, eyeColor, hairColor. Fill those properties in with the appropriate values.

  //Code Here
  var me = {
      name: "Andy",
      age: 25,
      height: "6 foot 2 inches",
      gender: "Male",
      married: "Absolutely",
      eyeColor: "Brown",
      hairColor: "Brown",

  }



//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

  //Code Here
//
// var displayMe = function(obj) {
//  for (var key in obj) {
//      alert(obj[key]);
//    };
//  };



//NEXT PROBLEM




//Create an Object called 'album' with 5 keys named different song titles that you make up, with the values being the length of each song.

  //Code Here
  var album = {
      one: "3:30",
      two: "3:45",
      three: "4:44",
      four: "2:50",
      five: "3:22"
  }

//Now, loop through your album object alerting every song title individually.

  //Code Here
for (var key in album) {
    alert(key);
};



//NEXT PROBLEM




//Create an object called states that has 5 US states as properties with the values being their population (doesn't have to be accurate).

  //Code Here
  var states = {
    utah: 1000000,
    maine: 2000000,
    california: 300000,
    mexico: 24000000,
    hawaii: 7
  };


//Now, loop through your states object and if the states population is greater than 30K, alert that state.

  //Code Here
for (var key in states) {
    if (states[key] > 30000) {
        alert(key);
    }
};



//NEXT PROBLEM




var user = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}
/*Above you're given a user object. Loop through the user object checking to make sure
that each value is truthy. If it's not truthy, remove it from the object. */

  //Code Here
  for (var key in user) {
      if (!user[key]) {
        delete user[key];
      }
  };


//Once you get your truthy Object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

  //Code Here
user.name = "Andy Bolos";
user.username = "abolos111";



//NEXT PROBLEM




var user = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayName: function(){
            alert('Email is : ' + this.email);
        }
};
//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.

  //Code Here
  user.name = "Tyler S. McGinnis";
  user.email = "tyler.mcginnis@devmountain.in";

//Now call the sayName method that's on the user object which will alert the users email

  //Code Here
user.sayName();



//NEXT PROBLEM




//Create an empty object called methodCollection.

  //Code Here
var methodCollection = {};


/*Now add two methods (functions that are properties on objects) to your methodCollection
object. One called 'alertHello' which alerts 'hello' and another method called logHello
 which logs 'hello' to the console. */

  //Code Here
methodCollection.alertHello = function() {
     alert("hello")
 };
methodCollection.logHello = function() {
     console.log("hello");
 };



//Now call your alertHello and logHello methods.

  //Code Here
methodCollection.alertHello();
methodCollection.logHello();



//NEXT PROBLEM



// Create a function called MakePerson which takes in name, birthday, ssn as its parameters and returns a new object with all of the information that you passed in.

  //Code Here
var MakePerson = function(name, birthday, ssn) {
    this.name = name;
    this.birthday = birthday;
    this.ssn = ssn;
}



//NEXT PROBLEM



// Create a function called MakeCard which takes in all the data it needs to make a Credit Card object and returns that object so that whenever you invoke MakeCard, you get a brand new credit card.

  //Code Here
var MakeCard = function(address, access) {
    this.address = address;
    this.access = access;
};


//NEXT PROBLEM



/* As of this point you should have a MakePerson and a MakeCard function which returns you either a person or a credit card object.
   Now, create a bindCard function that takes in a person object as its first parameter and a creditcard object as its second parameter.
   Have bindCard merge the two parameters together into a new object which contains all the properties from the person as well as the creditcard.
*/

  //Code Here
  var bindCard = function(person, card) {
      var fullInfo = {};
      for (var item in person){
          fullInfo[item] = person[item];
      }
      for (var item in card) {
          fullInfo[item] = card[item];
      }
      return fullInfo;
  };
