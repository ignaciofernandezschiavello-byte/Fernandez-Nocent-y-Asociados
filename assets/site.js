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

// Deliberately local validation: no endpoint, storage, analytics, or data transfer.
const form = document.querySelector('#contact-form');
const status = document.querySelector('#form-status');
const validateButton = document.querySelector('#validate-button');
validateButton.disabled = false;
function validateQuery(event) {
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
    status.textContent = 'Revise los campos obligatorios. Su consulta no fue enviada.';
    return;
  }
  status.textContent = 'Los datos son válidos. Su consulta no fue enviada: el envío del formulario aún no está habilitado. Contáctenos por WhatsApp, correo o teléfono.';
}
form.addEventListener('submit', validateQuery);
validateButton.addEventListener('click', validateQuery);
form.addEventListener('input', event => {
  if (typeof event.target.setCustomValidity === 'function') event.target.setCustomValidity('');
  status.textContent = '';
});
