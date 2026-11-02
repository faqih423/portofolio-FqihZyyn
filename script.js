// MENU NAVIGASI
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });
});

// TAHUN OTOMATIS
document.getElementById("year").textContent = new Date().getFullYear();

// JAM INDONESIA BARAT
function updateClock() {
    const now = new Date();

    document.getElementById("clock").textContent =
        now.toLocaleTimeString("id-ID", {
            timeZone: "Asia/Jakarta",
            hour12: false
        });

    document.getElementById("date").textContent =
        now.toLocaleDateString("id-ID", {
            timeZone: "Asia/Jakarta",
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        });
}

updateClock();
setInterval(updateClock, 1000);

// DARK MODE DAN LIGHT MODE
const themeToggle = document.getElementById("theme-toggle");

if (localStorage.getItem("portfolio-theme") === "light") {
    document.body.classList.add("light");
    themeToggle.textContent = "🌙";
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");

    themeToggle.textContent = isLight ? "🌙" : "☀️";
    localStorage.setItem("portfolio-theme", isLight ? "light" : "dark");
});

// ANIMASI SCROLL
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove("hidden");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(element => {
        element.classList.add("hidden");
        observer.observe(element);
    });
}

// EFEK KILATAN SAAT WEBSITE DIBUKA
const lightning = document.createElement("div");
lightning.className = "lightning";
document.body.appendChild(lightning);

// Hapus efek setelah animasi selesai
setTimeout(() => {
    lightning.remove();
}, 1300);

/* EFEK PETIR SAAT HALAMAN DIBUKA */
window.addEventListener("load", function () {
    const efek = document.createElement("div");
    efek.className = "lightning";

    document.body.appendChild(efek);

    setTimeout(function () {
        efek.remove();
    }, 1100);
});
