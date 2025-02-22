let vbarStatus=false;
let mainnewstracker = "middle";

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
        vbarStatus=true
    }
    else{
        vbar.classList.remove("vertical-bar-after");
        vbarStatus=false
    }
}

function SubTOMain(tracker)
{
    if(mainnewstracker==="left")
    {
        var main = document.querySelector(".left-news")
        if(tracker==="middle")
        {
            var sub = document.querySelector(".middle-news")
        }
        else if(tracker==="right")
        {
            var sub = document.querySelector("left-news");
        }
    }
    else if(mainnewstracker==="middle")
    {
        var main = document.querySelector(".middle-news")
        if(tracker==="left")
        {
            var sub = document.querySelector(".left-news")
        }
        else if(tracker==="right")
        {
            var sub = document.querySelector(".right-news");
        }
    }
    else if(mainnewstracker==="right")
    {
        var main = document.querySelector(".right-news")
        {
            if(tracker==="left")
            {
                var sub = document.querySelector(".left-news")
            }
            else if(tracker==="middle")
            {
                var sub = document.querySelector(".middle-news");
            }
        }
    }
}