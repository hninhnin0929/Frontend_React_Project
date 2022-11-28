import React from "react";
import '../Post.css';

function Post(props){
    console.log("Props ", props.post);
    const {title, body, comments} = props.post;
    console.log("Title ",title, "Body ",body, "Comment", comments);
    return (
        <div className="post">
            <PostHeader title={title}/>
            <PostBody body={body}/>
            {
                comments.map(comment=><PostComment comment={comment}/>)
            }
            {/* <PostComment comment={comments[0]}/>
            <div className="comment">
                This is comment 2
            </div> */}
        </div>
    )

    function PostComment(props) {
        return <div className="comment">
            {props.comment}
        </div>;
    }

    function PostBody(props) {
        return <div className="body">
           {props.body}
        </div>;
    }

    function PostHeader(props) {
        return <div className="title">
            {props.title}
        </div>;
    }
}

export default Post;