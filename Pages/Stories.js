import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, MapPin, ArrowUpRight, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Input } from '@/components/ui/input';

const categories = [
  { value: 'all', label: 'All Stories' },
  { value: 'adventure', label: 'Adventure' },
  { value: 'culture', label: 'Culture' },
  { value: 'food', label: 'Food' },
  { value: 'nature', label: 'Nature' },
  { value: 'city', label: 'City' },
  { value: 'beach', label: 'Beach' },
  { value: 'mountains', label: 'Mountains' },
];

const categoryColors = {
  adventure: 'bg-orange-500',
  culture: 'bg-purple-500',
  food: 'bg-red-500',
  nature: 'bg-green-500',
  city: 'bg-blue-500',
  beach: 'bg-cyan-500',
  mountains: 'bg-slate-600',
};

export default function Stories() {
  const [activeCategory, setActiveCategory] = useState('all');
 