
//problem-1: A function that describes  data types with boolean value


function describeValue (x) {
    let y = typeof(x)
    

    if (x == "undefined") {
        return [x , "falsy"] ;
    }
    else if (Boolean(x) == true) {
        return  [y , "Truthy"] ;
    }
    else if (Boolean(x) == false) {
        return  [y , "Falsy"] ;
    }
}

let   [a,b] =  describeValue(true)
console.log(` ${a} | ${b} `)

//problem2: Bd weekdays calculations : 

function getDayType(day) {

      switch (day.toUpperCase()) {
        case "FRIDAY":
        case "SATURDAY":
            return "Weekend" ;
        case "SUNDAY": 
        case "MONDAY":
        case "TUESDAY":
        case "WEDNESSDAY":
        case "THURSDAY":
            return "Working Day";
        default :
            return "Invalid Day";
      }


}

console.log(getDayType("MONDAY"))

// problem -3 : Username Gatekeeper

let userName = "Raseelvayadmit"

// console.log(userName.length)

function validateUserName(name) {


    if  (name.length < 4 ) {
        return "Too Short !";

    }

     if (name.includes(" ")) {
        return "No Space is required!"
     }

     if (name.toLowerCase().includes("admin")){
        return "Reserved Word !";
     }


 return "Available!";
}


console.log(validateUserName(userName))


// PROBLEM-4 : cng fare meter:


function getCNGfare(distance, night=false, time=0){

 let fare = 0
    if (distance <= 2  &&  time ==0 ) {
        fare = 50 ;
    }
    else if(distance <=2 && time !=0){
        fare = 50 + time*2 ;
    }
    else if ( distance > 2 && time == 0 ) {
         fare = 50 + (distance-2)*15 ; 
    }
    else if (distance >2 && time != 0 ) {
        fare = 50 + (distance-2)*15 + time*2 ;

    }


    if (night == true){
        return  fare + 0.2*fare ;
    }
    else {
        return fare ;
    }


}

    
    console.log(getCNGfare(10))


// problem-5 : run chase commentator :

const getChaseVerdict = (target, scored, ballsleft) => {

    let runsNeeded = target - scored 

    if (runsNeeded <=0 ) {
        return "Won" ;
    }
    else if ( runsNeeded !=0 && ballsleft == 0) {
        return "Lost" ;
    }
    else if (runsNeeded !=0 &&  ballsleft !=0) {
        let requiredRate = (runsNeeded / ballsleft)*6 ;
        if ( requiredRate <=6 ){
            return `Need ${runsNeeded} runs in ${ballsleft} balls |  Comfortable` ;
        }
        else if (requiredRate  > 6 &&  requiredRate <=12 )  {
            return `Need ${runsNeeded} runs in ${ballsleft} balls |  Tough`;
        }
        else if ( requiredRate > 12) {
            return `Need ${runsNeeded} runs in ${ballsleft} balls |  Almost Impossible`;
        }
    }
    
}

console.log(getChaseVerdict(200,190,12))