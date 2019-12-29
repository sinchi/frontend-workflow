import React from 'react';

class CommentBox extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            comment: ''
        }
        this.handleChange = this.handleChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this);       
    }
    

    handleChange(e){
        this.setState({ comment: e.target.value });
    }
    handleSubmit(e){
        e.preventDefault();
        console.log(this.state.comment);
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <h4>Add comment</h4>
                <textarea onChange={this.handleChange} value={this.state.comment}/>
                <div>
                    <button>Submit Comment</button>
                </div> 
            </form>
        )
    }
}

export default CommentBox;