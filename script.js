window.onload = function() {
    let menuToggle = document.querySelector('.menu-toggle');
    let nav = document.getElementById('navbar');
    let main = document.querySelector('main');

    if (window.innerWidth > 800) {
        nav.style.display = 'none'; // Hide the navigation bar initially only for larger screens
    }

    // Hamburger menu for smaller screens
    menuToggle.addEventListener('click', () => {
        if (nav.style.display === 'none') {
            nav.style.display = 'block';
            main.style.paddingTop = '70px'; // Adjust this value as needed
        } else {
            nav.style.display = 'none';
            main.style.paddingTop = '0';
        }
    });

    // Navbar appears when mouse is at the top of the window for larger screens
    document.body.addEventListener('mousemove', function(e) {
        if (window.innerWidth > 800) { // Adjust this value to match the breakpoint in your CSS
            if (e.clientY <= 100) {
                nav.style.display = 'block';
                main.style.paddingTop = '70px'; // Adjust this value as needed
            } else {
                nav.style.display = 'none';
                main.style.paddingTop = '0';
            }
        }
    });
};
