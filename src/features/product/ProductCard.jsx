import { useNavigate } from "react-router-dom";
import useCartStore from "../../shared/store/cartStore";
import toast from "react-hot-toast";


const ProductCard = ({ product }) => {


    const navigate = useNavigate();


    const addToCart = useCartStore(
        state => state.addToCart
    );



    const handleAddToCart = async () => {

        try {

            await addToCart(product.id, 1);

            toast.success("Added to cart");

        } catch(error) {

            toast.error(
                error?.response?.data?.message
                || "Failed to add product"
            );

        }

    };




    return (

        <div

            className="
            bg-white
            dark:bg-gray-900

            border
            border-slate-200
            dark:border-gray-700

            rounded-xl

            shadow-sm
            hover:shadow-lg

            transition-all
            duration-300

            overflow-hidden

            flex
            flex-col
            "

        >



            <img

                src={product.imageUrl}

                alt={product.name}

                className="
                w-full

                h-48
                sm:h-56

                object-cover

                transition-transform
                duration-300

                hover:scale-105
                "

            />





            <div

                className="
                p-4

                flex
                flex-col

                flex-1
                "

            >





                <h3

                    className="
                    text-lg

                    font-semibold

                    text-slate-800
                    dark:text-white

                    transition-colors
                    "

                >

                    {product.name}

                </h3>







                <p

                    className="
                    text-sm

                    mt-2

                    line-clamp-2

                    text-gray-500
                    dark:text-gray-400
                    "

                >

                    {product.description}

                </p>








                <p

                    className="
                    mt-3

                    text-xl

                    font-bold

                    text-blue-600
                    dark:text-blue-400
                    "

                >

                    TZS {product.price}/=

                </p>







                <div

                    className="
                    mt-auto

                    pt-4

                    grid

                    grid-cols-1

                    sm:grid-cols-2

                    gap-3

                    "

                >





                    <button

                        onClick={() =>
                            navigate(`/products/${product.id}`)
                        }

                        className="
                        py-2

                        rounded-lg

                        border

                        border-blue-500

                        text-blue-600
                        dark:text-blue-400


                        hover:bg-blue-50
                        dark:hover:bg-blue-950/40


                        transition

                        "

                    >

                        Details

                    </button>







                    <button

                        onClick={handleAddToCart}

                        className="
                        py-2

                        rounded-lg


                        bg-blue-600

                        text-white


                        hover:bg-blue-700


                        dark:hover:bg-blue-500


                        transition

                        "

                    >

                        Add to cart

                    </button>





                </div>





            </div>





        </div>

    );

};


export default ProductCard;