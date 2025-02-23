vbarStatus=false;
var mainnewstracker = "middle";
count =0;


let aboutPopup=document.querySelector('.about-popup');
let departmentPopup=document.querySelector('.department-popup');
let studentsPopup=document.querySelector('.students-popup');
let admissionsPopup=document.querySelector('.admissions-popup');
let placementsPopup=document.querySelector('.placements-popup');
let contactPopup=document.querySelector('.contact-popup');
let othersPopup=document.querySelector('.others-popup');
document.querySelector('.about').addEventListener('click',()=> {
    const about=`
    <button class="about-button">Institute Profile</button>
    <button class="about-button">Facilities</button>
    <button class="about-button">MoU</button>
    <button class="about-button">Act(PPP)</button>
    <button class="about-button">Statute</button>
    <button class="about-button bottom-border">Annual Report</button>
    `;
    if(aboutPopup.innerHTML === '') {
        setTimeout(()=> {
            aboutPopup.innerHTML=about;
            departmentPopup.innerHTML='';      
            studentsPopup.innerHTML='';
            admissionsPopup.innerHTML='';
            placementsPopup.innerHTML='';
            contactPopup.innerHTML='';
            othersPopup.innerHTML='';
        },150);
    }
    else {
        setTimeout(()=> {
            aboutPopup.innerHTML='';
        },150);
    }
    
});

document.querySelector('.department').addEventListener('click',()=> {
    const department=`
    <button class="department-button">Computer Science & Eng. (CSE)</button>
    <button class="department-button">Electronics & communication Eng. (ECE)</button>
    <button class="department-button">Electoral Literacy Club</button>
    <button class="department-button">Guest House</button>
    <button class="department-button">Press Release</button>
    <button class="department-button bottom-border">Instituion Innovation Council</button>
    `;
    if(departmentPopup.innerHTML === '') {
        setTimeout(()=> {
            departmentPopup.innerHTML=department;
           
            aboutPopup.innerHTML='';
            studentsPopup.innerHTML='';
            admissionsPopup.innerHTML='';
            placementsPopup.innerHTML='';
            contactPopup.innerHTML='';
            othersPopup.innerHTML='';
        },150)
    }
    else {
        setTimeout(()=> {
            departmentPopup.innerHTML='';
        },150)
    }
});

document.querySelector('.students').addEventListener('click',()=> {
    const students=`
    <button class="students-button">Students Achievements</button>
    <button class="students-button">Activities</button>
    <button class="students-button">Scholarships</button>
    <button class="students-button">Student Counseller</button>
    <button class="students-button">Hostel</button>
    <button class="students-button">Student Mess</button>
    <button class="students-button">Fees</button>
    <button class="students-button">Convocation</button>
    <button class="students-button bottom-border">Important Forms(Downloads)</button>
    `;
    if(studentsPopup.innerHTML === '') {
        setTimeout(()=> {
            studentsPopup.innerHTML=students;
            aboutPopup.innerHTML='';
            departmentPopup.innerHTML='';
            admissionsPopup.innerHTML='';
            placementsPopup.innerHTML='';
            contactPopup.innerHTML='';
            othersPopup.innerHTML='';
        },150)
    }
    else {
        setTimeout(()=> {
            studentsPopup.innerHTML='';
        },150)
    }
    
});

document.querySelector('.admissions').addEventListener('click',()=> {
    const admissions=`
    <button class="admissions-button">Undergraduate B Tech</button>
    <button class="admissions-button">UG Academic Rule Book</button>
    <button class="admissions-button">Postgraduate PG</button>
    <button class="admissions-button bottom-border">PG Academic Rule Book</button>
    `;
    if(admissionsPopup.innerHTML === '') {
        setTimeout(()=> {
            admissionsPopup.innerHTML=admissions;
            aboutPopup.innerHTML='';
            departmentPopup.innerHTML='';
            studentsPopup.innerHTML='';
            placementsPopup.innerHTML='';
            contactPopup.innerHTML='';
            othersPopup.innerHTML='';
        },150)
    }
    else {
        setTimeout(()=> {
            admissionsPopup.innerHTML='';
        },150)
    }
    
});

document.querySelector('.placements').addEventListener('click',()=> {
    const placements=`
    <button class="placements-button">Why IIIT Nagpur</button>
    <button class="placements-button">For Students</button>
    <button class="placements-button">For Companies</button>
    <button class="placements-button">Contact T & P</button>
    <button class="placements-button">Internships</button>
    <button class="placements-button">Placements Statistics</button>
    <button class="placements-button bottom-border">About Us</button>
    `;
    if(placementsPopup.innerHTML === '') {
        setTimeout(()=> {
            placementsPopup.innerHTML=placements;
            aboutPopup.innerHTML='';
            departmentPopup.innerHTML='';
            studentsPopup.innerHTML='';
            admissionsPopup.innerHTML='';
            contactPopup.innerHTML='';
            othersPopup.innerHTML='';
        },150)
    }
    else {
        setTimeout(()=> {
            placementsPopup.innerHTML='';
        },150)
    }
    
});

