const clearLoader = () => {
  const spinningLoader = document.getElementById('Loader')

  if (spinningLoader) {
    // Fade out the spinner
    spinningLoader.classList.add('loaded')

    // Remove from DOM
    setTimeout(() => { spinningLoader.outerHTML = '' }, 2000)
  }
}

export default clearLoader
