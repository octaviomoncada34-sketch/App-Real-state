import Link from 'next/link';
import Image from 'next/image';
import { Property } from '@/lib/definitions';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BedDouble, Bath, Square } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link href={`/properties/${property.idProperty}`} className="group">
      <Card className="overflow-hidden h-full transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
        <div className="relative">
          <Image
            src={property.imageUrl}
            alt={property.name}
            width={400}
            height={250}
            className="w-full object-cover aspect-[16/10] transition-transform duration-300 group-hover:scale-105"
            data-ai-hint="modern apartment"
          />
           <Badge variant="secondary" className="absolute top-3 right-3">${property.price.toLocaleString()}/mo</Badge>
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-bold font-headline truncate group-hover:text-primary transition-colors">{property.name}</h3>
          <p className="text-sm text-muted-foreground truncate">{property.address}</p>
          <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
             <div className="flex items-center gap-2">
                <BedDouble className="h-4 w-4" />
                <span>{property.rooms}</span>
             </div>
             <div className="flex items-center gap-2">
                <Bath className="h-4 w-4" />
                <span>{property.bathrooms}</span>
             </div>
             <div className="flex items-center gap-2">
                <Square className="h-4 w-4" />
                <span>{property.area} sqft</span>
             </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
