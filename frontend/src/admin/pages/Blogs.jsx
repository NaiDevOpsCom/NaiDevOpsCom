import { useContext } from "react";
import AddBlog from "./AddBlog";
import { BlogContext } from "../../context/BlogContext";
import defaultUser from "../../images/defaultUser.png"
import blog from "../../images/blogs/blog.jpeg"
import config from "../../config.json"

export default function Blogs() 
{
  const {posts} = useContext(BlogContext)


  console.log(posts);
  return (
    <div>
      <div className="container px-8 mx-auto xl:px-5  max-w-screen-xl py-5 lg:py-8 relative">
        <h1 className="text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
          Blogs
        </h1>
        <div className="flex items-center justify-between text-center">
          <p className="mt-2 text-lg">See all our posts</p>
          <div>
          <AddBlog/>
          </div>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-3 lg:gap-10 xl:grid-cols-4">
          { posts && posts.map(post =>(
          <div className="group cursor-pointer shadow-xl">
            <div className=" overflodw-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800">
              <a
                className="relative block aspect-square"
              >
                <img
                  alt="Thumbnail"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="object-cover transition-all"
                  sizes="(max-width: 768px) 30vw, 33vw"
                  src={post.image==="/files/undefined"? blog : config.IMAGES_URL+post.image}
                  style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    inset: '0px',
                    color: 'transparent',
                  }}
                />
              </a>
            </div>

            <div className="px-3 pb-4">
              <div>
                <div className="flex gap-3">
                  <a>
                    <span className="inline-block text-xs font-medium tracking-wider uppercase mt-5 text-blue-700">
                      {post.tag}
                    </span>
                  </a>
                </div>
                <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2    dark:text-white">
                  <a >
                    <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
                      {post.title}
                    </span>
                  </a>
                </h2>
                <div className="hidden">
                  <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                    <a >
                     { post.description }
                    </a>
                  </p>
                </div>

                <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                  <a >
                    <div className="flex items-center gap-3">
                      <div className="relative h-5 w-5 flex-shrink-0">
                        <img
                          alt="Mario Sanchez"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="rounded-full object-cover"
                          sizes="20px"
                          src={defaultUser}
                          style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            inset: '0px',
                            color: 'transparent',
                          }}
                        />
                      </div>
                      <span className="truncate text-sm">{post.user.username}</span>
                    </div>
                  </a>
                  <span className="text-xs text-gray-300 dark:text-gray-600">
                    •
                  </span>
                  <time className="truncate text-sm">{post.date_posted}</time>
                </div>
              </div>
            </div>
          </div>
          ))}

        </div>
        



        <div className="mt-10 flex items-center justify-center">
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button className="relative inline-flex items-center gap-1 rounded-l-md border border-gray-300 bg-white px-3 py-2 pr-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="h-3 w-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                ></path>
              </svg>
              <span>Previous</span>
            </button>
            <button className="relative inline-flex items-center gap-1 rounded-r-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
              <span>Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="h-3 w-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                ></path>
              </svg>
            </button>
          </nav>
        </div>
        
      </div>
    </div>
  );
}
