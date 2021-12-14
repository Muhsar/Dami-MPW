document.getElementById('login_form').addEventListener("submit", e=>{
    e.preventDefault();
    if(document.getElementById("email").value===localStorage?.email && document.getElementById("password").value!==localStorage?.password){
        alert("Incorrect Password")
    }
    if(document.getElementById("email").value!==localStorage?.email){
        alert("No User With That Email Address")
    }
    if(document.getElementById("email").value===localStorage?.email && document.getElementById("password").value===localStorage?.password){
        localStorage.setItem("loggedIn", "true")
        alert("Login Successful")
        window.location.href="/user.html"
    }
})