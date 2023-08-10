const extraReducers = ({ addCase }) => {
  const addToReducers = (arr: { action: any; callback: any }[]) => {
    arr.forEach(({ action, callback }) => addCase(action, callback))
  }
}

export default extraReducers
