import React from "react";

const BlogSection = () => {
  const blogs = [
    {
      category: "Article",
      title: "What is communion?",
      description:
      "While they were eating, Jesus took bread, and when he had given thanks, he broke it and gave it to his disciples, saying, “Take and eat; this is my body.” Then he took a cup, and when he had given thanks, he gave it to them, saying, “Drink from it, all of you. This is my blood of the covenant, which is poured out for many for the forgiveness of sins.'",
      author: "Adisa Oluwaseyi",
      date: "2020-03-16",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
      authorImage:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      category: "Video",
      title: "A Guide to Prayer and Fasting.",
      description:
        "'And when you fast, do not look gloomy like the hypocrites, for they disfigure their faces that their fasting may be seen by others. Truly, I say to you, they have received their reward. But when you fast, anoint your head and wash your face, that your fasting may not be seen by others but by your Father who is in secret. And your Father who sees in secret will reward you.'",
      author: "Brenna Goyette",
      date: "2020-03-10",
      readTime: "4 min read",
      image:
        "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
      authorImage:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      category: "Case Study",
      title: "How to study the Bible",
      description:
        "'This Book of the Law must not depart from your mouth; meditate on it day and night, so that you may be careful to do everything written in it. For then you will prosper and succeed in all you do.'",
      author: "Daniela Metz",
      date: "2020-02-12",
      readTime: "11 min read",
      image:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
      authorImage:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  return (
    <div className="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3"></div>
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Featured Articles
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
             Read Aritcles from our writers
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <div key={index} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={blog.image}
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href="#" className="hover:underline">
                      {blog.category}
                    </a>
                  </p>
                  <a href="#" className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      {blog.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {blog.description}
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href="#">
                      <span className="sr-only">{blog.author}</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={blog.authorImage}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href="#" className="hover:underline">
                        {blog.author}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={blog.date}>{blog.date}</time>
                      <span aria-hidden="true">·</span>
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                </div>
                <button
              className="flex items-center mt-6 justify-center gap-2 py-3 pr-5 pl-7 rounded-full text-base font-semibold text-white bg-yellow-800 shadow-transparent shadow-sm transition-all duration-500 hover:shadow-yellow-300 hover:bg-yellow-900"> Read More </button>
              </div>
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
