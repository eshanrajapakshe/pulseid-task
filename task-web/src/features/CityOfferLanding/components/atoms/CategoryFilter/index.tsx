import classNames from 'classnames';
import { Typography } from '../../../../../components';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { BiSprayCan } from 'react-icons/bi';
import { BiCheese } from 'react-icons/bi';
import { CgShoppingCart } from 'react-icons/cg';
import { BsShop } from 'react-icons/bs';
import { IoRestaurant } from 'react-icons/io5';
import { FilterType } from '../../../../../types/filter';
import './styles.scss';

interface IFilterProps {
  onClick: (value: FilterType) => void;
  activeFilters: FilterType[];
}

export const CategoryFilter = ({ onClick, activeFilters }: IFilterProps) => {
  const filters = [
    { label: FilterType.All, icon: <FaRegCircleCheck /> },
    { label: FilterType.Retailers, icon: <BsShop /> },
    { label: FilterType.Restaurants, icon: <IoRestaurant /> },
    { label: FilterType.Dessert, icon: <BiCheese /> },
    { label: FilterType.Beauty, icon: <BiSprayCan /> },
    { label: FilterType.RetailStore, icon: <CgShoppingCart /> },
  ];

  return (
    <div className="category-filter-wrapper">
      {filters.map((filter) => (
        <div
          key={filter.label}
          className={classNames('filter-item', {
            active: activeFilters.includes(filter.label),
          })}
          onClick={() => onClick(filter.label)}
          role="button"
        >
          <div className="filter-icon">{filter.icon}</div>
          <Typography variant="p" customClassName="m-0 filter-label">
            {filter.label}
          </Typography>
        </div>
      ))}
    </div>
  );
};
