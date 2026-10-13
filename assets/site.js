'use strict';

// The menu stays visible when JavaScript is unavailable.
const header = document.querySelector('.site-header');
const menu = document.querySelector('#menu');
const toggle = document.querySelector('.menu-toggle');
header.classList.add('js-menu');
toggle.hidden = false;
function closeMenu(returnFocus = false) {
  menu.classList.remove('is-open');
  toggle.setAttribute('aria-expanded', 'false');
  if (returnFocus) toggle.focus();
}
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  menu.classList.toggle('is-open', open);
});
menu.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
header.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') closeMenu(true);
});
window.matchMedia('(min-width: 801px)').addEventListener('change', () => closeMenu());

// FormSubmit sends submissions to the studio mailbox after email activation.
const form = document.querySelector('#contact-form');
const status = document.querySelector('#form-status');
const sendButton = document.querySelector('#validate-button');
form.addEventListener('submit', async event => {
  event.preventDefault();
  for (const field of form.querySelectorAll('[required]')) {
    field.setCustomValidity('');
    if (!field.value.trim()) field.setCustomValidity('Complete este campo.');
  }
  const message = form.elements.message;
  if (message.value.trim() && message.value.trim().length < 10) {
    message.setCustomValidity('Escriba una consulta de al menos 10 caracteres.');
  }
  if (!form.reportValidity()) {
    status.textContent = 'Revise los campos obligatorios.';
    return;
  }
  sendButton.disabled = true;
  status.textContent = 'Enviando consulta…';
  try {
    const payload = Object.fromEntries(new FormData(form).entries());
    const response = await fetch(form.action, {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    if (!response.ok || String(data.success).toLowerCase() !== 'true') {
      const activation = /activat|confirm/i.test(String(data.message || ''));
      status.textContent = activation
        ? 'El formulario está pendiente de activación. El estudio debe confirmar el correo de FormSubmit. Mientras tanto, escriba directamente a estudiofnconsultores@gmail.com.'
        : 'No pudimos confirmar el envío. Escriba directamente a estudiofnconsultores@gmail.com.';
      return;
    }
    status.textContent = 'Consulta enviada correctamente. Gracias por contactarnos.';
    form.reset();
  } catch (error) {
    status.textContent = 'No se pudo enviar la consulta. Escriba directamente a estudiofnconsultores@gmail.com.';
  } finally {
    sendButton.disabled = false;
  }
});
form.addEventListener('input', event => {
  if (typeof event.target.setCustomValidity === 'function') event.target.setCustomValidity('');
});
