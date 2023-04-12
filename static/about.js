document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener("click",function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        })
    })
})
var elem=document.getElementById("optiondes");
var pic=document.getElementById("myimage");   

function myfunc(){
    pic.src="static/images/option11.png";
    document.getElementById("one").style.background="rgb(145, 97, 97)";
    document.getElementById("two").style.background="white";
    document.getElementById("three").style.background="white";
    elem.innerHTML="<h4>Ramesh Fitness Point is a gym that is dedicated to helping individuals achieve their fitness goals in a comfortable and welcoming environment. The gym is named after its founder, Ramesh, who is a well-respected fitness expert in the community.</h4><br><h4>At Ramesh Fitness Point, you will find state-of-the-art equipment, modern facilities, and a team of experienced trainers who are committed to helping you reach your fitness goals. Whether you are looking to build muscle, lose weight, or improve your overall health and well-being, the team at Ramesh Fitness Point can provide you with the guidance, support, and motivation you need to succeed.</h4><br><h4>The gym offers a range of programs and services, including group fitness classes, personal training, nutritional counseling, and more. The group fitness classes are designed to be fun, challenging, and effective, with options such as yoga, spin, and strength training. Personal training sessions are tailored to each individual's specific needs and goals, and the trainers work closely with clients to ensure they are progressing towards their objectives.</h4>"
}
function myfunc1(){
    pic.src="static/images/option221.png";
    document.getElementById("two").style.background="rgb(145, 97, 97)";
    document.getElementById("one").style.background="white";
    document.getElementById("three").style.background="white";
    elem.innerHTML="<h3><ul><li>Clean and well-maintained facility</li><li>Well-Designed Space and Facility </li><li>Variety of equipment</li><li>Trained and qualified staff</li><li>Personal training</li><li>Nutrition guidance</li><li>Flexible membership options</li><li>Clean towels and amenities</li><li>Positive and welcoming environment</li><li>Accessible location and hours</li></ul></h3>";
}
function myfunc2(){
    pic.src="static/images/option11.png";
    document.getElementById("three").style.background="rgb(145, 97, 97)";
    document.getElementById("two").style.background="white";
    document.getElementById("one").style.background="white";
    elem.innerHTML="<h4>Our gym stands out from the competition because we offer a unique combination of high-quality equipment, expert training, and a welcoming atmosphere. Our state-of-the-art facility features top-of-the-line cardio and weight machines, as well as functional training equipment that is designed to help our members achieve their fitness goals.<br><br>Our trainers are highly qualified and certified, and they work closely with our members to develop personalized workout plans that are tailored to their individual needs and goals.<br><br> Our gym is also known for its positive and friendly atmosphere, which makes everyone feel welcome and motivated to achieve their fitness goals. Whether you're a seasoned fitness enthusiast or just starting out on your fitness journey, our gym has everything you need to succeed<br><br>Atlast you can say that after joining we not only offers you a Gym, We offers you a Family. A Family that will take care of you and your health.</h4>";
}

var flag=0;

let slides=document.getElementsByClassName("slide")
function reset(){
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
}
function control(x){
    flag=flag+x;
    if(flag==slides.length){
        flag=0;
    }
    if(flag<0){
        flag=slides.length-1;
    }
    slideshow(flag);
}
function slideshow(num){
    reset();
    slides[num].style.display="block";
}
slideshow(0);
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