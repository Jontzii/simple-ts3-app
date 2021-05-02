const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Fetch from teamspeak API
    fetch('https://api.jontzi.com/teamspeak/v1/channels')
      .then(res => {
        if (res.status === 200) {
          res.json()
            .then(json => resolve(json))
        } else {
          reject(res.status)
        }
      })
      .catch(err => reject(err))
  })
}

export default fetchData
