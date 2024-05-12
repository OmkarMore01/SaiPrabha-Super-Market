function verify()
{
    const uname=document.getElementById('uname').value;
    const pass=document.getElementById('pass').value;
    
         if(pass && uname)
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
    if(uname == vuname)
        {
            window.alert(`Login Succesfull`);
        }
    else
    {
        window.alert(`!! Invalid Credential !! Please Enter correct details`);
    }
}