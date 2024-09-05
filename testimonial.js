
$(document).ready(function(){
  var testimonials = $('.testimonial');
  var index = 0;

  function showTestimonial() {
      testimonials.removeClass('active');
      testimonials.eq(index).addClass('active');
      index = (index + 1) % testimonials.length;
  }

  showTestimonial(); // Show the first testimonial

  setInterval(showTestimonial, 5000); // Change testimonial every 5 seconds
});
