import React from 'react';

const Post = ({ author, content, date, image }) => {
    return (
        <div className="post">
            <div className="author">
                <img src={author.photo} alt="author" />
                <p className="name">{author.name}</p>
                <p className="autor-information">{author.nickname} •</p>
                <p className="autor-information">{date}</p>
            </div>
            <div className="content">
                <p className="content-text">{content}</p>
                <img src={image} />
            </div>
        </div>
    );
};
export default Post;
