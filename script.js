const containter = document.getElementById('container')
const btn = document.getElementById('fetchDataBtn')
let data 

// Fetching data with Axios
axios.get('https://dummyjson.com/products')
.then(function (response) {
    console.log(response);
    data = response.data.products
})
.catch(function (error) {
    console.log(error);
})


// Organizing data for the DOM
const organizedData = ()=>{
    if (data)
    {
        
        data.map(product => {
            const paragraph = document.createElement('h3')
            paragraph.textContent = "Title : " + product.title  
            containter.appendChild(paragraph) 
        })
    }
}

// OnClick event 
btn.addEventListener('click', organizedData)