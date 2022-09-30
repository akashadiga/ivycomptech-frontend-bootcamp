
function getFormValue(){
    let a= document.getElementById("form1");
    for(let i=0; i<a.length; i++){
        if(a.elements[i].value!="submit"){
            console.log(a.elements[i].value);
        }
    }
}