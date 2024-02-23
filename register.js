// function validate() {
//     let email = document.getElementById('email').value;
//     let password = document.getElementById('pswd').value;
//     let confirmPassword = document.getElementById('cpswd').value;
//     if (!/^[a-zA-Z0-9.]+@[a-z]+\.[a-z]{2}\.[a-z]{2}$/.test(email)) {
//         alert("Invalid email address");
//         return false;
//     }
//     if (password !== confirmPassword) {
//         window.location.href = "invalid.html";
//         return false;
//     } else {
//         document.getElementById('cpswd').innerText = "";
//     }
//     if(checkDetails(email,password)){
//         window.location.href = "regalready.html";
//     }else{
//         window.location.href = "regsuccess.html";
//     }
//     return false;
// }
// const exsitDetails = [{email : "abcd@sasi.ac.in",password : "123"},{email : "yaswanth.gedda@sasi.ac.in",password: "22k61a0539"}];
// function checkDetails(email,password){
//     return exsitDetails.some(details => details.email === email && details.password === password);
// }

function details(){
    let name, username, email, password, confirmPassword;
    name = document.getElementById('name').value;
    username = document.getElementById('uname').value;
    email = document.getElementById('email').value;
    password = document.getElementById('pswd').value;
    confirmPassword = document.getElementById('cpswd').value;
    if(password !== confirmPassword){
        window.location.href="invalid.html";
        return;
    }
    let user_records = JSON.parse(localStorage.getItem("users")) || [];
    if(user_records.some((v) => v.email === email)) {
        alert("Email already registered");
        window.location.href = "regalready.html";
    } else {
        user_records.push({
            "name": name,
            "username": username,
            "email": email,
            "password": password,
            "confirmPassword": confirmPassword
        });
        localStorage.setItem("users", JSON.stringify(user_records));
        window.location.href = "regsuccess.html";
    }
}