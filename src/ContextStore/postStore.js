import { createContext, useContext, useEffect, useState } from 'react';

const PostContext = createContext();

export function PostProvider({ children }) {
    debugger
  const [posts, setPosts] = useState(JSON.parse(localStorage.getItem("blogPosts")) || []);

  useEffect(()=>{
    if(posts.length){
        localStorage.setItem("blogPosts", deepCopyData(posts,true));
    }
  },[posts])

  const deepCopyData = (item, justAsString)=>{
    return !justAsString ? JSON.parse(JSON.stringify(item)) : JSON.stringify(item)
  }
  const addPosts=(data)=>{
    let copyOfPosts = deepCopyData(posts);
    setPosts([...copyOfPosts, {id : posts.length , timeStamp :  new Date(), ...data}]);
  }
  const deletePost = (itemId)=>{
    let copyOfPosts = deepCopyData(posts);
    setPosts(copyOfPosts.filter(e=> e.id != itemId ));
  }

  return (
    <PostContext.Provider value={{posts, addPosts, deletePost}}>
      {children}
    </PostContext.Provider>
  );
}

export function usePost() {
    debugger
  return useContext(PostContext);
}
