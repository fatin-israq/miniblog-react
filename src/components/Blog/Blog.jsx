import React from "react";

const Blog = ({ blog }) => {
  return (
    <div className="group">
      <div className="card bg-base-100 w-96 shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 overflow-hidden border border-gray-200 dark:border-gray-700">
        <figure className="relative overflow-hidden h-56">
          <img
            src={blog.cover}
            alt={blog.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-2"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </figure>

        <div className="card-body p-6 space-y-4">
          <h2 className="card-title text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
            {blog.name}
          </h2>

          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed">
            {blog.description}
          </p>

          <div className="flex flex-wrap gap-2 py-2">
            {blog.hashtags.map((tag, index) => (
              <span
                key={index}
                className="badge badge-outline badge-sm hover:badge-primary transition-all duration-300 transform hover:scale-110"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 pt-3 border-t border-gray-200 dark:border-gray-700">
            <div className="avatar">
              <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 transition-all duration-300 group-hover:ring-offset-4">
                <img src={blog.authorImage} alt={blog.authorName} />
              </div>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-sm">{blog.authorName}</p>
              <p className="text-xs text-gray-500">Author</p>
            </div>
          </div>

          <button className="btn btn-primary btn-sm group/btn relative overflow-hidden">
            <span className="relative z-10 group-hover/btn:text-white transition-colors duration-300">
              Read Now
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-secondary to-accent transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
