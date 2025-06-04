document.querySelectorAll('.radio-container input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', () => {
        document.querySelectorAll('.radio-container label').forEach(label => {
            label.style.backgroundColor = '#F3F3F3';
            label.style.color = '#26427F';
        });
        if (radio.checked) {
            radio.nextElementSibling.style.backgroundColor = '#26427F';
            radio.nextElementSibling.style.color = '#F3F3F3';
        }
    });
});