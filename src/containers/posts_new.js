import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import { createPost } from '../actions/index';

class PostsNew extends Component {

  render() {
    // Redux-form to handle submit of form.
    const { fields: { title, categories, content }, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create a new Post</h3>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title}/>
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>
        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...categories}/>
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control" {...content}/>
        </div>
        <button type="submit" className="btn btn-primary">Create</button>
      </form>
    )
  }
}

function validate(values) {
  const errors = {};
  if (!values.title) {
    errors.title = 'Enter Username';
  }
  return errors;
}

// connect: first argument is mapStateToProps, second is mapDispatchToProps
// reduxForm: first argument is config object, second is mapStateToProps, third is mapDispatchToProps
export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostsNew);

// same as;
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ cratePost }, dispatch);
// }
// ...
// }, null, mapDispatchToProps)(PostsNew);