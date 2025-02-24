vbarStatus = false;
var mainnewstracker = "middle";
count = 0;


let aboutPopup=document.querySelector('.about-popup');
let departmentPopup=document.querySelector('.department-popup');
let studentsPopup=document.querySelector('.students-popup');
let admissionsPopup=document.querySelector('.admissions-popup');
let placementsPopup=document.querySelector('.placements-popup');
let contactPopup=document.querySelector('.contact-popup');
let othersPopup=document.querySelector('.others-popup');

let styleSheet=document.styleSheets[0];
document.querySelector('.about').addEventListener('click',()=> {
    const about=`
    <button class="about-button" onclick="window.location.href = window.location.origin + '/About-us/institute-prof.html';">Institute Profile</button>
    <button class="about-button" onclick="window.location.href = window.location.origin + '/About-us/facilities.html';">Facilities</button>
    <button class="about-button" onclick="window.location.href = window.location.origin + '/About-us/MOU.html';">MoU</button>
    <button class="about-button">Act(PPP)</button>
    <button class="about-button" onclick="window.location.href = window.location.origin + '/About-us/statute.html';">Statute</button>
    <button class="about-button bottom-border" onclick="window.location.href = window.location.origin + '/About-us/annual-reports.html';">Annual Report</button>
    `;
    if (aboutPopup.innerHTML === '') {
        setTimeout(() => {
            aboutPopup.innerHTML = about;
            departmentPopup.innerHTML = '';
            studentsPopup.innerHTML = '';
            admissionsPopup.innerHTML = '';
            placementsPopup.innerHTML = '';
            contactPopup.innerHTML = '';
            othersPopup.innerHTML = '';
            aboutPopup.classList.add('shadowlist');
            departmentPopup.classList.remove('shadowlist');
            studentsPopup.classList.remove('shadowlist');
            admissionsPopup.classList.remove('shadowlist');
            placementsPopup.classList.remove('shadowlist');
            contactPopup.classList.remove('shadowlist');
            othersPopup.classList.remove('shadowlist');
            
        }, 150);
    }
    else {
        setTimeout(() => {
            aboutPopup.innerHTML = '';
        }, 150);
    }

});

document.querySelector('.department').addEventListener('click', () => {
    const department = `
    <button class="department-button">Computer Science & Eng. (CSE)</button>
    <button class="department-button">Electronics & communication Eng. (ECE)</button>
    <button class="department-button" onclick="window.location.href = window.location.origin + '/departments/bs.html';">Basic Sciences</button>
    <button class="department-button">Doctorial Programme</button>
    <button class="department-button bottom-border">Programs</button>
    `;
    if (departmentPopup.innerHTML === '') {
        setTimeout(() => {
            departmentPopup.innerHTML = department;

            aboutPopup.innerHTML = '';
            studentsPopup.innerHTML = '';
            admissionsPopup.innerHTML = '';
            placementsPopup.innerHTML = '';
            contactPopup.innerHTML = '';
            othersPopup.innerHTML = '';
            aboutPopup.classList.remove('shadowlist');
            departmentPopup.classList.add('shadowlist');
            studentsPopup.classList.remove('shadowlist');
            admissionsPopup.classList.remove('shadowlist');
            placementsPopup.classList.remove('shadowlist');
            contactPopup.classList.remove('shadowlist');
            othersPopup.classList.remove('shadowlist');
        }, 150)
    }
    else {
        setTimeout(() => {
            departmentPopup.innerHTML = '';
        }, 150)
    }
});

document.querySelector('.students').addEventListener('click', () => {
    const students = `
    <button class="students-button" onclick="window.location.href = window.location.origin + '/students/students-ach.html'">Students Achievements</button>
    <button class="students-button" onclick="window.location.href = window.location.origin + '/students/activites.html';">Activities</button>
    <button class="students-button">Scholarships</button>
    <button class="students-button">Student Counseller</button>
    <button class="students-button">Hostel</button>
    <button class="students-button">Student Mess</button>
    <button class="students-button">Fees</button>
    <button class="students-button">Convocation</button>
    <button class="students-button bottom-border">Important Forms(Downloads)</button>
    `;
    if (studentsPopup.innerHTML === '') {
        setTimeout(() => {
            studentsPopup.innerHTML = students;
            aboutPopup.innerHTML = '';
            departmentPopup.innerHTML = '';
            admissionsPopup.innerHTML = '';
            placementsPopup.innerHTML = '';
            contactPopup.innerHTML = '';
            othersPopup.innerHTML = '';
            aboutPopup.classList.remove('shadowlist');
            departmentPopup.classList.remove('shadowlist');
            studentsPopup.classList.add('shadowlist');
            admissionsPopup.classList.remove('shadowlist');
            placementsPopup.classList.remove('shadowlist');
            contactPopup.classList.remove('shadowlist');
            othersPopup.classList.remove('shadowlist');
        }, 150)
    }
    else {
        setTimeout(() => {
            studentsPopup.innerHTML = '';
        }, 150)
    }

});

