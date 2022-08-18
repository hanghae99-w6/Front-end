// React import
import { Fragment, useEffect, useState, useRef, useCallback } from 'react';

// Redux import
import { useDispatch } from 'react-redux';
import { addPostThunk } from '../../redux/modules/post';

// Package import
import { useNavigate, useParams } from 'react-router-dom';
import DropImage from '../../components/dropimage/DropImage';
import { MdCancel } from 'react-icons/md';

// Component & Element import
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Button from '../../elements/button/Button';
import Star from '../../components/star/Star';

// Style import
import {
  WriteBox,
  WriteBoxForm,
  WriteBoxTitle,
  WriteBoxInputGroup,
  WriteBoxInputWrap,
  WriteBoxInput,
  WriteBoxInputIcon,
  WriteBoxImageUpload,
  WriteBoxComment,
  WriteBoxCommentWrap,
  WriteBoxCommentArea,
  WriteBoxCommentIcon,
  WriteBoxStarButton,
  WriteBoxStar,
  WriteBoxStarComment,
  WriteBoxButton,
} from './Write.styled';

const Write = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [rating, setRating] = useState('');
  const [file, setFile] = useState('');

  const titleIconRef = useRef();
  const contentIconRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { category } = useParams();

  const newPost = {
    category,
    title,
    content,
    imgUrl: file,
    star: rating,
  };

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

  const onSubmitPost = (e) => {
    e.preventDefault();

    if (rating === '') alert('별점을 남겨주세요!');
    else {
      dispatch(addPostThunk(newPost)).then((res) => {
        navigate(`/${category}`);
      });
    }
  };

  return (
    <Fragment>
      <Header />
      <WriteBox>
        <WriteBoxForm onSubmit={(e) => onSubmitPost(e)}>
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
            <DropImage file={file} setFile={setFile}></DropImage>
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