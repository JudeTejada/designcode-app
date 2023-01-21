import { styled, View } from 'dripsy';
import { Image, ImageLoadEventData, Text } from 'react-native';

type CourseProps = {
  image: ImageLoadEventData['source'];
  logo: ImageLoadEventData['source'];
  avatar: ImageLoadEventData['source'];
  title: string;
  subtitle: string;
  caption: string;
  author: string;
};

export const Course = (props: CourseProps) => {
  const { image, logo, subtitle, title, avatar, caption, author } = props;
  return (
    <Container>
      <Cover>
        <BgImage source={image} />
        <Logo source={logo} resizeMode='contain' />
        <Subtitle>{subtitle}</Subtitle>
        <Title>{title}</Title>
      </Cover>
      <Content>
        <Avatar source={avatar} />
        <Caption>{caption}</Caption>
        <Author>taught by:{author}</Author>
      </Content>
    </Container>
  );
};

const Container = styled(View)({
  width: 315,
  height: 335,
  backgroundColor: 'white',
  mx: 3,
  my: 2,
  borderRadius: 14,
  boxShadow: 'md'
});
const Cover = styled(View)({
  height: 260,
  borderTopLeftRadius: 14,
  borderTopRightRadius: 14,
  overflow: 'hidden',
  justifyContent: 'flex-end'
});
const Content = styled(View)({
  pl: 5,
  justifyContent:'center',
  height:75
});

const Avatar = styled(Image)({
  width: 32,
  height: 32,
  position: 'absolute',
  top: 20,
  left: 20,
  borderRadius: 16
});
const Logo = styled(Image)({
  size: 48,
  position: 'absolute',
  top: 90,
  left: '50%',
  marginLeft: -24
});
const BgImage = styled(Image)({
  width: '100%',
  height: '100%',
  position: 'absolute'
});

const Subtitle = styled(Text)({
  fontSize: 15,
  fontWeight: '500',
  color: 'rgba(255,255,255,0.8)',
  textTransform: 'uppercase',
  ml: 3
});
const Title = styled(Text)({
  fontSize: 24,
  color: 'white',
  fontWeight: '600',
  marginTop: '2',
  mb: 2,
  ml: 3,
  width: 170
});
const Caption = styled(Text)({
  fontSize: 14,
  color: '#3c4560',
  fontWeight: '600'
});
const Author = styled(Text)({
  fontSize: 13,
  color: '#b8bece',
  fontWeight: '500',
  marginTop: 2
});
