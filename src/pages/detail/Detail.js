// React import
import { useState, useEffect, Fragment } from 'react';

//Redux import
import { useDispatch, useSelector } from 'react-redux';
import { addCommentThunk, getCommentThunk } from '../../redux/modules/comment';
import { getSinglePostThunk, deletePostThunk } from '../../redux/modules/post';

// Package import
import { useNavigate, useParams } from 'react-router-dom';

// Component & Element import
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Button from '../../elements/button/Button';
import Star from '../../components/star/Star';
import Comment from '../../components/comment/Comment';

// Style import
import {
  DetailAuthor,
  DetailBox,
  DetailTitle,
  DetailStar,
  DetailContent,
  DetailImage,
  ButtonBox,
  DetailCommentHeader,
  DetailCommentInput,
  DetailCommentGroup,
  DetailCommentBox,
  DetailCommentComments,
  CommentBoxButton,
} from './Detail.styled';
import { logoHeader } from '../../static/image/image';

const Detail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [comment, setComment] = useState('');

  const post = useSelector((state) => state.post.single_post);
  const comments = useSelector((state) => state.comment.comment);
  const detail_is_loaded = useSelector((state) => state.post.detail_is_loaded);
  const comment_is_loaded = useSelector((state) => state.comment.is_loaded);

  useEffect(() => {
    dispatch(getSinglePostThunk(id));
    dispatch(getCommentThunk(id));
  }, []);

  const onDeletePost = () => {
    dispatch(deletePostThunk(id)).then((res) => {
      if (res.payload.data === 'delete success') {
        alert('삭제 완료되었습니다.');
        navigate(`/`);
      } else {
        navigate(`/detail/${id}`);
      }
    });
  };

  const addComment = () => {
    try {
      if (
        window.localStorage.getItem('authorization') === '' ||
        window.localStorage.getItem('authorization') === undefined ||
        window.localStorage.getItem('authorization') === null
      ) {
        alert('로그인 후 사용해주세요.');
      } else {
        dispatch(addCommentThunk({ postId: id, comment }));
        setComment('');
      }
    } catch (err) {
      console.error(err);
      alert('로그인 후 사용해주세요.');
    }
  };

  return (
    <Fragment>
      <Header />
      <DetailAuthor>
        <span>작성자: {detail_is_loaded ? post.author : ''}</span>
      </DetailAuthor>
      <DetailBox>
        <DetailTitle>
          <span>{detail_is_loaded ? post.title : ''}</span>
        </DetailTitle>
        <DetailStar>
          <Star rating={detail_is_loaded ? parseInt(post.star) : 0}></Star>
        </DetailStar>
        <DetailContent>
          <span>{detail_is_loaded ? post.content : ''}</span>
        </DetailContent>
        <DetailImage
          imgUrl={detail_is_loaded ? post.imgUrl : logoHeader}
        ></DetailImage>
        <DetailCommentBox>
          <DetailCommentHeader>
            <DetailCommentComments>Comments</DetailCommentComments>
            <DetailCommentInput
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="댓글을 입력하세요.(20자 이내)"
              maxLength={20}
              required
            />
            <CommentBoxButton>
              <Button
                _onClick={addComment}
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
            {comment_is_loaded ? (
              [...comments].reverse().map((com) => {
                return (
                  <Comment
                    key={com.id}
                    id={com.id}
                    comment={com.comment}
                    likes={com.likes}
                    createdAt={com.createdAt}
                    postId={com.postId}
                    author={com.author}
                  />
                );
              })
            ) : (
              <div></div>
            )}
          </DetailCommentGroup>
        </DetailCommentBox>
      </DetailBox>
      <ButtonBox>
        <Button
          _onClick={() => onDeletePost()}
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
