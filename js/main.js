$(document).ready(function() {
  // var drop_logo = document.querySelector('.drop_logo');
  // drop_logo.addEventListener("mouseover", addEvent);
  //
  // function addEvent() {
  //   console.log("hover");
  //   drop_logo.style.animationPlayState = "running";
  //   drop_logo.classList.add('animated', 'bounceInDown');
  // }

  // main menu Scroll
  //메인 메뉴 스크롤
  var main_header = $('#main_header');
  var main_header_height = $('#main_header').innerHeight();

  $(window).scroll(function() {
    var top = this.scrollY;
    if (main_header_height < top && main_header.hasClass('active') == false) {
      main_header.addClass('active');
    } else if (top < main_header_height && top === 0) {
      main_header.removeClass('active');
    }
  });



  var swiper = new Swiper('.swiper-container2', {
    speed: 600,
    parallax: true,
    pagination: {
      el: '.swiper-pagination2',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
  });

  // acodian
  var acodian_btn = $('.acodian_list > li');
  var acodian_pannel = acodian_btn.find('.acodian_pannel');
  var acodian_arrow = acodian_btn.find('i');

  acodian_btn.click(function(event) {
    event.preventDefault();

    acodian_arrow.attr('class', 'xi-angle-down-thin xi-x');
    var idx = acodian_btn.index(this);

    if (acodian_btn.eq(idx).hasClass('active')) {
      acodian_btn.eq(idx).removeClass('active');
    } else {
      acodian_btn.removeClass('active');
      acodian_arrow.eq(idx).attr('class', 'xi-angle-up-thin xi-x');
      acodian_btn.eq(idx).addClass('active');
    }
  });

  // main animation
  var view_target = $('.view_ani');
  const view_target2 = document.querySelectorAll('.view_ani');
  var start = true;
  var idx = 0;
  var ani_info = ["animated","fadeInUp"];

  $(window).scroll(function(event) {
    $('.bg_cover').toggleClass('active');
    if (start) {
      if ($(window).scrollTop() + ($(window).innerHeight() * 0.5) > view_target.eq(idx).offset().top) {
          console.log('애니메이션 타켓:' + idx);
          view_target2[idx].classList.add(ani_info[0],ani_info[1]);
          idx++;

          if(idx==view_target.length) {
            start = false;
            console.log("애니메이션이 끝났습니다");
          }

      };
      // view_target2[idx].classList.toggle(ani_info[0],ani_info[1]);
    }
  });

});
