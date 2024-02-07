import React from 'react';
import RatingStars from 'react-rating-stars-component';
import { Carousel } from 'react-responsive-carousel';
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

  const ratingOptions = {
    size: 30,
    edit: false,
  };
  const chunkArray = (array: any[], chunkSize: number) => {
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
    <div className="sbg-community-bg flex flex-col justify-center mt-3 ">
      <h1 className="text-4xl font-bold text-white items-center justify-center text-center mb-8">Community Feedback</h1>

      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        emulateTouch={true}
        infiniteLoop={true}
      >
        {chunkedCards.map((group, index) => (
          <div key={index} className="flex justify-center">
            {group.map(({ name, title, description, rating, image }, cardIndex) => (
              <div
                key={cardIndex}
                className="bg-white p-6 rounded-md shadow-md flex flex-col items-center transform transition-transform hover:scale-105 mx-10 mb-16"
              >
                <RatingStars {...ratingOptions} value={rating} />
                <div className="text-gray-800 mb-4">
                  {description}
                </div>
                <div className="flex bg-red-900 flex-row items-center">
                  {/* Image */}
                  <img
                    src={image}
                    alt={`Avatar ${index + 1}`}
                    className="wk-1w0 object-cover h-20 ws-auto sdrounded-full mr-2"
                  />
                  <div>
                    <div className="font-semibold">{name}</div>
                    <div className="text-gray-600">{title}</div>
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