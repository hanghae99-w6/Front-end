// React import
import { useRef, useState } from 'react';

// Package import
import { AiFillLike } from 'react-icons/ai';
import { getCookie } from '../../shared/cookie';
import { useNavigate } from 'react-router-dom';

// Style import
import { LikeButton } from './Like.styled';

const Like = ({ likes }) => {
  const [count, setCount] = useState(likes);
  const [click, setClick] = useState(false);

  const iconRef = useRef();

  const navigate = useNavigate();

  const manageLikes = () => {
    try {
      if (getCookie('authorization') === undefined) {
        alert('로그인 후에 포스팅 가능합니다.');
        navigate('/signin');
      } else {
        if (click) {
          iconRef.current.style.color = '#cecece';
          setCount((prev) => prev - 1);
          setClick(false);
        } else {
          iconRef.current.style.color = '#fcd1df';
          setCount((prev) => prev + 1);
          setClick(true);
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  const onPostDrama = () => {};

  return (
    <LikeButton type="button" onClick={manageLikes} ref={iconRef}>
      <AiFillLike /> {count}
    </LikeButton>
  );
};

export default Like;
