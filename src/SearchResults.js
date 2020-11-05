import React, { useState } from 'react'
import './searchresults.css'
import moment from 'moment';

function SearchResults(props) {
    const [className, setClassName] = useState("")
    console.log("props from searchResults", props)
    const results = props.results;

    // const selected = () => {
    //     if(isToggled === false){ 
    //     setIsToggled(true)
    //     setClassName("selected")
    //     } else if(isToggled === true) {
    //     setIsToggled(false)
    //     setClassName("")
    //     }
    //     setIsToggled(! IsToggled)
    // }

    const selected = () => {
        setClassName(className == "" ? "selected" : "")
    }

    return (
        <div>
            <table class="table">
                <thead>
                    <tr onClick={selected} className={className}>
                        <th scope="col">Id</th>
                        <th scope="col">Title</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Room Id</th>
                        <th scope="col">Check In Date</th>
                        <th scope="col">Check Out Date</th>
                        <th scope="col">Number of Nights</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((data, key) => {
                        return (
                            <>
                                <tr onClick={selected}>
                                    <td>{data.id}</td>
                                    <td>{data.title}</td>
                                    <td>{data.firstName}</td>
                                    <td>{data.surname}</td>
                                    <td>{data.email}</td>
                                    <td>{data.roomId}</td>
                                    <td>{data.checkInDate}</td>
                                    <td>{data.checkOutDate}</td>
                                    <td>{(moment(data.checkOutDate).diff(data.checkInDate, "days"))}</td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default SearchResults
