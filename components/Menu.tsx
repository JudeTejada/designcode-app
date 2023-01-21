import { styled } from 'dripsy';
import { useEffect, useRef } from 'react';
import { View, Image, Text } from 'react-native';
import { Animated, TouchableOpacity, Dimensions } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MenuItem } from './MenuItem';


const screenHeight = Dimensions.get('window').height;

const items = [
  {
    icon: 'ios-settings',
    title: 'Account',
    subtitle: 'settings'
  },
  {
    icon: 'ios-card',
    title: 'Billing',
    subtitle: 'payments'
  },
  {
    icon: 'ios-compass',
    title: 'Learn React',
    subtitle: 'start course'
  },
  {
    icon: 'ios-exit',
    title: 'Log out',
    subtitle: 'see you soon!'
  }
];

export const Menu = () => {
  const topPosition = useRef(new Animated.Value(screenHeight)).current;

  useEffect(() => {
    Animated.spring(topPosition, {
      toValue: 0,
      useNativeDriver: false
    }).start();
  }, []);

  const handleToggleMenu = () => {
    Animated.spring(topPosition, {
      toValue: screenHeight,
      useNativeDriver: false
    }).start();

  };

  return (
    <Container
      style={{
        top: topPosition
      }}
    >
      <Cover>
        <CoverImage source={require('../assets/background2.jpg')} />
        <Title>Meng To</Title>
        <Subtitle>Designer at Design+Code</Subtitle>
      </Cover>
      <TouchableOpacity
        onPress={handleToggleMenu}
        style={{
          position: 'absolute',
          top: 120,
          left: '50%',
          marginLeft: -22,
          zIndex: 1
        }}
      >
        <CloseView>
          <Ionicons name='ios-close' size={44} />
        </CloseView>
      </TouchableOpacity>
      <Content>
        {items.map(item => (
          // @ts-ignore
          <MenuItem {...item} key={item.icon} />
        ))}
      </Content>
    </Container>
  );
};

const CoverImage = styled(Image)({
  position: 'absolute',
  width: '100%',
  height: '100%'
});
const Title = styled(Text)({
  color: 'white',
  fontSize: '24',
  fontWeight: '600'
});
const Subtitle = styled(Text)({
  fontSize: 13,
  color: 'rgba(255, 255, 255, 0.5)',
  mt: 2
});

const Container = styled(Animated.View)({
  position: 'absolute',
  backgroundColor: 'white',
  width: '100%',
  height: '100%',
  zIndex: 100
});

const Cover = styled(View)({
  height: 142,
  backgroundColor: 'black',
  overflow: 'hidden',
  justifyContent: 'center',
  alignItems: 'center'
});

const CloseView = styled(View)({
  width: 44,
  height: 44,
  borderRadius: 22,
  backgroundColor: 'white',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: 'button'
});

const Content = styled(View)({
  height: screenHeight,
  background: '#f0f3f5',
  padding: 50
});
