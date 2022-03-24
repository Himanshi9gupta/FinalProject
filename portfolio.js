
let navHome = document.getElementById("home");

let navAbout = document.getElementById("about");
let navPortfolio = document.getElementById("portfolio");
let navBlog = document.getElementById("achievement");
let navContact = document.getElementById("contact");


document.getElementById('myWork').addEventListener('click',()=>{
    navPortfolio.scrollIntoView({behavior:"smooth"})

});
document.getElementById('nav1').addEventListener('click',()=>{
    navHome.scrollIntoView({behavior:"smooth"})
});
document.getElementById('nav2').addEventListener('click',()=>{
    navAbout.scrollIntoView({behavior:"smooth"})
    fill1();fill2();fill3();fill4();fill5();fill6();fill7();fill8();  
});
document.getElementById('nav3').addEventListener('click',()=>{
    navPortfolio.scrollIntoView({behavior:"smooth"})
    createCard();
    
});
document.getElementById('nav4').addEventListener('click',()=>{
    navBlog.scrollIntoView({behavior:"smooth"})
});
document.getElementById('nav5').addEventListener('click',()=>{
    navContact.scrollIntoView({behavior:"smooth"})
});

const fill1 = ()=>{
    let width = 1;
    const id = setInterval(() => {
        if(width === 90){
           clearInterval(id);
        }
         else{
            width++;
            document.getElementById('bar1').style.width = `${width}%`
            
        }
    }, 30);

}
const fill2 = ()=>{
    let width = 1;

    const id = setInterval(() => {
        if(width === 90){
           clearInterval(id);
        }
         else{
            width++;
            document.getElementById('bar2').style.width = `${width}%`; 
        }
    }, 30);
}
const fill3 = ()=>{
    let width = 1;

    const id = setInterval(() => {
        if(width === 80){
           clearInterval(id);
        }
         else{
            width++;
            document.getElementById('bar3').style.width = `${width}%`; 
        }
    }, 30);
}
const fill4 = ()=>{
    let width = 1;

    const id = setInterval(() => {
        if(width === 70){
           clearInterval(id);
        }
         else{
            width++;
            document.getElementById('bar4').style.width = `${width}%`; 
        }
    }, 30);
}
const fill5 = ()=>{
    let width = 1;

    const id = setInterval(() => {
        if(width === 65){
           clearInterval(id);
        }
         else{
            width++;
            document.getElementById('bar5').style.width = `${width}%`; 
        }
    }, 30);
}
const fill6 = ()=>{
    let width = 1;

    const id = setInterval(() => {
        if(width === 60){
           clearInterval(id);
        }
         else{
            width++;
            document.getElementById('bar6').style.width = `${width}%`; 
        }
    }, 30);
}
const fill7 = ()=>{
    let width = 1;

    const id = setInterval(() => {
        if(width === 50){
           clearInterval(id);
        }
         else{
            width++;
            document.getElementById('bar7').style.width = `${width}%`; 
        }
    }, 30);
}
const fill8 = ()=>{
    let width = 1;

    const id = setInterval(() => {
        if(width === 40){
           clearInterval(id);
        }
         else{
            width++;
            document.getElementById('bar8').style.width = `${width}%`; 
        }
    }, 30);
}
document.getElementById('frontEndBtn').addEventListener('click',()=>{
    document.getElementById('frontEndBtn').classList.add("buttonActive");
    document.getElementById('allListProject').classList.remove("buttonActive");
    document.getElementById('fullStackBtn').classList.remove("buttonActive");
})
document.getElementById('fullStackBtn').addEventListener('click',()=>{
    document.getElementById('frontEndBtn').classList.remove("buttonActive");
    document.getElementById('allListProject').classList.remove("buttonActive");
    document.getElementById('fullStackBtn').classList.add("buttonActive");
})

document.getElementById("allListProject").classList.add("buttonActive");

async function createCard (){

  let imgCard = document.querySelectorAll('.imgcard');
  for(let x= 0;x<imgCard.length;x++){
    imgCard[x].remove();
  }

  document.getElementById("allListProject").classList.add("buttonActive");
  document.getElementById('frontEndBtn').classList.remove("buttonActive");
  document.getElementById('fullStackBtn').classList.remove("buttonActive");

if(document.querySelectorAll('.imgcard').length === 5){
    return
}
    let response = await fetchImages();
   let data = await response;
    let card;
    let arr = ["Windrose Application","Digital Innovation Lab", "Barclays ATP World Tour","Customer Collaboration Site","HSBC banking portal"];
    let client = ["T-Mobile", "Boeing", "ATP world tour", "Boeing", "HSBC"]
   
           for(let i = 0;i<5;i++){
                 card = document.createElement('div');
                card.style.width = '25.33%';
                card.classList.add("imgcard");
                card.style.border = '1px solid black';
                card.style.height = '268px';
               
                document.getElementById('projectData').append(card);
                card.innerHTML =  `
                <div class="imgDiv">
                <img src="${data[i].urls.small}" class="cardImg" style="width:404px; height:268px;position:absolute">
                </div>
                <div class="hiddenDiv" style="position:absolute;text-align:center">
                    <header style="font-size: 30px;margin-top: 75px;color:white">${arr[i]}</header>
                    <p style="color:white">${client[i]}</p>
                    <button class="viewMore" id=viewMoreBtn${i}>View more</button>
                </div>
                
                `;
           }

         document.getElementById('viewMoreBtn0').addEventListener('click',windrose);
         document.getElementById('viewMoreBtn1').addEventListener('click',digitalInnovation);
         document.getElementById('viewMoreBtn2').addEventListener('click',digitalbarclaysInnovation);
         document.getElementById('viewMoreBtn3').addEventListener('click',CustomerBoeing);
         document.getElementById('viewMoreBtn4').addEventListener('click',hsbcPortal);


      
}

