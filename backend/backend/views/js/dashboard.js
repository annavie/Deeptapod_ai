const stats = [
    'img/2.gif',
    'img/1.gif',
    'img/3.gif',
    'img/4.gif',
    'img/5.gif',
    'img/6.gif',
]
document.addEventListener("DOMContentLoaded", function() {
    const statItems = document.querySelectorAll(".stat-item");
    const mainImage = document.getElementById("main-image");
    const referenceItem = document.getElementById('ref');
    const settingsItem = document.getElementById('settings');
    const logoutItem = document.getElementById('log');

    statItems.forEach((item, index) => {
        item.addEventListener("click", function() {
            mainImage.src = stats[index];

            statItems.forEach((statItem) => {
                statItem.classList.remove("active");
            });

            item.classList.add("active");
        });
    });

    referenceItem.addEventListener("click", function() {
        window.location.href = "reference.html";
    });

    settingsItem.addEventListener("click", function() {
        window.location.href = "settings.html";
    });

    logoutItem.addEventListener("click", function() {
        window.location.href = "landing.html";
    });
});

