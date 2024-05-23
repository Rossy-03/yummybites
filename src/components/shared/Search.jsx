import Button from "../ui/Button";
import Input from "../ui/Input";
import style from "./styles/_search.module.scss";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <div className={style.searchBox}>
      <Input type="text" name="search" placeholder="Search for recipe..." />
      <Button className={style.searchButton}>
        <FiSearch />
      </Button>
    </div>
  );
};

export default Search;
