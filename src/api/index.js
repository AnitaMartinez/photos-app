
export const Api = {
  getPhotos: ({ page, itemsPerPage }) => {
    let totalItems;
    return new Promise((resolve, reject) => {
      fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${itemsPerPage}&_page=${page}&_sort=title&_order=asc`)
        .then(response => {
          totalItems = getTotalItemsFromHeaders(response)
          return response.json()
        }) 
        .then(photos => resolve({photos, totalItems}))
        .catch(err => reject(err))
    })
  },
}

const getTotalItemsFromHeaders = response => {
  for(const entry of response.headers.entries()){
    if(entry.includes('x-total-count') && entry.length === 2){
      return entry[1]
    }
  }
}