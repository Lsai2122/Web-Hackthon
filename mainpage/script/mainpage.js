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
    <button class="department-button">Electoral Literacy Club</button>
    <button class="department-button">Guest House</button>
    <button class="department-button">Press Release</button>
    <button class="department-button bottom-border">Instituion Innovation Council</button>
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
    if (studentsPopup.innerHTML === '') {
        setTimeout(() => {
            studentsPopup.innerHTML = students;
            aboutPopup.innerHTML = '';
            departmentPopup.innerHTML = '';
            admissionsPopup.innerHTML = '';
            placementsPopup.innerHTML = '';
            contactPopup.innerHTML = '';
            othersPopup.innerHTML = '';
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
    <button class="placements-button">Contact T & P</button>
    <button class="placements-button">Internships</button>
    <button class="placements-button">Placements Statistics</button>
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
        }, 150)
    }
    else {
        setTimeout(() => {
            placementsPopup.innerHTML = '';
        }, 150)
    }

});

document.querySelector('.contact').addEventListener('click', () => {
    const contact = `
    <button class="contact-button">Why IIIT Nagpur</button>
    <button class="contact-button">For Students</button>
    <button class="contact-button">For Companies</button>
    <button class="contact-button">Contact T & P</button>
    <button class="contact-button">Internships</button>
    <button class="contact-button">Placements Statistics</button>
    <button class="contact-button bottom-border">About Us</button>
    `;
    if (contactPopup.innerHTML === '') {
        setTimeout(() => {
            contactPopup.innerHTML = contact;
            aboutPopup.innerHTML = '';
            departmentPopup.innerHTML = '';
            studentsPopup.innerHTML = '';
            admissionsPopup.innerHTML = '';
            placementsPopup.innerHTML = '';
            othersPopup.innerHTML = '';
        }, 150)
    }
    else {
        setTimeout(() => {
            contactPopup.innerHTML = '';
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
        }, 150)
    }
    else {
        setTimeout(() => {
            othersPopup.innerHTML = '';
        }, 150)
    }

});

function VerticalBarAnimation() {
    vbar = document.querySelector(".vertical-bar");
    if (vbarStatus == false) {
        vbar.classList.add("vertical-bar-after");
        vbarStatus = true
    }
    else {
        vbar.classList.remove("vertical-bar-after");
        vbarStatus = false
    }
}

