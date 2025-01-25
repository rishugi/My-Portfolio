document.getElementById('joinbtn').addEventListener("click", ()=>{
    document.getElementById('home_box').style.display="none" ;
    document.getElementById('project_gallery').style.display="none" ;
    document.getElementById('about').style.display="none" ;
    document.getElementById('joinNow').style.display="flex" ;   
})



function formSubmit(){
    let yName= document.getElementById('yname').value;
    let numb=document.getElementById('numb1').value;
    let email1=document.getElementById('email1').value;
    let place1=document.getElementById('place1').value;
 
    if(yName==""&& email1==""&&numb==""&& place1==""){ 
        document.getElementById('yname').style.border=('2px solid red');
        document.getElementById('numb1').style.border=('2px solid red');
        document.getElementById('email1').style.border=('2px solid red');
        document.getElementById('place1').style.border=('2px solid red');
        alert("All field Mendatory")
        return false;
    }
    else 
    if (yName===""){
        alert("Please enter Your Name");
        document.getElementById('yname').style.border=('2px solid red');
        return false;
    } 
    else if (email1===""){
        alert("Please enter Your Email");
        document.getElementById('email1').style.border=('2px solid red');
        return false;
    } 
    else if (numb===""){
        alert("Please enter Your Number")
        document.getElementById('numb1').style.border=('2px solid red');
        return false;
   
    }else if (numb.length<10||numb.length>10){
        alert("Please enter Number Only 10 Gigite");
        document.getElementById('numb1').style.border=('2px solid red');
        return false;
    } 
     else if (place1===""){
        alert("Please enter Your City");
        document.getElementById('place1').style.border=('2px solid red');
        return false;
    } else{
        document.getElementById('yname').style.border=('2px solid green');
        document.getElementById('numb1').style.border=('2px solid green');
        document.getElementById('email1').style.border=('2px solid green');
        document.getElementById('place1').style.border=('2px solid green');
        
        
            document.getElementById('home_box').style.display="none" ;
            document.getElementById('project_gallery').style.display="none" ;
            document.getElementById('about').style.display="none" ;
            document.getElementById('joinNow').style.display="none" ;
            document.getElementById('msgSuccess').style.display="flex" ;
    
           
        console.log(document.getElementById("nameMsg").innerHTML=`Dear ${yName}`);      
         
         return true; 
    }
}
    
