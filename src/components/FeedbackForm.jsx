import Card from './shared/Card'
import Button from './shared/Button'
import { useState } from 'react';
// import { isDisabled } from '@testing-library/user-event/dist/utils';

function FeedbackForm(){
    const [text,setText] = useState('')
    const [btnDisabled,setBtnDisabled] = useState(true)
    const [message,setMessage] = useState('')
    const handleTextChange = (e) =>{
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)

        }
        else if(text!== '' && text.trim().length<=10)
        {
            setMessage('Text must be at least ten 10  charcaters')
            setBtnDisabled(true)
        }
        else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }
    return (
        <Card>
            <form>
                <h2>How would you rate service with us by staff provided ?...</h2>
                {/* @Todo -> RAting select components */}
                <div className='input-group'>
                    <input onChange={handleTextChange} type='text' placeholder = 'write a review' value={text} />
                    <Button type='submit' version ='secondary' isDisabled = {btnDisabled}>Send</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}
export default FeedbackForm;
