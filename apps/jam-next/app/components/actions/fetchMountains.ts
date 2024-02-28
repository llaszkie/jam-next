'use server';

import { MountainShort } from '../types/type';

export async function fetchMountains(inputValue: string): Promise<MountainShort[]> {
  console.log(`Fetching mountains: ${inputValue}`);
  const fetchResult = await fetch(inputValue === '*' ?
    'http://localhost:3000/mountains' :
    `http://localhost:3000/mountains?id=${inputValue}`);
  if (!fetchResult.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch mountains data');
  }
  return fetchResult.json();
}
