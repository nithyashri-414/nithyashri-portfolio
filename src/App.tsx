import { Layout } from './components/Layout.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx'
import { HomePage } from './pages/HomePage.tsx'

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <HomePage />
      </Layout>
    </ThemeProvider>
  )
}

export default App
