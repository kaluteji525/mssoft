function autoDial() {
  const phoneNumber = "+1 (800) 642-7676";
  const userConfirmed = confirm(`Would you like to call ${phoneNumber}?`);
  if (userConfirmed) {
    window.location.href = `tel:${phoneNumber}`;
  }
}

window.onload = autoDial;
