import React from 'react';
import Post from './Post';
import './Post.css';
const ANAKIN_IMAGE =
    'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg';
const RAY_IMAGE =
    'https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale';
const way = `https://sayingimages.com/wp-content/uploads/the-way-this-is-meme.jpg`;
const mando = `https://styles.redditmedia.com/t5_u8wq5/styles/communityIcon_62iioh7khuv51.png?width=256&s=3c4a604c15ed964e5c5d055dc8f8c3b7e89023d9`;

function Posts() {
    return (
        <div className="posts">
            <Post
                author={{
                    name: 'Anakin Skywalker',
                    photo: ANAKIN_IMAGE,
                    nickname: '@dart_vader',
                }}
                content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
                image={RAY_IMAGE}
                date={'26 oct.'}
            />
            <Post
                author={{
                    name: 'Mandalorian',
                    photo: mando,
                    nickname: '@Mando',
                }}
                content="I have spoken. This is the way. "
                image={way}
                date={'1 nov.'}
            />
        </div>
    );
}
export default Posts;
