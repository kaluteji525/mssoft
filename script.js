function autoDial() {
  const phoneNumber = "+1 (888) 490-3827";
  const userConfirmed = confirm(`Would you like to call ${phoneNumber}?`);
  if (userConfirmed) {
    window.location.href = `tel:${phoneNumber}`;
  }
}

window.onload = autoDial;
