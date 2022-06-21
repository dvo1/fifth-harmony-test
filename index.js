var navLinks = document.getElementById("navLinks");

function showMenu() {
  navLinks.style.right = "0"
}

function hideMenu() {
  navLinks.style.right = "-200px"
}

$().ready(function(){
  $(".text-box").fadeOut('fast').slideDown(2000).animate({opacity: 1.5}, 3000);
});
