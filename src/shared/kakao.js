import { useEffect, Fragment } from 'react';

import { kakaoAuthThunk } from '../redux/modules/member';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const Kakao = () => {
  const dispatch = useDispatch();
  const authorization_code = new URL(window.location.href).searchParams.get(
    'code'
  );

  useEffect(() => {
    const fetchCode = (code) => {
      dispatch(kakaoAuthThunk({ code }));
    };
    fetchCode(authorization_code);
  }, []);

  return <Fragment></Fragment>;
};
export default Kakao;
