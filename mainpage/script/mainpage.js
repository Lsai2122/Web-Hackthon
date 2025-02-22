vbarStatus=false;
var mainnewstracker = "middle";

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
            admissionsPopup.innerHTML='';
            admissionsPopup.classList.remove('admissions-style');
            placementsPopup.innerHTML='';
            placementsPopup.classList.remove('placements-style');
            contactPopup.innerHTML='';
            contactPopup.classList.remove('contact-style');
            othersPopup.innerHTML='';
            othersPopup.classList.remove('others-style');
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
            admissionsPopup.innerHTML='';
            admissionsPopup.classList.remove('admissions-style');
            placementsPopup.innerHTML='';
            placementsPopup.classList.remove('placements-style');
            contactPopup.innerHTML='';
            contactPopup.classList.remove('contact-style');
            othersPopup.innerHTML='';
            othersPopup.classList.remove('others-style');
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
            admissionsPopup.innerHTML='';
            admissionsPopup.classList.remove('admissions-style');
            placementsPopup.innerHTML='';
            placementsPopup.classList.remove('placements-style');
            contactPopup.innerHTML='';
            contactPopup.classList.remove('contact-style');
            othersPopup.innerHTML='';
            othersPopup.classList.remove('others-style');
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
    <button class="admissions-button">PG Academic Rule Book</button>
    `;
    if(admissionsPopup.innerHTML === '') {
        setTimeout(()=> {
            admissionsPopup.innerHTML=admissions;
            admissionsPopup.classList.add('admissions-style');
            aboutPopup.innerHTML='';
            aboutPopup.classList.remove('about-style');
            departmentPopup.innerHTML='';
            departmentPopup.classList.remove('department-style');
            studentsPopup.innerHTML='';
            studentsPopup.classList.remove('students-style');
            placementsPopup.innerHTML='';
            placementsPopup.classList.remove('placements-style');
            contactPopup.innerHTML='';
            contactPopup.classList.remove('contact-style');
            othersPopup.innerHTML='';
            othersPopup.classList.remove('others-style');
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
    <button class="placements-button">About Us</button>
    `;
    if(placementsPopup.innerHTML === '') {
        setTimeout(()=> {
            placementsPopup.innerHTML=placements;
            placementsPopup.classList.add('placements-style');
            aboutPopup.innerHTML='';
            aboutPopup.classList.remove('about-style');
            departmentPopup.innerHTML='';
            departmentPopup.classList.remove('department-style');
            studentsPopup.innerHTML='';
            studentsPopup.classList.remove('students-style');
            admissionsPopup.innerHTML='';
            admissionsPopup.classList.remove('admissions-style');
            contactPopup.innerHTML='';
            contactPopup.classList.remove('contact-style');
            othersPopup.innerHTML='';
            othersPopup.classList.remove('others-style');
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
    <button class="contact-button">About Us</button>
    `;
    if(contactPopup.innerHTML === '') {
        setTimeout(()=> {
            contactPopup.innerHTML=contact;
            contactPopup.classList.add('contact-style');
            aboutPopup.innerHTML='';
            aboutPopup.classList.remove('about-style');
            departmentPopup.innerHTML='';
            departmentPopup.classList.remove('department-style');
            studentsPopup.innerHTML='';
            studentsPopup.classList.remove('students-style');
            admissionsPopup.innerHTML='';
            admissionsPopup.classList.remove('admissions-style');
            placementsPopup.innerHTML='';
            placementsPopup.classList.remove('placements-style');
            othersPopup.innerHTML='';
            othersPopup.classList.remove('others-style');
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
    <button class="others-button">Institution Innovation Council</button>
    `;
    if(othersPopup.innerHTML === '') {
        setTimeout(()=> {
            othersPopup.innerHTML=others;
            othersPopup.classList.add('others-style');
            aboutPopup.innerHTML='';
            aboutPopup.classList.remove('about-style');
            departmentPopup.innerHTML='';
            departmentPopup.classList.remove('department-style');
            studentsPopup.innerHTML='';
            studentsPopup.classList.remove('students-style');
            admissionsPopup.innerHTML='';
            admissionsPopup.classList.remove('admissions-style');
            placementsPopup.innerHTML='';
            placementsPopup.classList.remove('placements-style');
            contactPopup.innerHTML='';
            contactPopup.classList.remove('contact-style');
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
        var main = document.querySelector(".main-news")
        var maininfo = document.querySelector(".main-info")
        var maininfoconatain = document.querySelector(".main-info-contain")
        var mainimg = document.querySelector(".main-news-img")
        var sub = document.querySelector("."+tracker+"-news")
        var subimg = document.querySelector("."+tracker+"-news-img")
        var subinfocontain = document.querySelector("."+tracker+"-info-contain")
        var subinfo = document.querySelector("."+tracker+"-info")
        temp = subinfo.innerHTML
        subinfo.innerHTML = ""
        setTimeout(function a(subinfo)
        {
            subinfo.innerHTML = temp;
        },0.5)
        maininfo.classList.remove("main-info")
        mainimg.classList.remove("main-news-img")
        maininfoconatain.classList.remove('main-info-contain')
        main.classList.remove("main-news")
        subinfo.classList.add("main-info")
        subinfocontain.classList.add("main-info-contain")
        subimg.classList.add("main-news-img")
        sub.classList.add("main-news")
        mainnewstracker=tracker;
    }
    console.log(mainnewstracker)
}
