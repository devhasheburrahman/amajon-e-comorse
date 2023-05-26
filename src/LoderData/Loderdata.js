import Product from "../Component/Product/Product";
import { getShoppingCart } from "../utilities/fakedb";

const cardloderData = async () => {
    const loadProduct = await fetch('products.json')
    const products = await loadProduct.json();
    const storedCart = getShoppingCart();
    const saveCart = [];
    for (const id in storedCart) {
        const addedProduct = products.find(pd => pd.id === id);
        if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            saveCart.push(addedProduct);
        }
    }




    return saveCart;
    // return [products, saveCart];
}
export default cardloderData;





// const cardloderData = () => {
//     fetch('products.json')
//         .then(res => res.json())
//         .then(data => products(data))
//     return roducts
// }
// export default cardloderData;