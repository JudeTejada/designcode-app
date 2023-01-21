import { styled } from 'dripsy';
import React from 'react';
import {
  Image,
  ImageLoadEventData,
  ImageSourcePropType,
  Text,
  View
} from 'react-native';

type CardProps = {
  image: ImageLoadEventData['source'];
  logo: ImageLoadEventData['source'];
  title: string;
  caption: string;
  subtitle: string;
};

export const Card = (props: CardProps) => {
  const { title, subtitle, image, caption, logo } = props;
  return (
    <Container>
      <Cover>
        <CardImage source={image} />
        <Title>{title}</Title>
      </Cover>

      <Content>
        <Logo source={logo} />

        <Wrapper>
          <Caption>{caption}</Caption>
          <Subtitle>{subtitle}</Subtitle>
        </Wrapper>
      </Content>
    </Container>
  );
};

const Content = styled(View)({
  pl: 20,
  flexDirection: 'row',
  alignItems: 'center',
  height: 80
});
const Logo = styled(Image)({
  size: 44
});

const Caption = styled(Text)({
  color: '#3c4560',
  fontSize: 20,
  fontWeight: '600'
});
const Subtitle = styled(Text)({
  color: '#b8bece',
  fontWeight: '600',
  fontSize: 15,
  textTransform: 'uppercase'
});
const Wrapper = styled(View)({
  ml: 10
});

const Container = styled(View)({
  backgroundColor: 'white',
  width: 315,
  height: 280,
  borderRadius: 14,
  marginLeft: 20,
  marginTop: 20,
  boxShadow: 'md'
});

const Cover = styled(View)({
  width: '100%',
  height: 200,
  borderTopLeftRadius: 14,
  borderTopRightRadius: 14,
  overflow: 'hidden'
});

const CardImage = styled(Image)({
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0
});

const Title = styled(Text)({
  color: 'white',
  fontWeight: 'bold',
  fontSize: 24,
  marginLeft: 20,
  marginTop: 20,
  width: 170
});
