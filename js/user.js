document.getElementById("full_name").innerHTML = localStorage?.full_name
document.getElementById("email").innerHTML = localStorage?.email
document.getElementById("logout").addEventListener("click", e=>{
    localStorage.setItem("loggedIn", "false")
    window.location.href="/index.html"
})