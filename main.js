function importNavBar(){
    //imports navbar
    const navbar = document.getElementById('navBarCont');
    fetch('nav-bar.html')
        .then(response => response.text())
        .then(data => {
            navbar.innerHTML = data;
            const popUpImg = document.querySelectorAll('.pop-up')

            popUpImg.forEach(x => {
                x.addEventListener('click', () => openImage(x));
            })

        })
        .catch(error => {
            console.error('Error fetching external HTML:', error);
        });
}


function openImage(img) {
    let modal = document.getElementById('image-popup');
    let modalImage = document.getElementById('popup-image');
    modal.style.display = 'block';
    modalImage.src = img.src;
}

function closeImage() {
    let modal = document.getElementById('image-popup');
    modal.style.display = 'none';
}
