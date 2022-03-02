window.onload = pageLoad;
function pageLoad(){
    var form = document.getElementById('myForm');
    // console.log("F1", + form);
    form.onsubmit = checkpassword;    
}

function checkpassword(){
    let password1 = document.getElementsById('password').value;
    let password2 = document.getElementsById('repassword').value;

    if(password1 != password2 || password1 == null || password2 == null){
        // console.log("p1", + password1);
        // console.log("p2", + password2);
        alert('Invalid Password')
        return false;
    }
    else{
        alert('Success')
    }
   
}


