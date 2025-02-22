let vbarStatus=false;

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


function VerticalBarAnimation()
{
    vbar = document.querySelector(".vertical-bar");
    if (vbarStatus==false)
    {
        vbar.classList.add("vertical-bar-after");
        vbar.classList.add("vertical-bar-after1")
        vbarStatus=true
    }
    else{
        vbar.classList.remove("vertical-bar-after");
        vbar.classList.remove("vertical-bar-after1")
        vbarStatus=false
    }
}