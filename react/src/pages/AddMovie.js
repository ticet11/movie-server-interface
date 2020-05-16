import React from "react";

export default function AddMovie() {
    return (
        <React.Fragment>
            <div>
                <form>
                    <input
                        type="text"
                        name="title"
                        placeholder="Movie Title"
                    /> {' '}
                    <input
                        type="text"
                        name="releaseDate"
                        placeholder="Year of Release"
                    /> {' '}
                    <input
                        type="submit"
                        value="Submit"
                        className="btn"
                    />
                </form>
            </div>
        </React.Fragment>
    );
}
