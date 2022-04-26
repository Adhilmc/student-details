function Addstudent(){
    var name =document.getElementById("name").value;
    var Age =document.getElementById("Age").value;
    var Qualification =document.getElementById("Qualification").value;
    var Mark =document.getElementById("Mark").value;
    var errorMessageElement=document.getElementById("errormessage");
    console.log(errorMessageElement);
    errorMessageElement.innerText = "";
    if (name == ''){
        errorMessageElement.innerText = "Name is Empty";
        return
    }
}
