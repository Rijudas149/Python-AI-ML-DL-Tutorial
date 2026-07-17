import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ProgressProvider } from './context/ProgressContext';
import { Layout } from './components/Layout';

const Home = lazy(() => import('./pages/Home').then((m) => ({ default: m.Home })));
const Learn = lazy(() => import('./pages/Learn').then((m) => ({ default: m.Learn })));
const TopicLesson = lazy(() => import('./pages/TopicLesson').then((m) => ({ default: m.TopicLesson })));
const Bookmarks = lazy(() => import('./pages/Bookmarks').then((m) => ({ default: m.Bookmarks })));
const References = lazy(() => import('./pages/References').then((m) => ({ default: m.References })));
const Glossary = lazy(() => import('./pages/Glossary').then((m) => ({ default: m.Glossary })));
const Roadmap = lazy(() => import('./pages/Roadmap').then((m) => ({ default: m.Roadmap })));

function PageLoader() {
  return (
    <div className="page-loader">
      <div className="page-loader-spinner" />
      <p>Loading...</p>
    </div>
  );
}

function TopicLessonRoute() {
  const { topicId } = useParams<{ topicId: string }>();
  return <TopicLesson key={topicId} />;
}

function App() {
  return (
    <ThemeProvider>
      <ProgressProvider>
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="learn" element={<Learn />} />
                <Route path="learn/:topicId" element={<TopicLessonRoute />} />
                <Route path="bookmarks" element={<Bookmarks />} />
                <Route path="references" element={<References />} />
                <Route path="glossary" element={<Glossary />} />
                <Route path="roadmap" element={<Roadmap />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ProgressProvider>
    </ThemeProvider>
  );
}

export default App;
