import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';

const Star = ({ rating, setRating }) => {
  const [hover, setHover] = useState();

  return (
    <StarBox>
      {[...Array(5)].map((star, idx) => {
        const ratingValue = idx + 1;
        return (
          <label key={idx}>
            <StarInput
              type="radio"
              name="rating"
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
              size={30}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </StarBox>
  );
};

export default Star;

export const StarBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .star {
    cursor: pointer;
    transition: color 200ms;
  }
`;
export const StarInput = styled.input`
  display: none;
`;