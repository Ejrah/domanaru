import React from 'react';

const blogPosts = [
    {
        title: "Blog Post 1",
        image: "https://via.placeholder.com/150",
        description: "Brief description of Blog Post 1."
    },
    {
        title: "Blog Post 2",
        image: "https://via.placeholder.com/150",
        description: "Brief description of Blog Post 2."
    },
    {
        title: "Blog Post 3",
        image: "https://via.placeholder.com/150",
        description: "Brief description of Blog Post 3."
    },
    {
        title: "Blog Post 4",
        image: "https://via.placeholder.com/150",
        description: "Brief description of Blog Post 4."
    },
    {
        title: "Blog Post 5",
        image: "https://via.placeholder.com/150",
        description: "Brief description of Blog Post 5."
    },
    {
        title: "Blog Post 6",
        image: "https://via.placeholder.com/150",
        description: "Brief description of Blog Post 6."
    },
    {
        title: "Blog Post 7",
        image: "https://via.placeholder.com/150",
        description: "Brief description of Blog Post 7."
    },
    {
        title: "Blog Post 8",
        image: "https://via.placeholder.com/150",
        description: "Brief description of Blog Post 8."
    },
    {
        title: "Blog Post 9",
        image: "https://via.placeholder.com/150",
        description: "Brief description of Blog Post 9."
    },
];



const Blog = () => {
    console.log("Rendering Blog");
    return (
        <div className="p-5">
            <h1 className="text-4xl font-bold text-center mb-10">Blog</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {blogPosts.map((post, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                            <p className="text-gray-700">{post.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;
