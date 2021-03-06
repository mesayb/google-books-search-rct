import React, { Fragment } from "react";


function BookCard(props) {
    // { result , saveBookToDB }
console.log("props = " , props)

    return (
        <Fragment>
            <div className="container border border-primary rounded-lg">
                <p className="pt-3 border-bottom "><strong> {props.saved === 'true' ? 'Saved Books' : 'Book Search'} </strong></p>
                {props.result.map((res, index) => {
                    console.log("id = " , res.gid)
                    return (
                        <div className="container border border-primary rounded-lg mb-3">
                            <div className="row pt-3 pl-3 pr-3">
                                <div size="col-sm-4">
                                    <h2>{res.title}</h2>
                                    <p>{res.subtitle}</p>
                                    <p><strong>Written By :</strong> {res.authors.toString()}</p>
                                </div>

                                <div className="container-fluid  col-sm-2">
                                    <a href={res.link} target="_blank"><button style={{ float: "right" }} className="btn btn-dark ">
                                        View
    </button></a>
                                    {props.saved === 'true' ?  (<button style={{ float: "right" }} className="btn btn-danger ml-5 mt-2" id = {res.gid} onClick={props.deleteBookFromDB} >
                                            Delete
    </button>) : (<button style={{ float: "right" }} className="btn btn-success ml-5 mt-2" id={res.gid} onClick={props.saveBookToDB} >
                                        Save
    </button>) }
                                </div>

                            </div>

                            <div className="row mb-3 ml-3 mr-3">
                                <div className="col-sm-3">
                                    <img src={res.image} alt="Book image" style={{ width: 200, height: 150 }} />
                                </div>
                                <div className="col-sm-8 ">
                                    <p>{res.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}



                {/* {children} */}
            </div>
        </Fragment>

    );
}

export default BookCard;
