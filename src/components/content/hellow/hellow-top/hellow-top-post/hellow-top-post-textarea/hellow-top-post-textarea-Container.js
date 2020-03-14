import HellowTopPostArea from './hellow-top-post-textarea';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  console.log(state)
  return {
    newPostText: state.posts.posts.newPostText,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPosts: text => {
      dispatch({
        type: 'ADD-POSTS',
        text: text,
      });
    },
    updatePostTexts: text => {
      dispatch({
        type: 'UPDATE-POST-TEXTS',
        text: text,
      });
    },
  };
};

const HellowTopPostAreaContainer = connect(mapStateToProps ,mapDispatchToProps)(HellowTopPostArea);

export default HellowTopPostAreaContainer;