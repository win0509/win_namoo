$(document).ready(function() {
	$('#fullpages').fullpage({
		//options 
		autoScrolling:true,
		scrollHorizontally: true,
		navigation:true,
		navigationPosition:'right',
		scrollingSpeed: 1200,

		normalScrollElements: '.artist-horizontal',
		//scrollOverflow: true

		navigationTooltips: ['Home', 'Company', 'Artist','Centents','News','Audition'],
	});




	// //변수 numAc에 article의 갯수 저장
	// // var numAc = $("article").size();	
	// var numAc = $(".artist-item").size();
	// //변수 widSec에 article의 넓이에 개수를 곱한 값을 저장(article요소의 총 넓이)
	// // var widSec = 200*numAc;
	// var widSec = 340*numAc;
	// //변수 widTital에 widSec에 600을 더한 값을 저장(패널이 하나 열렸을시의 총 넓이)
	// // var widTotal = widSec+600;
	// var widTotal = widSec+600;
	
	// //변수 widTotal에 저장된 넓이를 section의 넓이값으로 대입
	// // $("section").width(widTotal);
	// $(".artist-wrapper")
	// //변수 widSec에 저장된 넓이를 body의 높이값으로 대입
	// $(".artist-horizontal").height(widSec);	
	// //문서의 스크롤 거리를 변수 widSec의 넓이만큼 변경	
	// $(".artist-horizontal").animate({"scrollLeft":widSec},2000);	

	
	
	// //브라우저를 스크롤 할때
	// $(".artist-horizontal").on("scroll",function(){
	// 	// 변수 scroll에 현재 스크롤 한 만큼의 거리를 저장
	// 	var scroll = $(this).scrollTop();		
	// 	//section의 left값을 스크롤한 거리만큼 마이너스 값으로 이동
	// 	$(".artist-wrapper").stop().animate({"left":-scroll},600);
	// });
	
	

	
	





	





	

	

	
	
	   
	

	
});


