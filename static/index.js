document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener("click",function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        })
    })
})
var btn=document.getElementById("btn1");
btn.addEventListener('click',function(e){
    e.preventDefault();
    var gname=document.getElementById("name2").value;
    var mail=document.getElementById("gmailgmail").value;
    var contact=document.getElementById("contactmail").value;
    var message=document.getElementById("message").value;
    var subj="Meassge From "+name2;
    var Body="Name : "+gname+"<br>Contact No : "+contact+"<br>Gmail : "+mail+"<br>Message : "+message;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "rmstar458@gmail.com",
        Password : "1F4C3A7B77A86E9AFA1767B0AF9B8DA28C46",
        To : "rmstar457@gmail.com",
        From : "rmstar458@gmail.com",
        Subject : subj,
        Body : Body
    }).then(
        message => {
            if(message=="OK"){
            alert("Mail Sent Successfully")
            var frm=document.getElementsByName("myform")[0];
            frm.reset();
            }
            else{
            console.error(message)
            alert("There is some error in sending the message")
            }
        }
);
})
function myfunc(){
    var name1=document.getElementById("name1").value;
    localStorage.setItem("name1",name1);
    var age=document.getElementById("age1").value;
    localStorage.setItem("age",age);
    var height=document.getElementById("height").value;
    localStorage.setItem("height",height);
    var weight=document.getElementById("weight").value;
    localStorage.setItem("weight",weight);
    var fac=document.getElementsByName("facility");
    for(i=0;i<fac.length;i++){
        if(fac[i].checked){
            localStorage.setItem("facility",fac[i].value);
        }
    }
    var plan=document.getElementsByName("plan");
    for(i=0;i<plan.length;i++){
        if(plan[i].checked){
            localStorage.setItem("plan",plan[i].value);
        }
    }
    var trainer=document.getElementsByName("trainer");
    for(i=0;i<trainer.length;i++){
        if(trainer[i].checked){
            localStorage.setItem("trainer",trainer[i].value);
        }
    }
    
}
