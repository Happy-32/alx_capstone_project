let theme = localStorage.getItem('theme')

if (theme == null){
    setTheme('light')
}else{
    setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')

for(var i=0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        setTheme(mode)
    })
}

function setTheme(mode){
    if(mode == 'light'){
        document.getElementById('theme-style').href = 'default.css'
    }

    if(mode == 'blue'){
        document.getElementById('theme-style').href = 'blue.css'
    }

    if(mode == 'green'){
        document.getElementById('theme-style').href = 'green.css'
    }

    if(mode == 'purple'){
        document.getElementById('theme-style').href = 'purple.css'
    }

    localStorage.setItem('theme', mode)
}

document.getElementById('contact-form').addEventListener("submit", function(event){
    event.preventDefault();

    let nameInput = document.getElementById('name');
    let emailInput = document.getElementById('email');
    let messageInput = document.getElementById('message');

    let name = nameInput.value.trim();
    let email = emailInput.value.trim();
    let message = messageInput.value.trim();

    if (name==="" || email==="" || message===""){
        alert("Please fill out all required fields.")
        return;
    }

    if (!validateEmail(email)){
        alert("Invalid email format.");
        return
    }

    this.submit();
});

function validateEmail(email){
    if (email.includes("@") && email.includes(".")){
        const [username, domain] = email.split("@");

        if (username && domain){
            if (domain.includes(".")){
                return true;
            }
        }
    }
    return false;
}