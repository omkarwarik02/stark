import DropdownMenu from './DropdownMenu/DropdownMenu'
import DynamicIslandNavbar from './DynamicIslandNavbar/DynamicIslandNavbar'
import FileDownloadButton from './FileDownloadButton/FileDownloadButton'
import { FAQAccordion } from './index'


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
    </div>
  )
}

export default App