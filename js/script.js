$('.section-one-slider').slick({
  dots: false,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
});


$(document).ready(function () {
  $("#submit").on("click", function (e) {
    e.preventDefault();

    let firstname = $("#firstname").val();
    let lastname = $("#lastname").val();
    let city = $("#city").val();
    let email = $("#email").val();
    let tel = $("#tel").val();
    let subject = $("#subject").val();
    let message = $("#message").val();

    $('.error').remove();


    if (firstname == "") {
      $("#firstname").after('<span class="error">Enter Your First Name</span>');
      $('.error').fadeOut(5000);

    } else if (lastname == "") {
      $("#lastname").after('<span class="error">Enter Your Last Name</span>');
      $('.error').fadeOut(5000);

    } else if (city == "") {
      $("#city").after('<span class="error">Enter Your City</span>');
      $('.error').fadeOut(5000);

    } else if (email == "") {
      $("#email").after('<span class="error">Enter Your Email</span>');
      $('.error').fadeOut(5000);

    } else if (!isEmail(email)) {
      $("#email").after('<span class="error">Enter Your Email Address</span>');
      $('.error').fadeOut(5000);

    } else if (tel == "") {
      $("#tel").after('<span class="error">Enter Your Phone No</span>');
      $('.error').fadeOut(5000);


    } else if (subject == "") {
      $("#subject").after('<span class="error">Enter Your Subject</span>');
      $('.error').fadeOut(5000);

    } else if (message == "") {
      $("#message").after('<span class="error">Enter Your Message</span>');
      $('.error').fadeOut(5000);

    } else {
      $("#firstname").val("");
      $("#lastname").val("")
      $("#city").val("");
      $("#email").val("");
      $("#tel").val("");
      $("#subject").val("");
      $("#message").val("");
      //  alert("Thank You!!"+" "+firstname+" "+lastname);
    }

    return false


  });


  function isEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  var inp = $("input[name='tel'] ");

  var count = 0;
  inp.bind('keyup', function () {
    count++;
    this.value = this.value.replace(/[^0-9]/, '');

  });

});
