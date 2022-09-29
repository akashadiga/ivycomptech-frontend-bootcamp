// let output= [5, 3, 1].every((val)=>!(val%2==0));
// console.log(output);

//Consider your mobile phone and represent it as an object. Create a method to display only the tech spec of it. Create a method that computes the remaining storage available



// let mobilePhone={
//     RAM:6,
//     ROM:64,
//     storabgeOccuiped:31,
//     display: "LCD",
//     PROCESSOR: "SNAPDRAGON 612",
//     displayTechSpecs(){
//         console.log(`RAM is ${this.RAM}
        
//         ROM is ${this.ROM}

//         my display is ${this.display}

//         and processor is ${this.PROCESSOR}
//         `);
//     },
//     remainingStorageAvailable(){
//         return this.ROM-this.storabgeOccuiped;
//     }

// };

// console.log(JSON.stringify(mobilePhone));

// console.log(mobilePhone.displayTechSpecs());
// console.log(mobilePhone.remainingStorageAvailable());



// let addition= (first, second)=>first+second
// console.log(addition(12, 1));

// let yearToDays= (age)=>age*365
// console.log(yearToDays(20));









// let countTrue= (booleanArray)=>booleanArray.filter((element)=>element==true).length;

// console.log(countTrue([true, false, false, true, true]));





// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//     }
//     getArea = function () { return Math.PI * this.radius * this.radius};
//     getPerimeter = function () {
//             console.log(Math.PI * 2 * this.radius);
//             console.log(Math.PI * this.radius * this.radius);
//         };
// }


// let circle=new Circle(11);
// console.log(circle.getArea());
// circle.getPerimeter();

// class Name{
//     constructor(fname, lname){
//         this.fname=fname;
//         this.lname=lname;
//     }
//     fullName= function(){ return this.fname +" "+ this.lname};
//     initials= function(){ return this.fname.charAt(0).toUpperCase() + ". "+ this. lname}
// }
// let name= new Name(John, smith);
// name.fullName();
// name.initials();





// function IceCream(flavor, numSprinkles){
//     let flavorSweetness=0;
//     switch(flavor){
//         case "Plain":
//             flavorSweetness = 0;
//             break;
//         case "Vanilla":
//             flavorSweetness = 5;
//             break;
//         case "ChocolateChip":
//             flavorSweetness = 5;
//             break;
//         case"Strawberry":
//             flavorSweetness = 10;
//             break;
//         case "Chocolate":
//             flavorSweetness = 10;
//             break;      
//     }
//     return flavorSweetness+numSprinkles;
// }

// function sweetestIcecream(arrayOfIceCream){
//     let max= arrayOfIceCream[0];
//     for(let i=1; i<arrayOfIceCream.length; i++){
//         if(arrayOfIceCream[i]>max)
//             max=arrayOfIceCream[i];
//     }
//     return max;
// }


// ice1 = IceCream("Chocolate", 13)     	
// ice2 = IceCream("Vanilla", 0)       
// ice3 = IceCream("Strawberry", 7)    	
// ice4 = IceCream("Plain", 18)         
// ice5 = IceCream("ChocolateChip", 3) 
 
// console.log(ice1);
// console.log(ice2);
// console.log(ice3);
// console.log(ice4);
// console.log(ice5);

// console.log(sweetestIcecream([ice1, ice2, ice3, ice4, ice5]));
 
// console.log(sweetestIcecream([ice3, ice1]));
 
// console.log(sweetestIcecream([ice3, ice5]));











function nameOfAncestorOrDescendant(number, gender){
    if(gender!=="m" || gender!=="f")
        return;
    if(gender=="m"){
    switch(number){
        case -3:
            return "great grandfather";
        case -2:
            return "grandfather";
        case -1:
            return "father";
        case 0:
            return "me!";
        case 1:
            return "son";
        case 2:
            return "grandson";
        case 3:
            return "great grandson";
    }
    }else{
        switch(number){
            case -3:
                return "great grandmother";
            case -2:
                return "grandmother";
            case -1:
                return "mother";
            case 0:
                return "me!";
            case 1:
                return "daughter";
            case 2:
                return "granddaughter";
            case 3:
                return "great granddaughter";
        }
    }

}

console.log(nameOfAncestorOrDescendant(-1, "m"));































