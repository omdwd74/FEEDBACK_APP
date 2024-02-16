import Card from "./shared/Card"
function FeedbackItem({item}){
    // const [rating,setRating] = useState(7)
    // const [text] = useState('This is an example of feedback item')

    // const handleClick = () =>{
    //     setRating((prev)=>{
    //         return prev+1;
    //     })
    // }
    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <div className="text-display"> {item.text}</div>
            {/* <button onClick={handleClick}>Click</button> */}

        </Card>

    )
}
export default FeedbackItem