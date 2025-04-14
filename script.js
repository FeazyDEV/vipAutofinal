document.addEventListener("DOMContentLoaded", function () {
    const priceCards = document.querySelectorAll(".price-card");
    const overlay = document.createElement("div");
    overlay.id = "overlay";
    document.body.appendChild(overlay);

    priceCards.forEach(card => {
        card.addEventListener("click", function () {
            const details = this.querySelector(".price-details");
            const arrow = this.querySelector(".arrow-icon");
            const isOpen = card.classList.contains("active");

            priceCards.forEach(otherCard => {
                if (otherCard !== this) {
                    otherCard.classList.remove("active");
                    otherCard.querySelector(".price-details").style.maxHeight = "0px";
                }
            });

            if (isOpen) {
                card.classList.remove("active");
                details.style.maxHeight = "0px";
                overlay.style.background = "rgba(0,0,0,0)";
                setTimeout(() => overlay.style.display = "none", 300);
            } else {
                card.classList.add("active");
                details.style.maxHeight = details.scrollHeight + "px";
                overlay.style.display = "block";
                setTimeout(() => overlay.style.background = "rgba(0,0,0,0.5)", 10);
            }
        });
    });

    overlay.addEventListener("click", function () {
        priceCards.forEach(card => {
            card.classList.remove("active");
            card.querySelector(".price-details").style.maxHeight = "0px";
        });
        overlay.style.background = "rgba(0,0,0,0)";
        setTimeout(() => overlay.style.display = "none", 300);
    });
});
 
document.addEventListener("DOMContentLoaded", function () {
    const pairs = document.querySelectorAll(".image-pair");
    let currentIndex = 0;

    function showPair(index) {
        pairs.forEach((pair, i) => {
            pair.classList.toggle("active", i === index);
        });
    }

    document.getElementById("nextBtn").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % pairs.length;
        showPair(currentIndex);
    });

    document.getElementById("prevBtn").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + pairs.length) % pairs.length;
        showPair(currentIndex);
    });

    showPair(currentIndex);
});