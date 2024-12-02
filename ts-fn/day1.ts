{
    type User = {
        name: string,
        age: number,
        loginStatus: boolean
    }
    
    let user1: User = {name:'Shalabh', age:10, loginStatus:true}
    
    let user2: User = {name:'Jaiswal', age:20, loginStatus:false}


    const login = (user: User) : string => {
        user.loginStatus = true
        console.log(user)
        return `Welcome ${user.name}, you are now logged in!`
    }

    const loginButtonHit = ( ) : void => {
        const loggedInUsersArea : HTMLDivElement  =  document.getElementById("logged-in-users") as HTMLDivElement
        console.log('------>', loggedInUsersArea)
        console.log(document)
    
        let message = this.login(user1)
    
        loggedInUsersArea.innerHTML = message
    }
    

}