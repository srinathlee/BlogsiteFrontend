import BlogRecomentationCardImg from "../assets/blog-recomendation-card-img.avif";
import userrecologo from "../assets/reco-user-logo.avif";
import {Link} from "react-router-dom"

const CreatedBlogCard = () => {
  return (
    <Link to="/blogs">
      <div>
        <div className="flex flex-col md:flex-row justify-between gap-4 ">
          <div className=" flex flex-col gap-2  order-2 md:order-1 ">
            <div className="flex flex-row gap-3">
              <img className="w-6 h-6 rounded-3xl" src={userrecologo} />
              <p className="text-sm">Ravi_324</p>
            </div>
            <h1 className="text-xl font-bold">
              Best Frontend Frameworks for Web Development in 2024
            </h1>
            <p className="text-lg text-[#6b6b6b]">
              The front-end frameworks have revolutionized the approach of how
              web developers design{" "}
            </p>
          </div>
          <img className="rounded-md order-1 md:order-2  w-[100%] md:max-w-60" src={BlogRecomentationCardImg} />
        </div>
      </div>
    </Link>
  );
};

export default CreatedBlogCard;
