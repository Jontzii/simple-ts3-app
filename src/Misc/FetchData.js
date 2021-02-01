const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Fetch from teamspeak API
    fetch('https://api.jontzi.com/teamspeak/v1/channels')
    .then(res => res.json())
    .then(json => {
      resolve(json);
    })
    .catch(err => reject(err))
  })
}

export default fetchData;