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
    <button class="department-button" onclick="window.location.href = window.location.origin + '/departments/bs.html';">Basic Sciences</button>
    <button class="department-button">Doctorial Programme</button>
    <button class="department-button">Programs</button>
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
    <button class="placements-button" onclick="window.location.href = window.location.origin + '/Placements/train-place.html'">Contact T & P</button>
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