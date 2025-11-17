document.addEventListener('DOMContentLoaded', () => {
  console.log('App booted');
  const btn = document.getElementById('testBtn');
  const status = document.getElementById('status');
  if (btn && status) {
    btn.addEventListener('click', () => {
      status.textContent = 'Button clicked at ' + new Date().toLocaleTimeString();
    });
  }
});
