import { Routes, Route } from 'react-router-dom';
import PostList from './components/PostList/PostList';
import PostDetail from './components/PostDetail/PostDetail';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
    </div>
  );
}

export default App;
