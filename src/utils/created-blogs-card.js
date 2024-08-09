import BlogRecomentationCardImg from "../assets/blog-recomendation-card-img.avif";
import userrecologo from "../assets/reco-user-logo.avif";
import {Link} from "react-router-dom"

const CreatedBlogCard = ({each}) => {
  const{title,_id,content,image,creatorName}=each
  return (
    <Link to={`/blogs/${_id}`}>
      <div>
        <div className="flex flex-col md:flex-row justify-between gap-4 ">
          <div className=" flex flex-col gap-2  order-2 md:order-1 ">
            <div className="flex flex-row gap-3">
              <img className="w-6 h-6 rounded-3xl" src={userrecologo} />
              <p className="text-sm">{creatorName}</p>
            </div>
            <h1 className="text-xl font-bold">
              {title}
            </h1>
            <p className="text-lg text-[#6b6b6b]">
              {content}
            </p>
          </div>
          <img className="rounded-md order-1 md:order-2  w-[100%] md:max-w-60" src={image} />
        </div>
      </div>
    </Link>
  );
};

export default CreatedBlogCard;
