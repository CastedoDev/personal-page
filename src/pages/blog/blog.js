import './blog.css'
import Header from "../../components/header/header";

const Blog = () => {
    return (
        <>
            <Header />
            <div className="blog-container">
                <h1 className="blog-title">
                    Blog
                </h1>
                <p className="blog-description">
                    I'll document all the new things that I'll learn, the process to build the projects and some random stuff
                    that I'm interested in.
                </p>
                <hr className="blog-divider"/>
                <h2 className="blog-h2">LAST POSTS</h2>
                <div className="blog-last-posts-container">
                    <p className="blog-last-post">Hola 1</p>
                    <p className="blog-last-post">Hola 2</p>
                    <p className="blog-last-post">Hola asdf asd fasdfas dfas daf 3</p>
                </div>
                <hr className="blog-divider"/>
                <h2 className="blog-h2">TOPICS</h2>
            </div>
        </>
    );
}

export default Blog;