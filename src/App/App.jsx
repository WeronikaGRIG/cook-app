import Nav from '../Component/Nav/Nav'
import Header from '../Component/Header/Header'
import RatingCard from '../UI/RatingCard/RatingCard';
import ExploreLearn from '../Component/ExploreLearn/ExploreLearn';

import style from './App.module.scss'

function App() {

  return (
    <>
      <div className={style.app}>
        <Nav />
        <Header />
        <RatingCard />
        <ExploreLearn />
      </div>
    </>
  )
}

export default App
