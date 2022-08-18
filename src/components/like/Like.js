// React import
import { useRef, useState } from 'react';

// Redux import
import { useDispatch, useSelector } from 'react-redux';
import {
  getMoviePostThunk,
  getDramaPostThunk,
  getEntertainPostThunk,
  likePostThunk,
} from '../../redux/modules/post';

// Package import
import { AiFillLike } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

// Style import
import { LikeButton } from './Like.styled';

const Like = ({ id, likes }) => {
  const [count, setCount] = useState(likes);
  const [color, setColor] = useState(false);

  const iconRef = useRef();

  const liked_post = useSelector((state) => state.post.liked_post);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const manageLikes = () => {
    try {
      if (
        window.localStorage.getItem('authorization') === '' ||
        window.localStorage.getItem('authorization') === undefined ||
        window.localStorage.getItem('authorization') === null
      ) {
        alert('로그인 후에 이용 바랍니다.');
        navigate('/signin');
      } else {
        dispatch(likePostThunk({ id })).then((res) => {
          dispatch(getMoviePostThunk());
          dispatch(getDramaPostThunk());
          dispatch(getEntertainPostThunk());
          if (res.payload.data === '좋아요를 눌렀습니다.') {
            iconRef.current.style.color = 'lightpink';
            setCount((prev) => prev + 1);
          } else {
            iconRef.current.style.color = 'white';
            if (likes !== 0) {
              setCount((prev) => prev - 1);
            }
          }
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <LikeButton
      color={liked_post.includes(id) ? 'lightpink' : 'white'}
      type="button"
      onClick={manageLikes}
      ref={iconRef}
    >
      <AiFillLike /> {count}
    </LikeButton>
  );
};

export default Like;
