list = ["../images/photo-campus/IIIT1.jpg", "../images/photo-campus/IIIT12.jpg", "../images/photo-campus/IIIT13.jpg", "../images/photo-campus/IIIT14.jpg", "../images/photo-campus/IIIT15.jpg", "../images/photo-campus/IIIT16.jpg"]
i=0;
setInterval(() => {
    setTimeout(()=>
    {
        document.querySelector(".a").setAttribute("src", list[i % 6])
    },10)
    document.querySelector(".b").setAttribute("src", list[(i + 1 ) % 6])
    i++;
}, 3000)
console.log(4%6)
