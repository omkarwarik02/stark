import DropdownMenu from './DropdownMenu/DropdownMenu'
import DynamicIslandNavbar from './DynamicIslandNavbar/DynamicIslandNavbar'
import FileDownloadButton from './FileDownloadButton/FileDownloadButton'
import { FAQAccordion } from './index'
import LikeButton from './LikeButton/LikeButton'

function App() {
  return (
    <div style={{ maxWidth: 700, margin: '40px auto', padding: '0 20px' }}>
      <DynamicIslandNavbar />
      <FAQAccordion />
      <DropdownMenu 
  label="Choose something"
  placeholder="Pick one..."
  options={[
    { value: 'opt1', label: 'Option 1' },
    { value: 'opt2', label: 'Option 2' }
  ]}
  handleChange={(value) => console.log('Selected:', value)}
/>
<FileDownloadButton 
        href="/sample_text.pdf"
        download="sample_text.pdf"
      />
       <LikeButton initialCount={245} initialIsLiked={false} />
       <LikeButton initialCount={0} initialIsLiked={true} />
    </div>
  )
}

export default App