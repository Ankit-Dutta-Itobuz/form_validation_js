function validate(){
    var name = document.form.name.value;
    var password = document.form.password.value;
    var email = document.form.email.value;
    
    if(name==null || name=="")
    {
      alert("ENTER A VALID NAME");
      return false;
    }
    if(password==null || password=="")
    {
      alert("ENTER A VALID PASSWORD");
      return false;
    }
    }