import { useRecoilValue } from "recoil";
import { categoriesList } from "../../store/categoriesList";
import { Link } from "react-router-dom";

export const CategoriesHeader = () => {
  const categories = useRecoilValue(categoriesList);

  return (
    <div>
      <div className="categories-header">
        {categories.map((item, index) => {
          return (
            <Link
              to={item.depth1CategoryNo}
              key={item.depth1CategoryNo + index}
            >
              {item.depth1Label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
