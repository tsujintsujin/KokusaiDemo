


addEventListener("load", (event) => { });

onload = (event) => {

    navToggle = document.getElementById('navToggle');
    if (document.getElementById('mkdhymn')) {
        const audio = document.getElementById('mkdhymn');
        audio.volume = 0.2;
    }

    navToggleText = document.getElementById('navToggleText');



    let btnToTop = document.getElementById("btn-back-to-top");
    let sideNavMask = document.getElementById("sideNavMask");

    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (
            document.body.scrollTop > 300 ||
            document.documentElement.scrollTop > 300
        ) {
            btnToTop.style.display = "block ";
        } else {
            btnToTop.style.display = "none";
        }
    }


    btnToTop.addEventListener("click", (event) => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });





    navToggle.addEventListener("click", (event) => {

        sidebar.classList.toggle("active");
        navToggle.classList.toggle("active");
        sideNavMask.classList.toggle("active");


        if (navToggleText.innerHTML === "‹") {
            navToggleText.innerHTML = "›";
        } else {
            navToggleText.innerHTML = "‹";
        }
    });

    if (document.getElementById("navToggle")) {
        let academeDrop = document.getElementById("academeDrop");
        let servicesDrop = document.getElementById("servicesDrop");
        let aboutDrop = document.getElementById("aboutDrop");
        let chevronAcademe = document.getElementById("chevronAcademe");
        let chevronServices = document.getElementById("chevronServices");
        let chevronAbout = document.getElementById("chevronAbout");

        let chevronUp = 'M7.9313 14.9999H16.0686C16.6744 14.9999 16.9773 14.9999 17.1175 14.8801C17.2393 14.7762 17.3038 14.6203 17.2913 14.4607C17.2768 14.2768 17.0626 14.0626 16.6342 13.6342L12.5656 9.56561C12.3676 9.3676 12.2686 9.2686 12.1544 9.2315C12.054 9.19887 11.9458 9.19887 11.8454 9.2315C11.7313 9.2686 11.6323 9.3676 11.4342 9.56561L7.36561 13.6342C6.93724 14.0626 6.72305 14.2768 6.70858 14.4607C6.69602 14.6203 6.76061 14.7762 6.88231 14.8801C7.02257 14.9999 7.32548 14.9999 7.9313 14.9999Z';
        let chevronDown = 'M16.0686 9H7.9313C7.32548 9 7.02257 9 6.88231 9.1198C6.76061 9.22374 6.69602 9.37967 6.70858 9.53923C6.72305 9.72312 6.93724 9.93731 7.36561 10.3657L11.4342 14.4343C11.6322 14.6323 11.7313 14.7313 11.8454 14.7684C11.9458 14.8011 12.054 14.8011 12.1544 14.7684C12.2686 14.7313 12.3676 14.6323 12.5656 14.4343L16.6342 10.3657C17.0626 9.93731 17.2768 9.72312 17.2913 9.53923C17.3038 9.37967 17.2392 9.22374 17.1175 9.1198C16.9773 9 16.6744 9 16.0686 9Z';

        academeDrop.addEventListener("click", (event) => {
            if (academeDrop.getAttribute('aria-expanded') === "true") {
                chevronAcademe.setAttribute('d', chevronUp);
            } else {
                chevronAcademe.setAttribute('d', chevronDown);

            }

        });

        servicesDrop.addEventListener("click", (event) => {
            if (servicesDrop.getAttribute('aria-expanded') === "true") {
                chevronServices.setAttribute('d', chevronUp);
            } else {
                chevronServices.setAttribute('d', chevronDown);
            }
        });

        aboutDrop.addEventListener("click", (event) => {
            if (aboutDrop.getAttribute('aria-expanded') === "true") {
                chevronAbout.setAttribute('d', chevronUp);
            } else {
                chevronAbout.setAttribute('d', chevronDown);
            }
        });

    }



};


