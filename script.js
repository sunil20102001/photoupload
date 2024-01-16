document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");
    const fileInput = document.getElementById("fileInput");

    // Sample photo URLs
    const photoUrls = [
        "url_to_your_photo_1.jpg",
        "url_to_your_photo_2.jpg",
        // Add more photo URLs as needed
    ];

    // Display thumbnails in the gallery
    displayPhotos(photoUrls);

    fileInput.addEventListener("change", function () {
        const file = fileInput.files[0];
        if (file) {
            uploadPhoto(file);
        }
    });
});

function displayPhotos(photoUrls) {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";

    photoUrls.forEach((url) => {
        const thumbnail = document.createElement("div");
        thumbnail.classList.add("thumbnail");

        const img = document.createElement("img");
        img.src = url;

        thumbnail.appendChild(img);
        gallery.appendChild(thumbnail);
    });
}

function uploadPhoto(file) {
    // Implement photo upload logic here
    // This could involve sending the file to a server using AJAX or Fetch API
    // and updating the gallery with the new photo URL after successful upload
    console.log("Uploading photo:", file.name);
}
