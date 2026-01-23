import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';

import HeroSection from '@/components/travel/HeroSection';
import FeaturedStories from '@/components/travel/FeaturedStories';
import DestinationExplorer from '@/components/travel/DestinationExplorer';
import BlogGrid from '@/components/travel/BlogGrid';
import AboutSection from '@/components/travel/AboutSection';
import Newsletter from '@/components/travel/Newsletter';

export default function Home() {
  const { data: posts = [] } = useQuery({
    queryKey: ['blogPosts'],
    queryFn: () => base44.entities.BlogPost.list('-created_date'),
  });

  const { data: destinations = [] } = useQuery({
    queryKey: ['destinations'],
    queryFn: () => base44.entities.Destination.list(),
  });

  return (
    <div className="min-h-screen bg-[#faf9f7]">
      <HeroSection />
      <FeaturedStories posts={posts} />
      <AboutSection />
      <DestinationExplorer destinations={destinations} />
      <BlogGrid posts={posts} />
      <Newsletter />
    </div>
  );
}