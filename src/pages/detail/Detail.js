// React import
import { useState, useEffect, Fragment } from 'react';

//Redux import
import { useDispatch, useSelector } from 'react-redux';
import {
  addCommentThunk,
  deleteCommentThunk,
  getCommentThunk,
} from '../../redux/modules/comment';

// Package import
import { useNavigate, useParams } from 'react-router-dom';

// Component & Element import
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Button from '../../elements/button/Button';
import Star from '../../components/star/Star';
import LikeButton from '../../components/like/Like';
import {
  DetailCommentHeader,
  DetailCommentInput,
  DetailCommentGroup,
  DetailCommentBox,
  DetailCommentGroupInput,
  DetailCommentStatusBox,
  DetailCommentStatus,
  DetailCommentEditButton,
  DetailCommentDeleteButton,
  DetailSubCommentButton,
  DetailCommentLikes,
  DetailCommentCreatedAt,
  DetailCommentComments,
  CommentBoxButton,
} from '../../components/comment/Comment';
import Comment from '../../components/comment/Comment';

// import { DetailSubCommentInput } from '../../components/subcomment/SubComment';

// Style import
import {
  DetailBox,
  DetailTitle,
  DetailStar,
  DetailContent,
  DetailImage,
  ButtonBox,
} from './Detail.styled';
import { AiFillLike } from 'react-icons/ai';

const Detail = () => {
  const initialState = {
    id: 1,
    title: '우리들의 블루스',
    imgUrl:
      'https://bucket-owner-full-control.s3.ap-northeast-2.amazonaws.com/20210531_003708.png',
    star: 5,
    comment: '행복해요',
    content: '2022 최고의 드라마입니다!',
    createdAt: '2022-08-15',
    modifiedAt: '2022-08-15',
    subComment: {
      id: 1,
      comment: '나도 행복해요',
      likes: 22,
      createdAt: '2022-08-15',
      modifiedAt: '2022-08-15',
    },
  };

  let [addComment, setAddComment] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [comment, setComment] = useState(initialState);
  // const [comment, setComment] = useState('')
  // comment 이 변수이게 계속 바뀔 것 같다

  const is_loaded = useSelector((state) => state.post.is_loaded);
  const commentData = useSelector((state) => state.post.post);

  useEffect(() => {
    dispatch(getCommentThunk());
  }, []);

  // const inputCommentHandler = (e) => {
  //   const { comment, value } = e.target;
  //   setAddComment({
  //     ...addComment,
  //     [comment]: value,
  //   });
  // };

  const onSubmitHandler = () => {
    console.log('작성하기');
    if (addComment === '') {
      alert('댓글을 작성해주세요!!');
    } else {
      dispatch(addCommentThunk({ postId: '1', comment: comment })); //변수 상태로 보내야함
      setComment(initialState);
      alert('정상적으로 댓글이 등록 되었습니다.');
    }
  };

  return (
    <Fragment>
      <Header />
      <DetailBox>
        <DetailTitle>
          <span>{comment.title}</span>
        </DetailTitle>
        <DetailStar>
          <Star rating={5} setRating={5}></Star>
        </DetailStar>
        <DetailContent>
          <span>{comment.content}</span>
        </DetailContent>
        <DetailImage imgUrl={comment.imgUrl}></DetailImage>
        <DetailCommentBox>
          <DetailCommentHeader>
            <DetailCommentComments>Comments</DetailCommentComments>
            <DetailCommentInput
              type="text"
              // value={comment}
              // onChange={(e) => setComment(e.target.value)}
              placeholder="댓글을 입력하세요.(20자 이내)"
              maxLength={20}
              required
            />
            <CommentBoxButton>
              <Button
                _onClick={() => {
                  onSubmitHandler();
                }}
                // type={'submit'}
                text={'작성하기'}
                style={{
                  width: '80px',
                  height: '50px',
                  bg_color: '#FF8EB2',
                }}
              />
            </CommentBoxButton>
          </DetailCommentHeader>
          <DetailCommentGroup>
            <DetailCommentGroupInput>
              <DetailCommentStatusBox>
                <DetailCommentStatus>
                  <h2>{comment.comment}</h2>
                </DetailCommentStatus>
                <DetailCommentEditButton
                // onClick={onEditHandler}
                >
                  수정
                </DetailCommentEditButton>
                <DetailCommentDeleteButton
                  onClick={() => {
                    dispatch(deleteCommentThunk(comment.id));
                  }}
                >
                  삭제
                </DetailCommentDeleteButton>
              </DetailCommentStatusBox>
              <DetailCommentLikes>
                <LikeButton>{AiFillLike}</LikeButton>
              </DetailCommentLikes>
              <DetailCommentCreatedAt>
                작성일: {comment.createdAt}
              </DetailCommentCreatedAt>
              {/* <DetailSubCommentButton>댓글작성</DetailSubCommentButton> */}
            </DetailCommentGroupInput>
            {/* <DetailSubCommentInput>
              {comment.subComment.comment}
            </DetailSubCommentInput>
            <DetailSubCommentInput>
              {comment.subComment.comment}
            </DetailSubCommentInput> */}
          </DetailCommentGroup>
        </DetailCommentBox>
      </DetailBox>
      <ButtonBox>
        <Button
          _onClick={() => navigate('/write')}
          type={'button'}
          style={{
            width: '200px',
            height: '50px',
            color: 'white',
            bg_color: '#ff8eb2',
          }}
          text={'수정하기'}
        />
        <Button
          _onClick={() => navigate('/write')}
          type={'button'}
          style={{
            width: '200px',
            height: '50px',
            color: 'white',
            bg_color: '#ff8eb2',
          }}
          text={'삭제하기'}
        />
      </ButtonBox>
      <Footer />
    </Fragment>
  );
};

export default Detail;
