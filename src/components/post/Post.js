// Package import
import { useNavigate } from 'react-router-dom';

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
        <Like id={id} likes={likes} />
        <Button
          type={'button'}
          _onClick={() => navigate(`/detail/${id}`)}
          text={'상세보기'}
          style={{ width: '170px', height: '40px', bg_color: '#fcd1df' }}
        />
      </PostBoxButtonGroup>
      <PostBoxCreatedDate>작성일: {createdAt.split('T')[0]}</PostBoxCreatedDate>
    </PostBox>
  );
};

export default Post;