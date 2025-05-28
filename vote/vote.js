function vote(){
    var name=document.getElementById("name").value;
    var age=document.getElementById("age").value;
    var res=document.getElementById("res");
    alert(name);
    if(age>18)
    {
        res.innerHTML="YOU ARE ELIGIBLE";
        
    }else{
        res.innerHTML="not eleigible";
    }



         /* normal print statement {
            alert("Eligible To Vote 😁😊😉😎");
        }else{
        alert("Not Eligible To Vote 🤦‍♀️🤦‍♂️🤷‍♀️🤷‍♂️");
    }
    */
}