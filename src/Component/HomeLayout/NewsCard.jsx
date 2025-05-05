import React from 'react';
import { FaRegEye } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import moment from 'moment';

const NewsCard = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
  } = news;

  return (
    <div className="card bg-base-100 shadow-md  rounded-xl overflow-hidden mb-5 mt-5">
      {/* Header: Author and Buttons */}
      <div className="flex items-center justify-between p-4 bg-base-200 ">
        <div className="flex items-center space-x-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold text-base">{author.name}</h2>
            <p className="text-sm text-gray-500">
              {moment(author.published_date).format('YYYY-MM-DD')}
            </p>
          </div>
        </div>
        <div className="flex space-x-2 text-gray-500">
          <button className="btn btn-ghost btn-sm">
            <CiBookmark size={25} />
          </button>
          <button className="btn btn-ghost btn-sm">
            <CiShare2 size={25} />
          </button>
        </div>
      </div>

      {/* Content: Title, Image, Description */}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-3">{title}</h2>
        <img
          src={thumbnail_url}
          alt="news thumbnail"
          className="w-full h-auto max-h-[400px] object-contain rounded-md mb-3"
        />
        <p className="text-sm text-gray-700 mb-3">
          {details.length > 200 ? `${details.slice(0, 200)}...` : details}
        </p>
        <a href="#" className="text-blue-600 font-semibold hover:underline">
          Read More
        </a>
      </div>

      {/* Footer: Rating and Views */}
      <div className="flex justify-between items-center p-4 border-t">
        <div className="flex items-center space-x-1 text-orange-500">
          {[...Array(rating.number)].map((_, i) => (
            <AiFillStar key={i} />
          ))}
          <span className="text-gray-700 font-medium ml-2">
            {rating.number.toFixed(1)}
          </span>
        </div>
        <div className="flex items-center space-x-1 text-gray-600">
          <FaRegEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
