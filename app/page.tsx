import React from 'react'
import Hero from '../components/home/Hero'
import Journey from '../components/home/Journey'
import FeaturedMusic from '../components/home/FeaturedMusic'
import LivePerformance from '../components/home/LivePerformance'
import GalleryPreview from '../components/home/GalleryPreview'
import Booking from '../components/home/Booking'

export default function HomePage() {
  return (
    <>
      <Hero />
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '2rem' }}>
        <Journey />
        <FeaturedMusic />
        <LivePerformance />
        <GalleryPreview />
        <Booking />
      </div>
    </>
  )
}
