import { MessageCircle, ThumbsUp } from "lucide-react";

const blogs = [
  {
    title: "Top 10 Trending Products This Month",
    authors: ["Ecom Insider"],
    likes: 285,
    comments: 42,
  },
  {
    title: "How to Choose the Right Product Online",
    authors: ["Shop Smart"],
    likes: 190,
    comments: 25,
  },
  {
    title: "Secrets to Saving More During Sales",
    authors: ["Deal Hunter"],
    likes: 260,
    comments: 38,
  },
  {
    title: "Customer Reviews: What to Look For",
    authors: ["Buyer's Guide"],
    likes: 175,
    comments: 19,
  },
  {
    title: "Why Fast Shipping Matters in 2025",
    authors: ["Ecom Trends"],
    likes: 230,
    comments: 33,
  },
];

const PopularBlogs = () => {
  return (
    <div className="bg-white p-5 w-full sm:w-[23rem] mt-4 border-0 sm:ml-5 rounded">
      <h2 className="text-xl font-bold mb-5">Popular Blogs</h2>

      <ul>
        {blogs.map((blog, index) => (
          <li key={index} className="mb-4">
            <div className="flex justify-between items-center">
              <span className="font-bold mb-2">{blog.title}</span>
            </div>

            <span className="text-gray-600">Published by {blog.authors}</span>
            <div className="flex items-center mt-2 flex-wrap gap-2">
              <MessageCircle size={16} />
              <span className="text-gray-500 mr-5 ml-1">{blog.likes}</span>

              <ThumbsUp size={16} />
              <span className="text-gray-500 mr-5 ml-1">{blog.comments}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularBlogs;
