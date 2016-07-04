import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions/index';


class PostIndex extends Component {

  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>Posts Lists!</div>
    );
  }
}

// NOTICE: Keep for documentation purpose.
// import { bindActionCreators } from 'redux';
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPosts }, dispatch);
// }
//
// export default connect(null, mapDispatchToProps)(PostsIndex);
// Same as;
// export default connect(null, { fetchPosts: fetchPosts })(PostsIndex);
// Also as;
export default connect(null, { fetchPosts })(PostIndex);