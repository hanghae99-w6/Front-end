// React import
import { useRef, useState } from 'react';

// Package import
import { AiFillLike } from 'react-icons/ai';

// Style import
import { LikeButton } from './Like.styled';

const Like = ({ likes }) => {
  const [count, setCount] = useState(likes);
  const [click, setClick] = useState(false);

  const iconRef = useRef();

  const manageLikes = () => {
    if (click) {
      iconRef.current.style.color = '#cecece';
      setCount((prev) => prev - 1);
      setClick(false);
    } else {
      iconRef.current.style.color = '#fcd1df';
      setCount((prev) => prev + 1);
      setClick(true);
    }
  };

  return (
    <LikeButton type="button" onClick={manageLikes} ref={iconRef}>
      <AiFillLike /> {count}
    </LikeButton>
  );
};

export default Like;
