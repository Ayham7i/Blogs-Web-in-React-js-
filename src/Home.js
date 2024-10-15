import React, { useState } from 'react';
import './index.css';

const Home = () => {

    const [blogs , setBlogs] = useState([
        {title:"The Website" , body:"websites are pages that shows info" , author:"Ayham Alakhali",id:1},
        {title:"The Internet" , body:"The internet is a new way to connect world together" , author:"Don Ayham",id:2},
        {title:"The AI" , body:"Ai will role the world and Ayham will same the world" , author:"Mr.Aura",id:3},
    ]);



    return ( 
        <div className="home">
            {
             blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>

                </div>

             ))
            }

        </div>
        
     );
}
 
export default Home;