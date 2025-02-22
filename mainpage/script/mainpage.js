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
    var main = document.querySelector(".main-news")
    if(mainnewstracker==="left")
    {
        main.classList.add("left-news")
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
        main.classList.add("left-news")
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
        main.classList.add("left-news")
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
    main.classList.remove("main-news");
    sub.classList.add("main-news")
}