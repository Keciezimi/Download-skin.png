document.getElementById("downloadButton").addEventListener("click", function() {
    // Start the download
    window.location.href = 'skin.png';

    // Show the instructions after download is initiated
    var instructions = document.getElementById("instructions");
    instructions.style.display = 'block';
});
