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