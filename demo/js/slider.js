const slider = document.querySelector("#myslider");
let sliderSection = document.querySelectorAll(".slider_section");
let sliderSectionLast = sliderSection[sliderSection.length-1];
const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin',sliderSectionLast);

const Next  =  () => {
    let sliderSectionFirst = document.querySelectorAll(".slider_section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.25s";

    setTimeout(()=>{
        slider.style.transition ="none";
        slider.insertAdjacentElement('beforeend',sliderSectionFirst);
        slider.style.marginLeft ="-100%";
    },500);
}

btnRight.addEventListener('click',function()
{
    Next();
});

 