import React, { useState } from "react";
import CommonSection from "../shared/CommonSection";
import { Col, Container, Row } from "reactstrap";
import TourCard from "../shared/TourCard";
import { useLocation } from "react-router-dom";
import Newsletter from "../shared/Newsletter";


const SearchResultList = () => {
    const location = useLocation();
    console.log(location)
    const [data] = useState(location.state);
    console.log(data)
    return <>
        <CommonSection title={"Tour Search Result"} />
        <section>
            <Container>
                <Row>
                    {
                        data.length === 0 ? (<h4 className="text-center">Not Tour Found</h4>) : (data?.map((tour) => (
                            <Col lg="3" className="mg-4" key={tour._id} >
                                <TourCard tour={tour} />
                            </Col>
                        )))
                    }
                </Row>

            </Container>
        </section>
        <Newsletter/>

    </>




};

export default SearchResultList;