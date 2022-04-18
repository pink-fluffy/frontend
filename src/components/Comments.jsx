
import React, { PureComponent, useState } from 'react'
import data from "../data.json"
import { CommentSection } from 'react-comments-section'
import styled from 'styled-components'
import StarRatings from 'react-star-ratings';
import { useSelector, useDispatch } from "react-redux";

const CommentBox = styled.div`
    display: flex;
    flex: 1;
    padding: 40px 0px 0px 40px;
    margin-top: 40px;
    margin-bottom: 80px; 
    color:rgb(58, 58, 58);
    font-weight:800px ; 
    width: 95%;
    background-color: #FDFDFD;
    flex-direction: column;
    border: 2px solid lightgray;
`;
const CommentHeader = styled.div`
justify-content: space-between;
font-size: 40px;
`;


const Comments = ({ reviews }) => {


    //alert(this.props.rating);
    //var rev = JSON.parse(reviews);
    var uId;
    var rt;
    var txt;
    var responses = [];
    for (const key in reviews) {
        var r = reviews[key];
        uId = r.userId;
        rt = r.rating;
        txt = r.text;
        var n = "User"
        if (uId) {
            n = uId.split(" ");
            console.log(n);
            n = n[0];
            console.log(n);
        }
        responses.push({
            "userId": uId,
            "comId": uId,
            "fullName": uId,
            "avatarUrl": `https://ui-avatars.com/api/name=${n}&background=random`,
            "text": txt
        });

    }

    console.log(responses);

    //reviews.forEach(element => console.log(element));
    var [comment, setComment] = useState(data);
    comment = responses;

    const userId = "Store-User";
    const avatarUrl = 'https://ui-avatars.com/api/name=Unicorn&background=random';
    const name = "Unicorn";
    const signinUrl = "/login";
    const signupUrl = "/register";
    let count = 0
    //console.log(reviews);



    comment.map(i => { count += 1; i.replies && i.replies.map(i => count += 1) })
    return (
        <CommentBox className="commentSection">

            <CommentHeader className="header">{count} Reviews ({rt || 0})</CommentHeader>
            <StarRatings
                rating={rt}
                starRatedColor="pink"
                starDimension="40px"
                starSpacing="15px"
            />


            <CommentSection currentUser={userId && { userId: userId, avatarUrl: avatarUrl, name: name }} commentsArray={comment}
                setComment={setComment} signinUrl={signinUrl} signupUrl={signupUrl} />
        </CommentBox>
    );
};

export default Comments;