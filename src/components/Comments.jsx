
import React, { PureComponent, useState } from 'react'
import data from "../data.json"
import { CommentSection } from 'react-comments-section'
import styled from 'styled-components'

const CommentBox = styled.div`
    padding: 40px 0px 0px 40px;
    color:rgb(58, 58, 58);
    font-weight:800px ; 
    width: 95%;
    background-color: #F1F1F1;
`;
const CommentHeader  = styled.div`
justify-content: space-between;
font-size: 40px;
`;




const Comments = () => {
    const [comment, setComment] = useState(data);
    const userId = "Store-User";
    const avatarUrl = 'https://ui-avatars.com/api/name=Unicorn&background=random';
    const name = "Unicorn";
    const signinUrl = "/login";
    const signupUrl = "/register";
    let count = 0
    comment.map(i => {count+=1; i.replies && i.replies.map(i=> count+=1)} )
    return (
        <CommentBox className="commentSection">
        <CommentHeader className="header">{count} Comments</CommentHeader>
       
        <CommentSection currentUser={userId && { userId: userId, avatarUrl: avatarUrl, name: name }} commentsArray={comment}
        setComment={setComment} signinUrl={signinUrl} signupUrl={signupUrl}/>
            </CommentBox>
    );
};

export default Comments;