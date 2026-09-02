// console.log("hello world")


// A function that describes  data types with boolean value 

let  ValueWord = 0


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



let   [a,b] =  describeValue(ValueWord)


console.log(` ${a} | ${b} `)

// Bd weekdays calculations : 

let WeekDay = "dhaka"


function getDayType(day) {

      switch (day.toUpperCase()) {
        case "FRIDAY":
        case "SATURDAY":
            console.log("Holiay");
            break;
        case "SUNDAY": 
        case "MONDAY":
        case "TUESDAY":
        case "WEDNESSDAY":
        case "THURSDAY":
            console.log("Working Day");
            break;
        default :
            console.log("Invalid Day");
      }


}


getDayType(WeekDay)

// problem -3 : Username Gatekeeper

let userName = "Raseel ADMINS"

// console.log(userName.length)

function validateUserName(name) {


    if  (name.length < 4 ) {
        return "Too Short !";

    }

     for (let x of name){
        if (x ==" "){
            return "No Space Allowed" ;
        }
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