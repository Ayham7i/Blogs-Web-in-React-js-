const BlogList = ({blogs , title , handdleDelete}) => {
    return ( 

        <div className="BlogList">
            <h2>{title}</h2>
                 {
              
            blogs.map((blog)=>(
               <div className="blog-preview" key={blog.id}>
               <h2>{blog.title}</h2>
               <p>Written by {blog.author}</p>

               <button onClick={()=>handdleDelete(blog.id)} style={{
                color:"white",
                backgroundColor:"#f1356d",
                padding:"3px 9px",
                borderRadius:"5px",
                marginTop:"15px"
               }}>Delete Blog</button>

               </div>

            ))
           }

        </div>
   
     );
}
 
export default BlogList;