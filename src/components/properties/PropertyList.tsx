import { Property } from '@/lib/definitions';
import { PropertyCard } from './PropertyCard';

interface PropertyListProps {
  properties: Property[];
}

export function PropertyList({ properties }: PropertyListProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {properties.map((property) => (
        <PropertyCard key={property.idProperty} property={property} />
      ))}
    </div>
  );
}
