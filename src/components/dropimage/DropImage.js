import { useEffect, useRef, useState } from 'react';

// Redux import
import { useDispatch } from 'react-redux';
import { uploadImageThunk } from '../../redux/modules/post';

// Package import
import { ImUpload } from 'react-icons/im';

import styled from 'styled-components';

const DropImage = ({ setFile }) => {
  const [fileSrc, setFileSrc] = useState('');

  const logoImgInput = useRef();

  const dispatch = useDispatch();

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setFileSrc(reader.result);
        resolve();
      };
    });
  };

  const onUploadImage = (e) => {
    if (!e.target.files) {
      return;
    }

    const formData = new FormData();
    formData.append('multipartFileList', e.target.files[0]);
    dispatch(uploadImageThunk(formData)).then((res) => {
      if (res.payload.success) {
        setFile(res.payload.data[0]);
      } else {
        alert('파일 용량을 3MB 이하로 제한해주세요.');
        setFileSrc('');
        setFile('');
      }
    });
  };

  return (
    <DropImageBox>
      <DropImageBoxPreView>
      <ImUpload className='icon'></ImUpload>
        {fileSrc && (
          <DropImageBoxPreViewImg src={fileSrc} alt={'preview-img'} />
        )}
      </DropImageBoxPreView>
      <DropImageBoxInputLabel htmlFor={'input-file'}>
        Upload File
      </DropImageBoxInputLabel>
      <DropImageBoxInput
        ref={logoImgInput}
        type={'file'}
        accept={'image/*'}
        onChange={(e) => {
          onUploadImage(e);
          encodeFileToBase64(e.target.files[0]);
        }}
        id={'input-file'}
      />
    </DropImageBox>
  );
};

export default DropImage;

export const DropImageBox = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  gap: 10px;
`;
export const DropImageBoxPreView = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 77%;
  background-size: contain;
  border: 1px solid white;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  .icon {
    color: white;
    font-size: 50px;
  }
`;
export const DropImageBoxPreViewImg = styled.img`
  width: auto;
  height: auto;
`;
export const DropImageBoxInputLabel = styled.label`
  background-color: #ff8eb2;
  text-align: center;
  box-sizing: border-box;
  color: black;
  width: 100%;
  font-family: NotoSansKR-Bold;
  height: 12%;
  font-size: 15px;
  padding-top: 10px;
  border-radius: 10px;
  border: 1px solid white;
  &:hover {
    cursor: pointer;
  }
`;
export const DropImageBoxInput = styled.input`
  display: none;
`;
