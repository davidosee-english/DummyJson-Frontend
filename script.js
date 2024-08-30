// Grab container 
const container = document.getElementById('container')

// Get data 
axios({
    method: 'get',
    url: 'https://dummyjson.com/users'
  })
    .then(function (response) {
      const users = response.data.users
      users.map(user => {
        const h4 = document.createElement('h4')
        h4.textContent = user.firstName + " "+user.lastName
        container.appendChild(h4)
      })
    });