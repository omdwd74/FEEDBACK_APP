import React from 'react'
import {v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import { useState } from 'react'
import  Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import Card from './components/shared/Card'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage    from './pages/AboutPage' 

function App(){
    // const title = 'Blog post' 
    // const body = 'This is my blog post channel'
    // const comments  = [
    //     {
    //         id: 1,text :'comment 1'
    //     },
    //     {
    //         id: 2,text :'comment 2'
    //     },{ 
    //         id: 3,text :'comment 3'
    //     },{
    //         id: 4,text :'comment 4'
    //     },
    // ]
    // return React.createElement('div',
    // {className:'container'},
    // React.createElement('h1',{},'My App')

    // )
    const [feedback,setFeedback] = useState(FeedbackData)
    const addFeedback = (newFeedback) =>{
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }
    const deleteFeedback  = (id) =>{
        // console.log('App',id)
        if(window.confirm('Are you sure want to delete that item?')){
            setFeedback(feedback.filter((item)=> item.id !==id))
        }
    
    }

    return (
    <>
    
        <Header />
        <div className='container'>
            
            <Router>
            <Routes>
          <Route exact path ='/' element ={ <>
          <FeedbackForm handleAdd ={addFeedback} feedback = {feedback}/> 
            <FeedbackStats feedback = {feedback}/>
            <FeedbackList feedback = {feedback}
            handleDelete={deleteFeedback}/>
            </>
          
            } />

           
            <Route path='/about' element={<AboutPage/>}/>

           </Routes>
        
          
            
            </Router>
        </div>
      </>
    
    )
            
        
}
export default App