import { useRef, useState } from 'react';

// Redux import
import { useDispatch } from 'react-redux';
import { uploadImageThunk } from '../../redux/modules/post';

// Package import
import { ImUpload } from 'react-icons/im';

import {
  DropImageBox,
  DropImageBoxPreView,
  DropImageBoxPreViewImg,
  DropImageBoxInputLabel,
  DropImageBoxInput
} from './DropImage.styled'

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