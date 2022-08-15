// React import
import { useState, useEffect, Fragment } from 'react';
import {
  DetailBox,
  DetailTitle,
  DetailStar,
  DetailContent,
  DetailImage,
  DetailCommentBox,
} from './Detail.styled';

import {
  DetailCommentInputGroup,
  DetailCommentInput,
  DetailCommentGroup,
} from '../../components/comment/Comment';

//Redux import
import { useDispatch, useSelector } from 'react-redux';
import { getCommentThunk } from '../../redux/modules/comment';

// Component import
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Button from '../../elements/button/Button';

const Detail = () => {
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();

  const id = 1;

  const commentData = useSelector((state) => state.comment.comment);
  const is_loaded = useSelector((state) => state.comment.is_loaded);

  useEffect(() => {
    dispatch(getCommentThunk(id));
  }, []);

  return (
    <Fragment>
      <Header />
      <Button
        type={'submit'}
        text={'SIGN IN'}
        style={{
          width: '200px',
          height: '50px',
          ft_size: '20px',
          color: '#202020',
        }}
      />
      <DetailBox>
        <DetailTitle>
          <span>Title</span>
        </DetailTitle>
        <DetailStar>
          <span>Star</span>
        </DetailStar>
        <DetailContent>
          <span>Content</span>
        </DetailContent>
        <DetailImage>
          <span>Image</span>
        </DetailImage>
        <DetailCommentBox>
          <DetailCommentInputGroup>
            <DetailCommentInput></DetailCommentInput>
          </DetailCommentInputGroup>
          <DetailCommentGroup>
            {is_loaded ? (
              <div>{commentData.map((com) => console.log(com))}</div>
            ) : (
              <div>로딩중</div>
            )}
          </DetailCommentGroup>
        </DetailCommentBox>
      </DetailBox>
      <Footer />
    </Fragment>
  );
};

export default Detail;

// 중복체크 no button
// 이미지 드래그앤 드랍
// 대댓글
// 그리드 레이아웃
