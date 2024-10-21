
alert("welcome to gallery")
function openModal(imageSrc) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const captionText = document.getElementById("caption");
    
    modal.style.display = "block";
    modalImg.src = imageSrc;
    captionText.innerHTML = imageSrc.split('/').pop(); // Display the image file name as caption
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}
console.log("my first gallery")
