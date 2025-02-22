vbarStatus=false;
var mainnewstracker = "middle";
count =0;


let aboutPopup=document.querySelector('.about-popup');
let departmentPopup=document.querySelector('.department-popup');
let studentsPopup=document.querySelector('.students-popup');
document.querySelector('.about').addEventListener('click',()=> {
    const about=`
    <button class="about-button">Institute Profile</button>
    <button class="about-button">Facilities</button>
    <button class="about-button">MoU</button>
    <button class="about-button">Act(PPP)</button>
    <button class="about-button">Statute</button>
    <button class="about-button">Annual Report</button>
    `;
    if(aboutPopup.innerHTML === '') {
        setTimeout(()=> {
            aboutPopup.innerHTML=about;
            aboutPopup.classList.add('about-style');
            departmentPopup.innerHTML='';
            departmentPopup.classList.remove('department-style');
            studentsPopup.innerHTML='';
            studentsPopup.classList.remove('stduents-style');
        },150)
    }
    else {
        setTimeout(()=> {
            aboutPopup.innerHTML='';
        },150)
    }
    
});

document.querySelector('.department').addEventListener('click',()=> {
    const department=`
    <button class="department-button">Computer Science & Eng. (CSE)</button>
    <button class="department-button">Electronics & communication Eng. (ECE)</button>
    <button class="department-button">Electoral Literacy Club</button>
    <button class="department-button">Guest House</button>
    <button class="department-button">Press Release</button>
    <button class="department-button">Instituion Innovation Council</button>
    `;
    if(departmentPopup.innerHTML === '') {
        setTimeout(()=> {
            departmentPopup.innerHTML=department;
            departmentPopup.classList.add('department-style');
            aboutPopup.innerHTML='';
            aboutPopup.classList.remove('about-style');
            studentsPopup.innerHTML='';
            studentsPopup.classList.remove('stduents-style');
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
    <button class="students-button">Important Forms(Downloads)</button>
    `;
    if(studentsPopup.innerHTML === '') {
        setTimeout(()=> {
            studentsPopup.innerHTML=students;
            studentsPopup.classList.add('students-style');
            aboutPopup.innerHTML='';
            aboutPopup.classList.remove('about-style');
            departmentPopup.innerHTML='';
            departmentPopup.classList.remove('department-style');
        },150)
    }
    else {
        setTimeout(()=> {
            studentsPopup.innerHTML='';
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
