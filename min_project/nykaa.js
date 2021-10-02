function validation() {
    
    let name=document.getElementById("username").value;
    let email=document.getElementById("emailid").value;
    let dob=document.getElementById("dob").value;
    //let gender=document.getElementById("gender").value;
    //console.log(gender);
    let number=document.getElementById("number").value;
     let pass1=document.getElementById("pass1").value;
     let pass2=document.getElementById("pass2").value;


    //...................USERNAME................................
     if(name == "" || name == null ){

         alert(" Username Cannot be null or empty");

     }
    else if(name.length <6 || name.length >15){
         alert("Length of username must be within 6 to 15");
    
     }

    //   else if(name.toLowerCaseCase()) {
    //     alert(" username should be in lowercase");
    //    }

    // else if(name.value.match(letters)){
      //   alert(" Username should be in lowercase");
    // }

    //..........................EMAIL-ID.........................
      else if(email == "" || email == null ){

        alert("please enter mailid");
     }
     else if(email.length <5 || email.length >18){
      alert("Length of emailid must be within 5 to 18");
    
     }

     //..........................DOB.........................
     else if(dob == "" || dob == null ){

      alert("please Enter DOB");
     }

    //..........................GENDER.........................
    // if( gender == null || gender == "" ){

    //     alert("gender cannot be null or empty");
    // }
    

    //..........................NUMBER.........................
        else if(number == "" || number == null ){

           alert("contact number cannot be null or empty");

       }
     else if(number.length <10 || number.length >10){
         alert("Invalid contact number");
    
      }

     if(pass1 == "" || pass1 == null &&  pass2 == "" || pass2 == null ){

       alert(" password Cannot be null or empty");

     }
    else if(pass1.length <8 || pass1.length >16 && pass1.length <8 || pass1.length >16){
    alert("Length of password must be within 8 to 16");
     }

     else if (pass1 != pass2) {
         alert ("\nPassword did not match: Please try again...")
        return false;
     }

   else{
  alert("Valid");
    
 }
}





























