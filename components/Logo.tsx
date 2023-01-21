import { Image, styled, View } from 'dripsy';
import { Text } from 'react-native';
import { ImageSourcePropType } from 'react-native';

type LogoProps = {
  image: ImageSourcePropType;
  title: string;
};

export const Logo = (props: LogoProps) => {
  const { image, title } = props;
  return (
    <View
      sx={{
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 60,
        padding: 16,
        borderRadius: 10,
        // shadow: '0 5px 10px rgba(0, 0, 0, 0.05)',
        boxShadow: 'sm',
        alignItems: 'center',
        mx: 2
      }}
    >
      <Image
        sx={{
          width: 36,
          height: 36
        }}
        resizeMode='contain'
        source={image}
      />
      <Title>{title}</Title>
    </View>
  );
};

const Title = styled(Text)({
  fontWeight: '600',
  fontSize: 17,
  marginLeft: 2
});
