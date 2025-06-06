export default function Testimonials() {
    const reviews = [
      {
        name: "Daniella Doe",
        role: "Mobile dev",
        image: "https://randomuser.me/api/portraits/women/12.jpg",
        feedback: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos
        illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, a suscipit, ratione ea totam
        ullam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti
        aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
        reprehenderit, veritatis harum et rerum.`,
      },
      {
        name: "Jane Doe",
        role: "Marketing",
        image: "https://randomuser.me/api/portraits/women/14.jpg",
        feedback: `Lorem ipsum dolor laboriosam deleniti aperiam ab veniam sint non cumque quis tempore
        cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.`,
      },
      {
        name: "Yanick Doe",
        role: "Developer",
        image: "https://randomuser.me/api/portraits/women/18.jpg",
        feedback: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti
        aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
        reprehenderit, veritatis harum et rerum.`,
      },
      {
        name: "Jane Doe",
        role: "Mobile dev",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        feedback: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti
        aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
        reprehenderit, veritatis harum et rerum.`,
      },
      {
        name: "Andy Doe",
        role: "Manager",
        image: "https://randomuser.me/api/portraits/women/62.jpg",
        feedback: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam
        deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
        reprehenderit, veritatis harum et rerum.`,
      },
      {
        name: "Yanndy Doe",
        role: "Mobile dev",
        image: "https://randomuser.me/api/portraits/women/19.jpg",
        feedback: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti
        aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
        reprehenderit, veritatis harum et rerum.`,
      },
    ];
  
    return (
      <div className="text-gray-600 dark:text-gray-300 pt-8 dark:bg-gray-900" id="reviews">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="mb-10 space-y-4 px-6 md:px-0">
            <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
              We have some fans.
            </h2>
          </div>
          <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none"
              >
                <div className="flex gap-4">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={review.image}
                    alt={`${review.name} avatar`}
                    width="400"
                    height="400"
                    loading="lazy"
                  />
                  <div>
                    <h6 className="text-lg font-medium text-gray-700 dark:text-white">{review.name}</h6>
                    <p className="text-sm text-gray-500 dark:text-gray-300">{review.role}</p>
                  </div>
                </div>
                <p className="mt-8">{review.feedback}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  