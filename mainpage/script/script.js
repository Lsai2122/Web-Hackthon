document.querySelector('.about').addEventListener('click',() => {
    const about=`
    <button>Act(PP)</button>
    <button>Statute</button>
    <button>Institue Profile</button>
    <button>Facilities</button>
    <button>Annual Report</button>
    <button>MoU</button>
    `;
    document.querySelector('.about-pop').innerHTML=about;
    document.querySelector('.about-pop').classList.add('about-style');
})