document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Navigation Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');

    if (hamburger && navbar) {
        hamburger.addEventListener('click', () => {
            navbar.classList.toggle('active');
            
            // Toggle menu icon between bars and times (X)
            const icon = hamburger.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
    }

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('#navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbar.classList.contains('active')) {
                navbar.classList.remove('active');
                const icon = hamburger.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            }
        });
    });

    // 2. Dynamic File Upload Label Update
    const fileUpload = document.getElementById('fileUpload');
    const fileLabel = document.querySelector('.file-label');

    if (fileUpload && fileLabel) {
        fileUpload.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                const fileName = e.target.files[0].name;
                fileLabel.innerHTML = `<i class="fas fa-check-circle" style="color: var(--primary-color);"></i> ${fileName}`;
            } else {
                fileLabel.innerHTML = `<i class="fas fa-cloud-upload-alt"></i> Choose File / Photo`;
            }
        });
    }

    // 3. Prescription Form Submission
    const uploadForm = document.getElementById('uploadForm');

    if (uploadForm) {
        uploadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get values
            const name = uploadForm.querySelector('input[type="text"]').value;
            const phone = uploadForm.querySelector('input[type="tel"]').value;
            
            alert(`Thank you ${name}! Your order prescription has been submitted successfully. We will call you shortly on ${phone}.`);
            
            // Reset Form
            uploadForm.reset();
            fileLabel.innerHTML = `<i class="fas fa-cloud-upload-alt"></i> Choose File / Photo`;
        });
    }
});