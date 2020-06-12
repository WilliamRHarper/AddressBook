// window.onload = function() {
//     getPerson()
// }
let arrayOfPersons = [];
const getPerson = () => {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(user => user.results.map(person => {
        arrayOfPersons.push(person)
        console.log(person)
        const list = document.getElementById("allUsers")
        const pic = document.createElement("img")
        pic.setAttribute('src', `${person.picture.thumbnail}`)
        const li = document.createElement("li")
        const text = document.createTextNode(`${person.name.first}`)
        const button = document.createElement('button')
        const buttonInfo = document.createTextNode('More Info')
        const liInfo = document.createElement('li')
        const textInfo = document.createTextNode(`${person.phone}, ${person.email}, ${person.dob}`)
        const lineBreak = document.createElement('br')
        li.appendChild(pic)
        li.appendChild(lineBreak)
        li.appendChild(text)
        list.appendChild(li)
        list.appendChild(button)
        button.appendChild(buttonInfo)
        // liInfo.appendChild(textInfo)
        button.addEventListener("click", function(){
            // const newList = document.createElement('ul')
            // const liInfo = document.createElement('li')
            const textInfo = document.createTextNode(`${person.phone}, ${person.email}, ${person.dob.date}, ${person.dob.age}`)
            // liInfo.appendChild(textInfo)
            // newList.appendChild(liInfo)
            li.appendChild(lineBreak)
            li.appendChild(textInfo)})
    }));
}



// const getMultiple = () => {
//     fetch('https://randomuser.me/api/results=5')
//     .then(res => res.json())
//     .then(person => arrayOfPersons.push(person))
//     .catch((error) => {
//         console.error('Error', error);
//     });
//     arrayOfAddresses.forEach(person => {
//         person.result.name.first
//         console.log(arrayOfPersons)
//     })
// }

//https://randomuser.me/api/?results=5
// let arrayOfAddress = [];

// window.onload = function() {
// let fetchNum = 1;
// for(let i=0; i<fetchNum; i++){
// getAddresses()
// }
// }

// const getAddresses = () => {
// fetch('https://randomuser.me/api/')
// .then(res => res.json())
// .then(addresses => {
// console.log(addresses)
// arrayOfAddress.push(addresses)
// })

// .catch((error) => {
// console.error('Error: ', error);
// });
// console.log(arrayOfAddress)
// }