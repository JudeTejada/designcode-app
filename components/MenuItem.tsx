import { styled, View } from 'dripsy';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Text } from 'react-native';

type MenuItemProps = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  subtitle: string;
};

export const MenuItem = (props: MenuItemProps) => {
  const { icon, title, subtitle } = props;
  return (
    <Container style={{}}>
      <IconView>
        <Ionicons name={icon} size={24} color='#546bfb' />
      </IconView>

      <Content>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Content>
    </Container>
  );
};

const Container = styled(View)({
  flexDirection: 'row',
  margin: '15px 0'
});
const IconView = styled(View)({
  width: 32,
  height: 32,
  justifyContent: 'center',
  alignItems: 'center'
});
const Content = styled(View)({
  paddingLeft: 20
});
const Title = styled(Text)({
  color: '#3c4560',
  fontSize: 24,
  fontWeight: '600'
});
const Subtitle = styled(Text)({
  color: '#3c4560',
  fontWeight: '600',
  opacity: 0.6,
  marginTop: '5px'
});
