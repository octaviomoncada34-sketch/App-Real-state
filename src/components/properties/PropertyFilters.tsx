"use client";

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, BedDouble } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export interface Filters {
  searchTerm: string;
  minPrice: number;
  maxPrice: number;
  rooms: number;
}

interface PropertyFiltersProps {
  onFilterChange: (filters: Filters) => void;
  initialFilters: Filters;
  priceRange: { min: number; max: number; };
}

export function PropertyFilters({ onFilterChange, initialFilters, priceRange }: PropertyFiltersProps) {
  const [filters, setFilters] = useState(initialFilters);
  const [price, setPrice] = useState([initialFilters.minPrice, initialFilters.maxPrice]);

  useEffect(() => {
    const handler = setTimeout(() => {
      onFilterChange(filters);
    }, 300);
    return () => clearTimeout(handler);
  }, [filters, onFilterChange]);
  
  useEffect(() => {
    setPrice([priceRange.min, priceRange.max]);
    setFilters(f => ({ ...f, minPrice: priceRange.min, maxPrice: priceRange.max }));
  }, [priceRange]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({ ...prev, searchTerm: e.target.value }));
  };

  const handlePriceChange = (value: number[]) => {
    setPrice(value);
  };
  
  const handlePriceCommit = (value: number[]) => {
     setFilters(prev => ({ ...prev, minPrice: value[0], maxPrice: value[1] }));
  }

  const handleRoomsChange = (value: number[]) => {
    setFilters(prev => ({ ...prev, rooms: value[0] }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Filter Properties</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="search">Search by Name or Address</Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="search"
              placeholder="e.g. 'Downtown' or 'Green Valley'"
              value={filters.searchTerm}
              onChange={handleSearchChange}
              className="pl-10"
            />
          </div>
        </div>
        
        <Separator />
        
        <div className="space-y-2">
          <Label>Price Range</Label>
          <Slider
            min={priceRange.min}
            max={priceRange.max}
            step={100}
            value={price}
            onValueChange={handlePriceChange}
            onValueCommit={handlePriceCommit}
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>${price[0].toLocaleString()}</span>
            <span>${price[1].toLocaleString()}</span>
          </div>
        </div>
        
        <Separator />

        <div className="space-y-2">
          <Label>Minimum Bedrooms</Label>
          <div className='flex items-center gap-4'>
            <BedDouble className="h-5 w-5 text-muted-foreground" />
            <Slider
              min={0}
              max={5}
              step={1}
              defaultValue={[filters.rooms]}
              onValueChange={handleRoomsChange}
            />
            <span className="text-sm font-medium w-8 text-center">{filters.rooms === 0 ? 'Any' : `${filters.rooms}+`}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
