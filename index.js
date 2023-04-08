console.log("Hello World!"); //Print Something On Console

//variable types:
//var;let;const

document.getElementById("submitBtn").onclick = function()
{
    const nickName = document.getElementById("getName").value;//string
    const username = nickName.trim();

    console.log("Name : ", username);

    if(Number(username.length) < 15)
    {
        document.getElementById("welcomeText").innerHTML = "Welcome " + username + "!";
    }
    else
    {
        document.getElementById("welcomeText").innerHTML = "Welcome ." + username.trim(charAt(0)) + "!";
    }
}





  

