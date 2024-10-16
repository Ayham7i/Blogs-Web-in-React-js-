import React, { useState , useEffect } from 'react';
import './index.css';
import BlogList from './BlogList';

const Home = () => {

    const [blogs , setBlogs] = useState([
        {title:"The Website" , body:"websites are pages that shows info" , author:"Ayham Alakhali",id:1},
        {title:"The Internet" , body:"The internet is a new way to connect world together" , author:"Don Ayham",id:2},
        {title:"The AI" , body:"Ai will role the world and Ayham will same the world" , author:"Ayham Alakhali",id:3},
    ]);

    const [name,setName]= useState("Ayham")

    const handdleDelete = (id)=>{
        const newBlogs = blogs.filter(blog=>blog.id !==id)
        setBlogs(newBlogs)

    }

    useEffect(()=>{
        console.log("Run useEffect")
        console.log(name)
    },[name])



    return ( 
        <div className="home">

            <BlogList blogs = {blogs} title = "All Blogs" handdleDelete = {handdleDelete} / >
            <BlogList blogs = {blogs.filter((blog)=>blog.author === "Ayham Alakhali")} title = "Ayham's Blogs"  / >
                <button onClick={()=>setName("Ayham Al-Akhali")}>Change Name</button>
                <p>{name}</p>
     
        </div>
        
     );
}
 
export default Home;