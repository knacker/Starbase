var mobileNav = document.getElementById("mobile-nav");
var mainNav = document.getElementById("main-nav");
var btnNav = document.getElementById("btn-mobile-nav");

mobileNav.innerHTML = mainNav.innerHTML;
btnNav.setAttribute('onclick', 'toggle_mobile_nav()');
btnNav.setAttribute('href', 'javascript:void(0)');

function toggle_mobile_nav() {
	var mobileNav = document.getElementById("mobile-nav");
	var imgMobileNav = document.getElementById("img-btn-mobile-nav");
	
	if (mobileNav.classList.contains("active")) {
		mobileNav.classList.remove("active");
		imgMobileNav.src='img/btn-mobile-nav.svg';
	} else {
		mobileNav.classList.add("active");	
		imgMobileNav.src='img/btn-close.svg';
	}
}

var btnBackToTop = document.getElementById("btn-back-to-top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnBackToTop.style.display = "block";
  } else {
    btnBackToTop.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}

//onclick="toggle_mobile_nav()"
