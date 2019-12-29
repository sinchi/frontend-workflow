import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'containers/CommentContainer/actions';

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

function mapStateToProps(state){
    return {
        comments: state.comments
    }
}

export default connect(mapStateToProps, actions)(CommentBox);