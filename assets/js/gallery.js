document.querySelectorAll('input[name="photos"]').forEach(input => {
    input.addEventListener('change', function() {
        filterImages(this.id);
    });
});


function filterImages(category) {
    const pics = document.querySelectorAll('.pic'); 

    pics.forEach(pic => {
        pic.style.display = 'none';
    });

    if (category === 'check1') {
        pics.forEach(pic => {
            pic.style.display = 'block';
        });
    } else if (category === 'check2') {
        pics.forEach(pic => {
            if (pic.classList.contains('harass')) {
                pic.style.display = 'block';
            }
        });
    } else if (category === 'check3') {
        pics.forEach(pic => {
            if (pic.classList.contains('gender')) {
                pic.style.display = 'block';
            }
        });
    } else if (category === 'check4') {
        pics.forEach(pic => {
            if (pic.classList.contains('violence')) {
                pic.style.display = 'block';
            }
        });
    }
}
