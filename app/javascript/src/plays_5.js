$(function(){

  // 「押せ」ボタンのアニメーション
    $.each((new Array(1)), function() {
  
      function move(){
        $('.js-btn-5')
        
        .animate({
          top: '10px', left: '70%'
        }, 500, 'swing')
  
        .animate({
          top: '400px', left: '5%', 
        }, 1000, 'swing')
        
        .delay(500)
  
        .animate({
          top: '400px', left: '70%',
        }, 500, 'swing')
        
        .animate({
          top: '100px', left: '50%',
        }, 500, 'swing')
  
        .animate({
          top: '350px', left: '0%',
        }, 1000, 'swing')
  
        .animate({
          top: '400px', left: '50%',
        }, 500, 'swing')
  
        .animate({
          top: '60px', left: '10%',
        }, 1000, 'swing')
  
        .delay(500)
  
        .animate({
          top: '400px', left: '50%',
        }, 500, 'swing')
  
        .animate({
          top: '0px', left: '70%',
        }, 1000, 'swing')
  
        .animate({
          top: '350px', left: '0%',
        }, 500, 'swing')
      }
   
      move();
  
    });
  
/////////////////////////////////////////////////////////////

  // 「押すな」ボタン１のアニメーション
    $.each((new Array(18)), function() {
      function badMove(){
        $('.js-bad-btn-5-1')
        .animate({
          top:  String(Math.random() * ( (400 + 1) - 0 ) + 0) + 'px',
          left: String(Math.random() * ( (60 + 1) - 0 ) + 0) + '%',
        }, 500, 'swing')
      }
  
      badMove();
    });
  
  // 「押すな」ボタン２のアニメーション
    $.each((new Array(18)), function() {
      function badMove(){
        $('.js-bad-btn-5-2')
        .animate({
          top:  String(Math.random() * ( (400 + 1) - 0 ) + 0) + 'px',
          left: String(Math.random() * ( (60 + 1) - 0 ) + 0) + '%',
        }, 500, 'swing')
      }
    
      badMove();
    }); 
  
  // 「押すな」ボタン３のアニメーション
    $.each((new Array(18)), function() {
      function badMove(){
        $('.js-bad-btn-5-3')
        .animate({
          top:  String(Math.random() * ( (400 + 1) - 0 ) + 0) + 'px',
          left: String(Math.random() * ( (60 + 1) - 0 ) + 0) + '%',
        }, 500, 'swing')
      }
    
      badMove();
    }); 

  // 「押すな」ボタン4のアニメーション
  $.each((new Array(18)), function() {
    function badMove(){
      $('.js-bad-btn-5-4')
      .animate({
        top:  String(Math.random() * ( (400 + 1) - 0 ) + 0) + 'px',
        left: String(Math.random() * ( (60 + 1) - 0 ) + 0) + '%',
      }, 500, 'swing')
    }

    badMove();
  });

  // 「押すな」ボタン5のアニメーション
  $.each((new Array(18)), function() {
    function badMove(){
      $('.js-bad-btn-5-5')
      .animate({
        top:  String(Math.random() * ( (400 + 1) - 0 ) + 0) + 'px',
        left: String(Math.random() * ( (60 + 1) - 0 ) + 0) + '%',
      }, 500, 'swing')
    }

    badMove();
  });

  // 「押すな」ボタン6のアニメーション
  $.each((new Array(18)), function() {
    function badMove(){
      $('.js-bad-btn-5-6')
      .animate({
        top:  String(Math.random() * ( (400 + 1) - 0 ) + 0) + 'px',
        left: String(Math.random() * ( (60 + 1) - 0 ) + 0) + '%',
      }, 500, 'swing')
    }

    badMove();
  });

  // 「押すな」ボタン7のアニメーション
  $.each((new Array(18)), function() {
    function badMove(){
      $('.js-bad-btn-5-7')
      .animate({
        top:  String(Math.random() * ( (400 + 1) - 0 ) + 0) + 'px',
        left: String(Math.random() * ( (60 + 1) - 0 ) + 0) + '%',
      }, 500, 'swing')
    }

    badMove();
  });

  // 「押すな」ボタン8のアニメーション
  $.each((new Array(18)), function() {
    function badMove(){
      $('.js-bad-btn-5-8')
      .animate({
        top:  String(Math.random() * ( (400 + 1) - 0 ) + 0) + 'px',
        left: String(Math.random() * ( (60 + 1) - 0 ) + 0) + '%',
      }, 500, 'swing')
    }

    badMove();
  });

  // 「押すな」ボタン9のアニメーション
  $.each((new Array(18)), function() {
    function badMove(){
      $('.js-bad-btn-5-9')
      .animate({
        top:  String(Math.random() * ( (400 + 1) - 0 ) + 0) + 'px',
        left: String(Math.random() * ( (60 + 1) - 0 ) + 0) + '%',
      }, 500, 'swing')
    }

    badMove();
  });

  // 「押すな」ボタン10のアニメーション
  $.each((new Array(18)), function() {
    function badMove(){
      $('.js-bad-btn-5-10')
      .animate({
        top:  String(Math.random() * ( (400 + 1) - 0 ) + 0) + 'px',
        left: String(Math.random() * ( (60 + 1) - 0 ) + 0) + '%',
      }, 500, 'swing')
    }

    badMove();
  });

  // 「押すな」ボタン11のアニメーション
  $.each((new Array(18)), function() {
    function badMove(){
      $('.js-bad-btn-5-11')
      .animate({
        top:  String(Math.random() * ( (400 + 1) - 0 ) + 0) + 'px',
        left: String(Math.random() * ( (60 + 1) - 0 ) + 0) + '%',
      }, 500, 'swing')
    }

    badMove();
  });

/////////////////////////////////////////////////////////////////////////
  
  // 「押せ」ボタンの着地とGame Over処理
    $('.js-btn-5').animate({ //アラートを出してゲームオーバー
      top: '0', left: '60%'
    },{
      duration: 1000,
      easing: 'swing',
      complete: function(){ //ページが変わってもアラートでてしまう。classをaddするか？
        $('.js-message-5').show();
      }
    })
  
  });