// let i=1;
// function detail(){
//      if(i%2==1)
//     $("#answer").css("height","100px");
    
//      if(i%2==0)
//      $("#answer").css("height","0px");
    
//      i++;
//      console.log(i);
// }

 


window.onload = () => {
      modal('my_modal');
     // panel-faq-container
     const panelFaqContainer = document.querySelectorAll(".container"); // NodeList 객체
     
     // panel-faq-answer
     let panelFaqAnswer = document.querySelectorAll(".answer");
   
     
     // 반복문 순회하면서 해당 FAQ제목 클릭시 콜백 처리
     for( let i=0; i < panelFaqContainer.length; i++ ) {
       panelFaqContainer[i].addEventListener('click', function() { // 클릭시 처리할 일
         // FAQ 제목 클릭시 -> 본문이 보이게끔 -> active 클래스 추가
         panelFaqAnswer[i].classList.toggle('active');
       });
     };
    
   }
   
   function modal(id) {
     var zIndex = 9999;
     var modal = document.getElementById(id);
 
     // 모달 div 뒤에 희끄무레한 레이어
     var bg = document.createElement('div');
     bg.setStyle({
         position: 'fixed',
         zIndex: zIndex,
         left: '0px',
         top: '0px',
         width: '100%',
         height: '100%',
         overflow: 'auto',
         // 레이어 색갈은 여기서 바꾸면 됨
         backgroundColor: 'rgba(0,0,0,0.4)'
     });
     document.body.append(bg);
 
     // 닫기 버튼 처리, 시꺼먼 레이어와 모달 div 지우기
     modal.querySelector('.modal_close_btn').addEventListener('click', function() {
         bg.remove();
         modal.style.display = 'none';
     });
 
     modal.setStyle({
         position: 'fixed',
         display: 'block',
         boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
 
         // 시꺼먼 레이어 보다 한칸 위에 보이기
         zIndex: zIndex + 1,
 
         // div center 정렬
         top: '50%',
         left: '50%',
         transform: 'translate(-50%, -50%)',
         msTransform: 'translate(-50%, -50%)',
         webkitTransform: 'translate(-50%, -50%)'
     });
 }
 
 // Element 에 style 한번에 오브젝트로 설정하는 함수 추가
 Element.prototype.setStyle = function(styles) {
     for (var k in styles) this.style[k] = styles[k];
     return this;
 };



//    const sort = [배송,반품/교환,상품/주문/결제/취소,회원/사이트/기타];

function show(){
     $('.del div').css("display","block");
     $('.chg div').css("display","block");
     $('.cal div').css("display","block");
     $('.etc div').css("display","block");
}
function show1(){
     $('.del div').css("display","none");
     $('.chg div').css("display","none");
     $('.cal div').css("display","none");
     $('.etc div').css("display","block");
}
function show2(){
     $('.del div').css("display","none");
     $('.chg div').css("display","none");
     $('.cal div').css("display","block");
     $('.etc div').css("display","none");
}
function show3(){
     $('.del div').css("display","none");
     $('.chg div').css("display","block");
     $('.cal div').css("display","none");
     $('.etc div').css("display","none");
}
function show4(){
     $('.del div').css("display","block");
     $('.chg div').css("display","none");
     $('.cal div').css("display","none");
     $('.etc div').css("display","none");
}
