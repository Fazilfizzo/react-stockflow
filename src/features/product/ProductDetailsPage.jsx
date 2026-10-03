import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import api from "../../shared/api/axios";
import useCartStore from "../../shared/store/cartStore";

import toast from "react-hot-toast";
import Spinner from "../../shared/Spinner";


const ProductDetailsPage = () => {


    const {id} = useParams();

    const navigate = useNavigate();


    const [product,setProduct] = useState(null);

    const [loading,setLoading] = useState(true);



    const addToCart = useCartStore(
        state => state.addToCart
    );



    useEffect(()=>{


        const loadProduct = async()=>{

            try{

                const response =
                await api.get(`/products/${id}`);

                setProduct(response.data);


            }catch(error){

                console.log(error);

            }finally{

                setLoading(false);

            }

        }


        loadProduct();


    },[id]);




    const handleAddToCart = async()=>{


        try{

            await addToCart(product.id,1);

            toast.success(
                "Added to cart"
            );


        }catch(error){
            toast.error(
                "Unable to add product"
            );

        }


    };



    if(loading){

        return (
            <Spinner />
        )

    }



    if(!product){

        return (
            <p className="p-6 dark:text-white">
                Product not found
            </p>
        )

    }



    return (

        <div className="
        p-6
        ">

            <div
            className="
            bg-white
            dark:bg-slate-900
            rounded-xl
            shadow
            border
            dark:border-slate-600
            p-6
            grid
            lg:grid-cols-2
            gap-8
            "
            >


                <img
                src={product.imageUrl}
                alt={product.name}
                className="
                w-full
                h-96
                object-contain
                hover:opacity-90
                "
                />


                <div>

                    <h1
                    className="
                    text-3xl
                    font-bold
                    text-slate-800
                    dark:text-gray-300
                    "
                    >
                        {product.name}
                    </h1>


                    <p className="
                    mt-4
                    text-gray-600
                    dark:text-gray-300
                    ">
                        {product.description}
                    </p>



                    <p className="
                    mt-5
                    text-2xl
                    font-bold
                    text-blue-600
                    mb-2
                    ">
                       Tzs {product.price}/=
                    </p>



                    <div
className="
flex
flex-col
sm:flex-row
gap-4
"
>

                        <button
                        onClick={handleAddToCart}
                        className="
                        bg-blue-600
                        text-white
                        px-6
                        py-3
                        rounded-lg
                        hover:bg-blue-900
                        "
                        >
                            Add to Cart
                        </button>


                        <button
                        onClick={()=>navigate("/products")}
                        className="
                        border
                        px-6
                        py-3
                        rounded-lg
                        dark:text-black
                        dark:bg-pink-600
                        hover:border-blue-600
                        "
                        >
                            Back to products
                        </button>


                    </div>


                </div>


            </div>


        </div>

    )

}


export default ProductDetailsPage;