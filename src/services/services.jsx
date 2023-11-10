

export async function GetToken(entredEmail,entredPassword){
    const url = 'http://localhost:3001/api/v1/user/login';
 
    const logindata = await fetch(url, {
            method : 'POST',
            body :JSON.stringify({
                email : entredEmail,
                password : entredPassword,
            }),
            headers:{
                'Content-Type':"application/json",
            }
        })
        .then((response)=> response.json())
        console.log(logindata)            
        if(logindata.status == 200){
            let token = logindata.body.token
            localStorage.setItem("token", token)
            return token
        }         
        else 
          alert(logindata.message)
} 

export async function GetUserData(){
   
    const url = 'http://localhost:3001/api/v1/user/profile';
    let token = localStorage.getItem("token")
    console.log(token)

    const userdata = await  fetch(url, {
      method : 'POST',
      headers:{
          'Content-Type':"application/json",
          Authorization: `Bearer ${token}`,
      }
    })
    .then((response)=> response.json())
     return userdata
}