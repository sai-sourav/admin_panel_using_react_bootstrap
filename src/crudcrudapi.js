import axios from "axios";

const apiUrl = "https://crudcrud.com/api/2eb3a3780c3e4a449c81c8657df56dc4";

async function getCart() {
    try {
        const response = await axios.get(`${apiUrl}/cart`);
        let data = response.data;
        if(!data[0]){
            await axios.post(`${apiUrl}/cart`,{
                items: []
            });
            const response1 = await axios.get(`${apiUrl}/cart`);
            data = response1.data
        }
        return data[0];
    } catch (err) {
        console.log(err);
        return null;
    }

}

async function getProducts() {
    try {
        const response = await axios.get(`${apiUrl}/products`);
        let data = response.data;
        if(!data[0]){
            await axios.post(`${apiUrl}/products`,{
                items: []
            });
            const response1 = await axios.get(`${apiUrl}/products`);
            data = response1.data
        }
        return data[0];
    } catch (err) {
        console.log(err);
        return null;
    }
}


async function addProduct(newitem) {
    try {
        const products = await getProducts();
        if (!products){
            return null
        }
        const items = products.items;
        const id = products._id;
        // find item if present
        const finditemindex = items.findIndex((item) => item.medname === newitem.medname);
        if (finditemindex >= 0) {
            items[finditemindex].quantity = Number(items[finditemindex].quantity) + Number(newitem.quantity)
        }
        else {
            items.push(newitem);
        }
        const newProducts = {
            items: items
        }
        await axios.put(`${apiUrl}/products/${id}`, newProducts);
        return {
            status: "success"
        }
    } catch (err) {
        console.log(err);
        return {
            status: "failed to add item to products"
        }
    }
}




async function addItemToCart(newitem) {
    try {
        const Cart = await getCart();
        if(!Cart){
            return null
        }
        const items = Cart.items;
        const cartid = Cart._id;
        // find item if present
        const finditemindex = items.findIndex((item) => item.medname === newitem.medname);
        if (finditemindex >= 0) {
            items[finditemindex].quantity += 1
        }
        else {
            newitem["quantity"] = 1
            items.push(newitem);
        }
        const newCart = {
            items: items
        }
        await axios.put(`${apiUrl}/cart/${cartid}`, newCart);
        await removeProduct(newitem);
        return {
            status: "success"
        }
    } catch (err) {
        console.log(err);
        return {
            status: "failed to add item to cart"
        }
    }
}

async function removeProduct(item){
    try{
        const products = await getProducts();
        if (!products){
            return null
        }
        const items = products.items;
        const id = products._id;
        const find = items.findIndex((product) => product.medname === item.medname)
        if (find >= 0) {
            items[find].quantity = Number(items[find].quantity) - 1
            if (items[find].quantity === 0) {
                items.splice(find, 1)
            }
        }
        const newProducts = {
            items: items
        }
        await axios.put(`${apiUrl}/products/${id}`, newProducts);
        return {
            status: "success"
        }


    }catch (err) {
        console.log(err);
        return {
            status: "failed to remove product"
        }
    }
}


async function removeCartItem(item) {
    try {
        const Cart = await getCart();
        if(!Cart){
            return null
        }
        const cartitems = Cart.items;
        const cartid = Cart._id;
        const find = cartitems.findIndex((product) => product.title === item.title)
        if (find >= 0) {
            cartitems[find].quantity = Number(cartitems[find].quantity) - 1
            if (cartitems[find].quantity === 0) {
                cartitems.splice(find, 1)
            }
        }
        const newCart = {
            items: cartitems
        }
        await axios.put(`${apiUrl}/cart/${cartid}`, newCart);
        return {
            status: "success"
        }
    } catch (err) {
        console.log(err);
        return {
            status: "failed"
        }
    }
}


export { getCart, getProducts, addProduct, removeProduct, addItemToCart, removeCartItem };