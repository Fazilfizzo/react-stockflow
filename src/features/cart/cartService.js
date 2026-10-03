import api from "../../shared/api/axios"
// import toast from "react-hot-toast";

const cartService = {
  addToCart: (request) => 
      api.post("/cart/items",
        request
      ),

  updateQuantity: (cartItemId, quantity) => api.put(`/cart/items/${cartItemId}`, { quantity }),

  getCart: () => api.get("/cart"),

  removeCartItem: (cartItemId) => api.delete(`/cart/items/${cartItemId}`)
}



export default cartService;


