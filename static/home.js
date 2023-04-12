document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener("click",function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        })
    })
})

var btn=document.getElementById("btn");
btn.addEventListener('click',function(e){
    e.preventDefault();
    var name=document.getElementById("name1").value;
    var mail=document.getElementById("gmail").value;
    var contact=document.getElementById("contact").value;
    var message=document.getElementById("message").value;
    var subj="Meassge From "+name;
    var Body="Name : "+name+"<br>Contact No : "+contact+"<br>Gmail : "+mail+"<br>Message : "+message;
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
