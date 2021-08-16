document.getElementById('login-submit').addEventListener('click', function(){
    //get user email
    const EmailField = document.getElementById('User Email');
    const userEmail = EmailField.value;
    console.log(userEmail);
    EmailField.value = '';
    //get user password
    const PassField = document.getElementById('User Password');
    const userPassword = PassField.value;
    console.log(userPassword);
    PassField.value = '';

    //check user email and password
    if(userEmail == 'amit@gmail.com' && userPassword == 'amit1234'){
        window.location.href='banking.html';
    }else{
        console.log('Your Email and password are not correct');
    }
})

