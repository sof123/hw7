export function setLocation(l){
  store.getState().todoItems[store.getState.nextId-1].location = l
}

export function getLocation(){
  return store.getState().todoItems[store.getState.nextId-1].location
}
