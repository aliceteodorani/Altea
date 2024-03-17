/*i video rimangono con frame ultimo


// Seleziona tutti gli elementi con la classe "video"
var videos = document.querySelectorAll('.video');

// Aggiungi gli eventi mouseenter e mouseleave a tutti i video
videos.forEach(function(video) {
    // Avvia la riproduzione del video quando il mouse entra nell'area del video
    video.addEventListener('mouseenter', function() {
        this.play();
    });

    // Interrompe la riproduzione del video quando il mouse esce dall'area del video
    video.addEventListener('mouseleave', function() {
        this.pause();
    });
});

*/


// i video ritornano al primo frame
var videos = document.querySelectorAll('.video');

// Aggiungi gli eventi mouseenter e mouseleave a tutti i video
videos.forEach(function(video) {
    // Avvia la riproduzione del video quando il mouse entra nell'area del video
    video.addEventListener('mouseenter', function() {
        this.play();
    });

    // Interrompe la riproduzione del video quando il mouse esce dall'area del video
    video.addEventListener('mouseleave', function() {
        this.pause();
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var videos = document.querySelectorAll('.video');
    var isHovered = false;

    videos.forEach(function(video) {
        video.addEventListener('mouseenter', function() {
            isHovered = true;
            video.play();
        });

        video.addEventListener('mouseleave', function() {
            isHovered = false;
            video.pause();
            video.currentTime = 0; // Torna al primo frame quando esce dall'area del video
        });

        video.addEventListener('ended', function() {
            if (!isHovered) {
                video.currentTime = 0; // Torna al primo frame quando il video termina
            }
        });
    });
});


/* per collapse*/
function toggleCollapse() {
  var collapseContent = event.target.nextElementSibling;
  collapseContent.classList.toggle('collapsed');
}


/* effetto opaco testi titoli*/
document.addEventListener('DOMContentLoaded', function() {
    var contents = document.querySelectorAll('.content');

    window.addEventListener('scroll', function() {
        contents.forEach(function(content) {
            var bounding = content.getBoundingClientRect();
            if (bounding.top < window.innerHeight) {
                content.classList.add('fade-in');
            }
        });
    });
});


// Carosello
