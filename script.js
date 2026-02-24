

document.getElementById('ticketForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const ticketType = document.getElementById('ticketType').value;
  const quantity = document.getElementById('quantity').value;

  const message = `🎉 Safari Vibes Pool Party Reservation 🎉%0AName: ${name}%0APhone: ${phone}%0ATicket: ${ticketType}%0AQuantity: ${quantity}`;

  // Replace with your WhatsApp number (example: 2126XXXXXXX)
  const whatsappNumber = '212660735984';

  const url = `https://wa.me/${whatsappNumber}?text=${message}`;
  window.open(url, '_blank');
});
