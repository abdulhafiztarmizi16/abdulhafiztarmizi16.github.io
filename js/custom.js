$(function () {
  // MENU
  $(".nav-link").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  // AOS ANIMATION
  AOS.init({
    disable: "mobile",
    duration: 800,
    anchorPlacement: "center-bottom",
  });

  //SMOOTH SCROLL
  $(function () {
    $(".nav-link").on("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - 20,
          },
          1000
        );
      event.preventDefault();
    });
  });

  // PROJECT SLIDE
  $("#project-slide").owlCarousel({
    loop: true,
    center: true,
    autoplayHoverPause: false,
    autoplay: true,
    margin: 30,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
    },
  });

  // PROMO SLIDE
  $("#promo-slide").owlCarousel({
    loop: true,
    center: true,
    autoplayHoverPause: false,
    autoplay: true,
    margin: 30,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
    },
  });

  // TESTIMONI SLIDE
  $("#testimoni-slide").owlCarousel({
    loop: true,
    center: true,
    autoplayHoverPause: false,
    autoplay: true,
    margin: 30,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
    },
  });
});

// copy to clipboard
/*   const copyBtn = document.getElementsByClassName('btnCopy')
       const copyText = document.getElementsByClassName('copyT')

       copyBtn.onclick = () => {
           copyText.select(); // Selects the text inside the input
           document.execCommand('copy'); // Simply copies the selected text to clipboard 
           Swal.fire({ //displays a pop up with sweetalert
               icon: 'success',
               title: 'Text copied to clipboard',
               showConfirmButton: false,
               timer: 1000
           });
       }*/

