// React import
import { Fragment } from 'react';

// Style import
import { Large, Small } from './PostSkeleton.styled';

const PostSkeleton = () => {
  return (
    <Fragment>
      <Large />
      <Small />
      <Small />
      <Large />
      <Large />
      <Small />
      <Large />
      <Small />
      <Large />
      <Large />
      <Small />
      <Small />
      <Small />
    </Fragment>
  );
};

export default PostSkeleton;
