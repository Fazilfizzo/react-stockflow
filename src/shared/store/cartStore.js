import { create } from "zustand";
import cartService from "../../features/cart/cartService";
import toast from "react-hot-toast";

const useCartStore = create((set, get) => ({

    cart: null,
    items: [],
    error: null,
    totalItems: null,
    subTotal: null,
    total: null,

    loading: false,
    updating: false,

    setCart: (cart) => set({
        cart,
        error: null
    }),

    setLoading: (loading) => set({
        loading
    }),

    setError: (error) => set({
        error,
        loading: false
    }),

    setTotalItems: (totalItems) => set({
        totalItems
    }),

    clearCart: () => set({
        cart: null,
        error: null
    }),

    addToCart: async (productId, quantity = 1) => {
       set({ loading: true, error: null })

       try {
        const res = await cartService.addToCart({
            productId,
            quantity
        });

        console.log(res.data.items);

        set({
            items: res.data.items,
            totalItems: res.data.totalItems,
            subTotal: res.data.subTotal,
            total: res.data.totalAmount,
            loading: false
        });


        toast.success("Added to cart");
       } catch(error) {
         toast.error("Add to cart failed")
          console.log(error)
       }

    },

    updateQuantity: async (cartItemId, quantity) => {
        const state = get();

        const updatedItems = state.items.map(item => item.cartItemId == cartItemId ? {...item, quantity} : item);

        set({ items: updatedItems });

        try {
          set({ updating: true })

          const res = await cartService.updateQuantity(cartItemId, quantity);

          set({
            items: res.data.items,
            totalItems: res.data.totalItems,
            subTotal: res.data.subTotal,
            total: res.data.totalAmount,
            updating: false
          })

        } catch (err) {
           set({ updating: false })
           toast.error(err.response.data.message)
           console.log(err)

        //    toast.error(err.response.data.message)

           get().fetchCart();

        }
    },

    fetchCart: async () => {
        set({ loading: true });

        try {
            const res = await cartService.getCart();

            set({
                items: res.data.items,
                totalItems: res.data.totalItems,
                subTotal: res.data.subTotal,
                total: res.data.totalAmount,
                loading: false
            })
        } catch (err) {
            set({ loading: false })

            console.log(err)
        }
    },

    removeCartItem: async (cartItemId) => {
         try {
            const res = await cartService.removeCartItem(cartItemId);

            set({
                items: res.data.items,
                totalItems: res.data.totalItems,
                subTotal: res.data.subTotal,
                total: res.data.totalAmount,
            })
         } catch(err) {
            console.log(err)
         }
    },

    checkout: () => {
        set({
                items: [],
                totalItems: 0,
                subTotal: 0,
                total: 0,
            })
    }
}));

export default useCartStore;