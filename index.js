const btn = document.getElementById('btn');




const render = data => {
    const list = data;
    const parent = document.getElementById('list');
    parent.innerHTML = "";
    list.forEach(element => {
        const new_li = document.createElement("li");
        new_li.innerText = `${element.name} --- ( ${(element.email)})`;
        parent.append(new_li)
    })
}
btn.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(data => {
        render(data);
    })
})


// const render = data => {
//     const list = data.name
//     const parent = document.getElementById('list');
//     parent.innerHTML = "";
//     list.forEach(element => {
//         const new_li = document.createElement("li")
//         new_li.innerText = `${element.name} ${element.email}`;
//         parent.append(new_li)
//     })
// }

// btn.addEventListener('click', () => {
//     fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(data => {
//         render(data);
//     })
// })