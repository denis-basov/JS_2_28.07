fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((res)=> res.json())
    .then(data=> console.log(data));

console.log('hello');