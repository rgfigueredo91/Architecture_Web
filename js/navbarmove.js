let lastScrollTop = 100;
			navbar = document.getElementById("navbar-noboots");
			contact = document.getElementById("title-contact");
			menu = document.getElementById("title-menu");
			window.addEventListener("scroll", function () {
				var scrollTop = window.pageYOffset || document
					.documentElement.scrollTop;
				if (scrollTop < 1) {
					navbar.style.background = "none";
					navbar.style.color = "white";
					contact.style.color = "white";
					
					
					
				} else {
					navbar.style.background = "white";
					navbar.style.color = "black";
					contact.style.color = "black";
					
					
					
				}
				lastScrollTop = scrollTop;
			})
