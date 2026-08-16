import React from 'react';
import { notFound } from 'next/navigation';
import profileDataRaw from '@/data/profile.json';
import { PortfolioData } from '@/types/portfolio';
import CourseDetailClient from './CourseDetailClient';

const profileData = profileDataRaw as unknown as PortfolioData;

export function generateStaticParams() {
  return profileData.courses.map((course) => ({
    slug: course.slug,
  }));
}

interface CoursePageProps {
  params: {
    slug: string;
  };
}

export default function CourseDetailPage({ params }: CoursePageProps) {
  const course = profileData.courses.find((c) => c.slug === params.slug);

  if (!course) {
    notFound();
  }

  return (
    <CourseDetailClient
      course={course}
      hero={profileData.hero}
      profileData={profileData}
    />
  );
}
