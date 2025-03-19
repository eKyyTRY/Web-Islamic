document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuItems = mobileMenu.querySelectorAll("li"); // Ambil semua item menu

    // Pastikan menu tertutup saat pertama kali dimuat
    mobileMenu.classList.add("hidden", "opacity-0", "scale-95", "-translate-y-10", "invisible");

    // Toggle menu saat tombol hamburger diklik
    hamburger.addEventListener("click", function (event) {
        mobileMenu.classList.toggle("hidden");

        setTimeout(() => {
            mobileMenu.classList.toggle("opacity-100");
            mobileMenu.classList.toggle("opacity-0");
            mobileMenu.classList.toggle("scale-100");
            mobileMenu.classList.toggle("scale-95");
            mobileMenu.classList.toggle("-translate-y-10");
            mobileMenu.classList.toggle("translate-y-0");
            mobileMenu.classList.toggle("invisible");

            // Tambahkan animasi masuk untuk setiap item menu
            menuItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add("opacity-100", "translate-x-0");
                    item.classList.remove("opacity-0", "translate-x-[-20px]");
                }, 100 * (index + 1)); // Delay berdasarkan urutan
            });

        }, 10);

        event.stopPropagation(); // Mencegah event klik langsung menutup menu
    });

    // Klik di luar menu akan menutup menu
    document.addEventListener("click", function (event) {
        if (!mobileMenu.classList.contains("hidden") && !mobileMenu.contains(event.target) && !hamburger.contains(event.target)) {
            closeMenu();
        }
    });

    // Klik pada menu juga akan menutup menu
    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            closeMenu();
        });
    });

    // Fungsi untuk menutup menu dengan animasi keluar
    function closeMenu() {
        mobileMenu.classList.add("opacity-0", "scale-95", "-translate-y-10", "invisible");

        // Hapus animasi dari menu items
        menuItems.forEach(item => {
            item.classList.add("opacity-0", "translate-x-[-20px]");
            item.classList.remove("opacity-100", "translate-x-0");
        });

        setTimeout(() => {
            mobileMenu.classList.add("hidden");
        }, 600);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("dynamic-text");
    const texts = [
        "Akhlak Mulia dalam Islam",
        "Kesabaran adalah Kunci",
        "Kejujuran adalah Keindahan",
        "Budi Pekerti yang Luhur"
    ];
    
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;
    let opacity = 1;
    let lastTimestamp = 0;
    const typingSpeed = { write: 100, erase: 50, fade: 300 };

    function typeEffect(timestamp) {
        if (!lastTimestamp) lastTimestamp = timestamp;
        const elapsed = timestamp - lastTimestamp;

        // Atur kecepatan mengetik dan menghapus
        const speed = isDeleting ? typingSpeed.erase : typingSpeed.write;
        if (elapsed >= speed) {
            lastTimestamp = timestamp;
            const currentText = texts[index];

            if (isDeleting) {
                charIndex--;
            } else {
                charIndex++;
            }

            textElement.textContent = currentText.substring(0, charIndex);

            if (!isDeleting && charIndex === currentText.length) {
                setTimeout(() => isDeleting = true, 1500); // Tunggu sebelum menghapus
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                index = (index + 1) % texts.length;
            }
        }

        // Efek fade-out saat transisi antar teks
        if (charIndex === 0 && isDeleting) {
            opacity -= 0.05;
        } else {
            opacity += 0.05;
        }
        textElement.style.opacity = Math.min(1, Math.max(0, opacity));

        requestAnimationFrame(typeEffect);
    }

    requestAnimationFrame(typeEffect);
});


document.addEventListener("DOMContentLoaded", function () {
    const slideUpElements = document.querySelectorAll('.slide-up');
    slideUpElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }, 200 * index);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const btnAkhlak = document.getElementById("btn-akhlak"); // Sesuaikan dengan tombol di navbar
    const keutamaanSection = document.getElementById("keutamaan-section");

    // Saat tombol "Akhlak Mulia" diklik, scroll ke bagian tersebut
    btnAkhlak.addEventListener("click", function (event) {
        event.preventDefault(); // Mencegah efek default dari link
        keutamaanSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll ke section saat navbar diklik
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 50, // Offset biar pas
                    behavior: "smooth"
                });
            }
        });
    });

    // Efek animasi muncul saat scroll
    function revealOnScroll() {
        const sections = document.querySelectorAll(".fade-section");
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                section.style.opacity = "1";
                section.style.transform = "scale(1)";
            }
        });
    }

    // Animasi awal
    document.querySelectorAll(".fade-section").forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "scale(0.95)";
        section.style.transition = "opacity 1.2s ease-out, transform 1.2s ease-out";
    });

    // Tambah event scroll listener
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Jalankan sekali saat halaman dimuat
});

    document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                let targetId = this.getAttribute("href");

                if (targetId === "#") {
                    // Scroll ke atas jika beranda diklik
                    window.scrollTo({ top: 0, behavior: "smooth" });
                } else {
                    const target = document.querySelector(targetId);
                    if (target) {
                        window.scrollTo({
                            top: target.offsetTop - 50, 
                            behavior: "smooth"
                        });
                    }
                }
            });
        });

        // Efek animasi scroll muncul
        function revealOnScroll() {
            document.querySelectorAll(".fade-section").forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.85) {
                    section.style.opacity = "1";
                    section.style.transform = "translateY(0)";
                }
            });
        }

        // Inisialisasi efek awal
        document.querySelectorAll(".fade-section").forEach(section => {
            section.style.opacity = "0";
            section.style.transform = "translateY(50px)";
            section.style.transition = "opacity 1.2s ease-out, transform 1.2s ease-out";
        });

        // Event listener untuk scroll
        window.addEventListener("scroll", revealOnScroll);
        revealOnScroll();
    });

    document.addEventListener("DOMContentLoaded", function () {
        // Smooth scroll ke section saat navbar diklik
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener("click", function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute("href"));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 50,
                        behavior: "smooth"
                    });
                }
            });
        });

        // Efek animasi muncul saat scroll
        function revealOnScroll() {
            const sections = document.querySelectorAll(".fade-section");
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.85) {
                    section.style.opacity = "1";
                    section.style.transform = "translateY(0)";
                }
            });
        }

        // Set animasi awal
        document.querySelectorAll(".fade-section").forEach(section => {
            section.style.opacity = "0";
            section.style.transform = "translateY(30px)";
            section.style.transition = "opacity 1s ease-out, transform 1s ease-out";
        });

        // Tambah event scroll listener
        window.addEventListener("scroll", revealOnScroll);
        revealOnScroll(); // Jalankan sekali saat halaman dimuat
    });



    document.addEventListener("DOMContentLoaded", function () {
        // Smooth scroll ke section saat navbar diklik
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener("click", function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute("href"));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 50, // Offset agar tidak tertutup navbar
                        behavior: "smooth"
                    });
                }
            });
        });

        // Efek animasi muncul saat scroll
        function revealOnScroll() {
            const sections = document.querySelectorAll(".fade-section");
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.85) {
                    section.style.opacity = "1";
                    section.style.transform = "scale(1)";
                }
            });
        }

        // Atur animasi awal
        document.querySelectorAll(".fade-section").forEach(section => {
            section.style.opacity = "0";
            section.style.transform = "scale(0.95)";
            section.style.transition = "opacity 1.2s ease-out, transform 1.2s ease-out";
        });

        // Tambah event scroll listener
        window.addEventListener("scroll", revealOnScroll);
        revealOnScroll(); // Jalankan sekali saat halaman dimuat
    });