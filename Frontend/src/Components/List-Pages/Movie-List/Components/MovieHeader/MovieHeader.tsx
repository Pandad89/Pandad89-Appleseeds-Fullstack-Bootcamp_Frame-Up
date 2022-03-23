import React from "react";
import "./MovieHeader.css";

function MovieHeader() {
    return (
        <div className="MoviePage__Header">
            <div className="MoviePage__Header__Image"></div>
            <div className="MoviePage__Header__Text">
                <p className="MoviePage__Header__Text__MovieName">
                    Lorem, ipsum.
                </p>
                <p className="MoviePage__HeaderText__MovieDesc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut dolorum dolor doloremque iste praesentium cum sequi iure laboriosam itaque nemo.<span className="MoviePage__HeaderText__MovieDesc__FakeLink"><p>Lorem, ipsum dolor.&nbsp;&nbsp;&gt;&gt;&gt;</p></span>
                </p>
            </div>
        </div>
    )
}

export default MovieHeader;