import HtmlIcon from '~/images/html5-icon.svg';
import CssIcon from '~/images/css-icon.svg';
import JavascriptIcon from '~/images/js-icon.svg';
import RwdIcon from '~/images/rwd-icon.svg';
import ReactIcon from '~/images/react-icon.svg';
import ReduxIcon from '~/images/redux-icon.svg';
import TypescriptIcon from '~/images/ts.svg';
import SassIcon from '~/images/sass-icon.svg';
import StyledComponentsIcon from '~/images/styled-components-icon.svg';
import AngularIcon from '~/images/angular-icon.svg';
import RxJsIcon from '~/images/rxjs.svg';

const technologies: Technology[] = [
  {
    id: 1,
    image: HtmlIcon,
    title: 'HTML5',
  },
  {
    id: 2,
    image: CssIcon,
    title: 'CSS3',
  },
  {
    id: 3,
    image: JavascriptIcon,
    title: 'JavaScript(ES6)',
  },
  {
    id: 4,
    image: RwdIcon,
    title: 'RWD',
    description: 'bar',
  },
  {
    id: 5,
    image: ReactIcon,
    title: 'React',
  },
  {
    id: 6,
    image: ReduxIcon,
    title: 'Redux',
  },
  {
    id: 7,
    image: TypescriptIcon,
    title: 'TypeScript',
  },
  {
    id: 8,
    image: SassIcon,
    title: 'Sass(SCSS/LESS)',
  },
  {
    id: 9,
    image: StyledComponentsIcon,
    title: 'Styled Components',
  },
  {
    id: 10,
    image: AngularIcon,
    title: 'Angular',
  },
  {
    id: 11,
    image: RxJsIcon,
    title: 'RxJS',
  },
  {
    id: 12,
    image: require('~/images/9.png'),
    title: 'Git',
  },
  {
    id: 13,
    image: require('~/images/11.png'),
    title: 'Gulp',
  },
  {
    id: 14,
    image: require('~/images/12.png'),
    title: 'Scrum',
  },
  {
    id: 15,
    image: require('~/images/gitkraken.svg'),
    title: 'GitKraken',
  },
  {
    id: 16,
    image: require('~/images/webpack.png'),
    title: 'Webpack',
  },
  {
    id: 17,
    image: require('~/images/jest.png'),
    title: 'Jest',
  },
  {
    id: 18,
    image: require('~/images/enzyme.png'),
    title: 'Enzyme',
  },
  {
    id: 19,
    image: require('~/images/vite.svg'),
    title: 'Vite',
  },
];
export const technologiesLoader = () => technologies;

const projects: Project[] = [
  {
    id: 1,
    image: require('~/images/delfinagram.png'),
    title: 'Delfinagram App',
    description:
      'Aplikacja zbudowana w oparciu o popularny portal społecznościowy Instagram z uwględnieniem widoków mobilnych. Portal umożliwiający dodawanie oraz zarządzanie znajomymi, postami, zdjęciami oraz danymi użytkownika aplikacji. Projekt zrealizowany za pomocą biblioteki React oraz Redux. Wykorzystujący popularny framework interfejsu użytkownika Material UI.',
    tools:
      'React, Redux, React-Router-DOM, SASS(SCSS), MaterialUI, GitKraken, PostMan',
    gitHub: 'https://github.com/dawidpolednik/DelfinagramAPP',
  },
  {
    id: 2,
    image: require('~/images/code.png'),
    title: 'Detect Labels Comparison',
    description:
      'Aplikacja konsolowa Node.js porównująca skuteczności algorytmów etykietowania obrazów w oparciu o usługi 3 najpopularniejszych dostawców chmurowych. Dla danego zbioru testowego usługami  badanymi podczas symulacji to usługi Cognitive Services, Amazon Rekognition oraz Google Cloud Vision. Testowaną funkcjonalnością jest etykietowanie (tagowanie) obrazu.',
    tools:
      'Node.js, Gulp, ExcelJS , Microsoft Excel, PostMan, Lodash, GitKraken',
    gitHub: 'https://github.com/dawidpolednik/Detect-Labels-Comparison',
  },
  {
    id: 3,
    image: require('~/images/currencyConverter.png'),
    title: 'Currency Converter APP',
    description:
      'Aplikacja internetowa służąca do przeliczania transakcji walutowych. Umożliwiająca definiowanie swoich własnych transakcji, wraz z ich zarządzaniem. Aplikacja odświeżająca dane na żywo, w momencie ich modyfikacji. Całość projektu zbudowano za pomocą bibliotek React oraz Redux.',
    tools: 'React, Redux, SASS(SCSS) , ES6, MaterialUI, GitKraken, ',
    gitHub: 'https://github.com/dawidpolednik/currency-converter',
    liveDemo: 'https://converter-currency-app.herokuapp.com/',
  },
  {
    id: 4,
    image: require('~/images/citiesSearcher.png'),
    title: 'Cities Searcher APP',
    description:
      'Aplikacja internetowa służąca do wyświetlania informacji na temat najbardziej zanieczyszczonych miast na podstawie wcześniej wczytanego państwa. Aplikacja wykorzystująca dane z dwóch otwartych platform: OpenAQ oraz MediaWiki. Całość projektu zbudowano za pomocą bibliotek React oraz Redux.',
    tools: 'React, Redux, SASS(SCSS) , ES6, MaterialUI, GitKraken, ',
    gitHub: 'https://github.com/dawidpolednik/cities-searcher',
    liveDemo: 'https://cities-searcher.herokuapp.com/',
  },
  {
    id: 5,
    image: require('~/images/amongUs.png'),
    title: 'Among Us Memory Game',
    description:
      'Gra wzorowana na jednej z minigier Among Us. Całość projektu zbudowano za pomocą języka Vanilla JS oraz TypeScript.',
    tools: 'Vanilla JS, ES6, TypeScript, SASS(SCSS) , Parcel',
    gitHub: 'https://github.com/dawidpolednik/AmongUs',
  },
];
export const projectsLoader = () => projects;
