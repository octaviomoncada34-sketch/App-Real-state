import { PROPERTIES } from './mock-data';
import type { Property } from './definitions';

// Simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getProperties(): Promise<Property[]> {
  await delay(500);
  return PROPERTIES;
}

export async function getPropertyById(id: string): Promise<Property | undefined> {
  await delay(500);
  return PROPERTIES.find(p => p.idProperty === id);
}
