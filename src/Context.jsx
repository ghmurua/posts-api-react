import { useState, useEffect, createContext } from "react";

export const Context = createContext();

export function ContextProvider(props) {
  const [posts, setPosts] = useState([]);
  const [pages, setPages] = useState([15, 0]);
  const [users, setUsers] = useState([]);
  const [allComments, setComments] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);

  function fetchPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((response) => setPosts(response));
  }

  function fetchComments() {
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((response) => setComments(response));
  }

  function fetchUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((response) => setUsers(response));
  }

  function fetchAlbums() {
    fetch("https://jsonplaceholder.typicode.com/albums")
    .then((res) => res.json())
    .then((response) => setAlbums(response));
  }

  function fetchPhotos() {
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((response) => setPhotos(response));
  }

  useEffect(() => {
    fetchPosts();
    fetchComments();
    fetchUsers();
    fetchAlbums();
    fetchPhotos();
  }, []);

  return (
    <Context.Provider
      value={{
        posts,
        pages,
        setPages,
        allComments,
        users,
        albums,
        photos
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
