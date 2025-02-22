var vbarStatus=false;
var mainnewstracker = "middle";

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
        setTimeout(subinfo.innerHTML=temp,0.5)
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
