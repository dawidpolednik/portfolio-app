const technologies: Technology[] = [
  {
    id: 1,
    image: require('~/images/1.png'),
    title: 'HTML5',
  },
  {
    id: 2,
    image: require('~/images/2.png'),
    title: 'CSS3',
  },
  {
    id: 3,
    image: require('~/images/3.png'),
    title: 'JavaScript(ES6)',
  },
  {
    id: 4,
    image: require('~/images/4.png'),
    title: 'RWD',
    description: 'bar',
  },
  {
    id: 5,
    image: require('~/images/5.svg'),
    title: 'React',
  },
  {
    id: 6,
    image: require('~/images/6.png'),
    title: 'Redux',
  },
  {
    id: 7,
    image: require('~/images/7.svg'),
    title: 'React-Native',
  },
  {
    id: 8,
    image: require('~/images/ts.svg'),
    title: 'TypeScript',
  },
  {
    id: 9,
    image: require('~/images/8.svg'),
    title: 'Sass(SCSS/LESS)',
  },
  {
    id: 10,
    image: require('~/images/styled-components.png'),
    title: 'Styled Components',
  },
  {
    id: 11,
    image: require('~/images/13.svg'),
    title: 'Angular',
  },
  {
    id: 12,
    image: require('~/images/rxjs.svg'),
    title: 'RxJS',
  },
  {
    id: 13,
    image: require('~/images/9.png'),
    title: 'Git',
  },
  {
    id: 14,
    image: require('~/images/11.png'),
    title: 'Gulp',
  },
  {
    id: 15,
    image: require('~/images/12.png'),
    title: 'Scrum',
  },
  {
    id: 16,
    image: require('~/images/gitkraken.svg'),
    title: 'GitKraken',
  },
  {
    id: 17,
    image: require('~/images/webpack.png'),
    title: 'Webpack',
  },
  {
    id: 18,
    image: require('~/images/jest.png'),
    title: 'Jest',
  },
  {
    id: 19,
    image: require('~/images/enzyme.png'),
    title: 'Enzyme',
  },
  {
    id: 20,
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
    image: require('~/images/code.PNG'),
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
    image: require('~/images/amongUs.PNG'),
    title: 'Among Us Memory Game',
    description:
      'Gra wzorowana na jednej z minigier Among Us. Całość projektu zbudowano za pomocą języka Vanilla JS oraz TypeScript.',
    tools: 'Vanilla JS, ES6, TypeScript, SASS(SCSS) , Parcel',
    gitHub: 'https://github.com/dawidpolednik/AmongUs',
  },
];
export const projectsLoader = () => projects;
