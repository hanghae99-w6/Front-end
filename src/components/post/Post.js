// Package import
import { Navigate, useNavigate } from 'react-router-dom';

// Component & Element import
import Button from '../../elements/button/Button';
import Like from '../like/Like';

// Style import
import {
  PostBox,
  PostBoxText,
  PostBoxButtonGroup,
  PostBoxCreatedDate,
} from './Post.styled';

const Post = ({ id, title, content, likes, createdAt, modifiedAt }) => {
  const navigate = useNavigate();

  return (
    <PostBox>
      <PostBoxText>{content}</PostBoxText>
      <PostBoxButtonGroup>
        <Like likes={likes} />
        <Button
          type={'button'}
          _onClick={() => navigate(`/detail/${id}`)}
          text={'상세보기'}
          style={{ width: '170px', height: '40px', bg_color: '#fcd1df' }}
        />
      </PostBoxButtonGroup>
      <PostBoxCreatedDate>작성일: {createdAt}</PostBoxCreatedDate>
    </PostBox>
  );
};

export default Post;