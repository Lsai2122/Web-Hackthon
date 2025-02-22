document.querySelector('.about').addEventListener('click',() => {
    const about=`
    <button class="about-button">Act(PP)</button>
    <button class="about-button">Statute</button>
    <button class="about-button">Institue Profile</button>
    <button class="about-button">Facilities</button>
    <button class="about-button">Annual Report</button>
    <button class="about-button">MoU</button>
    `;
    document.querySelector('.about-pop').innerHTML=about;
    document.querySelector('.about-pop').classList.add('about-style');
})