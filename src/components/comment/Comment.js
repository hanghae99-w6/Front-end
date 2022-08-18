// Redux import
import { deleteCommentThunk } from '../../redux/modules/comment';
import { useDispatch } from 'react-redux';

// Style import
import {
  CommentGroupInput,
  CommentStatusBox,
  CommentStatus,
  CommentDeleteButton,
  CommentAuthor,
  CommentCreatedAt,
} from './Comment.styled';

const Comment = ({ id, comment, createdAt, likes, postId, author }) => {
  const dispatch = useDispatch();

  const deleteComment = () => {
    dispatch(deleteCommentThunk(id));
  };

  return (
    <CommentGroupInput>
      <CommentStatusBox>
        <CommentStatus>{comment}</CommentStatus>
        {comment === '삭제된 댓글입니다.' ? (
          <div></div>
        ) : (
          <CommentDeleteButton onClick={deleteComment}>
            삭제
          </CommentDeleteButton>
        )}
      </CommentStatusBox>
      <CommentAuthor>작성자: {author}</CommentAuthor>
      <CommentCreatedAt>작성일: {createdAt.split('T')[0]}</CommentCreatedAt>
    </CommentGroupInput>
  );
};

export default Comment;