document.querySelector('.admissions').addEventListener('click', () => {
    const admissions = `
    <button class="admissions-button" onclick="window.location.href = window.location.origin + '/admissions/undergraduate.html'";>Undergraduate B Tech</button>
    <button class="admissions-button">UG Academic Rule Book</button>
    <button class="admissions-button" onclick="window.location.href = window.location.origin + '/admissions/adm-post.html';">Postgraduate PG</button>
    <button class="admissions-button bottom-border">PG Academic Rule Book</button>
    `;
    if (admissionsPopup.innerHTML === '') {
        setTimeout(() => {
            admissionsPopup.innerHTML = admissions;
            aboutPopup.innerHTML = '';
            departmentPopup.innerHTML = '';
            studentsPopup.innerHTML = '';
            placementsPopup.innerHTML = '';
            contactPopup.innerHTML = '';
            othersPopup.innerHTML = '';
            aboutPopup.classList.remove('shadowlist');
            departmentPopup.classList.remove('shadowlist');
            studentsPopup.classList.remove('shadowlist');
            admissionsPopup.classList.add('shadowlist');
            placementsPopup.classList.remove('shadowlist');
            contactPopup.classList.remove('shadowlist');
            othersPopup.classList.remove('shadowlist');
        }, 150)
    }
    else {
        setTimeout(() => {
            admissionsPopup.innerHTML = '';
        }, 150)
    }

});

document.querySelector('.placements').addEventListener('click', () => {
    const placements = `
    <button class="placements-button" onclick="window.location.href = window.location.origin + '/Placements/why-iiitn.html'">Why IIIT Nagpur</button>
    <button class="placements-button" onclick="window.location.href = window.location.origin + '/Placements/for-students.html'">For Students</button>
    <button class="placements-button" onclick="window.location.href = window.location.origin + '/Placements/for-companies.html'">For Companies</button>
    <button class="placements-button" onclick="window.location.href = window.location.origin + '/Placements/train-place.html'">Contact T & P</button>
    <button class="placements-button">Internships</button>
    <button class="placements-button" onclick="window.location.href = window.location.origin + '/Placements/placement-statistics.html'">Placements Statistics</button>
    <button class="placements-button bottom-border">About Us</button>
    `;
    if (placementsPopup.innerHTML === '') {
        setTimeout(() => {
            placementsPopup.innerHTML = placements;
            aboutPopup.innerHTML = '';
            departmentPopup.innerHTML = '';
            studentsPopup.innerHTML = '';
            admissionsPopup.innerHTML = '';
            contactPopup.innerHTML = '';
            othersPopup.innerHTML = '';
            aboutPopup.classList.remove('shadowlist');
            departmentPopup.classList.remove('shadowlist');
            studentsPopup.classList.remove('shadowlist');
            admissionsPopup.classList.remove('shadowlist');
            placementsPopup.classList.add('shadowlist');
            contactPopup.classList.remove('shadowlist');
            othersPopup.classList.remove('shadowlist');
        }, 150)
    }
    else {
        setTimeout(() => {
            placementsPopup.innerHTML = '';
        }, 150)
    }

});



document.querySelector('.others').addEventListener('click', () => {
    const others = `
    <button class="others-button">Consultancy</button>
    <button class="others-button">Offical Documents</button>
    <button class="others-button">Electoral Literacy Club</button>
    <button class="others-button">Guest House</button>
    <button class="others-button">Press Release</button>
    <button class="others-button">Placements Statistics</button>
    <button class="others-button bottom-border">Institution Innovation Council</button>
    `;
    if (othersPopup.innerHTML === '') {
        setTimeout(() => {
            othersPopup.innerHTML = others;
            aboutPopup.innerHTML = '';
            departmentPopup.innerHTML = '';
            studentsPopup.innerHTML = '';
            admissionsPopup.innerHTML = '';
            placementsPopup.innerHTML = '';
            contactPopup.innerHTML = '';
            aboutPopup.classList.remove('shadowlist');
            departmentPopup.classList.remove('shadowlist');
            studentsPopup.classList.remove('shadowlist');
            admissionsPopup.classList.remove('shadowlist');
            placementsPopup.classList.remove('shadowlist');
            contactPopup.classList.remove('shadowlist');
            othersPopup.classList.add('shadowlist');
        }, 150)
    }
    else {
        setTimeout(() => {
            othersPopup.innerHTML = '';
        }, 150)
    }

});



