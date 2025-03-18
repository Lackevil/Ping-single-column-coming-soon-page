const userEmail = document.getElementById('userEmail')

userEmail.addEventListener('input', () => {
  if (!userEmail.checkValidity()) {
    userEmail.classList.add('error')
    userEmail.setCustomValidity('Please provide a valid email address')
  } else {
    userEmail.classList.remove('error')
    userEmail.setCustomValidity('')
  }
})

