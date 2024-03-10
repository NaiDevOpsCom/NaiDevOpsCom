import blog from "../images/blogs/blog.jpeg"
import config from "../config.json"
import { BlogContext } from "../context/BlogContext"
import { useContext, useState } from "react"
import moment from 'moment'; // Import the moment library for date formatting
import ReactPaginate from 'react-paginate';
import ReadMore from "../components/utils/ReadMore";
import { Link } from "react-router-dom";



export default function Blog() 
{ 
   const {posts} = useContext(BlogContext)
   const [activeTab, setActiveTab] = useState('All')

   const filtered_posts = activeTab === 'All' ? posts : posts.filter(post => post.tag === activeTab);

   console.log("popo ", filtered_posts);
//  | 'DevOps Blogs' | 'Community News'

   const [itemOffset, setItemOffset] = useState(0);
   const endOffset = itemOffset + 10;
   const currentItems = filtered_posts && filtered_posts.length>0 && filtered_posts.slice(itemOffset, endOffset);
   const pageCount = Math.ceil(filtered_posts && filtered_posts.length / 10);
 
   // Invoke when user click to request another page.
   const handlePageClick = (event) => {
     const newOffset = (event.selected * 10) % filtered_posts && filtered_posts.length;
     console.log(
       `User requested page number ${event.selected}, which is offset ${newOffset}`
     );
     setItemOffset(newOffset);
   };

  return (
    <div className='container mx-auto mcx-4 sm:px-0 my-6'>
       <h1 className='text-center font-bold text-xl sm:2xl lg:text-5xl'>Blog</h1>

        <div className="flex w-[96vw] mx-auto sm:w-full overflow-auto justify-center my-4">
            <nav className="flex amx-auto sm:space-x-2 font-semibold" aria-label="Tabs" role="tablist">
                <button type="button" onClick={()=>setActiveTab("All")} className="px-3 md:py-1 sm:px-10 rounded-2xl sm:rounded-full hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 flex items-center sm:text-lg whitespace-nowrap focus:bg-blue-500 focus:text-white hover:text-blue-600 focus:outline-none text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 active" id="tabs-with-underline-item-1" data-hs-tab="#tabs-with-underline-1" aria-controls="tabs-with-underline-1" role="tab">
                All
                </button>
                <button  type="button" onClick={()=>setActiveTab("DevOps Blogs")} className="px-3 md:py-1 sm:px-10 rounded-2xl sm:rounded-full hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 flex items-center sm:text-lg whitespace-nowrap focus:bg-blue-500 focus:text-white hover:text-blue-600 focus:outline-none text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 active" id="tabs-with-underline-item-3" data-hs-tab="#tabs-with-underline-3" aria-controls="tabs-with-underline-3" role="tab">
                DevOps Blogs 
                </button>
                <button type="button" onClick={()=>setActiveTab("Community News")} className="px-3 md:py-1 sm:px-10 rounded-2xl sm:rounded-full hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 flex items-center sm:text-lg whitespace-nowrap focus:bg-blue-500 focus:text-white hover:text-blue-600 focus:outline-none text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 active" data-hs-tab="#tabs-with-underline-3" aria-controls="tabs-with-underline-3" role="tab">
                 Community News
                </button>
            </nav>
            
        </div>
        <hr/>
        
       <div className="px-4 min-h-[80vh]">
       {  currentItems && currentItems.map((post) => (
        <div className="lg:w-[70vw] mx-auto overflow-hidden  items-center grid grid-cols-1 md:grid-cols-2 mt-6 min-h-[40vh] md:border-gray-400 border dpx-2 py-4 sm:py-0 md:border-2 rounded-2xl">

              <div className="mb-3 px-2 sm:p-8 flex flex-col justify-between leading-normal">
                  <div className='flex items-center flex-1 '>
                      <div className="mb-8">
                      <div className="text-gray-900 font-bold  text-2xl sm:text-4xl mb-2">{post.title}</div>
                      <Link to={`/blog/${post.id}`} className="text-gray-700 text-lg md:text-xl">
                        <ReadMore text={post.description} />
                      </Link>
                      </div>
                  </div>
                  <div className="flex text-sm justify-between items-center mx-3  sm:mx-8">
                  <p className="text-gray-900 bg-orange-100 px-3 py-1 rounded-lg leading-none">{post.tag}</p>

                  <div className="">
                      <p className="text-gray-900 leading-none">
                        {(()=>{
                            const parsedDate = moment(post.date_posted);
                        
                            // Convert the parsed timestamp to the desired format
                            const formattedDate = parsedDate.format("MMMM D YYYY")
                            return formattedDate
                          })()
                        }
                      </p>
                      {/* <p className="text-gray-600">Aug 18</p> */}
                  </div>
                  </div>
              </div>
              <div className="flex items-center  md:h-[30vh] rounded-t lg:rounded-t-none lg:rounded-l text-center" title="Blog">
                <img src={post.image==="/files/undefined"? blog : config.IMAGES_URL+post.image} className='w-full bg-blue-300' alt='blog' />
              </div>
          </div>
          ))}



{/* 
                
       <div className="lg:w-[70vw] mx-auto overflow-hidden  items-center grid grid-cols-1 md:grid-cols-2 mt-6 min-h-[40vh] md:border-gray-400 border px-2 py-4 sm:py-0 md:border-2 rounded-2xl">
        <div className="mb-3 sm:p-8 flex flex-col justify-between leading-normal">
            <div className='flex items-center flex-1 '>
                <div className="mb-8">
                <div className="text-gray-900 font-bold  text-2xl sm:text-4xl mb-2">What do DevOps Engineers do?</div>
                <p className="text-gray-700 text-lg md:text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque.</p>
                </div>
            </div>
            <div className="flex text-sm justify-between items-center mx-3  sm:mx-8">
            <p className="text-gray-900 bg-blue-100 px-3 py-1 rounded-lg leading-none">Community News</p>

            <div className="">
                <p className="text-gray-900 leading-none">January 7 2024</p>
            </div>
            </div>
        </div>
        <div className="flex items-center md:h-[30vh] rounded-t lg:rounded-t-none lg:rounded-l text-center" title="Blog">
          <img src={blog} className='w-full' alt='blog' />
        </div>
        </div>

                
        <div className="lg:w-[70vw] mx-auto overflow-hidden  items-center grid grid-cols-1 md:grid-cols-2 mt-6 min-h-[40vh] md:border-gray-400 border px-2 py-4 sm:py-0 md:border-2 rounded-2xl">

        <div className="mb-3 sm:p-8 flex flex-col justify-between leading-normal">
            <div className='flex items-center flex-1 '>
                <div className="mb-8">
                <div className="text-gray-900 font-bold  text-2xl sm:text-4xl mb-2">What do DevOps Engineers do?</div>
                <p className="text-gray-700 text-lg md:text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque.</p>
                </div>
            </div>
            <div className="flex text-sm justify-between items-center mx-3  sm:mx-8">
            <p className="text-gray-900 bg-orange-100 px-3 py-1 rounded-lg leading-none">DevOps Blogs</p>

            <div className="">
                <p className="text-gray-900 leading-none">January 7 2024</p>
            </div>
            </div>
        </div>
        <div className="flex items-center md:h-[30vh] rounded-t lg:rounded-t-none lg:rounded-l text-center" title="Blog">
          <img src={blog} className='w-full' alt='blog' />
        </div>
        </div> */}
      </div>



  {/* <div className="container mx-auto my-16 max-w-screen-xl npx-4 w-full">

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
  </div> */}

  {/* Pagination */}
  <nav className='flex items-center justify-center my-8 '>
      <ul className="inline-flex items-center justify-center space-x-2">
        <ReactPaginate
          breakLabel="..."
          nextLabel=" >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< "
          renderOnZeroPageCount={null}
          containerClassName="flex items-center space-x-2"
          activeClassName="text-white bg-blue-600 border border-1 border-blue-600 rounded-full focus:shadow-outline"
          pageClassName="flex items-center justify-center w-10 h-10 text-blue-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-blue-100"
          previousClassName="flex items-center justify-center w-10 h-10 text-blue-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-blue-100"
          nextClassName="flex items-center justify-center w-10 h-10 text-blue-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-blue-100"
          breakClassName="w-10 h-10 text-blue-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-blue-100"
          pageLinkClassName="flex items-center justify-center w-full h-full"
        />
      </ul>
    </nav>

    </div>
  )
}
