
// const getProductos = async () => {
  
//     return await fetch(`${process.env.REACT_APP_API}/lencerias`)
//     .then(res => res.json()) 
//     .catch(res =>{console.log("errrrrrr",res)})        
// }
// const login= async (user) => {
// console.log("nombre",user)

// const options = {
//     method: 'POST',
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify({email:user.email, password:user.password})
    
// };

// await fetch("http://localhost:5000/api/login", options)
//     .then(res => res.json())
//     .then(res => {
//         console.log(res);
//     })

//     .catch(error => { console.error(error) })
// }


const saveUser = async (user) => {

const options = {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(user)
    
};

return await fetch(`${process.env.REACT_APP_API}/register` , options)
    .then(res => res.json())
    .catch(error => { console.error(error) })
}

// const updateProducto = async () => {
// const options = {
//     method: 'PUT',
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//         name: "Arturo calle",
//         age: 10,
//         email: "arturocalle@gmail.com"
//     })
// };

// await fetch("http://localhost:5000/api/users/6350ab3b6a7f99688f22014f", options)
//     .then(res => res.json())
//     .then(res => {
//         console.log(res);
//     })

//     .catch(error => { console.error(error) })
// }
// const deleteProducto = async (id) => {
// const options = {
//     method: 'DELETE',
// };

// await fetch(`http://localhost:5000/api/users/${id}`, options)
//     .then(res => res.json())
//     .then(res => {
//         console.log(res);
//     })

//     .catch(error => { console.error(error) })
// }


export  {saveUser };