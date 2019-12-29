import React from 'react';

export default ({comments}) => (<ul>{ comments && ( comments.map(comment => <li key={comment}>{ comment }</li>)) }</ul>)