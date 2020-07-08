import PRODUCTS from '../../data/dummy-data';

const initialState = {
    availableProduts: PRODUCTS,
    userProducts: PRODUCTS.filter(prod => prod.ownerId === 'id')
};

export default (state = initialState, action) => {
    return state;
};