export const ShowUpdateSpinner = () => {
  const loader = document.getElementById('Updater')

  if (loader) {
    loader.classList.remove('finished')
    loader.classList.add('refresh')
  }
}

export const HideUpdateSpinner = () => {
  const loader = document.getElementById('Updater')

  if (loader) {
    loader.classList.remove('refresh')
    loader.classList.add('finished')
  }
}
