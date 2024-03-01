import  { useContext, useEffect, useRef, useState } from 'react';
import { AiFillFileAdd } from 'react-icons/ai';
import { BlogContext } from '../../context/BlogContext';

const AddBlog = () => {
   
  const {addPost} = useContext(BlogContext)

  const [title, setTitle] = useState();
  const [file, setFile] = useState();
  const [tag, setTag] = useState();
  const [description, setDescription] = useState();
  const [displayFile, setDisplayFile] = useState();


    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef();
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };
  
    useEffect(() => {
      if (isModalOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      } else {
        document.removeEventListener('mousedown', handleClickOutside);
      }
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isModalOpen]);


    const handleSubmit = e => 
    {    
  
      e.preventDefault();

      let formData = new FormData()
      formData.append("title", title);
      formData.append("tag", tag);
      formData.append("description", description);
      formData.append("file", file);

      addPost(formData);

      // setTitle(""); setFile(); setTag(""); setDescription("");
      // setDisplayFile()
    };

  return (
    <div className="container mx-auto py-8">
        <button  onClick={openModal} className="flex items gap-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
           <AiFillFileAdd/> Add Blog
        </button>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center px-4">
          {/* Modal Content */}
          <div ref={modalRef} className="bg-white rounded-lg shadow-lg md:w-[65vw] xl:w-[35vw]">
            <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md">
                <h1 className=' text-xl font-semibold'>Add Blog</h1>

                <div className="mt-10">
                <form onSubmit={handleSubmit}>
                    <div className="flexflex-col mb-6">
                        <label className="flex justify-start mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Title:</label>
                        <div className="relative">
                            <input type="text" value={title || ""}  onChange={(e) => setTitle(e.target.value)} className="text-sm sm:text-base placeholder-gray-500 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Title" />
                        </div>
                    </div>

                    <div className="flexflex-col mb-6">
                        <label className="flex justify-start mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Text</label>
                        <div className="relative">
                            <textarea rows={6} value={description || ""}  onChange={(e) => setDescription(e.target.value)} className="text-sm sm:text-base placeholder-gray-500 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Enter your text here ... " />
                        </div>
                    </div>

                    <div className="flexflex-col mb-6">
                        <label className="flex justify-start mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Tag:</label>
                        <select value={tag || ""}  onChange={(e) => setTag(e.target.value)} className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                          <option>Select</option>
                          <option>DevOps Blogs</option>
                          <option>Community News</option>
                        </select>
                    </div>

                    <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blog image(optional)</label>
                    <hr/>
                    <div className='flex'>
                      <img className="h-16 object-cover" src={displayFile || ""  } alt="" />
                      <div className='flex items-center mx-5 p-3 bg-gray-100'>
                          <input type="file"  onChange={(e) => {setFile(e.target.files[0]); setDisplayFile(URL.createObjectURL(e.target.files[0])); }} className="rounded "/>
                      </div>
                    </div>
                    </div>
                            

                    <div className="flex w-full">
                    <button type="submit" className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in">
                        <span className="mr-2 uppercase">Submit</span>
                        <span>
                        <svg className="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        </span>
                    </button>
                    </div>
                </form>
                </div>
                
            </div>
            
            <div className="flex justify-end">
              <button onClick={closeModal} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddBlog;
