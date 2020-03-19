import HellowTopPostArea from './hellow-top-post-textarea';
import {addPosts, updatePostTexts} from '../../../../../../redux/reducers/post-reducer';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    newPostText: state.posts.posts.newPostText,
  };
};

const HellowTopPostAreaContainer = connect(mapStateToProps ,{addPosts, updatePostTexts})(HellowTopPostArea);

export default HellowTopPostAreaContainer;