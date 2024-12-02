{
    var user1 = { name: 'Shalabh', age: 10, loginStatus: true };
    var user2 = { name: 'Jaiswal', age: 20, loginStatus: false };
    var loggedInUsersArea = document.getElementById("logged-in-users");
    console.log('------>', loggedInUsersArea);
    console.log(document);
    var message = '<p>no user logged in</p>';
    if (user1.loginStatus) {
        message = "<p>logged in user is ".concat(user1.name);
    }
    loggedInUsersArea.innerHTML = message;
}
