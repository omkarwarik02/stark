import DropdownMenu from './DropdownMenu/DropdownMenu'
import DynamicIslandNavbar from './DynamicIslandNavbar/DynamicIslandNavbar'
import FileDownloadButton from './FileDownloadButton/FileDownloadButton'
import { FAQAccordion } from './index'
import LikeButton from './LikeButton/LikeButton'

function App() {
  return (
    <div className="p-10 space-y-8">
      <DynamicIslandNavbar />
      <FAQAccordion />
      <DropdownMenu label="Test" />
      <FileDownloadButton href="/test.pdf" download="test.pdf" />
      <LikeButton initialCount={0} initialIsLiked={false} />
    </div>
  )
}

export default App