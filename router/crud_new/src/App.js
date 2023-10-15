import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewPost from "./components/NewPost/NewPost";
import HomePage from "./components/HomePage/HomePage";
import ViewPost from "./components/ViewPost/ViewPost";
import EditPost from "./components/EditPost/EditPost";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/new" element={<NewPost />} />
        <Route path="/posts/:id" element={<ViewPost />} />
        <Route path="/posts/:id/edit" element={<EditPost />} />
      </Routes>
    </Router>
  );
}

export default App;