import EnhancedLikeCounts from "./components/HOC/LikeCounts";
import EnhancedCommentCounts from "./components/HOC/CommentCounts";
import './App.css';

function App() {
  return (
    <div>
      <EnhancedLikeCounts />
      <EnhancedCommentCounts />
    </div>
  )
}

export default App;
