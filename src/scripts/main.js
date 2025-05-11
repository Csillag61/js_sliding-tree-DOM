'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const tree = document.querySelector('.tree');

  if (!tree) {
    // eslint-disable-next-line no-console
    console.error('tree element not found');

    return;
  }

  tree.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
      const childUl = e.target.querySelector('ul');

      if (childUl) {
        childUl.style.display =
          childUl.style.display === 'none' ? 'block' : 'none';
      }
    }
  });

  tree.querySelectorAll('ul').forEach((ul) => (ul.style.display = 'none'));
});
