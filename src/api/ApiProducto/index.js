
const getProductos = async () => {
  
        return await fetch(`${process.env.NEXT_PUBLIC_REACT_APP_API}/lencerias`)
        .then(res => res.json()) 
        .catch(res =>{console.log("error",res)})        
}
const getProductosForCategory = async (category) => {
  console.log("category meto",category)
        return await fetch(`${process.env.NEXT_PUBLIC_REACT_APP_API}/product/${category}`)
        .then(res => res.json()) 
        .catch(res =>{console.log("error",res)})        
}
// const login= async (user) => {
    
//     const options = {
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({email:user.email, password:user.password})      
//     };
//    return await fetch("http://localhost:5000/api/login", options)
//         .then(res => res.json())
// }


// const saveProducto = async (producto) => {
    
//     const options = {
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({producto})
        
//     };

//     await fetch("http://localhost:5000/api/users", options)
//         .then(res => res.json())
//         .then(res => {
//             console.log(res);
//         })

//         .catch(error => { console.error(error) })
// }

// const updateProducto = async () => {
//     const options = {
//         method: 'PUT',
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             name: "Arturo calle",
//             age: 10,
//             email: "arturocalle@gmail.com"
//         })
//     };

//     await fetch("http://localhost:5000/api/users/6350ab3b6a7f99688f22014f", options)
//         .then(res => res.json())
//         .then(res => {
//             console.log(res);
//         })

//         .catch(error => { console.error(error) })
// }
// const deleteProducto = async (id) => {
//     const options = {
//         method: 'DELETE',
//     };

//     await fetch(`http://localhost:5000/api/users/${id}`, options)
//         .then(res => res.json())
//         .then(res => {
//             console.log(res);
//         })

//         .catch(error => { console.error(error) })
// }


export  { getProductos ,getProductosForCategory};