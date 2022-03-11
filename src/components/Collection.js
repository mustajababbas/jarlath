import { Col,Row,Container } from "react-bootstrap";
import nft from "../assets/images/portfolio.jpg"
import { Link } from "react-router-dom";

function Collection(){

    return(

        <>
        
           <Container>

                <div className="section-title">
                    <h2>Collection</h2>
                </div>

                <Row className="gy-5">

                    <Col lg={4}>

                        <div className="collection-box">

                            <img src={nft}/>

                        </div>

                    </Col>

                    <Col lg={4}>

                    <div className="collection-box">

                        <img src={nft}/>

                    </div>

                    </Col>

                    <Col lg={4}>

                    <div className="collection-box">

                        <img src={nft}/>

                    </div>

                    </Col>

                    <Col lg={4}>

                    <div className="collection-box">

                        <img src={nft}/>

                    </div>

                    </Col>

                    <Col lg={4}>

                    <div className="collection-box">

                    <img src={nft}/>

                    </div>

                    </Col>

                    <Col lg={4}>

                    <div className="collection-box">

                    <img src={nft}/>

                    </div>

                    </Col>
                </Row>


                <div className="text-center py-5">
                    <Link to={"#"} className="custom-btn primary-btn">More</Link>\
                </div>

           </Container>

        </>

    )

}

export default Collection;