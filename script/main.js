// Cambia il logo al click
document.addEventListener("DOMContentLoaded", () => {
    const logo = document.getElementById("logo");
    if (logo) {
      logo.addEventListener("click", () => {
        logo.src = logo.src.includes("logo.png")
          ? "assets/images/logo2.jpg"
          : "assets/images/logo.png";
      });
    }
  
    // Mostra orario nel footer
    function updateClock() {
      const clock = document.getElementById("clock");
      if (clock) {
        const now = new Date();
        clock.textContent = now.toLocaleTimeString();
      }
    }
  
    setInterval(updateClock, 1000);
    updateClock(); // Iniziale
  });
  