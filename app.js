// Check voor opgeslagen theme voorkeur
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
  document.body.classList.add('light-mode');
  document.getElementById('themeToggle').textContent = '🌙';
} else {
  document.getElementById('themeToggle').textContent = '☀️';
}

function toggleTheme() {
  document.body.classList.toggle('light-mode');
  const themeToggle = document.getElementById('themeToggle');

  if (document.body.classList.contains('light-mode')) {
    themeToggle.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  } else {
    themeToggle.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  }
}
