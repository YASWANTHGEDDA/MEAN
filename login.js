function check(){
    let username = document.getElementById('user').value;
    let password = document.getElementById('pswd').value;
    let user_records = JSON.parse(localStorage.getItem("users")) || [];
    if(user_records.some((v) => v.username === username && v.password === password)) {
        alert("LOGI SUCCESSFUL");
        let login_user = user_records.filter((v) => v.username===username && v.password===password)[0];
            localStorage.setItem("name",login_user.name);
            window.location.href="profile.html";
    }else{
        window.location.href = "loginfail.html";
    }
    return false;
}

// function check(){
//     let username = document.getElementById('user').value;
//     let password = document.getElementById('pswd').value;
//     if(username === password){
//     window.location.href = "idcard.html";
//     }else{
//         window.location.href = "loginfail.html";
//     }
//     return false;
//}
