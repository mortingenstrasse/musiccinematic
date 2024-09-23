// "Read More" butonuna tıklanma işlemi
document.getElementById('read-more').addEventListener('click', function() {
    document.getElementById('full-description').style.display = 'block';
    this.style.display = 'none'; // "Read More" butonunu gizle
});

// E-posta kopyalama ve tooltip gösterme
document.getElementById('email-copy').addEventListener('click', function() {
    // Panoya kopyala
    const email = "tuncalicioglu@gmail.com";
    navigator.clipboard.writeText(email).then(function() {
        // Tooltip'i göster
        const tooltip = document.getElementById('tooltip');
        tooltip.classList.add('tooltip-visible');

        // Tooltip'i 2 saniye sonra gizle
        setTimeout(function() {
            tooltip.classList.remove('tooltip-visible');
        }, 2000);
    }).catch(function(err) {
        console.error('E-posta kopyalanamadı:', err);
    });
});
