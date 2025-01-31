import { Product } from "../../../types/products"
export const addToCart = (product : Product) => {

    const cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]')
    const existingProductIndex = cart.findIndex(item => item.id === product.id && item.productName === product.productName )
    if(existingProductIndex > -1) {
        cart[existingProductIndex].inventory += 1
    }
    else {
        cart.push({
            ...product, inventory: 1
        })
    }
    localStorage.setItem('cart', JSON.stringify(cart))
}
export const removeFromCart = ( productname:string) => {
    let cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]')
    cart = cart.filter(item => item.productName !== productname)
    localStorage.setItem('cart', JSON.stringify(cart))
}
export const updateCartQuantity = (productId :string, productname : string, quantity : number) => {
    const cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]')
    const productIndex = cart.findIndex(item => item.id === productId && item.productName === productname)

    if(productIndex > -1) {
        cart[productIndex].inventory = quantity;
        localStorage.setItem('cart', JSON.stringify(cart))
    }
}
export const getCartItems = () : Product[] => {
    return JSON.parse(localStorage.getItem('cart') || '[]')
}

