// Question 1
var eatsPlants = false;
var eatsAnimals = true;

eatsPlants && !eatsAnimals
  ? console.log("herbivore")
  : eatsPlants && eatsAnimals
  ? console.log("omnivore")
  : !eatsPlants && eatsAnimals
  ? console.log("carnivore")
  : console.log(undefined);

// Question 2

var musicians = 0;

if (musicians <= 0) {
  console.log("not a group");
} else if (musicians == 1) {
  console.log("solo");
} else if (musicians == 2) {
  console.log("duet");
} else if (musicians == 3) {
  console.log("trio");
} else if (musicians == 4) {
  console.log("quartet");
} else if (musicians > 4) {
  console.log("this is a large group");
}

// Question 3

var room = "billiards room";
var suspect  ="Mr. Parkes";
var weapon ="";
var solved = false;

if (room == "ballroom" && suspect == "Mr. Kalehoff") {
  weapon = "poison";
 solved = true;
} else if (room == "gallery" && suspect == "Ms. Van Cleve") {
  weapon = "trophy";
 solved = true;
} else if (room == "billiards room" && suspect == "Mrs. Sparr") {
  weapon = "pool stick";
  solved = true;

} else if (room == "dining room" && suspect == "Mr. Parkes") {
  weapon = "knife";
 solved = true;
}
if(solved){

    console.log(` ${suspect} did it in the ${room} with the ${weapon}!`)
}else{
    console.log("The murder is not solved")
}

// Question 4

var balance = -325;
var checkBalance = true;
var isActive = true;

if( checkBalance === true){
if( isActive == true ){
    if(balance >= 0){

        console.log(`Your account is active and your balance is :  ${balance}`)
    }else{
        console.log(`We are sorry, You have a minus balace : ${balance}`)
    }
} else{
    console.log("We are sorry, You can't check your balance since your account is inactive")
}
}else{
    console.log("We are sorry, You can't check your balance since you don't have an account yet")

}

// Question 5

var flavor = "mango";
var vessel = "cone";
var toppings = "sprinkles";

if( flavor == "vanilla" || flavor == "chocolate"){
if(vessel == "cone" || vessel == "bowl"){
    if(toppings == "sprinkles" || toppings == "peanuts"){
console.log(`I'd like two scoops of ${flavor} ice cream in a ${vessel} with ${toppings}.`)
    }else {
        console.log(`Sorry, we onlt have sprinkles and peanuts for toppings`)

    }
}else{
    console.log(`Sorry, we only have cone and bowl as a vessel options`)

}
} else{
    console.log(`Sorry, there are only vanilla and chocolate flavors`)
}