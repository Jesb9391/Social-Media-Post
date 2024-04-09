import React, { useState } from 'react'; 
import CreatePostForm from './components/CreatePostForm';
import Feed from './components/Feed';

 function App(){ 
  const[posts, setPosts]= useState([]);
  const handlePostSubmit = (newPost) =>{
    setPosts([posts, newPost]);
  };
  
  return(    
     <div>
      <h1>Fakebook!</h1>
      <CreatePostForm onPostSubmit = {handlePostSubmit}/>
      <Feed posts = {posts}/>
    
    </div>
  ) 

}
 export default App
