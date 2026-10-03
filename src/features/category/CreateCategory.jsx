import { useState } from "react";
// import api from "../../shared/api/axios";
import toast from "react-hot-toast";
import { createCategory } from "./categoryApi";


const CreateCategory = () => {


    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const [loading, setLoading] = useState(false);

    const handleSubmit = async(e)=>{


        e.preventDefault();

        if(loading) return;

        try {

            setLoading(true);

           await createCategory({
            name,
            description
           })




            toast.success(
                "Category created successfully"
            );

            // reset form

            setName("");
            setDescription("")


        }catch(error){

            toast.error(
                error?.response?.data?.message
                ||
                "Failed to create category"
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

                        Create Category

                    </h1>


                    <p
                    className="
                    mt-2

                    text-sm

                    text-slate-500
                    dark:text-gray-400
                    "
                    >

                        Add a new category to your inventory.

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
                            Category Name
                        </label>


                        <input

                        type="text"

                        value={name}

                        onChange={
                            e=>setName(e.target.value)
                        }

                        placeholder="Enter category name"

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

                        placeholder="Category description"

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
                            "Create Category"
                        }

                    </button>





                </form>


            </div>


        </main>


    )

}


export default CreateCategory;