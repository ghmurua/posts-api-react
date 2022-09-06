import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostsList from "./components/PostsList";
import PostDetail from "./components/PostDetail";
import Error404 from "./components/Error404";
import { ContextProvider } from "./context/Context";

export default function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PostsList />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}
