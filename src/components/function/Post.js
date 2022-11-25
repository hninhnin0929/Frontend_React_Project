import React from "react";
import '../Post.css';

function Post(props){
    console.log("Props ", props.post);
    const {title, body, comments} = props.post;
    console.log("Title ",title, "Body ",body, "Comment", comments);
    return (
        <div className="post">
            <PostHeader/>
            <PostBody/>
            <PostComment/>
            <div className="comment">
                This is comment 2
            </div>
        </div>
    )

    function PostComment() {
        return <div className="comment">
            This is comment 1
        </div>;
    }

    function PostBody() {
        return <div className="body">
            Here is the post body
        </div>;
    }

    function PostHeader() {
        return <div className="title">
            Post Title
        </div>;
    }
}

export default Post;