import { useState } from 'react';
import { Typography } from '../../../../../components';
import { CategoryFilter, InstantDiscounts } from '../../atoms';
import { FilterType } from '../../../../../types/filter';

export const ExploreCityCategory = () => {
  const [activeFilters, setActiveFilters] = useState<FilterType[]>([
    FilterType.All,
  ]);

  const handleFilterClick = (value: FilterType) => {
    setActiveFilters((prevFilters) =>
      prevFilters.includes(value)
        ? prevFilters.filter((filter) => filter !== value)
        : [...prevFilters, value],
    );
  };

  return (
    <div className="explore-city-category">
      <Typography variant="h6-2" customClassName="page-title">
        Explore Tokyo’s best category
      </Typography>

      <CategoryFilter
        activeFilters={activeFilters}
        onClick={handleFilterClick}
      />

      <InstantDiscounts />
    </div>
  );
};
