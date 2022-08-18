// Component & Element import
import { useNavigate } from 'react-router-dom';
import Button from '../../elements/button/Button';
import Like from '../like/Like';

// Style import
import {
  ImagePostBox,
  PostBoxImage,
  PostBoxImageText,
  PostBoxButtonGroup,
  PostBoxCreatedDate,
} from './ImagePost.styled';

const ImagePost = ({
  id,
  title,
  content,
  likes,
  imgUrl,
  createdAt,
  modifiedAt,
}) => {
  const navigate = useNavigate();

  return (
    <ImagePostBox>
      <PostBoxImage imgUrl={imgUrl}>
        <PostBoxImageText className="text">{content}</PostBoxImageText>
      </PostBoxImage>
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
    </ImagePostBox>
  );
};

export default ImagePost;