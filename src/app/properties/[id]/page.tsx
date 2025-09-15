import { getPropertyById } from '@/lib/api';
import { PropertyDetailView } from '@/components/properties/PropertyDetailView';
import { notFound } from 'next/navigation';

export default async function PropertyDetailPage({ params }: { params: { id: string } }) {
  const property = await getPropertyById(params.id);

  if (!property) {
    notFound();
  }

  return <PropertyDetailView property={property} />;
}