async function createFrontEnd(){
  let imgCard = document.querySelectorAll('.imgcard');
  for(let x= 0;x<imgCard.length;x++){
    imgCard[x].remove();
  }

  document.getElementById("allListProject").classList.remove("buttonActive");
  document.getElementById('frontEndBtn').classList.add("buttonActive");
  document.getElementById('fullStackBtn').classList.remove("buttonActive");

  if(document.querySelectorAll('.imgcard').length === 3){
    return
}
let response = await fetchImages();
   let data = await response;
    let card;
  let frontEndClient = [ "ATP world tour", "Boeing", "HSBC"];
  let frontEndPro = [ "Barclays ATP World Tour","Digital Innovation Lab","HSBC banking portal"]
  for(let i = 0;i<3;i++){
    card = document.createElement('div');
   card.style.width = '25.33%';
   card.classList.add("imgcard");
   card.style.border = '1px solid black';
   card.style.height = '268px';
  
   document.getElementById('projectData').append(card);
   card.innerHTML =  `
   <div class="imgDiv">
   <img src="${data[i].urls.small}" class="cardImg" style="width:404px; height:268px;position:absolute">
   </div>
   <div class="hiddenDiv" style="position:absolute;text-align:center">
       <header style="font-size: 30px;margin-top: 75px;color:white">${frontEndPro[i]}</header>
       <p style="color:white">${frontEndClient[i]}</p>
       <button class="viewMore" id=viewMoreBtn${i}>View more</button>
   </div>
   
   `;
}
document.getElementById('viewMoreBtn0').addEventListener('click',windrose);
document.getElementById('viewMoreBtn1').addEventListener('click',digitalInnovation);
document.getElementById('viewMoreBtn2').addEventListener('click',digitalbarclaysInnovation);


}


async function createFullStack(){
  let imgCard = document.querySelectorAll('.imgcard');
  for(let x= 0;x<imgCard.length;x++){
    imgCard[x].remove();
  }

  document.getElementById("allListProject").classList.remove("buttonActive");
  document.getElementById('frontEndBtn').classList.remove("buttonActive");
  document.getElementById('fullStackBtn').classList.add("buttonActive");

  if(document.querySelectorAll('.imgcard').length === 1){
    return
}
let response = await fetchImages();
   let data = await response;
    let card;
          let fullStackClient = [ "T-Mobile"];
          let fullStackPro = [ "Windrose Application"]
       
          card = document.createElement('div');
           card.style.width = '25.33%';
           card.classList.add("imgcard");
           card.style.border = '1px solid black';
           card.style.height = '268px';
          
           document.getElementById('projectData').append(card);
           card.innerHTML =  `
           <div class="imgDiv">
           <img src="${data[0].urls.small}" class="cardImg" style="width:404px; height:268px;position:absolute">
           </div>
           <div class="hiddenDiv" style="position:absolute;text-align:center">
               <header style="font-size: 30px;margin-top: 75px;color:white">${fullStackPro[0]}</header>
               <p style="color:white">${fullStackClient[0]}</p>
               <button class="viewMore" id=viewMoreBtn${0}>View more</button>
           </div>
           
           `;
document.getElementById('viewMoreBtn0').addEventListener('click',windrose);



}



document.getElementById('allListProject').addEventListener('click',createCard);
document.getElementById('frontEndBtn').addEventListener('click',createFrontEnd);
document.getElementById('fullStackBtn').addEventListener('click',createFullStack);

const API_KEY = 'PcVlSPxuMF_pCNj7lBOytelM-ivwnSLndNdVWQdFG08';
const baseUrl = 'https://api.unsplash.com/photos/';
const url = `${baseUrl}?client_id=${API_KEY}`;

