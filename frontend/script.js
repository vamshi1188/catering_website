// “Book Now” opens the phone dialer (browsers won't auto‑call for security) :contentReference[oaicite:4]{index=4}
document.getElementById('callButton').addEventListener('click', () => {
    window.location.href = 'tel:7702638605';
  });
  