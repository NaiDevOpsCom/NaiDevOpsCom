import { Carousel } from 'react-responsive-carousel';
// @ts-ignore
import ReactStars from "react-rating-stars-component";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import rhona from "../../images/feedback/rhona.jpeg";
import ronald from "../../images/feedback/ronald.jpg";
import elsie from "../../images/feedback/elsie.jpg";
import maamun from "../../images/feedback/Maamun.jpg";
import emma from "../../images/feedback/emma.jpg";
import john from "../../images/feedback/in-person.jpeg";

const Community = () => {
  const names = ["Rhona", "Ronald", "Elsie", "Maamun", "Emma", "John"];
  const titles = ["Marketing Manager", "Sales Specialist", "Customer Support", "Product Manager", "UI/UX Designer", "Developer"];
  const descriptions = [
    "Great experience, loved the event!",
    "Awesome event organization and content.",
    "Very helpful and informative sessions.",
    "Enjoyed networking with other professionals.",
    "Impressive design and engaging presentations.",
    "Fantastic coding experience, learned a lot."
  ];
  const ratings = [4.5, 5, 4, 4.8, 4.2, 4.7];

  // const ratingOptions = {
  //   size: 30,
  //   edit: false,
  // };

  const chunkArray = (array, chunkSize) => {
    return Array.from({ length: Math.ceil(array.length / chunkSize) }, (_, index) =>
      array.slice(index * chunkSize, (index + 1) * chunkSize)
    );
  };

  const chunkedCards = chunkArray(
    names.map((name, index) => ({
      name,
      title: titles[index],
      description: descriptions[index],
      rating: ratings[index],
      image: [rhona, ronald, elsie, maamun, emma, john][index],
    })),
    2 
  );

  return (
    <div className="lg:w-[70vw] mx-auto flex flex-col my-12 xl:my-16 ">
      <h1 className="text-2xl sm:text-4xl font-bold textx-white items-center justify-center text-center mb-8">
        Community Feedback</h1>

      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        emulateTouch={true}
        infiniteLoop={true}
      >
        {chunkedCards.map((group, index) => (
          <div key={index} className="grid sm:grid-cols-2 gap-2 sm:gap-16 mx-2  ">
            {group.map(({ name, title, description, rating, image }, cardIndex) => (
              <div
                key={cardIndex}
                className="bg-white rounded-md shadow-xl flex flex-col items-center gap-16 transform transition-transform hover:scale-105 mb-16 mx-2 sm:mx-2"
              >
                {/* <RatingStars {...ratingOptions} size={10} value={rating} /> */}
                <ReactStars
                  count={5}
                  // onChange={ratingChanged}
                  size={24}
                  value={rating}
                  activeColor="#ffd700"
                />
                <div>
                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    {/* Image */}
                    <div className='grid  justify-center text-lg md:text-xl'>
                      <div className='border-1 w-36 h-36 rounded-full overflow-hidden'>
                        <img className="h-36" src={image} alt="image description" />
                      </div>
                    </div>
                    <div className='flex items-center px-2'>
                      <div className='mx-auto'>
                        <div className="font-semibold mt-2 ">{name}</div>
                        <div className=" text-gray-600 font-semibold">{title}</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-gray-800 text-medium sm:text-lg mb-4">
                  {description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Community;