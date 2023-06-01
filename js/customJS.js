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


//const ArtistHorizontal = document.querySelector('.artist-horizontal');
///const ArtistWrapper = document.querySelector('.artist-wrapper')

//ArtistHorizontal.addEventListener('scroll', function(){
 
 //const scrY = ArtistHorizontal.scrollTop();
 ////console.log(scrY);

 
//});

const ArtistHorizontal = document.querySelector(".artist-horizontal");

ArtistHorizontal.addEventListener("wheel", (evt) => {
    evt.preventDefault(); 
    ArtistHorizontal.scrollLeft += evt.deltaY;
});

/* e.preventDefault(): html 에서 a 태그나 submit 태그는 고유의 동작이 있다.
페이지를 이동시킨다거나 form 안에 있는 input 등을 전송한다던가 그러한 동작이 있는데 
e.preventDefault 는 그 동작을 중단시킨다.

scrollLeft 속성은 선택한 요소에 가로 스크롤 값을 가져오거나 설정합니다. */


/* deltaY :마우스휠 Y축(=상하=세로) 스크롤량 반환.
스크롤량 나타내는 Double 자료형의 숫자 반한.
위로 스크롤: 음(-)의 숫자 반환.
아래로 스크롤: 양(+)의 숫자 반환.
스크롤 안 하면: 0 반환. */



//AOS
// AOS.init()