function SubTOMain(tracker) {
    if (tracker != mainnewstracker) {
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
        if (tracker === "left") {
            document.querySelector(".middle-news").classList.add("l")
        }
        else if (tracker === "right") {
            document.querySelector(".middle-news").classList.add("r")
        }
        else {
            a = document.querySelector(".middle-news");
            if (window.getComputedStyle(a).marginLeft === "300px") {
                a.classList.add("ml");
                setTimeout(() => {
                    a.classList.remove("ml")
                }, 250);
            }
            else if (window.getComputedStyle(a).marginRight === "300px") {
                a.classList.add("mr");
                setTimeout(() => {
                    a.classList.remove("mr")
                }, 250)
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
            maininfo.innerHTML = temp2
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
    mainnewstracker = tracker;
}
function RightNext() {
    document.querySelector(".moving-container").innerHTML+=`
    <div class="inv-right-news" onmouseenter='SubTOMain("right")'>
    <img class="inv-right-img" src="images/side-news.png">
    <div class="inv-right-info-contain">
        <p class="inv-right-info">
            Team Null Pointer of IIIT Nagpur takes home the prize of Smart India Hackathon
        </p>
    </div>`
    count++;
    if (count == 1) {
        document.querySelector(".news-arrow-left").innerHTML = "<img src='images/news-arrow-left.png'>"
    }
    document.querySelector(".moving-container").classList.add("action-move-left")
    var invleft = document.querySelector(".left-news");
    var invleftimg = document.querySelector(".left-news-img")
    var invinfocontain = document.querySelector(".left-info-contain")
    var invinfo = document.querySelector(".left-info")

    var left = document.querySelector(".middle-news");
    var leftimg = document.querySelector(".middle-news-img");
    var leftinfocontain = document.querySelector(".middle-info-contain");
    var leftinfo = document.querySelector(".middle-info");

    var right = document.querySelector(".inv-right-news");
    var rightimg = document.querySelector(".inv-right-img");
    var rightinfocontain = document.querySelector(".inv-right-info-contain");
    var rightinfo = document.querySelector(".inv-right-info");

    var middle = document.querySelector(".right-news");
    var middleimg = document.querySelector(".right-news-img");
    var middleinfocontain = document.querySelector(".right-info-contain");
    var middleinfo = document.querySelector(".right-info");

    setTimeout(() => {
        invleft.remove()
        left.setAttribute("onmouseenter", "SubTOMain('left')")
        left.classList.replace("middle-news", "left-news");
        leftimg.classList.replace("middle-news-img", "left-news-img")
        leftinfocontain.classList.replace("middle-info-contain", "left-info-contain")
        leftinfo.classList.replace("middle-info", "left-info")
        middle.setAttribute("onmouseenter", "SubTOMain('middle')")
        middle.classList.replace("right-news", "middle-news");
        middleimg.classList.replace("right-news-img", "middle-news-img")
        middleinfocontain.classList.replace("right-info-contain", "middle-info-contain")
        middleinfo.classList.replace("right-info", "middle-info")
        right.setAttribute("onmouseenter", "SubTOMain('right')")
        right.classList.replace("inv-right-news", "right-news");
        rightimg.classList.replace("inv-right-img", "right-news-img")
        rightinfocontain.classList.replace("inv-right-info-contain", "right-info-contain")
        rightinfo.classList.replace("inv-right-info", "right-info")
        setTimeout(()=>
        {
            if (mainnewstracker === "left") {
                mainnewstracker = "left"
                document.querySelector(".left-news").classList.remove("l")
                SubTOMain("left")
    
            }
            else if (mainnewstracker === "right") {
                mainnewstracker = "middle"
            }
            else {
                mainnewstracker = "left"
                document.querySelector(".middle-news").classList.add("l")
            }
            document.querySelector(".moving-container").classList.remove("action-move-left")

        })
        
    }, 1000)
    
}


let eventList=document.querySelector('.event');
function fullScreen() {
    const fullScreenEvent=`
    <div>
        <div class="eve-1">
            <div class="eve-1-contain">
                <img src="images/event image 1.png">
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
                <img src="images/event image 2.png">
                <div class="eve-2-text-contain-1">
                    <p class="eve-2-text-1">Certification Course in python</p>
                </div>
                <div class="eve-2-text-contain-2">
                    <p class="eve-2-text-2">26 JAN 2024, 17:00 </p>
                </div>
            </div>
            <div class="eve-3-contain">
                <img src="images/event image 3.png">
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
                <img src="images/event image 2.png">
                <div class="eve-2-text-contain-1">
                    <p class="eve-2-text-1">Certification Course in python</p>
                </div>
                <div class="eve-2-text-contain-2">
                    <p class="eve-2-text-2">26 JAN 2024, 17:00 </p>
                </div>
            </div>
            <div class="eve-3-contain">
                <img src="images/event image 3.png">
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
                <img src="images/event image 1.png">
                <div class="eve-1-text-contain-1">
                    <p class="eve-1-text-1">Enterpreneurship with AI</p>
                </div>
                <div class="eve-1-text-contain-2">
                    <p class="eve-1-text-2">22 JAN 2025, 16:30 </p>
                </div>
            </div>
        </div>
        <div class="dd-arrow-contain full-event-list" onclick="halfScreen()">
            <img class="drop-down-arrow-dark" src="images/upper-arrow.png">
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
                        <img src="images/event image 1.png">
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
                        <img src="images/event image 2.png">
                        <div class="eve-2-text-contain-1">
                            <p class="eve-2-text-1">Certification Course in python</p>
                        </div>
                        <div class="eve-2-text-contain-2">
                            <p class="eve-2-text-2">26 JAN 2024, 17:00 </p>
                        </div>
                    </div>
                    <div class="eve-3-contain">
                        <img src="images/event image 3.png">
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