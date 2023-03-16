import styles from './App.module.css'
import CodeBar from './components/CodeBar/CodeBar'
import { EditorProvider } from './context/context'

function App() {

  return (
    <EditorProvider>
      <CodeBar />

      <div className={styles.main}>
        
      </div>
    </EditorProvider>
  )
}

export default App
