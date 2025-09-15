"use client";

import { useState, useMemo, useCallback } from 'react';
import type { Property } from '@/lib/definitions';
import { PropertyFilters, type Filters } from './PropertyFilters';
import { PropertyList } from './PropertyList';
import { Button } from '@/components/ui/button';

interface HomePageClientProps {
  properties: Property[];
}

export function HomePageClient({ properties }: HomePageClientProps) {
  const [filters, setFilters] = useState<Filters>({
    searchTerm: '',
    minPrice: 0,
    maxPrice: 10000,
    rooms: 0,
  });

  const filteredProperties = useMemo(() => {
    return properties.filter(property => {
      const { searchTerm, minPrice, maxPrice, rooms } = filters;
      const searchLower = searchTerm.toLowerCase();

      return (
        (property.name.toLowerCase().includes(searchLower) ||
          property.address.toLowerCase().includes(searchLower)) &&
        property.price >= minPrice &&
        property.price <= maxPrice &&
        (rooms === 0 || property.rooms >= rooms)
      );
    });
  }, [properties, filters]);

  const handleFilterChange = useCallback((newFilters: Filters) => {
    setFilters(newFilters);
  }, []);
  
  const priceRange = useMemo(() => {
    if (properties.length === 0) return { min: 0, max: 10000 };
    const prices = properties.map(p => p.price);
    return {
      min: Math.min(...prices),
      max: Math.max(...prices),
    };
  }, [properties]);


  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
      <aside className="md:col-span-1">
        <div className="sticky top-20">
          <PropertyFilters 
            onFilterChange={handleFilterChange} 
            initialFilters={filters}
            priceRange={priceRange}
          />
        </div>
      </aside>
      <div className="md:col-span-3">
        {filteredProperties.length > 0 ? (
          <PropertyList properties={filteredProperties} />
        ) : (
          <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/30 py-24 text-center">
            <h3 className="text-xl font-semibold tracking-tight">No Properties Found</h3>
            <p className="mt-2 text-muted-foreground">Try adjusting your filters to find your perfect home.</p>
          </div>
        )}
      </div>
    </div>
  );
}
