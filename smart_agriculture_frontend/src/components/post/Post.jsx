import { useState, useEffect } from 'react';
import Moment from 'moment';

// Card component
// eslint-disable-next-line react/prop-types
const PostCard = ({ title, body, photo, post_date }) => (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h3>{title}</h3>
        <img src={photo} alt={`Image for ${title}`} style={{ maxWidth: '100%' }} />
        <p>{body}</p>
        <h6><b>Date: {Moment(post_date).format('MMMM Do YYYY, h:mm:ss a')}</b></h6>
    </div>
);

// Component to render multiple cards
// eslint-disable-next-line react/prop-types
const PostList = ({ posts }) => (
    <div>
        <h2>Posts</h2>
        {
            // eslint-disable-next-line react/prop-types
            posts.map(post => (
                <PostCard
                    key={post.id}
                    title={post.title}
                    body={post.body}
                    photo={post.photo}
                    post_date={post.post_date} />
            ))
        }
    </div>
);

// Main App component
const Post = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(
                'http://127.0.0.1:8000/posts/'
            );
            const data = await response.json();
            console.log(data);
            setPosts(data);
        };
        fetchPost();
    }, []);

    return (
        <div>
            <h1>React Post Cards</h1>
            <PostList posts={posts} />
        </div>
    );
};

export default Post;
