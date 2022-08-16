// React import
import { Fragment, useEffect, useState, useRef, useCallback } from 'react';

// Redux import
import { useDispatch, useSelector } from 'react-redux';
import { getPostThunk } from '../../redux/modules/post';

// Package import
import { useNavigate } from 'react-router-dom';
import DropImage from '../../components/dropimage/DropImage';
import { MdCancel } from 'react-icons/md';

// Component & Element import
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Button from '../../elements/button/Button';
import Star from '../../components/star/Star';

// Style import
import {} from './Write.styled';
import styled from 'styled-components';

const Write = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [rating, setRating] = useState('');

  const titleIconRef = useRef();
  const contentIconRef = useRef();

  const deleteTitleText = useCallback(() => {
    setTitle('');
  }, [title]);
  const deleteContentText = useCallback(() => {
    setContent('');
  }, [content]);

  useEffect(() => {
    if (title !== '') titleIconRef.current.style.display = 'block';
    else titleIconRef.current.style.display = 'none';
    if (content !== '') contentIconRef.current.style.display = 'block';
    else contentIconRef.current.style.display = 'none';
  }, [title, content]);

  return (
    <Fragment>
      <Header />
      <WriteBox>
        <WriteBoxForm>
          <WriteBoxTitle>
            <WriteBoxInputGroup>
              <WriteBoxInputWrap>
                <WriteBoxInput
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="콘텐츠 제목을 입력하세요."
                  required
                />
                <WriteBoxInputIcon ref={titleIconRef}>
                  <MdCancel onClick={deleteTitleText} className="title-icon" />
                </WriteBoxInputIcon>
              </WriteBoxInputWrap>
            </WriteBoxInputGroup>
          </WriteBoxTitle>
          <WriteBoxImageUpload>
            <DropImage></DropImage>
          </WriteBoxImageUpload>
          <WriteBoxComment>
            <WriteBoxCommentWrap>
              <WriteBoxCommentArea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="리뷰 내용을 입력해주세요.(100자 이내)"
                maxLength={100}
                required
              />
              <WriteBoxCommentIcon ref={contentIconRef}>
                <MdCancel
                  onClick={deleteContentText}
                  className="content-icon"
                />
              </WriteBoxCommentIcon>
            </WriteBoxCommentWrap>
          </WriteBoxComment>
          <WriteBoxStarButton>
            <WriteBoxStar>
              <WriteBoxStarComment>별점을 남겨주세요!⭐️</WriteBoxStarComment>
              <Star rating={rating} setRating={setRating}></Star>
            </WriteBoxStar>
            <WriteBoxButton>
              <Button
                type={'submit'}
                text={'작성하기'}
                style={{ width: '150px', height: '50px', bg_color: '#FF8EB2' }}
              />
            </WriteBoxButton>
          </WriteBoxStarButton>
        </WriteBoxForm>
      </WriteBox>
      <Footer />
    </Fragment>
  );
};

export default Write;

export const WriteBox = styled.div`
  position: absolute;
  border-radius: 5%;
  top: 20%;
  width: 500px;
  height: 700px;
  left: 50%;
  transform: translateX(-250px);
  box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.37);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const WriteBoxForm = styled.form`
  width: 100%;
  height: 100%;
`;
export const WriteBoxTitle = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 17%;
  border: 1px solid green;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const WriteBoxInputGroup = styled.div`
  box-sizing: border-box;
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const WriteBoxInputWrap = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
`;
export const WriteBoxInput = styled.input`
  position: absolute;
  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 50px;
  font-family: NotoSansKR-Bold;
  font-size: 15px;
  background-color: #cecece;
  color: black;
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 10px;
  &:focus {
    outline: none;
  }
`;
export const WriteBoxInputIcon = styled.div`
  .title-icon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 30px;
    color: #202020;
    &:hover {
      cursor: pointer;
    }
  }
`;
export const WriteBoxSpan = styled.span`
  height: 20px;
  color: green;
  font-family: NotoSansKR-Thin;
  font-size: 13px;
`;
export const WriteBoxImageUpload = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 42%;
  border: 1px solid white;
`;
export const WriteBoxComment = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 26%;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const WriteBoxCommentWrap = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 80%;
  height: 100%;
  border: 1px solid red;
`;
export const WriteBoxCommentArea = styled.textarea`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  box-sizing: border-box;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 50px;
  font-family: NotoSansKR-Bold;
  font-size: 15px;
  background-color: #cecece;
  color: black;
  width: 100%;
  height: 80%;
  border: none;
  border-radius: 10px;
  &:focus {
    outline: none;
  }
`;
export const WriteBoxCommentIcon = styled.div`
  .content-icon {
    position: absolute;
    right: 10px;
    top: 70%;
    font-size: 30px;
    color: #202020;
    &:hover {
      cursor: pointer;
    }
  }
`;
export const WriteBoxStarButton = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 15%;
  border: 1px solid red;
  display: flex;
`;
export const WriteBoxStar = styled.div`
  box-sizing: border-box;
  width: 50%;
  height: 100%;
  border: 1px solid yellow;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const WriteBoxStarComment = styled.div`
  font-family: NotoSansKR-Bold;
  color: #cecece;
`;
export const WriteBoxButton = styled.div`
  box-sizing: border-box;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid yellow;
`;