document.querySelector('.contact').addEventListener('click',()=> {
    const contact=`
    <button class="contact-button">Why IIIT Nagpur</button>
    <button class="contact-button">For Students</button>
    <button class="contact-button">For Companies</button>
    <button class="contact-button">Contact T & P</button>
    <button class="contact-button">Internships</button>
    <button class="contact-button">Placements Statistics</button>
    <button class="contact-button bottom-border">About Us</button>
    `;
    if(contactPopup.innerHTML === '') {
        setTimeout(()=> {
            contactPopup.innerHTML=contact;
            aboutPopup.innerHTML='';
            departmentPopup.innerHTML='';
            studentsPopup.innerHTML='';
            admissionsPopup.innerHTML='';
            placementsPopup.innerHTML='';
            othersPopup.innerHTML='';
        },150)
    }
    else {
        setTimeout(()=> {
            contactPopup.innerHTML='';
        },150)
    }
    
});

document.querySelector('.others').addEventListener('click',()=> {
    const others=`
    <button class="others-button">Consultancy</button>
    <button class="others-button">Offical Documents</button>
    <button class="others-button">Electoral Literacy Club</button>
    <button class="others-button">Guest House</button>
    <button class="others-button">Press Release</button>
    <button class="others-button">Placements Statistics</button>
    <button class="others-button bottom-border">Institution Innovation Council</button>
    `;
    if(othersPopup.innerHTML === '') {
        setTimeout(()=> {
            othersPopup.innerHTML=others;
            aboutPopup.innerHTML='';
            departmentPopup.innerHTML='';
            studentsPopup.innerHTML='';
            admissionsPopup.innerHTML='';
            placementsPopup.innerHTML='';
            contactPopup.innerHTML='';
        },150)
    }
    else {
        setTimeout(()=> {
            othersPopup.innerHTML='';
        },150)
    }
    
});

function VerticalBarAnimation()
{
    vbar = document.querySelector(".vertical-bar");
    if (vbarStatus==false)
    {
        vbar.classList.add("vertical-bar-after");
        vbarStatus=true
    }
    else{
        vbar.classList.remove("vertical-bar-after");
        vbarStatus=false
    }
}

function SubTOMain(tracker)
{
    if(tracker!=mainnewstracker)
    {
        var main = document.querySelector(".main-news");
        var maininfo = document.querySelector(".main-info");
        var maininfoconatain = document.querySelector(".main-info-contain");
        var mainimg = document.querySelector(".main-news-img");
        var sub = document.querySelector("." + tracker + "-news");
        var subimg = document.querySelector("." + tracker + "-news-img");
        var subinfocontain = document.querySelector("." + tracker + "-info-contain");
        var subinfo = document.querySelector("." + tracker + "-info");
        const temp = subinfo.innerHTML;
        const temp2 = maininfo.innerHTML;
        maininfo.innerHTML = "";
        subinfo.innerHTML = "";
        if(tracker==="left")
        {
            document.querySelector(".middle-news").classList.add("l")
        }
        else if(tracker==="right")
        {
            document.querySelector(".middle-news").classList.add("r")
        }
        else{
            a = document.querySelector(".middle-news");
            b = document.getElementById("middle-news")
            if(window.getComputedStyle(b).marginLeft==="300px")
            {
                a.classList.add("ml");
                setTimeout(()=>{
                        a.classList.remove("ml")
                },250);
            }
            else if(window.getComputedStyle(b).marginRight==="300px")
            {
                a.classList.add("mr");
                setTimeout(()=>{
                    a.classList.remove("mr")
                },250)
            }

            a.classList.add("ml")
            a.classList.remove("l")
            a.classList.remove("r")
        }
        subinfo.classList.add("main-opacity")
        setTimeout(() => {
            subinfo.classList.remove("main-opacity");
            subinfo.classList.add("main-info");
            subinfo.innerHTML = temp;
            maininfo.innerHTML=temp2
        }, 500);

        setTimeout(() => {
            maininfo.classList.remove("main-info");
            mainimg.classList.remove("main-news-img");
            maininfoconatain.classList.remove("main-info-contain");
            main.classList.remove("main-news");
            subinfocontain.classList.add("main-info-contain");
            subimg.classList.add("main-news-img");
            sub.classList.add("main-news");
        }, 1);
        console.log(mainnewstracker)
    }
    mainnewstracker=tracker;
}
function LeftPrev()
{
    count--;
    if(count==0)
    {
        document.querySelector(".news-arrow-left").innerHTML=""
    }
}
function RightNext()
{
    count++;
    if(count==1)
    {
        document.querySelector(".news-arrow-left").innerHTML="<img src='images/news-arrow-left.png'>"
    }
    
}