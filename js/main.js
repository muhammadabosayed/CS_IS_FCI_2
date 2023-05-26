const up = document.querySelector('.up')




window.onscroll = function () {
  if (window.scrollY >= 600) {
    up.style.right = '20px'
    up.style.transition = '1s'
  } else {
    up.style.right = '-60px'
    up.style.transition = '1s'
  }
}

up.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}