window.onscroll = function() {scrollFunction()};


// Set the background image using the style property

function scrollFunction() {
    // Get the height of the header image
    var headerHeight = document.querySelector('.Header').offsetHeight;
    var perfHeight = document.querySelector('.Performance').offsetHeight;
    // Check if the scroll position is greater than the header height
    if (document.body.scrollTop > headerHeight/2 || document.documentElement.scrollTop > headerHeight/2) {
        // Add the "show" class to the navbar
        document.getElementById("navbar").classList.add("show");
        document.getElementById("Perf-Side").style.width = "20%";
        document.getElementById("Perf-Side").style.marginLeft = "0";
        document.getElementById("Peerformance").style.opacity = "100";
        document.getElementById("Peerformance").style.width = "80%";
        document.getElementById("Perf-Control").style.backgroundImage = "url(Perf-Back.png)";
    } else {
        // Remove the "show" class from the navbar
        document.getElementById("navbar").classList.remove("show");
    }
    if (document.body.scrollTop > perfHeight+headerHeight/4 || document.documentElement.scrollTop > perfHeight+headerHeight/4) {
        // Add the "show" class to the navbar
        document.getElementById("Demofade").style.opacity = "1";
        document.getElementById("Film-animation").style.opacity = "1";
        document.getElementById("Film-animation").style.animation = "animatezoom 2s";
    } else {
        // Remove the "show" class from the navbar

    }
}

document.addEventListener('DOMContentLoaded', function() {
            // Get the video and button elements
            var video = document.getElementById('Peerformance');
            var button = document.getElementById('Win11button');

            // Function to toggle play/pause
            function togglePlayPause() {
                if (video.paused) {
                    video.play();
                    button.innerHTML = "<i class='fa fa-pause' style='color: midnightblue;'></i> Pause";
                } else {
                    video.pause();
                    button.innerHTML = "<i class='fa fa-play' style='color: midnightblue;'></i> Play";
                }
            }

            // Add click event listener to the button
            button.addEventListener('click', togglePlayPause);
        });
