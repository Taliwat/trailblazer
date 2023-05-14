import canyon from "../assets/imgs/canyon.webp"

export default function AboutUs() {
    return (
        <section className="flex flex-col justify-center items-center" style={{ minHeight: '90vh', backgroundImage: `url(${canyon})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <div className="bg-white dark:bg-gray-800 bg-opacity-70 w-11/12 m-4 rounded-lg">
                <h2 className="text-align-center text-3xl font-bold text-gray-700 flex justify-center mb-10">About Us</h2>
                <p className="text-lg leading-5 mb-3 text-gray-700 md:text-2xl  dark:text-gray-700 px-10">Welcome to Trailblazer, your ultimate guide to the incredible world of national parks! We're committed to ensuring that your next trip or family outing is not just good, but truly extraordinary.</p>
                <p className="text-lg leading-5 mb-3 text-gray-700 md:text-2xl  dark:text-gray-700 px-10">At Trailblazer, we strongly believe that the beauty of nature should be accessible to everyone, and our mission is to make your journey to the great outdoors as smooth and enjoyable as possible. Whether you're a seasoned explorer or a first-time adventurer, our comprehensive platform is designed to cater to your unique needs and curiosities.</p>
                <p className="text-lg leading-5 mb-3 text-gray-700 md:text-2xl  dark:text-gray-700 px-10">Our platform is a treasure trove of meticulously curated information about national parks across the globe. From grand mountain ranges and serene water bodies to diverse wildlife and lush green landscapes, we cover it all. We strive to provide in-depth, accurate, and up-to-date information about each park, including its history, unique features, best activities, and practical travel tips. You can expect to uncover intriguing facts and hidden gems that might surprise even the most knowledgeable nature enthusiasts!</p>
                <p className="text-lg leading-5 mb-3 text-gray-700 md:text-2xl  dark:text-gray-700 px-10">We're constantly working on enhancing our platform, and we're always open to feedback and suggestions. Our goal is to create a dynamic and interactive community of nature lovers who share our passion for exploration and discovery. If there's something you'd like to see on our platform, or if you have any questions or concerns, please don't hesitate to contact us. We're here to help you make the most out of your natural world adventures.</p>
                <p className="text-lg leading-5 mb-3 text-gray-700 md:text-2xl  dark:text-gray-700 px-10">We hope that Trailblazer becomes your trusted companion for all your nature-related quests, sparking your curiosity and inspiring you to step out and embrace the wonders of our planet. Enjoy the journey, and remember: every adventure is a story waiting to be told.</p>
                <p className="text-lg leading-5 mb-3 text-gray-700 md:text-2xl  dark:text-gray-700 px-10">Welcome to the Trailblazer family! We can't wait to see where your trails will lead you.</p>
            </div>
        </section>
    )
};

