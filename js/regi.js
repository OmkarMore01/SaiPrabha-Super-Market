 function update()

 {
    const uname=document.getElementById('uname').value;
    const pass=document.getElementById('pass').value;
    const phone=document.getElementById('phone').value;
    const Address=document.getElementById('address').value;
    const email=document.getElementById('email').value;
    const anchor=document.getElementById('regi-anchor');
        if(localStorage.getItem("username")==uname && localStorage.getItem("password")==pass)
            {
                alert(`registeration is already done with ${uname}`);
            }
            else   if(pass && uname)
         {
            
           
            if(phone && Address && email)
                {   
                    validate(uname,pass);
                    console.log(`value inserted succesfully`);
                }
            else
            {
                window.alert(`Enter phone ,address and email`);
                anchor.href='./../pages/register.html';
            }
           
         }
         
         else
        {
            window.alert(`Enter username and password`);
            anchor.href='./../pages/register.html';
        }
        return 1;
}
function validate(un,ps)
{
    
    const uname=un;
    localStorage.setItem("username", uname);
    const pass=ps;
    localStorage.setItem("password",pass);
    const name=localStorage.getItem("username");
    if(name)
        {
            window.alert(` Registered Succesfully`);
            
        }
        
    else
    {
        window.alert(`!Registration is not succesfull`);
    }
    
}