{
    type User = {
        name: string,
        age: number,
        loginStatus: boolean
    }
    
    let user1: User = {name:'Shalabh', age:10, loginStatus:true}
    
    let user2: User = {name:'Jaiswal', age:20, loginStatus:false}


    const loggedInUsersArea : HTMLDivElement  =  document.getElementById("logged-in-users") as HTMLDivElement
    console.log('------>', loggedInUsersArea)
    console.log(document)

    
    let message = '<p>no user logged in</p>'
    
    if(user1.loginStatus) {
        message = `<p>logged in user is ${user1.name}`
    }

    loggedInUsersArea.innerHTML = message

}