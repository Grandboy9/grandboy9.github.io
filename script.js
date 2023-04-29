window.onload = function() {
    document.body.addEventListener('mousemove', function(e) {
        var navbar = document.getElementById('navbar');
        var main = document.querySelector('main');
        if (e.clientY <= 50) {
            navbar.style.display = 'block';
            main.style.paddingTop = '70px'; // Adjust this value as needed
        } else {
            navbar.style.display = 'none';
            main.style.paddingTop = '0';
        }
    });
};

