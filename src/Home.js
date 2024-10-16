import React, { useState } from 'react';
import './index.css';
import BlogList from './BlogList';

const Home = () => {

    const [blogs , setBlogs] = useState([
        {title:"The Website" , body:"websites are pages that shows info" , author:"Ayham Alakhali",id:1},
        {title:"The Internet" , body:"The internet is a new way to connect world together" , author:"Don Ayham",id:2},
        {title:"The AI" , body:"Ai will role the world and Ayham will same the world" , author:"Ayham Alakhali",id:3},
    ]);

    const handdleDelete = (id)=>{
        const newBlogs = blogs.filter(blog=>blog.id !==id)
        setBlogs(newBlogs)

    }



    return ( 
        <div className="home">

            <BlogList blogs = {blogs} title = "All Blogs" handdleDelete = {handdleDelete} / >
            <BlogList blogs = {blogs.filter((blog)=>blog.author === "Ayham Alakhali")} title = "Ayham's Blogs"  / >
     
        </div>
        
     );
}
 
export default Home;