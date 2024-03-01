import Card from "../components/shared/Card"
function AboutPage(){
    return(
      <Card>
        <div className="about">
            <h1>This is About Page for Feedback Application</h1>
            <p>
                This is React Web App You cab leave a review for this application and on the basis of your rating and product services
            </p>
            <p>version :1.0.0</p>
            <p>
                <a href="/">Back To HomePage</a>
            </p>
        </div>
      </Card>  
    )
}
export default AboutPage