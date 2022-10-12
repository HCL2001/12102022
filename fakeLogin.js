var userName = prompt("Input your userName");
var passWord = prompt("Input your password");

if(userName == "Admin"){
    if (passWord == "123"){
        alert("Welcome")
    }else {
        alert("Wrong password");
    }
}else if(userName == null){
    alert("Plese input your username");
}else
{
    alert("Wrong username");
}