const fetchImages = async ()=>{
    let data = await fetch(url)
    let response = await data.json();

  return response;

}
fetchImages();
createCard();
let modal = document.getElementById("myModal");  
let span = document.getElementsByClassName("close")[0];
let para = document.getElementById('modalMessage');
const windrose = ()=>{
   
    modal.style.display = "block";
    para.innerText = `Software Developer Client: T-Mobile, Bellevue WA April 2020 – present
    
    Working as a Software Developer on Windrose Application which is a portfolio management system used by product managers and architects at T-Mobile to collaborate on a single platform for managing concept intakes, assessments and architecture designs.
    I am working on a spring boot framework, where I am using Angular JS, JavaScript, CSS3, Bootstrap, UI Grid and Java for interacting with database.
    I focus on developing end to end web pages, also designing the web pages, creates repository to get the data and manipulate it in the application. I am using Devops practice.`
    
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
}

const digitalInnovation = ()=>{
   
    modal.style.display = "block";
    para.innerText = `Technology Analyst Client: The Boeing Company, Renton WA November 2019 – March 2020
    

    Worked as a Front-End Developer on Digital Innovation Lab for Emirates. This system is used for generating flight planning sheet, which provides various data such as flight release, risk assessment, performance analysis, etc.
    I focused on the development of the front-end components of the system.using Angular 8, SCSS, RESTful APIs, HTML5, SASS, TypeScript, GULP and Responsive Web Design.`
    
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
}

const digitalbarclaysInnovation = ()=>{
   
    modal.style.display = "block";
    para.innerText = `Client: Barclays ATP World Tour
    • Redesigned the website of ATP World Tour using Responsive Web Design, JavaScript, Bootstrap, HTML5, and SASS as per the client requirements. The ATP is the governing body of men’s professional
    tennis circuits. It was an agile project. http://www.atpworldtour.com/. In this project, I worked one-on- one with client to develop layout, color scheme for the website and implemented it into a final interface design. I also helped onboard junior developers on this project and guided them throughout the project. I received appreciation from client for keeping up with frequently changing requirements and delivering all the components within the timeframe.`
    
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
}

const CustomerBoeing = ()=>{
   
    modal.style.display = "block";
    para.innerText = `Worked on Customer Collaboration Site, which is a collection of all regions and airlines profiles, used by Sales and Marketing directors to collaborate with the regional teams and perform operations such as keeping track of airlines, making announcements, sharing data etc. My duties involved customization of front-end components using SharePoint Designer 2013, creating and updating regional sites, fetching data from Tera Database, analyzing business requirements and participating in technical designs.`
    
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
}

const username = document.getElementById('name');
const message = document.getElementById('message');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const hsbcPortal = ()=>{
   
    modal.style.display = "block";
    para.innerText = `Senior System Engineer Client: HSBC
    • Worked as a front-end developer on the migration of whole HSBC banking portal to Angular 2 with Typescript using ECMAScript6, HTML5, CSS3, Responsive Web Design, Bootstrap and RESTful API for development of a cross browser platform application. In this project, I was a key contributor in designing the UI and developed most of the front-end pages for the web application.`
    
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
}

const emailValidation = ()=>{
 
  const emailPattern = new RegExp(/\w+\@+\w+\.+[\w]{3}/g);
  if(!emailPattern.test(email.value)){
    email.setCustomValidity("Please enter valid email address.")
    
  }
  else{
    email.setCustomValidity('');
  }

}

const nameValidation = ()=>{
  if(username.value.length < 1){
    username.setCustomValidity("Name cannot be left blank");
    
  }
  else{
    username.setCustomValidity('');
  }


}

const messageValidation = ()=>{
  if(message.value.length < 1){
    message.setCustomValidity('Message cannot be empty');
    
  }
  else{
    message.setCustomValidity('')
  }

}

const validation = ()=>{
  
  let regex = new RegExp(/^\(?([0-9]{3})\)?[-\s]([0-9]{3})[-\s]([0-9]{4})$/);
  
  if(phone.value.length < 1 || !(regex.test(phone.value))){
    phone.setCustomValidity('please check the number input');
  }
  else{
    phone.setCustomValidity('')
  }

  emailValidation();
  nameValidation();
  messageValidation();


}

document.getElementById('submit').addEventListener('click',(e)=>{
    let fullname = username.value;
    let emailVal = email.value;
    let messageVal = message.value;
    let phoneVal =phone.value;
    validation();
    localStorage.setItem('Name',fullname);
    localStorage.setItem('Email',emailVal);
    localStorage.setItem('Message',messageVal);
    localStorage.setItem('phone',phoneVal);
    modal.style.display = "block";

    if(username.validity.valid === true && message.validity.valid === true && email.validity.valid === true && phone.validity.valid === true){
      e.preventDefault();
      para.innerText =`Thank you ${fullname} for submitting your question.`;
        
    }
    else{
      e.preventDefault();
      para.innerText =`Please make sure the inputs enter are valid`;
    }
    

    span.onclick = function() {
      modal.style.display = "none";
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
})

