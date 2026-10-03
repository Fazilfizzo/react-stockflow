import { useState } from "react";
import api from "../../shared/api/axios";
import toast from "react-hot-toast";


const CreateSupplier = () => {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")

    const idempotencyKey = crypto.randomUUID;
    

    const [loading, setLoading] = useState(false);






    const handleSubmit = async(e)=>{


        e.preventDefault();


        if(loading) return;



        try {


            setLoading(true);

            await api.post(
                "/supplier",
                {
                    "name": name,
                    "phone": phone,
                    "email": email,
                    "address": address
                },
                
                {
                    headers:{
                        "Idempotency-Key": idempotencyKey,
                    }
                }

            );



            toast.success(
                "Supplier created successfully"
            );



            // reset form

            setName("");
            setPhone("")
            setEmail("")
            setAddress("")
            



        }catch(error){

        console.log(error)
            // toast.error(
            //     error?.response?.data?.message
            //     ||
            //     "Failed to create product"
            // );


        }finally{


            setLoading(false);


        }


    };







    return (

        <main
        className="
        min-h-screen

        bg-slate-50
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
                    dark:text-gray-400
                    "
                    >

                        Create supplier

                    </h1>


                    <p
                    className="
                    mt-2

                    text-sm

                    text-slate-500
                    dark:text-gray-400
                    "
                    >

                        Add a new supplier to your system.

                    </p>


                </div>


                <form

                onSubmit={handleSubmit}

                className="
                
                bg-white
                dark:bg-slate-900

                rounded-2xl

                border
                border-slate-200
                dark:border-slate-600

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
                        "
                        >
                            Supplier Name
                        </label>


                        <input

                        type="text"

                        value={name}

                        onChange={
                            e=>setName(e.target.value)
                        }

                        placeholder="Enter supplier name"

                        className="
                        w-full

                        rounded-xl

                        border

                        border-slate-300

                        px-4

                        py-3

                        focus:ring-2

                        focus:ring-blue-500

                        outline-none
                        "

                        required

                        />

                    </div>

                    {/* PHONE */}


                    <div>

                        <label
                        className="
                        block
                        mb-2

                        text-sm

                        font-medium

                        text-slate-700
                        "
                        >

                            Phone:

                        </label>


                        <textarea

                        value={phone}

                        onChange={
                            e=>setPhone(e.target.value)
                        }

                        placeholder="Enter supplier number"

                        rows="4"

                        className="
                        w-full

                        rounded-xl

                        border

                        border-slate-300

                        px-4

                        py-3

                        resize-none

                        focus:ring-2

                        focus:ring-blue-500

                        outline-none
                        "

                        />
                    </div>

            <div>

                        <label
                        className="
                        block
                        mb-2

                        text-sm

                        font-medium

                        text-slate-700
                        "
                        >

                            Email:

                        </label>


                        <textarea

                        value={email}

                        onChange={
                            e=>setEmail(e.target.value)
                        }

                        placeholder="Enter supplier email"

                        rows="4"

                        className="
                        w-full

                        rounded-xl

                        border

                        border-slate-300

                        px-4

                        py-3

                        resize-none

                        focus:ring-2

                        focus:ring-blue-500

                        outline-none
                        "

                        />
                    </div>

                    <div>

                        <label
                        className="
                        block
                        mb-2

                        text-sm

                        font-medium

                        text-slate-700
                        "
                        >

                            Address:

                        </label>


                        <textarea

                        value={address}

                        onChange={
                            e=>setAddress(e.target.value)
                        }

                        placeholder="Enter supplier address"

                        rows="4"

                        className="
                        w-full

                        rounded-xl

                        border

                        border-slate-300

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

                    transition

                    disabled:opacity-50

                    "

                    >

                        {
                            loading
                            ?
                            "Creating..."
                            :
                            "Create Supplier"
                        }

                    </button>





                </form>


            </div>


        </main>


    )

}


export default CreateSupplier;