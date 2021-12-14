document.getElementById('register_form').addEventListener("submit", e=>{
    e.preventDefault();
    if(document.getElementById("password").value!==document.getElementById("password2").value){
        alert("passwords do not match")
    }
    else{
        localStorage.setItem("full_name", document.getElementById("full_name").value)
        localStorage.setItem("email", document.getElementById("email").value)
        localStorage.setItem("password", document.getElementById("password").value)
        alert(`${document.getElementById("full_name").value} account created successfully`)
        window.location.href="/login.html"
    }
})