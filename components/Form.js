import React, { useState } from "react";

function FormStandalone(props) {

    const [stitle, setStitle] = useState('');
    const [artist, setArtist] = useState('');
    const [genre, setGenre] = useState('None');
    const [rating, setRating] = useState('');
    //Code to be executed when "submit" is pressed
    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            SongTitle: stitle,
            Artist: artist,
            Genre: genre,
            Rating: rating
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/*Input field Artist and Song*/}
                <input
                    placeholder="Artist"
                    type="text"
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                />
                <input
                    placeholder="Song"
                    type='text'
                    value={stitle}
                    onChange={(e) => setStitle(e.target.value)}
                />
                {/*Dropdown Genre*/}
                <select value={genre} onChange={(e) => setGenre(e.target.value)}>
                    <option value='None'>None</option>
                    <option value='Rock'>Rock</option>
                    <option value='Soul'>Soul</option>
                    <option value='Rap'>Rap</option>
                    <option value='Jazz'>Jazz</option>
                    <option value='Pop'>Pop</option>
                </select>
                {/*Rate the song*/}
                <input
                    placeholder="Rating"
                    type='number'
                    id='ratingField'
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                />
                {/*Submit button*/}
                <button form="addSong" id="songSubmitBtn" onClick={handleSubmit} type="submit">Submit</button>
            </form>
        </div>
    );
}
//Export ------------------------------------------------------------------------------
export default FormStandalone;