import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { fetchPosts } from '../actions/index';


class PostIndex extends Component {

  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`posts/${post.id}`}>
            <span className="pull-xs-right">{post.categories}</span>
            <strong>{post.title}</strong>
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="row">
        <h3>
          Posts
          <Link to="/posts/new" className="btn btn-primary pull-xs-right">
            Add a Post
          </Link>
        </h3>
        <ul class="list-group">
          {this.renderPosts()}
        </ul>
      </div>
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


function mapStateToProps(state) {
  return { posts: state.posts.all };
}
export default connect(mapStateToProps, { fetchPosts })(PostIndex);