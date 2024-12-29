import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Picker from './Picker';
import {pickMedia, takeMedia} from '../../utils/photoUtils';

interface IPhotoOptionsPicker {
  isVisible: boolean;
  onSelectPhoto?: (image: any) => void;
  onClose?: () => void;
  multiple?: boolean;
}
const PhotoOptionsPicker = (props: IPhotoOptionsPicker) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(props?.isVisible);
  }, [props?.isVisible]);

  const handlePhotoOption = async (item: any) => {
    console.log('handlePhotoOption', item);
    let image = null;
    if (item?.key === 'camera') {
      image = await takeMedia({});
    } else {
      image = await pickMedia({multiple: props?.multiple});
    }
    console.log('image', image);
    if (image) props?.onSelectPhoto && props?.onSelectPhoto(image);
  };
  return (
    <Picker
      data={[
        {key: 'camera', name: 'takePhoto'},
        {key: 'library', name: 'chooseLibrary'},
      ]}
      isVisible={visible}
      title={'pleaseSelect'}
      onSelect={(item: any) => {
        setTimeout(() => {
          handlePhotoOption(item);
        }, 700);
      }}
      onClose={() => {
        props?.onClose && props?.onClose();
      }}
    />
  );
};

export default PhotoOptionsPicker;

const styles = StyleSheet.create({});
