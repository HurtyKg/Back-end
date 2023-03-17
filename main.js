const url = "http://localhost:5000/api"

function getUsers() {
  axios.get(url)
  .then(response => {
    apiResult.textContent = JSON.stringify(response.data)
  })
  .catch(error => console.error(error))
}

function addNewUser(newUser){
  axios.post(url,newUser )
  .then(response => {
    console.log(response)
  })
  .catch(error => console.error(error))
}

function getUser(id){
  axios.get(`${url}/${id}`)
  .then(response => {
    const data = response.data
    userName.textContent = data.name
    userCity.textContent = data.city
    userId.textContent = data.id
    userAvatar.src = data.avatar
  })
  .catch(error => console.error(error))
}

function updateUser(id,userUpdate) {
  axios.put(`${url}/${id}`, userUpdate)
  .then(response => console.log(response))
  .catch(error => console.error(error))
}

function deleteUser(id){
 axios.delete(`${url}/${id}`)
 .then(response => console.log(response))
 .catch(error => console.error(error))
}
deleteUser(2)

getUsers()
getUser(1)

const newUser = {
  name: "Haaland",
  avatar: "https://www.instagram.com/p/Ci-Y9yUO66o/",
  city: "Leeds"
}
addNewUser()

const userUpdate = {
  name : "kylian mbappé",
  avatar : "https://www.instagram.com/p/CpqrATUD4O6/",
  city: "19º arrondissement de Paris"
}
updateUser(2, userUpdate)


