export const filterData = (searchText, stores) => {
  return stores.filter(store => store.info.name.toLowerCase().includes(searchText.toLowerCase()));
}

//Check if an object is empty 
export const isEmptyObject =  (obj)  => {
  return Object.keys(obj).length === 0;
}
