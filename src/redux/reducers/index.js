const initialState = {
  isOnSaleFiltered: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_ON_SALE_PRODUCTS":
      return Object.assign({}, state, {
        isOnSaleFiltered: true
      });
    default:
      return state;
  }
};
