import PlaylistGrid from '@/components/PlaylistGrid'
import CreatePlaylistButton from '@/components/CreatePlaylistButton'

export default function Playlists() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Playlists</h1>
        <CreatePlaylistButton />
      </div>
      <PlaylistGrid />
    </div>
  )
}