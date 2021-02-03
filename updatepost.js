fetch (" https://jsonplaceholder.typicode.com/posts", {
    method: 'PUT',
    body: JSON.stringify({
        title:'foo',
        body: 'bar',
        userId: 0
    }),
    headers: {
        "Content-type": " application/json; charset=UTF-8"
    },
})
.then(res => res.json())
.then(data => console.log(data));