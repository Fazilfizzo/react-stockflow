import { useEffect, useState } from "react";
import api from "../../shared/api/axios";
import toast from "react-hot-toast";


const CreateUser = () => {


    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [supplierId, setSupplierId] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [image, setImage] = useState(null);


    const [imagePreview, setImagePreview] = useState(null);


    const [suppliers, setSuppliers] = useState([]);
    const [categories, setCategories] = useState([]);


    const [loading, setLoading] = useState(false);






    useEffect(() => {


        const loadData = async () => {

            try {

                const [
                    supplierResponse,
                    categoryResponse
                ] = await Promise.all([

                    api.get("/suppliers"),

                    api.get("/categories")

                ]);


                setSuppliers(
                    supplierResponse.data
                );


                setCategories(
                    categoryResponse.data
                );


            } catch(error) {

                toast.error(
                    "Failed to load form data"
                );

                console.log(error)

            }

        };


        loadData();


    }, []);








    const handleImageChange = (e) => {


        const file = e.target.files[0];


        if(file){

            setImage(file);


            setImagePreview(
                URL.createObjectURL(file)
            );

        }

    };








    const handleSubmit = async(e)=>{


        e.preventDefault();


        if(loading) return;



        try {


            setLoading(true);



            const formData = new FormData();



            formData.append(
                "dto",

                new Blob(
                    [
                        JSON.stringify({

                            name,

                            description,

                            price,

                            supplierId,

                            categoryId

                        })
                    ],

                    {
                        type:"application/json"
                    }
                )

            );



            if(image){

                formData.append(
                    "image",
                    image
                );

            }






            await api.post(

                "/products",

                formData,

                {
                    headers:{
                        "Content-Type":
                        "multipart/form-data"
                    }
                }

            );



            toast.success(
                "Product created successfully"
            );



            // reset form

            setName("");
            setDescription("");
            setPrice("");
            setSupplierId("");
            setCategoryId("");
            setImage(null);
            setImagePreview(null);



        }catch(error){


            toast.error(
                error?.response?.data?.message
                ||
                "Failed to create product"
            );


        }finally{


            setLoading(false);


        }


    };







    return (

        <main
        className="
        min-h-screen

        bg-white
        dark:bg-slate-900

        px-4
        py-6

        sm:px-6

        lg:px-10
        "
        >



            <div
            className="
            max-w-3xl
            mx-auto
            "
            >





                <div
                className="
                mb-6
                "
                >

                    <h1
                    className="
                    text-2xl
                    sm:text-3xl

                    font-bold

                    text-slate-900
                    dark:text-gray-300
                    "
                    >

                        Create Product

                    </h1>


                    <p
                    className="
                    mt-2

                    text-sm

                    text-slate-500
                    dark:text-gray-400
                    "
                    >

                        Add a new product to your inventory.

                    </p>


                </div>








                <form

                onSubmit={handleSubmit}

                className="
                
                bg-white
                dark:bg-slate-800

                rounded-2xl

                border
                border-slate-300
                dark:border-slate-700

                shadow-sm

                p-5

                sm:p-8

                space-y-5

                "

                >








                    {/* NAME */}

                    <div>

                        <label
                        className="
                        block

                        mb-2

                        text-sm

                        font-medium

                        text-slate-700
                        dark:text-gray-400
                        "
                        >
                            Product Name
                        </label>


                        <input

                        type="text"

                        value={name}

                        onChange={
                            e=>setName(e.target.value)
                        }

                        placeholder="Enter product name"

                        className="
                        w-full

                        rounded-xl

                        border

                        border-slate-300
                        dark:border-slate-700
                    
                        placeholder:text-slate-400

                        px-4

                        py-3

                        focus:ring-2

                        focus:ring-blue-500

                        outline-none
                        "

                        required

                        />

                    </div>









                    {/* DESCRIPTION */}


                    <div>

                        <label
                        className="
                        block
                        mb-2

                        text-sm

                        font-medium

                        text-slate-700
                        dark:text-gray-400
                        "
                        >

                            Description

                        </label>


                        <textarea

                        value={description}

                        onChange={
                            e=>setDescription(e.target.value)
                        }

                        placeholder="Product description"

                        rows="4"

                        className="
                        w-full

                        rounded-xl

                        border

                        border-slate-300
                        dark:border-slate-700

                        placeholder:text-slate-400

                        px-4

                        py-3

                        resize-none

                        focus:ring-2

                        focus:ring-blue-500

                        outline-none
                        "

                        />


                    </div>








                    {/* PRICE */}


                    <div>

                        <label
                        className="
                        block
                        mb-2
                        text-sm
                        font-medium
                        text-slate-700
                        dark:text-gray-400
                        "
                        >

                            Price (TZS)

                        </label>


                        <input

                        type="number"

                        value={price}

                        onChange={
                            e=>setPrice(e.target.value)
                        }

                        placeholder="Enter price"

                        className="
                        w-full

                        rounded-xl

                        border

                        border-slate-300
                        dark:border-slate-700

                        placeholder:text-slate-400

                        px-4

                        py-3

                        outline-none

                        focus:ring-2

                        focus:ring-blue-500
                        "

                        required

                        />

                    </div>









                    {/* DROPDOWNS */}


                    <div
                    className="
                    grid

                    grid-cols-1

                    sm:grid-cols-2

                    gap-4
                    "
                    >


                        <select

                        value={supplierId}

                        onChange={
                            e=>setSupplierId(e.target.value)
                        }

                        className="
                        rounded-xl

                        border

                        border-slate-300

                        dark:border-slate-600
                        dark:bg-slate-900

                        px-4

                        py-3

                        "

                        >

                            <option value="">
                                Select Supplier
                            </option>


                            {
                            suppliers.map(supplier=>(

                                <option
                                key={supplier.id}
                                value={supplier.id}
                                >

                                    {supplier.name}

                                </option>

                            ))
                            }


                        </select>







                        <select

                        value={categoryId}

                        onChange={
                            e=>setCategoryId(e.target.value)
                        }

                        className="
                        rounded-xl

                        border

                        border-slate-300

                        dark:border-slate-600
                        dark:bg-slate-900

                        px-4

                        py-3

                        "

                        >

                            <option value="">
                                Select Category
                            </option>


                            {
                            categories.map(category=>(

                                <option
                                key={category.id}
                                value={category.id}
                                >

                                    {category.name}

                                </option>

                            ))
                            }


                        </select>



                    </div>









                    {/* IMAGE */}


                    <div>


                        <label
                        className="
                        block
                        mb-2

                        text-sm

                        font-medium

                        text-slate-700
                        dark:text-gray-400
                        "
                        >

                            Product Image

                        </label>




                        <input

                        type="file"

                        accept="image/*"

                        onChange={handleImageChange}

                        className="
                        w-full

                        rounded-xl

                        border

                        border-slate-300

                        dark:border-slate-600
                        dark:bg-slate-900

                        p-3

                        "

                        />




                        {
                        imagePreview && (

                            <img

                            src={imagePreview}

                            alt="Preview"

                            className="
                            mt-4

                            w-32
                            h-32

                            rounded-xl

                            object-cover

                            border
                            "

                            />

                        )
                        }


                    </div>








                    <button

                    disabled={loading}

                    className="
                    w-full

                    rounded-xl

                    bg-blue-600

                    py-3

                    text-white

                    font-semibold

                    hover:bg-blue-700

                    dark:hover:bg-slate-900
                    dark:hover:border-blue-700

                    transition

                    disabled:opacity-50

                    "

                    >

                        {
                            loading
                            ?
                            "Creating..."
                            :
                            "Create Product"
                        }

                    </button>





                </form>


            </div>


        </main>


    )

}


export default CreateUser;