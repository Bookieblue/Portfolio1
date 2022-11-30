async function getPosts(){
    const posts = await fetch ('https://jsonplaceholder.typicode.com/posts');
    const data = await posts.json();

setTimeout(() =>{
    let output = '';
    data.forEach((data, index)=> {
        output += `<tr>
        <td>${data.userId}</td>
        <td>${data.id}</td>
        <td>${data.title}</td>
        <td>${data.body}</td>
        </tr>`;
    });
    document.getElementById('table_body').innerHTML = output;
}, 1000)
}

getPosts()