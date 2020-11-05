import React from 'react'

function TouristInfoCards() {
    return (
        <div>
            <div className="card">
                <img src="https://www.storagevault.com/wp-content/uploads/2019/03/20-Amazing-Free-Things-To-Do-In-Glasgow.jpg" className="card-img-top" />
                <div className="card-body">
                    <a href="https://www.peoplemakeglasgow.com" alt="glasgow" className="btn btn-primary">Go to peoplemakeglasgow.com</a>
                </div>
            </div>

            <div className="card">
                <img src="https://www.traveller.com.au/content/dam/images/g/o/4/3/w/9/image.related.articleLeadwide.620x349.go43lq.png/1460713395921.jpg" className="card-img-top" />
                <div className="card-body">
                    <a href="https://www.visitmanchester.com" alt="manchester" className="btn btn-primary">Go to visitmanchester.com</a>
                </div>
            </div>

            <div className="card">
                <img src="https://secure.i.telegraph.co.uk/multimedia/archive/02423/london_2423609b.jpg" alt="london" className="card-img-top" />
                <div className="card-body">
                    <a href="https://www.visitlondon.com" className="btn btn-primary">Go to visitlondon.com</a>
                </div>
            </div>
        </div>
    )
}

export default TouristInfoCards;