import './App.css'
import CodeBar from './components/CodeBar/CodeBar'
import { EditorProvider } from './context/context'

function App() {

  return (
    <EditorProvider>
      <CodeBar />
    </EditorProvider>
  )
}

export default App
