import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Toast from "./components/toast/Toast"
import HomePage from "./pages/HomePage"
import EditorPage from "./pages/EditorPage"
import GitHubCorner from "./components/GitHubCorner"
function App() {
    return (
        <>
            <Toast /> {/* Toast component from react-hot-toast */}
            <GitHubCorner />
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/editor/:roomId" element={<EditorPage />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
