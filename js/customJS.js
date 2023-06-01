// Landing Page Count 
//  let countBox = document.querySelector('.left-count'),
//      count = 0;

//      let counting = setInterval(function () {
//         if(count == 2004){
//             clearInterval(counting);
//             return false;
//         }
//         count += 167;
//         countBox.innerHTML = new Intl.NumberFormat().format(count);

//      },100);


//Typing Text
const content = "나무엑터스가 되었습니다";
const typingtext = document.querySelector(".typingtext");
let i = 0;

function typing(){
    if (i < content.length) {
    let txt = content.charAt(i);
    typingtext.innerHTML += txt;
    i++;
    }
}
setInterval(typing, 300)


//Cursor Style
let mouseCursor = document.querySelector(".cursor");
let navMenus = document.querySelectorAll(".nav-bar li a"); 
window.addEventListener("scroll", cursor);
window.addEventListener("mousemove", cursor);
function cursor(e) {
  mouseCursor.style.left = e.pageX + "px";
  mouseCursor.style.top = e.pageY - scrollY + "px";
}
navMenus.forEach((menu) => {
    menu.addEventListener("mouseover", () => {
      mouseCursor.classList.add("cursor-grow");
    //   mouseCursor.style.zIndex = "-1";
    //   menu.classList.add("hovered-link");
    });
    menu.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("cursor-grow");
    //   mouseCursor.style.zIndex = "1000";
    //   menu.classList.remove("hovered-link");
    });
  });


//가로스크롤
// document.addEventListener('scroll', horizontalScroll);

// //Selecting Elements
// let sticky = document.querySelector('.sticky');
// let stickyParent = document.querySelector('.sticky-parent');

// let scrollWidth = sticky.scrollWidth;
// let verticalScrollHeight = stickyParent.getBoundingClientRect().height-sticky.getBoundingClientRect().height;

// //Scroll function 
// function horizontalScroll(){

//     //Checking whether the sticky element has entered into view or not
//     let stickyPosition = sticky.getBoundingClientRect().top;
//     if(stickyPosition > 1){
//         return;
//     }else{
//         let scrolled = stickyParent.getBoundingClientRect().top; //how much is scrolled?
//         sticky.scrollLeft =(scrollWidth/verticalScrollHeight)*(-scrolled)*0.85;
    
//     }
// }

const ArtistHorizontal = document.querySelector('.artist-horizontal');
const ArtistWrapper = document.querySelector('.artist-wrapper')

const scrollHeight = ArtistHorizontal.scrollY();
console.log(scrollHeight);

ArtistHorizontal.addEventListener('scroll', function(){

});








//AOS
// AOS.init()

