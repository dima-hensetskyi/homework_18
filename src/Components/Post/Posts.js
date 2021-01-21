import React from 'react';

import Post from './Post';
import PostsData from './PostsData';

import './Post.css';

    const  Posts = () =>
        <div className="posts">
            {PostsData ? PostsData.map((post, index) => <Post {...post} key={index}/>) : null}
        </div>

export default Posts;
