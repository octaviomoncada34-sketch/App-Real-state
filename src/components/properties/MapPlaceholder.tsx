import { MapPin } from 'lucide-react';

export function MapPlaceholder() {
  return (
    <div className="flex h-80 w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/30 bg-muted/50 text-center">
      <MapPin className="h-12 w-12 text-muted-foreground" />
      <p className="mt-4 font-semibold text-muted-foreground">Interactive map would be displayed here.</p>
      <p className="mt-1 text-sm text-muted-foreground/80">Requires Google Maps API Key setup.</p>
    </div>
  );
}
