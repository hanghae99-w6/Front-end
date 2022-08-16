// React import
import { useState, useEffect, Fragment } from 'react';
import {
  DetailBox,
  DetailTitle,
  DetailStar,
  DetailContent,
  DetailImage,
} from './Detail.styled';

import { useNavigate, useParams } from 'react-router-dom';

import {
  DetailCommentHeader,
  DetailCommentInput,
  DetailCommentGroup,
  DetailCommentBox,
  DetailCommentGroupInput,
  DetailCommentLikes,
  DetailCommentStatus,
  DetailSubCommentButton,
} from '../../components/comment/Comment';

import { DetailSubCommentInput } from '../../components/subcomment/SubComment';

//Redux import
import { useDispatch, useSelector } from 'react-redux';
import comment, { getCommentThunk } from '../../redux/modules/comment';

// Component import
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Button from '../../elements/button/Button';
import axios from 'axios';
import post from '../../redux/modules/post';

const Detail = () => {
  // 로그인 후 현재 경로로 돌아오기 위해 useLocation 사용
  // const location = useLocation();
  const { post_id } = useParams();
  const { post, setPost } = useState({});
  const [comment, setComment] = useState('');
  const [is_loaded, setIs_loaded] = useState(false);
  const token = useSelector((state) => state.Auth.token);
  const navigate = useNavigate();

  const [commentList, setCommentList] = useState([]);

  // comment 가져오기
  // useEffect(() => {
  //   const getCommentThunk = async () => {
  //     const { data } = await axios.get(`/api/comment/${comment_id}`);
  //     return data;
  //   };
  //   getCommentThunk()
  //     .then((result) => setComment(result))
  //     .then(() => setIs_loaded(true));
  // }, []);

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
          <h3>Comments</h3>
          {/* {is_loaded && (

          )} */}
          <DetailCommentHeader>
            <DetailCommentInput
              className="comments-header-textarea"
              maxRows={3}
              onChange={(e) => {
                setComment(e.target.value);
              }}
              multiline
              placeholder="댓글을 입력해주세요"
            />
            {/* {comment !== '' ? (
              <Button variant="outlined" onClick={submit}>
                등록하기
              </Button>
            ) : (
              <Button variant="outlined" disabled={true}>
                등록하기
              </Button>
            )} */}
          </DetailCommentHeader>
          <DetailCommentGroup>
            <DetailCommentGroupInput>
              <DetailCommentStatus>
                {/* {is_loaded ? (
                  <div>{commentData.map((com) => console.log(com))}</div>
                ) : (
                  <div>댓글 로딩중</div>
                )} */}
              </DetailCommentStatus>
              <DetailCommentLikes>좋아요 아이콘</DetailCommentLikes>
              <DetailSubCommentButton>대댓글 작성버튼</DetailSubCommentButton>
            </DetailCommentGroupInput>
            <DetailSubCommentInput>대댓글</DetailSubCommentInput>
            <DetailSubCommentInput>대댓글</DetailSubCommentInput>
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
