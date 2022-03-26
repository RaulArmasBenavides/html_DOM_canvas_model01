const slider = document.querySelector("#myslider");
let sliderSection = document.querySelectorAll(".slider_section");
let sliderSectionLast = sliderSection[sliderSection.length-1];
const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin',sliderSectionLast);

const Next  =  () => {
    let sliderSectionFirst = document.querySelectorAll(".slider_section")[0];
    slider.style.transition = "all 0.5s";

    setTimeout(()=>{
        slider.style.transition ="none";
        slider.insertAdjacentElement('beforeend',sliderSectionFirst);
        slider.style.marginLeft ="0";
    },450);
};

const Back  =  () => {
    let sliderSection = document.querySelectorAll(".slider_section");
    let sliderSectionLast = document.querySelectorAll(".slider_section")[sliderSection.length -1];
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 0.5s";
    
    setTimeout(()=>{
       slider.style.transition ="none";
      slider.insertAdjacentElement('afterbegin',sliderSectionLast);
      slider.style.marginLeft ="-100%";
    },450);
};

btnRight.addEventListener('click',function()
{
    Next();
});

btnLeft.addEventListener('click',function()
{
    Back();
});

 