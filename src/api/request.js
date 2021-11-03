const request = (url, params = {}) => {
  const __AUTH = '&client_id=6hOyhXxi4Y-_U4HrlAgDk9oQ1t7PJgq6qJfX_LgcpCA';
  const __BASE = 'https://api.unsplash.com/';

  return (
    fetch(__BASE + url + __AUTH, params)
      .then(response => {
        if (response.status !== 200) {
          return response.text(error => {
            throw new Error(error);
          })
        }
    
        return response.json();
      })
      .catch(err => console.warn(`Failed fetch to url: ${url}`))
  )
}


export default request;