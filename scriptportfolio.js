<!-- ✅ JavaScript for hamburger menu and scroll -->
<script>
  function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
  }

  // Optional: Auto-close nav menu after clicking a link (mobile)
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelector('.nav-links').classList.remove('active');
    });
  });

  // Scroll to top button logic
  window.onscroll = function () {
    const scrollBtn = document.querySelector('.scroll-top');
    if (scrollBtn) {
      scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    }
  };
</script>

<!-- ✅ Scroll to top button (add to HTML body where needed) -->
<button class="scroll-top" onclick="window.scrollTo({ top: 0, behavior: 'smooth' });" style="
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: none;
  background: #3b49df;
  color: white;
  border: none;
  padding: 12px 18px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1000;
">↑</button>
