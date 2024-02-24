import blog from "../images/blogs/blog.jpeg"


export default function Blog() 
{
  return (
    <div className='container mx-auto my-6'>
       <h1 className='text-center font-bold text-xl sm:2xl lg:text-5xl'>Blog</h1>

        <div className="flex justify-center mt-4">
            <nav className="flex space-x-2 font-semibold" aria-label="Tabs" role="tablist">
                <button type="button" className="px-3 sm:px-10 rounded-full hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-1 sm:py-3 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap bg-blue-500 text-white hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 active" id="tabs-with-underline-item-1" data-hs-tab="#tabs-with-underline-1" aria-controls="tabs-with-underline-1" role="tab">
                All
                </button>
                <button type="button" className="px-3 sm:px-10 rounded-full hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-1 sm:py-3 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap gbg-blue-500 text-gray-800 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500" id="tabs-with-underline-item-3" data-hs-tab="#tabs-with-underline-3" aria-controls="tabs-with-underline-3" role="tab">
                DevOps Blogs 
                </button>
                <button type="button" className="px-3 sm:px-10 rounded-full hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-1 sm:py-3 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap gbg-blue-500 text-gray-800 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500" id="tabs-with-underline-item-3" data-hs-tab="#tabs-with-underline-3" aria-controls="tabs-with-underline-3" role="tab">
                 Community News
                </button>
            </nav>
        </div>
        
       <div className="lg-w-[70vw] mx-8 overflow-hidden  items-center grid grid-cols-1 md:grid-cols-2 mt-6 min-h-[40vh] md:border-gray-400 md:border-2 rounded-2xl">

            <div className="mb-3 sm:p-8 flex flex-col justify-between leading-normal">
                <div className='flex items-center flex-1 '>
                    <div className="mb-8">
                    <div className="text-gray-900 font-bold  text-2xl sm:text-4xl mb-2">What do DevOps Engineers do?</div>
                    <p className="text-gray-700 text-xl sm:text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque.</p>
                    </div>
                </div>
                <div className="flex text-sm justify-between items-center mx-3  sm:mx-8">
                <p className="text-gray-900 bg-orange-100 px-3 py-1 rounded-lg leading-none">Trends</p>

                <div className="">
                    <p className="text-gray-900 leading-none">January 7 2024</p>
                    {/* <p className="text-gray-600">Aug 18</p> */}
                </div>
                </div>
            </div>
            <div className="flex items-center md:h-[30vh] rounded-t lg:rounded-t-none lg:rounded-l text-center" title="Blog">
               <img src={blog} className='w-full' alt='blog' />
            </div>
        </div>




  <div className="container mx-auto my-16 max-w-screen-xl npx-4 w-full">

    <div className="grid justify-around mw-full sm:grid-cols-2 xl:grid-cols-3 gap-8">



    <div className="p-4">
    <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ">
        <div className="h-auto overflow-hidden">
          <div className="h-64 overflow-hidden relative flex items-center justify-center">
            <img className='h-auto max-w-full' src="https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_1280.jpg" alt="" />
          </div>
        </div>
        <div className="bg-white py-8 px-4">
          <h3 className="mb-4 text-lg md:text-xl font-semibold">Des cadeaux incroyables prêts à être</h3>
          <div className="flex justify-between items-center">
            <p className="bg-blue-200 px-3 py-1 rounded-md text-xs text-gray-900">
                Company
            </p>
          <div className="text-sm">
            14th Feb 2024
          </div>
          </div>
        </div>
     </div>
      </div>
      
      <div className="p-4">
      <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ">
        <div className="h-auto overflow-hidden">
          <div className="h-64 overflow-hidden relative flex items-center justify-center">
            <img className='h-auto max-w-full' src="https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_1280.jpg" alt="" />
          </div>
        </div>
        <div className="bg-white py-8 px-4">
          <h3 className="mb-4 text-lg md:text-xl font-semibold">Des cadeaux incroyables prêts à être</h3>
          <div className="flex justify-between items-center">
            <p className="bg-blue-200 px-3 py-1 rounded-md text-xs text-gray-900">
                Company
            </p>
          <div className="text-sm">
            14th Feb 2024
          </div>
          </div>
        </div>
     </div>
      </div>
      
     
      <div className="p-4">
      <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ">
        <div className="h-auto overflow-hidden">
          <div className="h-64 overflow-hidden relative flex items-center justify-center">
            <img className='h-auto max-w-full' src="https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_1280.jpg" alt="" />
          </div>
        </div>
        <div className="bg-white py-8 px-3">
          <h3 className="mb-4 text-lg md:text-xl font-semibold">Des cadeaux incroyables prêts à être</h3>
          <div className="flex justify-between items-center">
            <p className="bg-yellow-200 px-3 py-1 rounded-md text-xs text-gray-900">
                Product
            </p>
          <div className="text-sm">
            14th Feb 2024
          </div>
          </div>
        </div>
      </div>
    </div>

      <div className="p-4">
      <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ">
        <div className="h-auto overflow-hidden">
          <div className="h-64 overflow-hidden relative flex items-center justify-center">
            <img className='h-auto max-w-full' src="https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_1280.jpg" alt="" />
          </div>
        </div>
        <div className="bg-white py-8 px-3">
          <h3 className="mb-4 text-lg md:text-xl font-semibold">Des cadeaux incroyables prêts à être</h3>
          <div className="flex justify-between items-center">
            <p className="bg-orange-200 px-3 py-1 rounded-md text-xs text-gray-900">
                Trends
            </p>
          <div className="text-sm">
            14th Feb 2024
          </div>
          </div>
        </div>
      </div>
    </div>

      <div className="p-4">
      <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ">
        <div className="h-auto overflow-hidden">
          <div className="h-64 overflow-hidden relative flex items-center justify-center">
            <img className='h-auto max-w-full' src="https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_1280.jpg" alt="" />
          </div>
        </div>
        <div className="bg-white py-8 px-4">
          <h3 className="mb-4 text-lg md:text-xl font-semibold">Des cadeaux incroyables prêts à être</h3>
          <div className="flex justify-between items-center">
            <p className="bg-blue-200 px-3 py-1 rounded-md text-xs text-gray-900">
                Company
            </p>
          <div className="text-sm">
            14th Feb 2024
          </div>
          </div>
        </div>
      </div>
    </div>

      <div className="p-4">
      <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ">
        <div className="h-auto overflow-hidden">
          <div className="h-64 overflow-hidden relative flex items-center justify-center">
            <img className='h-auto max-w-full' src="https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_1280.jpg" alt="" />
          </div>
        </div>
        <div className="bg-white py-8 px-3">
          <h3 className="mb-4 text-lg md:text-xl font-semibold">Des cadeaux incroyables prêts à être</h3>
          <div className="flex justify-between items-center">
            <p className="bg-orange-200 px-3 py-1 rounded-md text-xs text-gray-900">
                Trends
            </p>
          <div className="text-sm">
            14th Feb 2024
          </div>
          </div>
        </div>
     </div>
      </div>
      
      
    </div>
  </div>

  {/* Pagination */}

<nav className='flex items-center justify-center my-8'>
  <ul className="inline-flex space-x-2">
    <li><button className="flex items-center justify-center w-10 h-10 text-blue-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-blue-100">
      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg></button>
    </li>
    <li><button className="w-10 h-10 xtext-blue-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-blue-100">1</button></li>
    <li><button className="w-10 h-10 xtext-blue-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-blue-100">2</button></li>
    <li><button className="w-10 h-10 ztext-white transition-colors duration-150  border border-1 border-blue-600 rounded-full focus:shadow-outline">3</button></li>
    <li><button className="flex items-center justify-center w-10 h-10 text-blue-600 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-blue-100">
      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg></button>
    </li>
  </ul>
</nav>








    </div>
  )
}
