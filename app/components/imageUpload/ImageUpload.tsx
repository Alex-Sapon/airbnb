'use client';

import { CldUploadWidget } from 'next-cloudinary';
import { TbPhotoPlus } from 'react-icons/tb';

import { uploadPreset } from '@/app/constants';

import { ImageStyled, ImageUploadWrapper, ImageWrapper, Text } from './styles';

declare global {
  const cloudinary: unknown;
}

type ImageUploadProps = {
  value: string;
  onChange: (value: string) => void;
};

export const ImageUpload = ({ value, onChange }: ImageUploadProps) => {
  const handleUpload = (result: { info: { secure_url: string } }) => {
    onChange(result.info.secure_url);
  };

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset={uploadPreset}
      options={{ maxFiles: 1 }}
    >
      {({ open }) => (
        <ImageUploadWrapper onClick={() => open?.()}>
          <TbPhotoPlus size={40} />
          <Text>Click to upload</Text>
          {value && (
            <ImageWrapper>
              <ImageStyled src={value} />
            </ImageWrapper>
          )}
        </ImageUploadWrapper>
      )}
    </CldUploadWidget>
  );
};
