document.addEventListener('DOMContentLoaded', function () {
const LINK= 'http://localhost/info2180-lab4/superheroes.php';
let result=document.getElementById('#result');
let input= document.querySelector("input");
let userInput= input.value.trim();
let request=`http://localhost/info2180-lab4/superheroes.php?name=${userInput}`;



document.getElementById('searchButton').addEventListener('click',function() {
    
    fetch(request)
        .then(response=> {
            if(response.ok){return response.text()}
            else{return Promise.reject('Something went wrong!')}
        })
        .then(data=> {
            result.innerHTML= data;
            console.log(data);
        })
        .catch(error=> {
            console.log(error);

        });
});
console.log("End of Javscript File");
});   