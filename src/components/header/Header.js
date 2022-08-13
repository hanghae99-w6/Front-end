import Button from '../../elements/button/Button';
import { useNavigate } from 'react-router-dom';
import {
  HeaderBox,
  HeaderBoxContents,
  HeaderBoxLogo,
  HeaderBoxCategory,
  HeaderBoxCategoryText,
  HeaderBoxSign,
  HeaderBoxSignUser,
} from './Header.styled';

const Header = () => {
  const navigate = useNavigate();
  const username = 'Username';
  const status = false;

  return (
    <HeaderBox>
      <HeaderBoxContents>
        <HeaderBoxLogo onClick={() => navigate('/')} />
        <HeaderBoxCategory>
          <HeaderBoxCategoryText onClick={() => navigate('/movie')}>
            영화
          </HeaderBoxCategoryText>
          <HeaderBoxCategoryText onClick={() => navigate('/drama')}>
            드라마
          </HeaderBoxCategoryText>
          <HeaderBoxCategoryText onClick={() => navigate('/entertain')}>
            예능
          </HeaderBoxCategoryText>
        </HeaderBoxCategory>
        <HeaderBoxSign>
          {status ? (
            <>
              <HeaderBoxSignUser>{username}</HeaderBoxSignUser>
              <Button text={'로그아웃'}></Button>
            </>
          ) : (
            <Button _onClick={() => navigate('/signin')} text={'로그인'}></Button>
          )}
        </HeaderBoxSign>
      </HeaderBoxContents>
    </HeaderBox>
  );
};

export default Header;
<<<<<<< HEAD
=======

export const HeaderBox = styled.div`
  position: absolute;
  width: 100%;
  height: 120px;
  top: 0;
  background-color: black;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;
export const HeaderBoxContents = styled.div`
  position: relative;
  width: 1200px;
  height: 100%;
  box-sizing: border-box;
`;
export const HeaderBoxLogo = styled.div`
  position: absolute;
  background-image: url(${logoHeader});
  background-size: contain;
  background-repeat: no-repeat;
  width: 250px;
  height: 80px;
  box-sizing: border-box;
  top: 50%;
  transform: translateY(-50%);
`;
export const HeaderBoxCategory = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 400px;
  height: 100%;
  left: 230px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export const HeaderBoxCategoryText = styled.span`
  font-family: NotoSansKR-Light;
  width: 100px;
  height: 20px;
  color: white;
  font-size: 20px;
  text-align: center;
  &:hover {
    cursor: pointer;
    color: #ff0356;
  }
`;
export const HeaderBoxSign = styled.div`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 250px;
  height: 100%;
  right: 0;
`;
export const HeaderBoxSignUser = styled.span`
  font-family: NotoSansKR-Bold;
  font-size: 20px;
  color: white;
`;
>>>>>>> ed9f2a240d43bacff8d7f0c1b42db49771d12273
