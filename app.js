$(document).ready(function() {
  $(this).scrollTop(0);

    var team = [
        {name: 'QA', count: 12},
        {name: 'UX / UI', count: 12},
        {name: 'BA / PM', count: 26},
        {name: 'Front-end', count: 27},
        {name: 'Mobile', count: 33},
        {name: 'Back-end', count: 53}
    ];

    var sum = 0;
    $.each(team, function(index, value) {

        $('ul').append(`<li>
            <div>
              <span class="borderGr"></span>
              <span class="lineData">${value.count}</span>
              <span class="lineStr">${value.name}</span>
            </div>
          </li>`);
        sum+= value.count;
    });
    for(var i = 0; i < team.length; i++){
        $($('ul').find('li')[i]).width(((100*team[i].count)/sum) + '%');
    }

    //Animation Case's
    $(window).scroll(function(){
      if ($(window).width() > 770) {
        //console.log($(this).scrollTop());
        if ($(this).scrollTop() > 1135) {
          $('.vodafonePic').animate({'opacity': 1, top: 0}, 700);
          $('.vodafoneCont').animate({'opacity': 1, marginTop: 271}, 1000);
        }
        if ($(this).scrollTop() > 2075) {
          $('.choosic').animate({'opacity': 1, top: 200}, 700);
          $('.choosicCont').animate({'opacity': 1, marginTop: 0}, 1000);
        }
        if ($(this).scrollTop() > 2850) {
          $('.noHalfTime').animate({'opacity': 1, top: 46}, 700);
          $('.noHalfTimeCont').animate({'opacity': 1, marginTop: 0}, 1000);
        }
        if ($(this).scrollTop() > 3670) {
          $('.spark').animate({'opacity': 1, top: -106}, 700);
          $('.sparkCont').animate({'opacity': 1, marginTop: 0}, 1000);
        }
      }
      if ($(window).width() < 770) {
        //console.log($(this).scrollTop());
        if ($(this).scrollTop() > 1773) {
          $('.vodafonePicMob').animate({'opacity': 1, top: 37}, 700);
          $('.vodafoneCont').animate({'opacity': 1, marginTop: -30}, 1000);
        }
        if ($(this).scrollTop() > 2160) {
          $('.choosicPicMob').animate({'opacity': 1, top: 60}, 700);
          $('.choosicCont').animate({'opacity': 1, marginTop: 60}, 1000);
        }
        if ($(this).scrollTop() > 2620) {
          $('.noHalfTimePicMob').animate({'opacity': 1, top: 0}, 700);
          $('.noHalfTimeCont').animate({'opacity': 1, marginTop: 150}, 1000);
        }
        if ($(this).scrollTop() > 3110) {
          $('.sparkMob').animate({'opacity': 1, top: -144}, 700);
          $('.sparkCont').animate({'opacity': 1, marginTop: -210}, 1000);
        }
      }
    });
  //End scroll function
  $('.arrowDownMob').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
	});

  $('.talkBtn').on('click', function(e) {
    e.preventDefault();
    console.log('works')
    $('html, body').animate({
      scrollTop: $('.contact').offset().top
    }, 1000);
  });


    //Hover arrow
    $('.vodafoneCont, .choosicCont, .noHalfTimeCont, .sparkCont').hover(
      function() {
      $(this).find('.viewCaseArrow').css({'background-position': '35px', 'transition' : 'all .4s cubic-bezier(.07,.06,.20,.90)'});
      },
      function() {
      $(this).find('.viewCaseArrow').css({'background-position': '20px', 'transition' : 'all .4s cubic-bezier(.07,.06,.20,.90)'});
      }
    );
    $('.talkBtn').hover(
      function() {
        $(this).css({'background-position': '140px', 'transition' : 'all .4s cubic-bezier(.07,.06,.20,.90)'})
      },
      function() {
        $(this).css({'background-position': '127px', 'transition' : 'all .4s cubic-bezier(.07,.06,.20,.90)'})
      }
    );
    $('.hireBtn').hover(
      function() {
        $(this).css({'background-position': '145px', 'transition' : 'all .4s cubic-bezier(.07,.06,.20,.90)'})
      },
      function() {
        $(this).css({'background-position': '134px', 'transition' : 'all .4s cubic-bezier(.07,.06,.20,.90)'})
      }
    );
    $('.viewBtn.hvrFirst').hover(
      function() {
        $(this).css({'background-position': '160px', 'transition' : 'all .4s cubic-bezier(.07,.06,.20,.90)'})
      },
      function() {
        $(this).css({'background-position': '147px', 'transition' : 'all .4s cubic-bezier(.07,.06,.20,.90)'})
      }
    );
    $('.viewBtn.hvrSecond').hover(
      function() {
        $(this).css({'background-position': '140px', 'transition' : 'all .4s cubic-bezier(.07,.06,.20,.90)'})
      },
      function() {
        $(this).css({'background-position': '126px', 'transition' : 'all .4s cubic-bezier(.07,.06,.20,.90)'})
      }
    );

//Validation of contact form
$('form').on('submit', function(e) {
  e.preventDefault();
  //console.log($('.emailInput').val());
    if (emailIsValid($(this).find('.emailInput').val() || $(this).find('.emailInput').val() === '')) {
      $('.emailInput').css('border-bottom', '2px solid #dededd');
      $('.emailInput').removeClass('placeholder');
    } else {
      $('.emailInput').addClass('placeholder');
      $('.emailInput').css('border-bottom', '2px solid #F34A65');
    }

    if ($(this).find('.inputText').val() === '') {
      $('.inputText').addClass('placeholder');
      $('.inputText').css('border-bottom', '2px solid #F34A65');

    } else {
      $('.inputText').css('border-bottom', '2px solid #dededd');
      $('.inputText').removeClass('placeholder');
    }

  if ($(e.target).find('.inputText').val().trim().length > 0 && emailIsValid($(this).find('.emailInput').val())) {
    $.post( "http://www.mediapark.com/success", {
      email: $(e.target).find('.emailInput').val(),
      about: $(e.target).find('.inputText').val(),
      IsRequest: true
    })
    .done(function() {
      console.log( "second success" );
    })
    .fail(function() {
      console.log( "error" );
      //console.log($(e.target).find('.inputText').val());
    });
  }

  });


  //Regex check for email addresses
  function emailIsValid(email) {
      var emailRegex = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);
      if (emailRegex.test(email)) {
          return true;
      }
      else {
          return false;
      }
  }



}); //End Ready
