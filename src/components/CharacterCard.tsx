import { useNavigate } from "react-router-dom";

interface CharacterCardProps {
  imgUrl: string;
  name: string;
}

const CharacterCard = ({ imgUrl, name }: CharacterCardProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`pokemon/${name}`);
  };

  return (
    <div
      onClick={handleClick}
      className="mb-8 bg-cyan-700 opacity-90 shadow-2xl border border-cyan-600 rounded-2xl cursor-pointer hover:bg-cyan-600"
    >
      <img src={imgUrl} className="w-[160px] h-[160px] object-cover" />
    </div>
  );
};

export default CharacterCard;
