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