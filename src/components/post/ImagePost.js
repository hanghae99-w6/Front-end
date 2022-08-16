// React import
import { useRef } from 'react';

// Component & Element import
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
  return (
    <ImagePostBox>
      <PostBoxImage imgUrl={imgUrl}>
        <PostBoxImageText className="text">{content}</PostBoxImageText>
      </PostBoxImage>
      <PostBoxButtonGroup>
        <Like likes={likes} />
        <Button
          type={'button'}
          text={'상세보기'}
          style={{ width: '170px', height: '40px', bg_color: '#fcd1df' }}
        />
      </PostBoxButtonGroup>
      <PostBoxCreatedDate>작성일: {createdAt}</PostBoxCreatedDate>
    </ImagePostBox>
  );
};

export default ImagePost;