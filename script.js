// Open side navigation
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

// Close side navigation
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}

// Icon abandoned
$('.abandon').on('click',function tvclose() {
  $(this).closest('.tv-card').fadeOut();
})

// Icon completed
$('.complete').on('click',function tvcomplete() {
  this.toggle = !this.toggle;
  $(this).closest('.tv-card').fadeTo(400, this.toggle ? 0.4 : 1);
})

// ===== Scroll to Bottom ===== 
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {      // If page is scrolled more than 50px
      $('#return-to-bottom').fadeIn(200);     // Fade in the arrow
  } else {
      $('#return-to-bottom').fadeOut(200);      // Else fade out the arrow
  }
});
$('#return-to-bottom').click(function arrowdown() {     // When arrow is clicked
  $("html, body").animate({ scrollTop: $(document).height() }, 1500);     // Scroll to bottom of body
  return false;
});

// ===== Scroll to Top ===== 
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {      // If page is scrolled more than 50px
      $('#return-to-top').fadeIn(200);      // Fade in the arrow
  } else {
      $('#return-to-top').fadeOut(200);     // Else fade out the arrow
  }
});
$('#return-to-top').click(function arrowup() {      // When arrow is clicked
  $('body,html').animate({
      scrollTop : 0     // Scroll to top of body
  }, 500);
});

//Card filter for books
$(document).ready(function() {
  $("#myInput").on("keyup", function myFilter() {
    var value = $(this).val().toLowerCase();
    $("#myItems .box, .grid-wrapper").filter(function() {
	  $(this).toggle($(this).find('h5, p').text().toLowerCase().indexOf(value) > -1)
    });
  });
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}