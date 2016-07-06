import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';

import { createPost } from '../actions/index';

class PostsNew extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.createPost(props)
      .then(() => {
        // Blog post has been created navigate user to index.
        // Meeeh :(
        this.context.router.push('/');
      })
  }

  render() {
    // Redux-form to handle submit of form.
    const { fields: { title, categories, content }, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create a new Post</h3>
        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : '' }`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title}/>
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>
        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : '' }`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories}/>
          <div className="text-help">
            {categories.touched ? categories.error : ''}
          </div>
        </div>
        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : '' }`}>
          <label>Content</label>
          <textarea className="form-control" {...content}/>
          <div className="text-help">
            {content.touched ? content.error : ''}
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Create</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    )
  }
}

function validate(values) {
  const errors = {};
  if (!values.title) {
    errors.title = 'Enter Title';
  }
  if (!values.categories) {
    errors.categories = 'Enter some Categories';
  }
  if (!values.content) {
    errors.content = 'Enter some Content';
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