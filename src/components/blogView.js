import { React, useEffect } from "react";
import { FcLike } from "react-icons/fc";
import { FaComment } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { BsSave2Fill } from "react-icons/bs";
import userlogo from "../assets/blog-user-logo.jpeg";
import blog_banner_1 from "../assets/blog-banner-1.jpg";
import BlogRecomentationCard from "../utils/blogRecomentationCard";
import Footer from "../utils/footer";
import { useLocation } from "react-router-dom";

const BlogView = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="px-5 sm:px-20 py-4 md:px-40 xl:px-80 dark:bg-black dark:text-white">
        <div>
          <h1 className="text-2xl mb-5 md:text-4xl font-bold md:mb-8">
            Best Frontend Frameworks for Web Development in 2024-july
          </h1>
          <div className=" flex flex-row items-center gap-4 max-w-96 mb-8">
            <img src={userlogo} className="w-20 h-20 rounded-full" />
            <div className="flex flex-col w-[100%] gap-2">
              <div className="flex flex-row gap-4">
                <h1 className="text-base">Srinath_5255</h1>
                <p className="text-green-700">Follow</p>
              </div>
              <div className="flex flex-row gap-4">
                <h1 className="text-base">Published on</h1>
                <p>Jan 25, 2024</p>
              </div>
            </div>
          </div>
          <img src={blog_banner_1} />
          <div className="w-[100%] flex flex-row justify-between  gap-2 border-t border-b py-4 mt-4 mb-4">
            <div className="flex flex-row items-center gap-4">
              <div className="flex items-center gap-2 text-[#777777]">
                {" "}
                <FcLike className="text-2xl" />
                <span className="flex items-center gap-2">2341</span>
              </div>
              <div className="flex items-center gap-2">
                {" "}
                <FaComment className="text-2xl" />
                <span className="flex items-center gap-2 text-[#777777]">
                  12
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center gap-8">
              <IoMdShare className="text-2xl" />
              <BsSave2Fill className="text-2xl" />
            </div>
          </div>
          <p className="text:lg md:text-xl">
            Quick Summary: Selecting the right front-end framework is, in fact,
            straightforward. Mobile Development Support Mobile app development
            is one of the critical parts of business success in the modern age
            of digitalization. To achieve this, organizations need to pick the
            respond to the constantly changing needs of their customers.
            Popularity The advantages of using a common framework for your
            project should be quite obvious. It guarantees a network of
            developers who are familiar with it and third-party tools and
            resources that can provide the needed support and guidance. It also
            makes it easy to find substitutes or more developers if the need
            ever arises. In all, a commonly employed front-end framework is cost
            and resource-efficient in the long term. Top 7 Front-end Frameworks
            for Web Development in India in 2024 There is a wide array of
            front-end frameworks that developers can deploy in their web
            development based on the specific features that each project
            requires. However, here are the top seven front-end frameworks that
            you should use for your next web development project in 2024 if you
            desire high efficiency. 1. React React Javascript library stands at
            the forefront of front-end web development. React is a
            component-based architecture that allows developers to develop
            scalable and interactive user interfaces. Its virtual DOM
            implementation provides high performance, which makes it the right
            choice for advanced applications. React offers a virtual DOM that
            enables efficient updates, a one-way data flow that simplifies state
            management, and a vast number of reusable components. The fact that
            it is flexible and easy to combine with other frameworks, as well as
            multiplatform integration, makes it a perfect choice for developers
            from all spheres. In 2024, React will arguably have the largest
            community support and still get updates focusing on performance
            improvements and the introduction of new features. 2. Svelte Svelte,
            a new entrant in front-end web development, differs from the
            traditional frameworks. What makes Svelte unique is that it compiles
            the components in the build process into very efficient vanilla
            Javascript. Rather than running in the browser, Svelte moves the
            heavy lifting to the build phase, creating smaller and faster apps.
            This approach avoids the requirement for a runtime framework,
            leading to smaller bundle sizes and improved runtime performance,
            which is ideal for medium web apps with high performance, such as
            e-commerce websites. Although fairly new, Svelte has enjoyed
            successful deployment in The New York Times, Politico, and Square.
            Minimal boilerplate code and its easy learning curve are the main
            reasons for its popularity. The Svelte’s community has grown
            exponentially as developers have acknowledged its simplicity and the
            fact that it offers performance gains. 3. Vue.js Vue.js is popular
            for its simplicity and easy integration, attracting many developers
            today. This is why it is suitable for small-scale projects and large
            applications. Vue.js is distinguished by the reactive data binding,
            elementary syntax, and straightforward integration compared to other
            technologies. Despite its component-based structure similar to the
            one seen in React, Vue.js simplifies the learning process for
            beginners considerably more than React. Its flexibility and
            efficiency ensure that it is a great choice for companies searching
            to get hold of an easy adaptive front-end framework. The tool opens
            with clear documentation and an essential Vue CLI that makes the
            process of setting up and maintaining projects easier for
            developers.
          </p>

          <div className="py-8">
            <h1 className="mb-8 text-2xl font-bold">
              Recommended from Dharana
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3  ">
              <BlogRecomentationCard />
              <BlogRecomentationCard />

              <BlogRecomentationCard />

              <BlogRecomentationCard />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogView;
