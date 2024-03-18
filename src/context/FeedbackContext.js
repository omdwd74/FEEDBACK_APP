import {createContext,useState} from 'react'
import {v4 as uuidv4} from 'uuid'

const FeedbackContext  = createContext()

export const FeedbackProvider = ({children})  =>{
    const [feedback,setFeedback] = useState([
        {
            id:1,
            text:'This is feedback item one ',
            rating:8
        },
        {
            id:2,
            text:'This is feedback item two ',
            rating:7
        },
        {
            id:3,
            text:'This is feedback item three ',
            rating:6
        }
    ])
    const [feedbackEdit,setFeedbackEdit] = useState({item:{},edit:false})
    // Add feedback item
    const addFeedback = (newFeedback) =>{
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }
    // delete feedback
    const deleteFeedback  = (id) =>{
        // console.log('App',id)
        if(window.confirm('Are you sure want to delete that item?')){
            setFeedback(feedback.filter((item)=> item.id !==id))
        }
    
    }
    //Update feedback item
    const updateFeedback = (id,updItem) =>{
       setFeedback(
        feedback.map((item)=>item.id===id?{...item,...updItem}:item))

    }
    // set item to updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit:true,
        })
    }
    return <FeedbackContext.Provider value = {{
         feedback,
         deleteFeedback,
         addFeedback,
         editFeedback,
         feedbackEdit,
         updateFeedback
    }}>
    {children}
    </FeedbackContext.Provider>
}
export default FeedbackContext;