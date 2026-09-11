'use client';
import { useQuery } from '@tanstack/react-query';
import { getCategoryPage } from '../services/categoryPage';

export function useCategoryPage(slug: string) {
  return useQuery({ queryKey: ['category-page', slug], queryFn: () => getCategoryPage(slug) });
}
