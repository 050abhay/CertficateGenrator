document.getElementById('generateBtn').addEventListener('click', () => {
    const name = document.getElementById('nameInput').value;
    const certificate = document.getElementById('certificate');
    const userName = document.getElementById('userName');
    const date = document.getElementById('date');
    const container = document.querySelector('.container');

    if (name.trim() === "") {
        alert("Please enter your name.");
        return;
    }

    userName.textContent = name;
    date.textContent = new Date().toLocaleDateString();
    certificate.style.display = "block";

    // Render the certificate as an image
    html2canvas(certificate).then(canvas => {
        // Remove dynamic content and replace with static image
        certificate.style.display = "none";

        const img = document.createElement('img');
        img.src = canvas.toDataURL('image/png');
        img.alt = "Generated Certificate";
        img.style.width = "100%";
        img.style.border = "2px solid #0411c9";
        img.style.borderRadius = "10px";
        img.style.marginTop = "20px";

        // Add the static image to the container
        container.appendChild(img);

        // Enable download
        document.getElementById('downloadBtn').addEventListener('click', () => {
            const link = document.createElement('a');
            link.download = 'certificate.png';
            link.href = img.src;
            link.click();
        });
    });
});
