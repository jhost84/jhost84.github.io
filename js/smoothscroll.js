$(".navbar-collapse ul li a[href^='#']").on('click', function(e) {
   e.preventDefault();
   $('html, body').animate({ scrollTop: $(this.hash).offset().top -50 }, 700);

   // edit: Opera and IE requires the "html" elm. animated
});

$("a.navbar-brand[href^='#']").on('click', function(e) {
   e.preventDefault();
   $('html, body').animate({ scrollTop: $(this.hash).offset().top -50 }, 700);

   // edit: Opera and IE requires the "html" elm. animated
});

