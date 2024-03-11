import Donate from "../components/Donate"
import partners from "../images/partners.png"

export default function Partner() {
  return (

    <div className="lg:w-[70vw] grid md:grid-cols-2 mb-4 mx-auto bg-gray-100 justify-center items-center min-h-[80vh]">
        <div className="flex justify-center items-center">
           <img src={partners} alt="logo"
            className=" object-cover relative"
          /> 
          {/* <button type="button" class="absolute  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 md:text-lg font-medium rounded-xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Donate to us
          </button> */}
          <div class="absolute">
             <Donate/>
          </div>


        </div>
        <div className="bg-white bg-clip-border shadow-3xl shadow shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none p-10">
            <div className="mt-2 mb-8 w-full ">
                <h4 className="px-2 text-xl lg:text-2xl font-bold text-navy-700 dark:text-white">
                 Lets Partner Together
                </h4>
                <p className="mt-2 px-2 text-lg text-gray-600">
                Passionate and innovative individual seeking collaborative partnerships to drive impactful projects forward. 
                </p>
            </div> 
        
            <form className=''>
                <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-lg text-gray-600 py-2">Name <abbr title="required">*</abbr></label>
                    <input placeholder="Name" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" required type="text" name="integration[shop_name]" />
                    <p className="text-red text-xs hidden">Please fill out this field.</p>
                </div>
                <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-lg text-gray-600 py-2">E-Mail <abbr title="required">*</abbr></label>
                    <input placeholder="Email" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" required type="text" name="integration[shop_name]" />
                    <p className="text-red text-xs hidden">Please fill out this field.</p>
                </div>

                <div className="flex-auto sw-full mb-1 text-xs space-y-2">
                    <label className="font-semibold text-lg text-gray-600 py-2">Message</label>
                    <textarea required name="message" id="" className="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block  bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4" placeholder="How would you like to partner with us" ></textarea>
                    <p className="text-xs text-gray-400 text-left my-3">You inserted 0 characters</p>
                </div>
                <button
                    className="block w-full select-none rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                >
                    Send
                </button>
            </form>


        </div>  
    </div>
      
  )
}
