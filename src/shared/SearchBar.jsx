import React, { useRef } from "react";
import { Col, Form, FormGroup, Input } from "reactstrap";
import './search-bar.css';
import { BASE_URL } from "../utils/config";
import { useNavigate } from "react-router-dom";


const SearchBar = () => {
    const locationRef = useRef('');
    const distanceRef = useRef(0);
    const maxGroupSizeRef = useRef(0);
    const navigate=useNavigate();


    const searchHandler = async() => {
        const location = locationRef.current.value;
        const distance = distanceRef.current.value;
        const maxGroupSize = maxGroupSizeRef.current.value;
        console.log(location)

        if (location === '' || distance === '' || maxGroupSize === '') {
            alert('All fields are required!');
            return;
        }
        
        // Perform search operation here
        const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`)

        if(!res.ok) alert('something went wrong');

        const result = await res.json();

        navigate(`/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`,{state:result.data})
        
    };

    return (
        <Col lg='12'>
            <div className="search_bar">
                <Form className="d-flex align-items-center gap-4">
                    <FormGroup className="d-flex gap-3 form_group form_group-first">
                        <span>
                            <i className="ri-map-pin-line"></i>
                        </span>
                        <div>
                            <h6>Location</h6>
                            <Input type="text" placeholder="Where are you going?" innerRef={locationRef} />
                        </div>
                    </FormGroup>
                    <FormGroup className="d-flex gap-3 form_group form_group-second">
                        <span>
                            <i className="ri-map-pin-time-line"></i>
                        </span>
                        <div>
                            <h6>Distance</h6>
                            <Input type="number" placeholder="Distance in km" innerRef={distanceRef} />
                        </div>
                    </FormGroup>
                    <FormGroup className="d-flex gap-3 form_group form_group-last">
                        <span>
                            <i className="ri-group-line"></i>
                        </span>
                        <div>
                            <h6>Max People</h6>
                            <Input type="number" placeholder="0" innerRef={maxGroupSizeRef} />
                        </div>
                    </FormGroup>
                    <span className="search__icon" onClick={searchHandler}>
                        <i className="ri-search-line"></i>
                    </span>
                </Form>
            </div>
        </Col>
    );
};

export default SearchBar;
