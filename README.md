# classtask
Iterate using all for loops
1. Iterate over all For loops:


// JSON over Normal For Loop

var object = [
    {
        name:"john",
        age:20,
        company:"guvi",
        Designation:"manager",
    },
    {
        name: "Jeni",
        age:25,
        company:"Amazon",
        Designation:"HR manager",
    },
    {
        name:"Regina",
       age:30,
        company:"Tvs",
        Designation:"junior manager",
    },
]; 
for (var i=0; i <object.length; i++){
    console.log(object[i].name);
    console.log(object[i].Designation);
}

OUTPUT:

john

manager
Jeni
HR manager

Regina
junior manager




// JSON over forEach Loop
var object = [
    {
        name:"john",
        age:20,
        company:"guvi",
        Designation:"manager",
    },
    {
        name: "Jeni",
        age:25,
        company:"Amazon",
        Designation:"HR manager",
    },
    {
        name:"Regina",
 age:30,
        company:"Tvs",
        Designation:"junior manager",
    },
];
object.forEach((object)=> {
    console.log(object.name);
    console.log(object.age);
    console.log(object.company);

});

OUTPUT:

john
 20
 guvi

 Jeni
 25
Amazon 
Regina

30

Tvs


 // JSON over forIn Loop
var object = [
    {
        name:"john",
        age:20,
        company:"guvi",
        Designation:"manager",
    },
    {
        name: "Jeni",
        age:25,
        company:"Amazon",
        Designation:"HR manager",
    },
    {
        name:"Regina",
        age:30,
        company:"Tvs",
        Designation:"junior manager",
    },
];
for (var key in object) {
    console.log('
    ${object[key].name}
    ${object[key].company}
    ');
}

OUTPUT:

John
Guvi
Jeni
Amazon
Regina
Tvs








