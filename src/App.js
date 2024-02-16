import React from 'react'
import { useState } from 'react'
import  Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import Card from './components/shared/Card'

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
    const [feedback] = useState(FeedbackData)

    return (
    <>
        <Header />
        <div className='container'>
            {/* <h1>{title.toUpperCase()} </h1>
            <h2>{body}</h2>
            <div className=''comments> 
            <h3>comments ({comments.length})</h3>
               <ul>
                {comments.map((comment,index)=>(
                    <li key ={index}> {comment.text}</li>
                ))}
                </ul> 
            </div> */}
            {/* <h1>My App</h1> */}
            <FeedbackList feedback = {feedback}/>
            <Card>Hello world</Card>

        </div>
    </>
    )
            
        
}
export default App