/* Manejo del formulario de contacto */
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Obtener los valores del formulario
  const name = document.getElementById('name').value;
  const appointmentDate = document.getElementById('appointmentDate').value;
  const message = document.getElementById('message').value;
  
  // Crear el mensaje personalizado para WhatsApp
  const whatsappMessage = `Hola, soy ${encodeURIComponent(name)} y quiero agendar una cita para el ${encodeURIComponent(appointmentDate)}. ${encodeURIComponent(message)}.`;
  
  // Redirigir a WhatsApp con el mensaje
  window.location.href = `https://wa.me/+573503592833?text=${whatsappMessage}`;
  
  // Mostrar el modal de confirmación
  document.getElementById('modal').style.display = 'flex';
  
  // Limpiar el formulario
  this.reset();
});

/* Cerrar el modal */
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

/* Cerrar el modal al hacer clic fuera */
document.getElementById('modal').addEventListener('click', function(e) {
  if (e.target === this) {
    closeModal();
  }
});

/* Manejo del menú hamburguesa */
document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('nav ul').classList.toggle('active');
});