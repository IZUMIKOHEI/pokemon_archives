import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to="/" className="max-container w-full pl-16 sm:pl-32">
      <h1 className="text-2xl pt-24 font-semibold text-slate-800">欢迎来到宝可梦档案</h1>
    </Link>
  );
};

export default Header;
