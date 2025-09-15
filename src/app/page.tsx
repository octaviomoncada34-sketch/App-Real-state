import { getProperties } from '@/lib/api';
import { HomePageClient } from '@/components/properties/HomePageClient';

export default async function Home() {
  const properties = await getProperties();

  return (
    <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
      <HomePageClient properties={properties} />
    </div>
  );
}
