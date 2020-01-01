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
        this.props.addComment(this.state.comment);
        this.setState({ comment: '' });
    }

    render(){        
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add comment</h4>
                    <textarea onChange={this.handleChange} value={this.state.comment}/>
                    <div>
                        <button>Submit Comment</button>
                    </div> 
                </form>
                <button className="fetchComments">Fetch comments</button>
            </div>
        )
    }
}

export default CommentBox;

