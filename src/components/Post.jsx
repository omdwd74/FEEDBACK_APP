import {Navigate,useNavigate} from 'react-router-dom'


function Post(){
    const status =200
    const navigate = useNavigate();
    const onClick = () =>{
        console.log('hii')
        navigate('/about')
    }
    if(status===404)
    {
        return <Navigate to='/notfound'/>
    }
    // const params = useParams()
    return (
        <div>
            <h1> Post </h1>
           <button onClick={onClick}>Click me</button>
        </div>
    )
}
export default Post
