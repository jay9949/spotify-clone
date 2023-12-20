import "../css/SongListHeader.css";
import { FaChevronDown } from "react-icons/fa";

const SongListHeader = () => {
  return (
    <div className="song-item header">
      <div className="index">#</div>
      <div className="name">Title</div>
      <div className="author">Author</div>
      <div className="selector">
        <FaChevronDown className="fas fa-chevron-down" />
      </div>
    </div>
  );
};

export default SongListHeader;
