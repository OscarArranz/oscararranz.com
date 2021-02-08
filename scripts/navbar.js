const navButton = document.querySelector('#nav-button');

navButton.addEventListener('click', () => {
  const navigation = document.querySelector('#navbar-navigation');
  const linkList = navigation.querySelectorAll('a');
  const socialLinks = navigation.querySelector('#social-icons');

  navigation.classList.toggle('show-navigation');

  let time = 300;

  linkList.forEach((link) => {
    if (!link.firstChild.nextSibling) {
      if (link.classList.contains('show-link')) link.classList.toggle('show-link');
      else setTimeout(() => {
        link.classList.toggle('show-link');
      }, time);
      time += 300;
    }
  });

  if (socialLinks.classList.contains('show-icons')) socialLinks.classList.toggle('show-icons');
  else setTimeout(() => {
    socialLinks.classList.toggle('show-icons');
  }, time)
});