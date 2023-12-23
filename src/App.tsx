import { Footer } from '@/components/Footer/Footer'
import { HandTrack } from '@/components/HandTrack/HandTrack'
import { Header } from '@/components/Header/Header'

import { Main } from './components/Main/Main'

import './style/global.css'

export const App = () => {
  return (
    <>
      <Header />
      <Main />
      <div>
        <HandTrack></HandTrack>
      </div>
      <Footer />
    </>
  )
}
