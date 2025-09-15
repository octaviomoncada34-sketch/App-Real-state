export interface Property {
  idProperty: string;
  name: string;
  address: string;
  price: number;
  year: number;
  imageUrl: string;
  idOwner: string;
  description: string;
  rooms: number;
  bathrooms: number;
  area: number; // in sqft
  location: {
    lat: number;
    lng: number;
  };
}

export interface Owner {
  idOwner: string;
  name: string;
  address: string;
  photo?: string;
  birthday?: string;
}
