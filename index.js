const btn = document.getElementById('btn');

// btn.addEventListener('click', () => {
//     const pr = fetch('https://reqres.in/api/users');
//     pr.then(response => {
//         const prthen = response.json();
//         prthen.then(data => {
//             console.log(data);
//             const another_pr = fetch('https://reqres.in/api/users?page=2');
//             another_pr.then(another_r => {
//                 const another_f = another_r.json();
//                 another_f.then(another_d => {
//                     console.log(another_d);
//                 })
//             })
//         })
//     })
// })

// btn.addEventListener('click', () => {
//     const pr = fetch('https://reqres.in/api/users');
//     pr.then(response => {
//         const pr1 = response.json();
//         return pr1;
//     }).then(data => {
//         console.log(data);
//         const another_pr = fetch('https://reqres.in/api/users?page=2');
//         another_pr.then(re => {
//             const another_j = re.json();
//             return another_j
//         }).then(data => {
//             console.log(data);
//         })
//     })
// })

// btn.addEventListener('click', _ => {
//     fetch('https://reqres.in/api/users').then(r => r.json())
//         .then(data => {
//             console.log(data);
//     return fetch('https://reqres.in/api/users?page=2');
//         })
//         .then(re => re.json()).then(dat => console.log(dat));
// })

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
        render(data)
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