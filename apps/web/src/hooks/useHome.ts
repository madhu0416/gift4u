'use client';
import { useQuery } from '@tanstack/react-query';
import { getHome } from '../services/home';

export function useHome() {
  return useQuery({ queryKey: ['home'], queryFn: getHome });
}
