document.addEventListener('DOMContentLoaded', function() {
    const videoNames = Array.from({ length: 39 }, (_, index) => `lecture${index + 1}.mp4`);

    videoNames.forEach(videoName => {
        addVideoToList(videoName);
    });

});


function addVideoToList(videoName) {
    const videoList = document.getElementById('videoList');
    const videoItem = document.createElement('div');
    videoItem.className = 'video-item';

    const videoElement = document.createElement('video');
    videoElement.src = videoName; // Assuming videos are in the same directory as the HTML file
    videoElement.controls = true;

    const videoTitle = document.createElement('p');
    videoTitle.textContent = videoName;

    videoItem.appendChild(videoElement);
    videoItem.appendChild(videoTitle);
    videoList.appendChild(videoItem);
}
const darkModeToggle = document.getElementById('darkModeToggle');
const videoItems = document.querySelectorAll('.video-item');

