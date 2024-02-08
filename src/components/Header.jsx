import  PropTypes  from "prop-types"

function Header({text,bgColor,textColor}){
    const headerStyle = {
        backgroundColor:textColor,
        color:bgColor
    }
    return (
        <header style={headerStyle}>
            <div className="container">
                {/* <h1> Feed back UI And UX</h1> */}
                <h2>{text}</h2>
            </div>
        </header>
    )
}

Header.defaultProps = {
    text: 'FeedBack UI',
    bgColor:'rgba(0,0,0,0.4)',
    textColor:'#ff6a95',
}

Header.propTypes ={
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}
export default Header