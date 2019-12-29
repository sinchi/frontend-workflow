import React from 'react';
import CommentList from 'components/CommentList';
import { connect } from 'react-redux';
import CommentBox from 'components/CommentBox';

import * as actions from './actions';

class CommentContainer extends React.Component {
    
    render(){        
        return(
            <div>
                <CommentBox {...this.props} />
                <CommentList {...this.props} />
            </div>
        )
    }
}

function mapPropsToState(state) {
    return {
        comments: state.comments
    }
}

export default connect(mapPropsToState, actions)(CommentContainer);