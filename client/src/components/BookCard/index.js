import React, { Fragment } from "react";


function BookCard({ children }) {
    return (
        <Fragment>
            <div className="container border border-info rounded-lg">
                <p className="pt-3">Saved Books</p>
                <div className="row p-3">
                    <div size="col-sm-4">
                        <h2>The Hunger Games</h2>
                        <p>Set in a dark vision of the near future, a terrifying reality TV show is taking place</p>
                        <p>Written By : Suzanne Collins</p>
                    </div>

                    <div className="container-fluid  col-sm-2">
                        <button style={{ float: "right"}} className="btn btn-primary ">
                            View
    </button>
                        <button style={{ float: "right"}} className="btn btn-success">
                            Save
    </button>
                    </div>

                </div>

                <div className="row">
                    <div className="col-sm-3">
                        <img src="http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api" style={{ width: 200, height: 150 }} />
                    </div>
                    <div className="col-sm-8 m-2 p-2">
                        <p>Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.</p>
                    </div>
                </div>


                {/* {children} */}
            </div>
        </Fragment>

    );
}

export default BookCard;
