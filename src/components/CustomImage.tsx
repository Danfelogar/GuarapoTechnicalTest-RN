import {FC, useState} from 'react';
import {Image, ImageSourcePropType} from 'react-native';
import {CustomImageProps} from '../interfaces';
import {AppImages} from '../utils';

export const CustomImage: FC<CustomImageProps> = ({
  src,
  isLocalUrl = false,
  defaultErrorImage = AppImages.loading,
  style,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);

  const handleError = () => setHasError(true);

  const getImageSource = (): ImageSourcePropType => {
    if (hasError) {
      return defaultErrorImage;
    }

    if (isLocalUrl) {
      return (src as ImageSourcePropType) || AppImages.loading;
    }

    return {uri: src as string};
  };

  return (
    <Image
      resizeMethod="none"
      source={getImageSource()}
      onError={handleError}
      style={style}
      {...props}
    />
  );
};
