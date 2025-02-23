list = ["../images/photo-campus/IIIT1.jpg","../images/photo-campus/IIIT2.jpg","../images/photo-campus/IIIT3.jpg","../images/photo-campus/IIIT4.jpg","../images/photo-campus/IIIT5.jpg","../images/photo-campus/IIIT6.jpg"]
setInterval(()=>
{
    for(let i=0;i<100000;i++){
        document.querySelector(".a").setAttribute("src",list[i%3])
        document.querySelector(".b").setAttribute("src",list[i+1])
        document.querySelector(".c").setAttribute("src",list[i+2])
    }
})