let angle1=document.getElementById("quesListDet1");
var a=0;
angle1.addEventListener("click",()=>{
    a++;
    if(a%2==1)
    {
        let li1=document.getElementById("quesList1");
        li1.style.height="278px";

        let icon1=document.getElementById("quesListIcon1");
        icon1.style.transform="rotate(180deg)";

        let detailSec=document.getElementsByClassName("quesSec");
        detailSec[0].style.height="787px";
    }
    else
    {
        let li1=document.getElementById("quesList1");
        li1.style.height="78px";

        let icon1=document.getElementById("quesListIcon1");
        icon1.style.transform="rotate(0deg)";

        let detailSec=document.getElementsByClassName("quesSec");
        detailSec[0].style.height="initial";
    }
})
//
//
let angle2=document.getElementById("quesListDet2");
var b=0;
angle2.addEventListener("click",()=>{
    b++;
    if(b%2==1)
    {
        let li2=document.getElementById("quesList2");
        li2.style.height="178px";

        let icon2=document.getElementById("quesListIcon2");
        icon2.style.transform="rotate(180deg)";

        let detailSec=document.getElementsByClassName("quesSec");
        detailSec[0].style.height="687px";
    }
    else
    {
        let li2=document.getElementById("quesList2");
        li2.style.height="78px";

        let icon2=document.getElementById("quesListIcon2");
        icon2.style.transform="rotate(0deg)";

        let detailSec=document.getElementsByClassName("quesSec");
        detailSec[0].style.height="initial";
    }
})

//
//
//
let angle3=document.getElementById("quesListDet3");
var c=0;
angle3.addEventListener("click",()=>{
    c++;
    if(c%2==1)
    {
        let li3=document.getElementById("quesList3");
        li3.style.height="178px";

        let icon3=document.getElementById("quesListIcon3");
        icon3.style.transform="rotate(180deg)";

        let detailSec=document.getElementsByClassName("quesSec");
        detailSec[0].style.height="687px";
    }
    else
    {
        let li3=document.getElementById("quesList3");
        li3.style.height="78px";

        let icon3=document.getElementById("quesListIcon3");
        icon3.style.transform="rotate(0deg)";

        let detailSec=document.getElementsByClassName("quesSec");
        detailSec[0].style.height="initial";
    }
})
//
//
//
let angle4=document.getElementById("quesListDet4");
var d=0;
angle4.addEventListener("click",()=>{
    d++;
    if(d%2==1)
    {
        let li4=document.getElementById("quesList4");
        li4.style.height="138px";

        let icon4=document.getElementById("quesListIcon4");
        icon4.style.transform="rotate(180deg)";

        let detailSec=document.getElementsByClassName("quesSec");
        detailSec[0].style.height="637px";
    }
    else
    {
        let li4=document.getElementById("quesList4");
        li4.style.height="78px";

        let icon4=document.getElementById("quesListIcon4");
        icon4.style.transform="rotate(0deg)";

        let detailSec=document.getElementsByClassName("quesSec");
        detailSec[0].style.height="initial";
    }
})