$(document).ready(function () {
  $("#search").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#faq-list .card").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });

  // BTN PRIVACY STATEMENT
  $("#btn-privacy").click(function () {
    $("#btn-privacy").addClass("bg-btn-active");
    $("#btn-term").removeClass("bg-btn-active");
    $("#privacy-active").show();
    $("#term-active").hide();
  });

  $("#btn-term").click(function () {
    $("#btn-term").addClass("bg-btn-active");
    $("#btn-privacy").removeClass("bg-btn-active");
    $("#privacy-active").hide();
    $("#term-active").show();
  });

  // accordion animate privacy
  $("#privacyAccordion").on("shown.bs.collapse", (e) => {
    $("html, body").animate(
      {
        scrollTop: $(e.target).prev().offset().top - 135,
      },
      800
    );
  });
  // accordion animate term
  $("#termAccordion").on("shown.bs.collapse", (e) => {
    $("html, body").animate(
      {
        scrollTop: $(e.target).prev().offset().top - 135,
      },
      800
    );
  });
  // panduan pengguna
  $("#content1").click(function () {
    $("#content-howto2").hide();
    $("#content-howto3").hide();
    $("#content-howto4").hide();
    $("#content-howto5").hide();
    $("#content-howto6").hide();
    $("#content-howto7").hide();
    $("#content-howto1").show();
    $("#border2").removeClass("border-active");
    $("#border3").removeClass("border-active");
    $("#border4").removeClass("border-active");
    $("#border5").removeClass("border-active");
    $("#border6").removeClass("border-active");
    $("#border7").removeClass("border-active");
    $("#border1").addClass("border-active");
    $("#content2").removeClass("nav-content-active");
    $("#content3").removeClass("nav-content-active");
    $("#content4").removeClass("nav-content-active");
    $("#content1").addClass("nav-content-active");
    $("#bg-image").removeClass("bg-image2");
    $("#bg-image").removeClass("bg-image3");
    $("#bg-image").removeClass("bg-image4");
    $("#bg-image").removeClass("bg-image5");
    $("#bg-image").removeClass("bg-image6");
    $("#bg-image").removeClass("bg-image7");
    $("#bg-image").addClass("bg-image1");
    $("#title").text("Caesar Cipher");
    // $("#sub-title").text("Login easyly with our system");
  });
  $("#content2").click(function () {
    $("#content-howto1").hide();
    $("#content-howto3").hide();
    $("#content-howto4").hide();
    $("#content-howto5").hide();
    $("#content-howto6").hide();
    $("#content-howto7").hide();
    $("#content-howto2").show();
    $("#border1").removeClass("border-active");
    $("#border3").removeClass("border-active");
    $("#border4").removeClass("border-active");
    $("#border5").removeClass("border-active");
    $("#border6").removeClass("border-active");
    $("#border7").removeClass("border-active");
    $("#border2").addClass("border-active");
    $("#content1").removeClass("nav-content-active");
    $("#content3").removeClass("nav-content-active");
    $("#content4").removeClass("nav-content-active");
    $("#content2").addClass("nav-content-active");
    $("#bg-image").removeClass("bg-image1");
    $("#bg-image").removeClass("bg-image3");
    $("#bg-image").removeClass("bg-image4");
    $("#bg-image").removeClass("bg-image5");
    $("#bg-image").removeClass("bg-image6");
    $("#bg-image").removeClass("bg-image7");
    $("#bg-image").addClass("bg-image2");
    $("#title").text("Vigenere Cipher");
    // $("#sub-title").text("Sign Up simple account");
  });
  $("#content3").click(function () {
    $("#content-howto1").hide();
    $("#content-howto2").hide();
    $("#content-howto4").hide();
    $("#content-howto5").hide();
    $("#content-howto6").hide();
    $("#content-howto7").hide();
    $("#content-howto3").show();
    $("#border1").removeClass("border-active");
    $("#border2").removeClass("border-active");
    $("#border4").removeClass("border-active");
    $("#border5").removeClass("border-active");
    $("#border6").removeClass("border-active");
    $("#border7").removeClass("border-active");
    $("#border3").addClass("border-active");
    $("#content1").removeClass("nav-content-active");
    $("#content2").removeClass("nav-content-active");
    $("#content4").removeClass("nav-content-active");
    $("#content3").addClass("nav-content-active");
    $("#bg-image").removeClass("bg-image1");
    $("#bg-image").removeClass("bg-image2");
    $("#bg-image").removeClass("bg-image4");
    $("#bg-image").removeClass("bg-image5");
    $("#bg-image").removeClass("bg-image6");
    $("#bg-image").removeClass("bg-image7");
    $("#bg-image").addClass("bg-image3");
    $("#title").text("Playfair Cipher");
    // $("#sub-title").text("Sign In simple account");
  });
  $("#content4").click(function () {
    $("#content-howto1").hide();
    $("#content-howto2").hide();
    $("#content-howto3").hide();
    $("#content-howto5").hide();
    $("#content-howto6").hide();
    $("#content-howto7").hide();
    $("#content-howto4").show();
    $("#border1").removeClass("border-active");
    $("#border2").removeClass("border-active");
    $("#border3").removeClass("border-active");
    $("#border5").removeClass("border-active");
    $("#border6").removeClass("border-active");
    $("#border7").removeClass("border-active");
    $("#border4").addClass("border-active");
    $("#content1").removeClass("nav-content-active");
    $("#content2").removeClass("nav-content-active");
    $("#content3").removeClass("nav-content-active");
    $("#content4").addClass("nav-content-active");
    $("#bg-image").removeClass("bg-image1");
    $("#bg-image").removeClass("bg-image2");
    $("#bg-image").removeClass("bg-image3");
    $("#bg-image").removeClass("bg-image5");
    $("#bg-image").removeClass("bg-image6");
    $("#bg-image").removeClass("bg-image7");
    $("#bg-image").addClass("bg-image4");
    $("#title").text("Zigzag Cipher");
    // $("#sub-title").text("Sign In simple account");
  });
  $("#content5").click(function () {
    $("#content-howto1").hide();
    $("#content-howto2").hide();
    $("#content-howto3").hide();
    $("#content-howto4").hide();
    $("#content-howto6").hide();
    $("#content-howto7").hide();
    $("#content-howto5").show();
    $("#border1").removeClass("border-active");
    $("#border2").removeClass("border-active");
    $("#border3").removeClass("border-active");
    $("#border4").removeClass("border-active");
    $("#border6").removeClass("border-active");
    $("#border7").removeClass("border-active");
    $("#border5").addClass("border-active");
    $("#content1").removeClass("nav-content-active");
    $("#content2").removeClass("nav-content-active");
    $("#content3").removeClass("nav-content-active");
    $("#content4").removeClass("nav-content-active");
    $("#content5").addClass("nav-content-active");
    $("#bg-image").removeClass("bg-image1");
    $("#bg-image").removeClass("bg-image2");
    $("#bg-image").removeClass("bg-image3");
    $("#bg-image").addClass("bg-image5");
    $("#bg-image").removeClass("bg-image6");
    $("#bg-image").removeClass("bg-image7");
    $("#bg-image").removeClass("bg-image4");
    $("#title").text("Affine Cipher");
    // $("#sub-title").text("Sign In simple account");
  });
  $("#content6").click(function () {
    $("#content-howto1").hide();
    $("#content-howto2").hide();
    $("#content-howto3").hide();
    $("#content-howto4").hide();
    $("#content-howto5").hide();
    $("#content-howto7").hide();
    $("#content-howto6").show();
    $("#border1").removeClass("border-active");
    $("#border2").removeClass("border-active");
    $("#border3").removeClass("border-active");
    $("#border4").removeClass("border-active");
    $("#border5").removeClass("border-active");
    $("#border7").removeClass("border-active");
    $("#border6").addClass("border-active");
    $("#content1").removeClass("nav-content-active");
    $("#content2").removeClass("nav-content-active");
    $("#content3").removeClass("nav-content-active");
    $("#content4").removeClass("nav-content-active");
    $("#content5").removeClass("nav-content-active");
    $("#content6").addClass("nav-content-active");
    $("#bg-image").removeClass("bg-image1");
    $("#bg-image").removeClass("bg-image2");
    $("#bg-image").removeClass("bg-image3");
    $("#bg-image").removeClass("bg-image4");
    $("#bg-image").removeClass("bg-image5");
    $("#bg-image").addClass("bg-image6");
    $("#bg-image").removeClass("bg-image7");
    $("#title").text("Hill Cipher");
    // $("#sub-title").text("Sign In simple account");
  });
  $("#content7").click(function () {
    $("#content-howto1").hide();
    $("#content-howto2").hide();
    $("#content-howto3").hide();
    $("#content-howto4").hide();
    $("#content-howto5").hide();
    $("#content-howto6").hide();
    $("#content-howto7").show();
    $("#border1").removeClass("border-active");
    $("#border2").removeClass("border-active");
    $("#border3").removeClass("border-active");
    $("#border4").removeClass("border-active");
    $("#border5").removeClass("border-active");
    $("#border6").removeClass("border-active");
    $("#border7").addClass("border-active");
    $("#content1").removeClass("nav-content-active");
    $("#content2").removeClass("nav-content-active");
    $("#content3").removeClass("nav-content-active");
    $("#content4").removeClass("nav-content-active");
    $("#content5").removeClass("nav-content-active");
    $("#content6").removeClass("nav-content-active");
    $("#content7").addClass("nav-content-active");
    $("#bg-image").removeClass("bg-image1");
    $("#bg-image").removeClass("bg-image2");
    $("#bg-image").removeClass("bg-image3");
    $("#bg-image").removeClass("bg-image4");
    $("#bg-image").removeClass("bg-image5");
    $("#bg-image").removeClass("bg-image6");
    $("#bg-image").addClass("bg-image7");
    $("#title").text("Transposisi Cipher");
    // $("#sub-title").text("Sign In simple account");
  });
});
