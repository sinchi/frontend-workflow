import React from 'react';

export default ({comments}) => (<ul>{ comments && ( comments.map(comment => <li>{ comment.text }</li>)) }</ul>)