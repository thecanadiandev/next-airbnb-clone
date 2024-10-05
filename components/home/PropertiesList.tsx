import React from 'react';
import PropertyCard from '../card/PropertyCard';
import type { PropertyCardProps } from '@/utils/types';

const PropertiesList = ({
  properties,
}: {
  properties: PropertyCardProps[];
}) => {
  return (
    <section>
      {properties.map((property) => (
        <PropertyCard key={property.id} />
      ))}
    </section>
  );
};

export default PropertiesList;
