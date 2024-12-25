import { useState } from 'react';
import { useGetOffersQuery } from '../../../../../redux/api/offerApi';
import { Alert, Typography } from '../../../../../components';
import { CategoryFilter, InstantDiscounts, LoadingSkeleton } from '../../atoms';
import { FilterType } from '../../../../../types/filter';

export const ExploreCityCategory = () => {
  const { data, error, isLoading } = useGetOffersQuery();

  const [activeFilters, setActiveFilters] = useState<FilterType[]>([
    FilterType.All,
  ]);

  if (isLoading) return <LoadingSkeleton />;
  if (error)
    return (
      <Alert
        type="error"
        message={`Error occurred: ${JSON.stringify(error)}`}
      />
    );

  const filteredOffers =
    activeFilters.includes(FilterType.All) || activeFilters.length === 0
      ? data?.offers
      : data?.offers.filter((offer) =>
          activeFilters.some(
            (filter) => offer.merchant?.category?.name === filter,
          ),
        );

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

      {filteredOffers && <InstantDiscounts offersData={filteredOffers} />}
    </div>
  );
};
