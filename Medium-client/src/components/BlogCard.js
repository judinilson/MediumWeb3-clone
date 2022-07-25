import "./BlogCard.css";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ text, title, owner_of, externalUrl }) => {
  const length = 100;
  const ContentTrimmedString =
    text?.length > 100 ? text?.substring(0, length) : text;
  const account = `${owner_of?.slice(0, 4)}...${owner_of?.slice(38)}`;

  const navigate = useNavigate();
  const clickHandler = () => {
    const lastSegment = externalUrl?.split("/").pop();
    navigate(`/blog/${lastSegment}`);
  };

  return (
    <div className="blog" onClick={clickHandler}>
      <div className="blog_leftSide">
        <div className="blogger">
          <span className="blogger_name">{account}</span>
          <span className="blogger_date">July 26</span>
        </div>
        <div className="blog_title">
          <h3>{title}</h3>
        </div>
        <div className="blog_content">
          <p>{ContentTrimmedString}...</p>
        </div>
      </div>
      <div>
        <img
          className="blog_image"
          src="https://miro.medium.com/max/1400/0*YCO6-CPHftTdQA7l"
          alt="blogImage"
        />
      </div>
    </div>
  );
};

export default BlogCard;