let moveHeadlines=document.querySelector('.headlines');
let eventList=document.querySelector('.event');
function moveToHeadlines() {
    window.scrollTo({
        top: 785,
        behavior: "smooth"
    });
}
function fullScreen() {
    const fullScreenEvent=`
    <div>
        <div class="eve-1">
            <div class="eve-1-contain">
                <img src="images/event-image-1.png">
                <div class="eve-1-text-contain-1">
                    <p class="eve-1-text-1">Enterpreneurship with AI</p>
                </div>
                <div class="eve-1-text-contain-2">
                    <p class="eve-1-text-2">22 JAN 2025, 16:30 </p>
                </div>
            </div>
        </div>
        <div class="eve-2_3">
            <div class="eve-2-contain">
                <img style="width: 460px;"  src="images/event5.jpg">
                <div class="eve-2-text-contain-1">
                    <p class="eve-2-text-1">Certification Course in python</p>
                </div>
                <div class="eve-2-text-contain-2">
                    <p class="eve-2-text-2">26 JAN 2024, 17:00 </p>
                </div>
            </div>
            <div class="eve-3-contain">
                <img style="width: 460px;" src="images/event6.jpg">
                <div class="eve-3-text-contain-1">
                    <p class="eve-3-text-1">Certification Course in python</p>
                </div>
                <div class="eve-3-text-contain-2">
                    <p class="eve-3-text-2">26 JAN 2024, 17:00 </p>
                </div>
            </div>
        </div>
        <br>
        <div class="eve-2_3">
            <div class="eve-2-contain">
                <img src="images/event-image-2.png">
                <div class="eve-2-text-contain-1">
                    <p class="eve-2-text-1">Certification Course in python</p>
                </div>
                <div class="eve-2-text-contain-2">
                    <p class="eve-2-text-2">26 JAN 2024, 17:00 </p>
                </div>
            </div>
            <div class="eve-3-contain">
                <img src="images/event-image-3.png">
                <div class="eve-3-text-contain-1">
                    <p class="eve-3-text-1">Certification Course in python</p>
                </div>
                <div class="eve-3-text-contain-2">
                    <p class="eve-3-text-2">26 JAN 2024, 17:00 </p>
                </div>
            </div>
        </div>
        <div class="eve-1">
            <div class="eve-1-contain">
                <img style="width: 460px;"  src="images/event4.jpg">
                <div class="eve-1-text-contain-1">
                    <p class="eve-1-text-1">Enterpreneurship with AI</p>
                </div>
                <div class="eve-1-text-contain-2">
                    <p class="eve-1-text-2">22 JAN 2025, 16:30 </p>
                </div>
            </div>
        </div>
        <div class="dd-arrow-contain full-event-list" onclick="halfScreen()">
            <img class="drop-down-arrow-dark" src="images/lift-up-arrow.png">
        </div>
    </div>
    `;
    eventList.innerHTML=fullScreenEvent;

    eventList.scrollIntoView({ behavior: "smooth", block: "end" });
}

function halfScreen() {
    const halfScreenEvent=`
        <div>
                <div class="eve-1">
                    <div class="eve-1-contain">
                        <img src="images/event-image-1.png">
                        <div class="eve-1-text-contain-1">
                            <p class="eve-1-text-1">Enterpreneurship with AI</p>
                        </div>
                        <div class="eve-1-text-contain-2">
                            <p class="eve-1-text-2">22 JAN 2025, 16:30 </p>
                        </div>
                    </div>
                </div>
                <div class="eve-2_3">
                    <div class="eve-2-contain">
                        <img src="images/event-image-2.png">
                        <div class="eve-2-text-contain-1">
                            <p class="eve-2-text-1">Certification Course in python</p>
                        </div>
                        <div class="eve-2-text-contain-2">
                            <p class="eve-2-text-2">26 JAN 2024, 17:00 </p>
                        </div>
                    </div>
                    <div class="eve-3-contain">
                        <img src="images/event-image-3.png">
                        <div class="eve-3-text-contain-1">
                            <p class="eve-3-text-1">Certification Course in python</p>
                        </div>
                        <div class="eve-3-text-contain-2">
                            <p class="eve-3-text-2">26 JAN 2024, 17:00 </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dd-arrow-contain full-event-list" onclick="fullScreen()">
                <img class="drop-down-arrow-dark" src="images/drop-down-arrow-dark.png">
        </div>
    `;
    eventList.innerHTML=halfScreenEvent;
    eventList.scrollIntoView({ behavior: "smooth",block: "start" });
}

list = ["../mainpage/images/photo-campus/IIIT12.jpg","../mainpage/images/photo-campus/IIIT11.jpg","../mainpage/images/photo-campus/IIIT15.jpg","../mainpage/images/photo-campus/IIIT17.jpg","../mainpage/images/photo-campus/IIIT19.jpg","../mainpage/images/photo-campus/IIIT21.jpg","../mainpage/images/photo-campus/IIIT22.jpg","../mainpage/images/photo-campus/IIIT26.jpg","../mainpage/images/photo-campus/IIIT28.jpg","../mainpage/images/photo-campus/IIIT29.jpg","../mainpage/images/photo-campus/IMG_20230927_103914.jpg","../mainpage/images/photo-campus/IMG_20230927_104539.jpg"];
i=0;
setInterval(() => {
    setTimeout(()=>
    {
        document.querySelector(".img-1").setAttribute("src", list[i % 12])
    },10);
    setTimeout(()=> {
        document.querySelector(".img-2").setAttribute("src", list[(i + 1 ) % 12])
    },20);
    setTimeout(()=> {
        document.querySelector(".img-3").setAttribute("src", list[(i + 2 ) % 12]);
    },30);
    i++;
},2000);