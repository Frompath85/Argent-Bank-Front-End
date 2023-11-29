
export async function GetToken(entredEmail,entredPassword){
    const url = 'http://localhost:3001/api/v1/user/login';
    
        const response = await fetch(url, {
            method : 'POST',
            body :JSON.stringify({
                email : entredEmail,
                password : entredPassword,
            }),
            headers:{
                'Content-Type':"application/json",
            }
        })
        const data = await response.json()
        // console.log(data)            
        if(data.status == 200){
            const token = data.body.token
            return token
        }         
        else 
          alert(data.message)
} 

export async function GetUserData(token){
   
    const url = 'http://localhost:3001/api/v1/user/profile';

    const response = await  fetch(url, {
      method : 'POST',
      headers:{
          'Content-Type':"application/json",
          Authorization: `Bearer ${token}`,
      }
    })
    const data = await response.json()
    // console.log(data)
     return data
}

export async function SaveProfilData(token, NewFirstName, NewLastName){
   
    const url = 'http://localhost:3001/api/v1/user/profile';

    const response = await  fetch(url, {
      method : 'PUT',
      headers:{
          'Content-Type':"application/json",
          Authorization: `Bearer ${token}`,
      },
      body :JSON.stringify({
        firstName : NewFirstName,
        lastName : NewLastName,
    }),
    })
    const data = await response.json()
    // console.log(data)
     return data
}