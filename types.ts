
// FIX: Import `ElementType` to resolve 'Cannot find namespace React' error.
import type { ElementType } from 'react';

export interface Amenity {
  name: string;
  icon: ElementType;
  description: string;
}

export interface AmenityCategory {
  category: string;
  description: string;
  items: Amenity[];
  image: string;
}

export interface Highlight {
  title: string;
  icon: ElementType;
}

export interface Review {
  name: string;
  initials: string;
  rating: number;
  text: string;
}

export interface Attraction {
    name: string;
    distance: string;
    icon: ElementType;
}