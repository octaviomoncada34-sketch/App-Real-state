import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HomeIcon } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center px-4">
      <h1 className="text-6xl font-bold font-headline text-primary">404</h1>
      <h2 className="text-3xl font-semibold mt-4">Property Not Found</h2>
      <p className="text-muted-foreground mt-2 max-w-md">
        Sorry, we couldn't find the property you're looking for. It might have been delisted or the link is incorrect.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">
          <HomeIcon className="mr-2 h-4 w-4" />
          Go back to Home
        </Link>
      </Button>
    </div>
  );
}
