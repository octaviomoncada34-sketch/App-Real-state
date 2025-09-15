import Image from 'next/image';
import { Property } from '@/lib/definitions';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BedDouble, Bath, Square, CalendarDays, Building } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { AiSuggestions } from './AiSuggestions';
import { MapPlaceholder } from './MapPlaceholder';
import { ContactForm } from './ContactForm';

interface PropertyDetailViewProps {
  property: Property;
}

export function PropertyDetailView({ property }: PropertyDetailViewProps) {
  return (
    <div className="container mx-auto max-w-6xl py-8">
      <div className="relative mb-6 h-64 md:h-96 w-full overflow-hidden rounded-2xl shadow-lg">
        <Image
          src={property.imageUrl}
          alt={`Image of ${property.name}`}
          fill
          className="object-cover"
          priority
          data-ai-hint="modern apartment"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-6 left-6 text-white">
          <h1 className="text-3xl md:text-5xl font-bold font-headline">{property.name}</h1>
          <p className="mt-2 text-lg md:text-xl text-gray-200">{property.address}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Property Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-6">
                <Badge variant="secondary" className="text-2xl px-4 py-2">${property.price.toLocaleString()}/mo</Badge>
                <div className="text-right">
                  <p className="font-semibold">{property.name}</p>
                  <p className="text-sm text-muted-foreground">{property.address}</p>
                </div>
              </div>
              <Separator className="my-6" />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                <div className="flex flex-col items-center gap-2">
                  <BedDouble className="h-8 w-8 text-primary" />
                  <span className="font-semibold">{property.rooms} Bedrooms</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Bath className="h-8 w-8 text-primary" />
                  <span className="font-semibold">{property.bathrooms} Bathrooms</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Square className="h-8 w-8 text-primary" />
                  <span className="font-semibold">{property.area} sqft</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <CalendarDays className="h-8 w-8 text-primary" />
                  <span className="font-semibold">Built in {property.year}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">{property.description}</p>
            </CardContent>
          </Card>
          
           <Card>
            <CardHeader>
              <CardTitle>Location</CardTitle>
            </CardHeader>
            <CardContent>
                <MapPlaceholder />
            </CardContent>
          </Card>

        </div>
        <div className="lg:col-span-1 space-y-8">
          <div className="sticky top-24 space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Inquire About This Property</CardTitle>
                </CardHeader>
                <CardContent>
                    <ContactForm propertyId={property.idProperty} />
                </CardContent>
            </Card>
            <AiSuggestions />
          </div>
        </div>
      </div>
    </div>
  );
}
