let fetchers = fetch('https://jsonplaceholder.typicode.com/posts')
fetchers.then(response => response.json())
.then(data => {data.map(ele => {console.log(ele)})
})