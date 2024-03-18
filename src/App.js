import React from 'react'

import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'

import  Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import Card from './components/shared/Card'
import AboutIconLink from './components/AboutIconLink'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage    from './pages/AboutPage' 
import Post from './components/Post'
import {FeedbackProvider} from './context/FeedbackContext'
function App(){    
    return (
        <FeedbackProvider>
         <Router>
            <Header />
        <div className='container'>
            <Routes>
                <Route exact path ='/' element ={ <>
                 <FeedbackForm /> 
                 <FeedbackStats/>
                <FeedbackList />
                 </>
                } />
                 <Route path='/about' element={<AboutPage/>}/>
                <Route path='/post' element={<Post/>}/>
           </Routes>
        <AboutIconLink/>
        </div>
            </Router>
            </FeedbackProvider>
    )
            
        
}
export default App