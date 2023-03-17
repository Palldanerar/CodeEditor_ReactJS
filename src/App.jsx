import styles from './App.module.css'
import CodeBar from './components/CodeBar/CodeBar'
import Preview from './components/Preview/Preview'
import { EditorProvider } from './context/context'

function App() {

  return (
    <EditorProvider>
      <CodeBar />

      <div className={styles.main}>
        <Preview />
      </div>
    </EditorProvider>
  )
}

export default App
