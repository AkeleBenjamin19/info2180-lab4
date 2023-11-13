document.addEventListener('DOMContentLoaded', function () {

document.getElementById('searchButton').addEventListener('click',function() {
    let link= 'http://localhost/info2180-lab4/superheroes.php';
    fetch(link)
        .then(response=> {
            if(response.ok){return response.text()}
            else{return Promise.reject('Something went wrong!')}
        })
        .then(data=> {
            alert(data)
        })
        .catch(error=> {
            console.log(error);
        
        });
});
console.log("End of Javscript File");
});   