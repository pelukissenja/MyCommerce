const link = document.querySelector('link');
if (window.innerWidth < 1024) {
  link.setAttribute('href', 'mobile.css');
} else {
  link.setAttribute('href', 'styles.css');
}
