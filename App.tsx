import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  FlatList
} from 'react-native';
import { DripsyProvider, makeTheme, styled } from 'dripsy';
import { Card } from './components/Card';
import { NotificationIcon } from './components/Icon';
import { Logo } from './components/Logo';
import { Course } from './components/Course';
import { Menu } from './components/Menu';

const theme = makeTheme({
  shadows: {
    md: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },

    sm: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 5,
      elevation: 10
    },
    button: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.15,
      shadowRadius: 5,
      elevation: 10
    }
  }
});

const logos = [
  {
    image: require('./assets/logo-framerx.orig.png'),
    title: 'Framer X'
  },
  {
    image: require('./assets/logo-figma.png'),
    title: 'Figma'
  }
];

const cards = [
  {
    image: require('./assets/background11.jpg'),
    title: 'React Native for designers',
    subtitle: 'React Native',
    caption: '5 of 12 sections',
    logo: require('./assets/logo-react.png')
  },
  {
    image: require('./assets/background1.jpg'),
    title: 'Styled Components',
    subtitle: 'React Native',
    caption: '5 of 12 sections',
    logo: require('./assets/logo-react.png')
  },
  {
    image: require('./assets/background7.jpg'),
    title: 'Publish app to Xcode',
    subtitle: 'React Native',
    caption: '5 of 12 sections',
    logo: require('./assets/logo-react.png')
  },
  {
    image: require('./assets/background6.jpg'),
    title: 'React Native Architecture',
    subtitle: 'React Native',
    caption: '5 of 12 sections',
    logo: require('./assets/logo-react.png')
  }
];

const courses = [
  {
    title: 'Prototype in InVision Studio',
    subtitle: '10 sections',
    image: require('./assets/background13.jpg'),
    logo: require('./assets/logo-studio.png'),
    author: 'Meng To',
    avatar: require('./assets/avatar.jpg'),
    caption: 'Design and interactive prototype'
  },
  {
    title: 'React for Designers',
    subtitle: '12 sections',
    image: require('./assets/background11.jpg'),
    logo: require('./assets/logo-react.png'),
    author: 'Meng To',
    avatar: require('./assets/avatar.jpg'),
    caption: 'Learn to design and code a React site'
  },
  {
    title: 'Design and Code with Framer X',
    subtitle: '10 sections',
    image: require('./assets/background14.jpg'),
    logo: require('./assets/logo-framerx.png'),
    author: 'Meng To',
    avatar: require('./assets/avatar.jpg'),
    caption: 'Create powerful design and code components for your app'
  },
  {
    title: 'Design System in Figma',
    subtitle: '10 sections',
    image: require('./assets/background6.jpg'),
    logo: require('./assets/logo-figma.png'),
    author: 'Meng To',
    avatar: require('./assets/avatar.jpg'),
    caption:
      'Complete guide to designing a site using a collaborative design tool'
  }
];

function UserContent() {
  return (
    <TitleBar>
      <Avatar source={require('./assets/avatar.jpg')} />
      <Title>Welcome back</Title>
      <Name>Jude</Name>
      <NotificationIcon style={{ position: 'absolute', right: 20, top: 5 }} />
    </TitleBar>
  );
}

export default function App() {
  return (
    <DripsyProvider theme={theme}>
      <Container>
        <Menu />
        {/* <UserContent /> */}
        <SafeAreaView>
          <ScrollView style={{ height: '100%' }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              style={{
                flexDirection: 'row',
                padding: 20,
                paddingLeft: 12,
                paddingTop: 30
              }}
              horizontal
              data={logos}
              renderItem={({ item }) => <Logo {...item} />}
              keyExtractor={item => item.title}
            />
            <Subtitle>Continue Learning</Subtitle>
            <FlatList
              horizontal
              style={{ paddingBottom: 30 }}
              showsHorizontalScrollIndicator={false}
              data={cards}
              renderItem={({ item }) => <Card {...item} />}
              keyExtractor={item => item.title}
            />

            <Subtitle>Popular Courses</Subtitle>

            <FlatList
              horizontal
              style={{ paddingBottom: 30 }}
              showsHorizontalScrollIndicator={false}
              data={courses}
              renderItem={({ item }) => <Course {...item} />}
              keyExtractor={item => item.title}
            />
          </ScrollView>
        </SafeAreaView>
      </Container>
    </DripsyProvider>
  );
}

const Subtitle = styled(Text)({
  color: '#b8bece',
  fontWeight: '600',
  fontSize: 15,
  marginLeft: 20,
  marginTop: 20,
  textTransform: 'uppercase'
});

const Avatar = styled(Image)({
  width: 44,
  height: 44,
  background: 'black',
  borderRadius: 22,
  marginLeft: 20,
  position: 'absolute',
  top: 0,
  left: 0
});

const Container = styled(View)({
  backgroundColor: '#f0f3f5',
  height: '100%'
});
const Title = styled(Text)({
  fontSize: '16px',
  color: '#b8bece',
  fontWeight: '500'
});
const Name = styled(Text)({
  fontSize: '20px',
  color: '#3c4560',
  fontWeight: 'bold'
});

const TitleBar = styled(View)({
  width: '100%',
  marginTop: 50,
  paddingLeft: 80
});
