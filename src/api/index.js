
export const Api = {
  getPhotos: () => {
    return new Promise((resolve, reject) => {
      fetch('https://jsonplaceholder.typicode.com/photos?_limit=9&_page=1&_sort=title&_order=asc')
        .then(response => response.json())
        .then(photos => resolve(photos))
        .catch(err => reject(err))
    })
  },
}
