
// 1.Display the city name from given API: https://jsonplaceholder.typicode.com/users

var xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

xhr.onload = function (){
    if(xhr.status >= 200 && xhr.status < 300){
        let data = JSON.parse(this.response);
        console.log(data)
        for(let i = 0; i < data.length; i++){
            let user = data[i];
            console.log(user.name);
        }
    }
};
 xhr.send();



 // 2. Print  all countries name,region,sub region => alternatively printed
 //other data from given API

 var xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

xhr.onload = function (){
    if(xhr.status >= 200 && xhr.status < 300){
        let data = JSON.parse(this.response);
        console.log(data)
        for(let i = 0; i < data.length; i++){
            let user = data[i];
            console.log(user.name);
            console.log(user.id);
            console.log(user.email);
            console.log(user.address);
            
        }
        }
};
 xhr.send();