import AddBlog from "./AddBlog";

export default function Blogs() {
  return (
    <div>
      <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8 relative">
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
          <div className="group cursor-pointer">
            <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800">
              <a
                className="relative block aspect-square"
                href="/post/3-meaningful-ways-to-practice-self-care-as-an-introvert"
              >
                <img
                  alt="Thumbnail"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="object-cover transition-all"
                  sizes="(max-width: 768px) 30vw, 33vw"
                  src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fc366d5116a51d3f1d8b23962e6b7caac7c960f81-7855x5240.jpg%3Fw%3D2000%26auto%3Dformat&amp;w=3840&amp;q=75"
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

            <div className="">
              <div>
                <div className="flex gap-3">
                  <a href="/category/personal-growth">
                    <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-emerald-700">
                      Personal Growth
                    </span>
                  </a>
                </div>
                <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2    dark:text-white">
                  <a href="/post/3-meaningful-ways-to-practice-self-care-as-an-introvert">
                    <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
                      3 Meaningful Ways to Practice Self-Care as an Introvert
                    </span>
                  </a>
                </h2>
                <div className="hidden">
                  <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                    <a href="/post/3-meaningful-ways-to-practice-self-care-as-an-introvert">
                      While AI has proved superior at complex calculations &amp;
                      predictions, creativity seemed to be the domain that
                      machines can’t take over.
                    </a>
                  </p>
                </div>

                <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                  <a href="/author/mario-sanchez">
                    <div className="flex items-center gap-3">
                      <div className="relative h-5 w-5 flex-shrink-0">
                        <img
                          alt="Mario Sanchez"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="rounded-full object-cover"
                          sizes="20px"
                          src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&amp;w=3840&amp;q=75"
                          style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            inset: '0px',
                            color: 'transparent',
                          }}
                        />
                      </div>
                      <span className="truncate text-sm">Mario Sanchez</span>
                    </div>
                  </a>
                  <span className="text-xs text-gray-300 dark:text-gray-600">
                    •
                  </span>
                  <time className="truncate text-sm">October 18, 2022</time>
                </div>
              </div>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800">
              <a
                className="relative block aspect-square"
                href="/post/the-rise-of-artificial-intelligence-and-the-future-of-humans"
              >
                <img
                  alt="Thumbnail"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="object-cover transition-all"
                  sizes="(max-width: 768px) 30vw, 33vw"
                  src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fe60f8ab265df3c22fdde5469de54d225017b7323-4000x5000.jpg%3Fw%3D2000%26auto%3Dformat&amp;w=3840&amp;q=75"
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

            <div className="">
              <div>
                <div className="flex gap-3">
                  <a href="/category/personal-growth">
                    <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-emerald-700">
                      Personal Growth
                    </span>
                  </a>
                </div>
                <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2    dark:text-white">
                  <a href="/post/the-rise-of-artificial-intelligence-and-the-future-of-humans">
                    <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
                      The Rise of Artificial Intelligence and the Future of
                      Humans
                    </span>
                  </a>
                </h2>
                <div className="hidden">
                  <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                    <a href="/post/the-rise-of-artificial-intelligence-and-the-future-of-humans">
                      While AI has proved superior at complex calculations &amp;
                      predictions, creativity seemed to be the domain that
                      machines can’t take over.
                    </a>
                  </p>
                </div>

                <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                  <a href="/author/joshua-wood">
                    <div className="flex items-center gap-3">
                      <div className="relative h-5 w-5 flex-shrink-0">
                        <img
                          alt="Joshua Wood"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="rounded-full object-cover"
                          sizes="20px"
                          src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&amp;w=3840&amp;q=75"
                          style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            inset: '0px',
                            color: 'transparent',
                          }}
                        />
                      </div>
                      <span className="truncate text-sm">Joshua Wood</span>
                    </div>
                  </a>
                  <span className="text-xs text-gray-300 dark:text-gray-600">
                    •
                  </span>
                  <time className="truncate text-sm">October 18, 2022</time>
                </div>
              </div>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800">
              <a
                className="relative block aspect-square"
                href="/post/10-simple-practices-that-will-help-you-get-1-better-every-day"
              >
                <img
                  alt="Thumbnail"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="object-cover transition-all"
                  sizes="(max-width: 768px) 30vw, 33vw"
                  src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F86cb3a2f0e43610371a7184483c5567bd9e6e94f-2400x1600.jpg%3Fw%3D2000%26auto%3Dformat&amp;w=3840&amp;q=75"
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

            <div className="">
              <div>
                <div className="flex gap-3">
                  <a href="/category/personal-growth">
                    <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-emerald-700">
                      Personal Growth
                    </span>
                  </a>
                </div>
                <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2    dark:text-white">
                  <a href="/post/10-simple-practices-that-will-help-you-get-1-better-every-day">
                    <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
                      10 Simple Practices That Will Help You Get 1% Better Every
                      Day
                    </span>
                  </a>
                </h2>
                <div className="hidden">
                  <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                    <a href="/post/10-simple-practices-that-will-help-you-get-1-better-every-day">
                      How do we become better every single day? We develop
                      practices that will help move us incrementally forward.
                      Small steps, taken consistently. This is the path to a
                      good life.
                    </a>
                  </p>
                </div>

                <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                  <a href="/author/erika-oliver">
                    <div className="flex items-center gap-3">
                      <div className="relative h-5 w-5 flex-shrink-0">
                        <img
                          alt="Erika Oliver"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="rounded-full object-cover"
                          sizes="20px"
                          src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&amp;w=3840&amp;q=75"
                          style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            inset: '0px',
                            color: 'transparent',
                          }}
                        />
                      </div>
                      <span className="truncate text-sm">Erika Oliver</span>
                    </div>
                  </a>
                  <span className="text-xs text-gray-300 dark:text-gray-600">
                    •
                  </span>
                  October 04, 2022
                </div>
              </div>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800">
              <a
                className="relative block aspect-square"
                href="/post/every-artist-has-to-see-the-amazing-pictures-on-the-internet"
              >
                <img
                  alt="Thumbnail"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="object-cover transition-all"
                  sizes="(max-width: 768px) 30vw, 33vw"
                  src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F279c03681911845947cd044b4ac9e91d7a3a628c-987x1481.png%3Fw%3D987%26auto%3Dformat&amp;w=3840&amp;q=75"
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

            <div className="">
              <div>
                <div className="flex gap-3">
                  <a href="/category/design">
                    <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-blue-600">
                      Design
                    </span>
                  </a>
                </div>
                <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2    dark:text-white">
                  <a href="/post/every-artist-has-to-see-the-amazing-pictures-on-the-internet">
                    <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
                      Every Artist has to see the Amazing Pictures on the
                      Internet
                    </span>
                  </a>
                </h2>
                <div className="hidden">
                  <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                    <a href="/post/every-artist-has-to-see-the-amazing-pictures-on-the-internet">
                      While AI has proved superior at complex calculations &amp;
                      predictions, creativity seemed to be the domain that
                      machines can’t take over.
                    </a>
                  </p>
                </div>

                <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                  <a href="/author/mario-sanchez">
                    <div className="flex items-center gap-3">
                      <div className="relative h-5 w-5 flex-shrink-0">
                        <img
                          alt="Mario Sanchez"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="rounded-full object-cover"
                          sizes="20px"
                          src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&amp;w=3840&amp;q=75"
                          style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            inset: '0px',
                            color: 'transparent',
                          }}
                        />
                      </div>
                      <span className="truncate text-sm">Mario Sanchez</span>
                    </div>
                  </a>
                  <span className="text-xs text-gray-300 dark:text-gray-600">
                    •
                  </span>
                  <time className="truncate text-sm">October 02, 2022</time>
                </div>
              </div>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800">
              <a
                className="relative block aspect-square"
                href="/post/how-technology-evolved-under-the-bright-sun-of-universe"
              >
                <img
                  alt="Thumbnail"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="object-cover transition-all"
                  sizes="(max-width: 768px) 30vw, 33vw"
                  src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F123fb8836aaf097b83d4c5e8fde544dd1747af0d-5064x3376.jpg%3Fw%3D2000%26auto%3Dformat&amp;w=3840&amp;q=75"
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

            <div className="">
              <div>
                <div className="flex gap-3">
                  <a href="/category/technology">
                    <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-blue-600">
                      Technology
                    </span>
                  </a>
                </div>
                <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2    dark:text-white">
                  <a href="/post/how-technology-evolved-under-the-bright-sun-of-universe">
                    <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
                      How Technology Evolved Under the Bright Sun of Universe
                    </span>
                  </a>
                </h2>
                <div className="hidden">
                  <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                    <a href="/post/how-technology-evolved-under-the-bright-sun-of-universe">
                      The evolution of technology in astronomy and how it has
                      impacted our understanding of the universe. It also gives
                      a brief history of the major figures that the science
                      through their innovations{' '}
                    </a>
                  </p>
                </div>

                <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                  <a href="/author/erika-oliver">
                    <div className="flex items-center gap-3">
                      <div className="relative h-5 w-5 flex-shrink-0">
                        <img
                          alt="Erika Oliver"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="rounded-full object-cover"
                          sizes="20px"
                          src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&amp;w=3840&amp;q=75"
                          style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            inset: '0px',
                            color: 'transparent',
                          }}
                        />
                      </div>
                      <span className="truncate text-sm">Erika Oliver</span>
                    </div>
                  </a>
                  <span className="text-xs text-gray-300 dark:text-gray-600">
                    •
                  </span>
                  <time
                    className="truncate text-sm"
                  >
                    September 30, 2022
                  </time>
                </div>
              </div>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800">
              <a
                className="relative block aspect-square"
                href="/post/lessons-of-happiness-i-learned-from-a-mountain-village"
              >
                <img
                  alt="Thumbnail"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="object-cover transition-all"
                  sizes="(max-width: 768px) 30vw, 33vw"
                  src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F5be1635417f1814b3fb09f8e9f74f37079899f72-4032x3024.jpg%3Fw%3D2000%26auto%3Dformat&amp;w=3840&amp;q=75"
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

            <div className="">
              <div>
                <div className="flex gap-3">
                  <a href="/category/travel">
                    <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-orange-700">
                      Travel
                    </span>
                  </a>
                </div>
                <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2    dark:text-white">
                  <a href="/post/lessons-of-happiness-i-learned-from-a-mountain-village">
                    <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
                      Lessons Of Happiness I learned from a Mountain Village
                    </span>
                  </a>
                </h2>
                <div className="hidden">
                  <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                    <a href="/post/lessons-of-happiness-i-learned-from-a-mountain-village">
                      I recently went to the mountains with my friends. We were
                      celebrating 50 years of friendship. It was very special.
                      Six of us were to be together spending time in the
                      mountains.
                    </a>
                  </p>
                </div>

                <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                  <a href="/author/joshua-wood">
                    <div className="flex items-center gap-3">
                      <div className="relative h-5 w-5 flex-shrink-0">
                        <img
                          alt="Joshua Wood"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="rounded-full object-cover"
                          sizes="20px"
                          src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&amp;w=3840&amp;q=75"
                          style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            inset: '0px',
                            color: 'transparent',
                          }}
                        />
                      </div>
                      <span className="truncate text-sm">Joshua Wood</span>
                    </div>
                  </a>
                  <span className="text-xs text-gray-300 dark:text-gray-600">
                    •
                  </span>
                  <time className="truncate text-sm">September 25, 2022</time>
                </div>
              </div>
            </div>
          </div>
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
