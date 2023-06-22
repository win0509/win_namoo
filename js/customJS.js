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


///////////////////Overlay menus
const mobileMenuIcon = document.querySelector('.mobile-menu-icon img');
const mobileMenuClose = document.querySelector('.overlay-close img');
const overlay = document.querySelector('.overlay')

mobileMenuIcon.addEventListener('click', function (){
  overlay.classList.add('on');
  document.body.style.overflow = "hidden";
});

mobileMenuClose.addEventListener('click', function (){
  overlay.classList.remove('on');
  document.body.style.overflow = "auto";
});


/////////////////////Typing Text
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
let moreBtnspan = document.querySelectorAll('.more-btn span');
let moreBtnarrow = document.querySelectorAll('.more-btn .arrow');
let overlayMenus = document.querySelectorAll('.overlay-nav li a');
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

    moreBtnspan.forEach((btnspan) => {
      btnspan.addEventListener("mouseover", function(){
        mouseCursor.classList.add("cursor-grow");
      });
      btnspan.addEventListener("mouseleave", function(){
        mouseCursor.classList.remove("cursor-grow");
      });
    }); 
  });
  
  moreBtnarrow.forEach((btnarrow) => {
    btnarrow.addEventListener("mouseover", function(){
      mouseCursor.classList.add("cursor-grow");
    });
    btnarrow.addEventListener("mouseleave", function(){
      mouseCursor.classList.remove("cursor-grow");
    });
  });

  overlayMenus.forEach((olmenu) => {
    olmenu.addEventListener("mouseover", function(){
      mouseCursor.classList.add("cursor-grow");
    });
    olmenu.addEventListener("mouseleave", function(){
      mouseCursor.classList.remove("cursor-grow");
    });
 });


// 마우스커서 550 이하로는 커스텀 제거
//  const mediaViewContent = window.matchMedia(`(max-width: 550px)`)	// 1
//  console.log(mediaViewContent);
   
//    const viewChangeHandler = (mediaViewContent) => {  					// 3
//    }
   
//    mediaViewContent.addEventListener("change", viewChangeHandler)	


//////////////////////가로스크롤
const ArtistHorizontal = document.querySelector(".artist-horizontal");

ArtistHorizontal.addEventListener("wheel", (evt) => {
    evt.preventDefault(); 
    ArtistHorizontal.scrollLeft += evt.deltaY;
});

//Touch
// const touch = document.querySelector('.artist-horizontal')
// ArtistHorizontal.addEventListener("touchstart", handleStart, false);
// ArtistHorizontal.addEventListener("touchmove", handleMove, false);
// ArtistHorizontal.addEventListener("touchend", handleEnd, false);


// function handleStart(evt){
//   var startId = evt.targetTouches[0].target.ArtistHorizontal;
//   var startX = evt.changedTouches[0].pageX;
//   var startY = evt.changedTouches[0].pageY;
//   // alert("aaa");

// };

// function handleMove(evt) {
//   // var moveId = evt.targetTouches[0].target.touch;
//   // var moveX = evt.changedTouches[0].clientX;
//   // var moveY = evt.changedTouches[0].clientY;
//   console.log(moveX)
// };

// function handleEnd(evt) {
//   var endX = evt.changedTouches[0].clientX;
//   var endY = evt.changedTouches[0].clientY;
// };
 

/* e.preventDefault(): html 에서 a 태그나 submit 태그는 고유의 동작이 있다.
페이지를 이동시킨다거나 form 안에 있는 input 등을 전송한다던가 그러한 동작이 있는데 
e.preventDefault 는 그 동작을 중단시킨다.

scrollLeft 속성은 선택한 요소에 가로 스크롤 값을 가져오거나 설정합니다. */


/* deltaY :마우스휠 Y축(=상하=세로) 스크롤량 반환.
스크롤량 나타내는 Double 자료형의 숫자 반한.
위로 스크롤: 음(-)의 숫자 반환.
아래로 스크롤: 양(+)의 숫자 반환.
스크롤 안 하면: 0 반환. */

//////////////////////////News 무한 롤링배너
//롤링 배너 복제본 생성
let roller = document.querySelector('.news-wrap');
roller.id = 'roller1'; // 아이디 부여

let clone = roller.cloneNode(true); // cloneNode : 노드 복제. 기본값은 false. 자식 노드까지 복제를 원하면 true 사용 
clone.id = 'roller2';
document.querySelector('.news-wrapper').appendChild(clone);  //news-wrapper 하위 자식으로 부착

document.querySelector('#roller1').style.left= '0px';
document.querySelector('#roller2').style.left= document.querySelector('.news-wrap').offsetWidth + 'px';
// offsetWidth : 요소의 크기 확인(margin을 제외한 padding값, border값까지 계산한 값)


roller.classList.add('original');
clone.classList.add('clone');



//AOS
// AOS.init()

