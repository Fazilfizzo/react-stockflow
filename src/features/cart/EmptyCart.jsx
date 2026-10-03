import { useNavigate } from "react-router-dom";


const EmptyCart = () => {


    const navigate = useNavigate();



    return (

        <section
        className="
        min-h-[60vh]
        
        flex
        items-center
        justify-center
        
        px-4
        py-10
        
        sm:px-6
        
        lg:px-10
        
        bg-slate-50
        dark:bg-slate-900
        "
        >


            <div
            className="
            w-full
            max-w-md
            
            bg-white
            dark:bg-slate-900
            
            rounded-2xl
            
            border
            border-slate-200
            dark:border-slate-900
            
            shadow-sm
            
            p-6
            
            sm:p-8
            
            text-center
            "
            >





                {/* ICON */}

                <div
                className="
                mx-auto
                
                flex
                items-center
                justify-center
                
                w-20
                h-20
                
                sm:w-24
                sm:h-24
                
                rounded-full
                
                bg-blue-50

                "
                >

                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="
                    w-10
                    h-10
                    
                    sm:w-12
                    sm:h-12
                    
                    text-blue-600
                    "
                    >

                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 2.25h1.5l1.6 9.6a2.25 2.25 0 002.22 1.88h9.93a2.25 2.25 0 002.22-1.88l.75-4.5H6.25"
                        />

                        <circle
                        cx="9"
                        cy="19"
                        r="1"
                        />

                        <circle
                        cx="17"
                        cy="19"
                        r="1"
                        />

                    </svg>


                </div>






                {/* TITLE */}

                <h2
                className="
                mt-6
                
                text-xl
                
                sm:text-2xl
                
                font-bold
                
                text-slate-900
                dark:text-white
                "
                >

                    Your cart is empty

                </h2>







                {/* DESCRIPTION */}

                <p
                className="
                mt-3
                
                text-sm
                
                sm:text-base
                
                text-slate-500
                dark:text-white
                
                leading-relaxed
                "
                >

                    Looks like you haven't added any products yet.
                    Explore our products and find something you like.

                </p>








                {/* BUTTON */}

                <button

                onClick={() => navigate("/products")}

                className="
                
                mt-7
                
                w-full
                
                sm:w-auto
                
                px-7
                
                py-3
                
                rounded-xl
                
                bg-blue-600
                
                text-white
                
                font-medium
                
                hover:bg-blue-700
                
                active:scale-95
                
                transition
                
                duration-200
                
                focus:outline-none
                
                focus:ring-4
                
                focus:ring-blue-200

                dark:bg-blue-600
                dark:text-white
                
                "

                >

                    Start Shopping

                </button>



            </div>



        </section>


    )

}



export default EmptyCart;