function verify()
{
    const uname=document.getElementById('uname').value;
    const pass=document.getElementById('pass').value;
    const loginanchor=document.getElementById('login-anchor');
    if(localStorage.getItem("flag")=="passed")
        {
            alert('You are already logged in no need to login again');
            loginanchor.href="./products.html";
        }
         else if(pass && uname)
         {
            validate(uname,pass)
           
         }
         else
        {
            window.alert(`Enter username and password`);
        }
}
function validate(un,ps)
{
    
    const uname=un;
    
    const pass=ps;
   /**  localStorage.setItem("username", uname);
    localStorage.setItem("password",pass);*/
    const vuname=localStorage.getItem("username");
    const vpass=localStorage.getItem("password");
    const loginanchor=document.getElementById('login-anchor');
    if(uname == vuname)
        {
            window.alert(`Login Succesfull`);
            loginanchor.href="./products.html";
            localStorage.setItem("flag","passed");
        }
    else
    {
        window.alert(`!! Invalid Credential !! Please Enter correct details`);
    }
}