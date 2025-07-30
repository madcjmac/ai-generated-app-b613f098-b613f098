import LibraryView from '@/components/LibraryView'
import UploadButton from '@/components/UploadButton'

export default function Library() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Library</h1>
        <UploadButton />
      </div>
      <LibraryView />
    </div>
  )
}