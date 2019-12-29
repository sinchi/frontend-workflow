import React , { Component } from 'react';

export default CommentList = ({comments}) => (<ul>{ comments.map(comment => <li>{ comment.text }</li>) }</ul>)