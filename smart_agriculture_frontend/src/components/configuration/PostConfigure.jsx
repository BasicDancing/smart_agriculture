import { useState } from "react";
import PostGateway from "../../gateway/PostGateway";
import PostView from "../data_view/PostView";

const PostConfigure = () => {
    const [post, setPost] = useState([]);
    const [title, setTitle] = useState("");
    const [posts, setPosts] = useState([]);

    const [titleError, setTitleError] = useState("")

    //Gateway
    const {
        postPost,
        deletePost
    } = PostGateway({ setPosts })

    const onButtonClick = () => {
        // Set initial error values to empty
        setTitleError("")
        // Check if the user has entered both fields correctly
        if ("" === title) {
            setTitleError("Please enter title")
            return
        }

        console.log(post)
        postPost({ post })
    }

    const handleTitle = (e) => {
        const value = e.target.value;
        setTitle(value);
        setPost({
            ...post,
            title: value
        })
    };

    const handleBody = (e) => {
        const value = e.target.value;
        setPost({
            ...post,
            body: value
        })
    };

    const handlePhoto = (e) => {
        const value = e.target.value;
        setPost({
            ...post,
            photo: value
        })
    };

    return (
        <>
            <div className="inputTable">
                <div className={"mainContainer"}>
                    <div className={"titleContainer"}>
                        <div>Daily Post</div>
                    </div>
                    <br />
                    <div className={"inputContainer"}>
                        <input
                            placeholder="Enter your title here"
                            onChange={handleTitle}
                            className={"inputBox"} />
                        <label className="errorLabel">{titleError}</label>
                    </div>
                    <br />
                    <h5>Write your post</h5>
                    <div className={"inputContainer"}>
                        <textarea placeholder="Enter your context here"
                            onChange={handleBody}
                            className={"inputBox"}
                            rows={4} cols={40} />
                    </div>
                    <br />
                    <div className={"inputContainer"}>
                        <input
                            placeholder="Enter your photo here"
                            onChange={handlePhoto}
                            className={"inputBox"} />
                    </div>
                    <br />
                    <div className={"inputContainer"}>
                        <input
                            className={"inputButton"}
                            type="button"
                            onClick={onButtonClick}
                            value={"Submit"} />
                    </div>
                </div>
                <PostView
                    posts={posts} 
                    deletePost={deletePost} />
            </div>
        </>)
};

export default PostConfigure;