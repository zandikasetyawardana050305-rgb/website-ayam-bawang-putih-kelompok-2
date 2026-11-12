document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Tutup menu navigasi setelah salah satu tautan dipilih pada layar kecil.
  document.querySelectorAll("#mainNav .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      const nav = document.getElementById("mainNav");
      if (nav && nav.classList.contains("show") && window.bootstrap) {
        window.bootstrap.Collapse.getOrCreateInstance(nav).hide();
      }
    });
  });

  // Isi pesan WhatsApp sesuai menu yang dipilih.
  const phone = "6282231811808";
  document.querySelectorAll(".order-link").forEach((link) => {
    const menu = link.dataset.menu || "menu";
    const message = `Halo Ayam Goreng Bawang Putih 71, saya ingin bertanya dan memesan ${menu}. Mohon info ketersediaan dan harganya.`;
    link.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    link.target = "_blank";
    link.rel = "noopener";
  });
});