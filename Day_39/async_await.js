/*function fetchedData(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(`Data fetched successfully!`);
        },2000)
    })
}
async function getData(){
    console.log(`Data fetching...`);
    let data = await fetchedData();
    console.log(data);
}
getData();
*/

// ------------------------------------------
/*
async function fetchUserData(){
    let responce = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await responce.json();
    console.log(data);
}

fetchUserData();
*/

//-------------------------------------------

async function fetchUserData(){
    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/uses')
        if(!response.ok) throw new Error ('Network responce was not ok!')
        let data = await response.json()
        console.log(data);
    } catch(error){
        console.log(`Error: ${error.message}`);
    }
}
fetchUserData();

//-------------------------------------------