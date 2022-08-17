// React import
import { Fragment, useEffect } from 'react';

// Redux import
import { useDispatch, useSelector } from 'react-redux';
import { getMoviePostThunk } from '../../redux/modules/post';

// Package import
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../../shared/cookie';

// Component & Element import
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import ImagePost from '../../components/post/ImagePost';
import Post from '../../components/post/Post';
import PostSkeleton from '../../components/skeleton/PostSkeleton';
import Button from '../../elements/button/Button';

// Style import
import { MovieBox, ButtonBox } from './Movie.styled';

const Movie = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const is_loaded = useSelector((state) => state.post.movie_is_loaded);
  const postData = useSelector((state) => state.post.movie_post);

  useEffect(() => {
    dispatch(getMoviePostThunk());
  }, []);

  const onPostMovie = () => {
    try {
      if (getCookie('authorization') === undefined) {
        alert('로그인 후에 이용 바랍니다.');
        navigate('/signin');
      } else {
        navigate('/write/movie');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Fragment>
      <Header category={'movie'} />
      <MovieBox>
        {is_loaded ? (
          postData.map((post) => {
            if (post.imgUrl === '') {
              return (
                <Post
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  content={post.content}
                  likes={post.likes}
                  createdAt={post.createdAt}
                  modifiedAt={post.modifiedAt}
                />
              );
            } else {
              return (
                <ImagePost
                  key={post.id}
                  id={post.id}
                  imgUrl={post.imgUrl}
                  title={post.title}
                  content={post.content}
                  likes={post.likes}
                  createdAt={post.createdAt}
                  modifiedAt={post.modifiedAt}
                />
              );
            }
          })
        ) : (
          <PostSkeleton />
        )}
      </MovieBox>
      <ButtonBox>
        <Button
          _onClick={onPostMovie}
          type={'button'}
          style={{
            width: '200px',
            height: '50px',
            color: 'white',
            bg_color: '#ff8eb2',
          }}
          text={'포스팅하기'}
        />
      </ButtonBox>
      <Footer />
    </Fragment>
  );
};

export default Movie;
