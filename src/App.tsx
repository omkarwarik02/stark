import DropdownMenu from './DropdownMenu/DropdownMenu'
import DynamicIslandNavbar from './DynamicIslandNavbar/DynamicIslandNavbar'
import FileDownloadButton from './FileDownloadButton/FileDownloadButton'
import { FAQAccordion, LogoTooltip } from './index'
import LikeButton from './LikeButton/LikeButton'
import EmailCheck from './EmailCheck/EmailCheck'
function App() {
  return (
    <div className="p-10 space-y-8">
      <DynamicIslandNavbar />
      <FAQAccordion />
      <DropdownMenu label="Test" />
      <FileDownloadButton href="/test.pdf" download="test.pdf" />
      <LikeButton initialCount={0} initialIsLiked={false} />
      <EmailCheck />
      <LogoTooltip logo={<img src="/images/logo.png" alt='logo image'/>} label="Logo" size={110} />
    </div>
  )
}

export default App