import { searchIcon } from "../../assets";

const Header = (props) => {
  return (
    <header className="header flex justify-sb">
      <div className="logo">
      <i class="ph-magnifying-glass"></i>
      </div>
      <div className="configuration">
      <i class="ph-gear-six"></i>
      </div>
    </header>
  );
};

export default Header;
