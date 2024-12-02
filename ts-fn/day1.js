var _this = this;
{
    var user1_1 = { name: 'Shalabh', age: 10, loginStatus: true };
    var user2 = { name: 'Jaiswal', age: 20, loginStatus: false };
    var login = function (user) {
        user.loginStatus = true;
        console.log(user);
        return "Welcome ".concat(user.name, ", you are now logged in!");
    };
    var loginButtonHit = function () {
        var loggedInUsersArea = document.getElementById("logged-in-users");
        console.log('------>', loggedInUsersArea);
        console.log(document);
        var message = _this.login(user1_1);
        loggedInUsersArea.innerHTML = message;
    };
}
