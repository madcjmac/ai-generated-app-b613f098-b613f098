import FeaturedTracks from '@/components/FeaturedTracks'
import RecentTracks from '@/components/RecentTracks'

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Welcome to MP3 Player</h1>
      <FeaturedTracks />
      <RecentTracks />
    </div>
  )
}