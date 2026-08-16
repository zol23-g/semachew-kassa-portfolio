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

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const course = profileData.courses.find((c) => c.slug === resolvedParams.slug);

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
