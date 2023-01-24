import React, { useState } from 'react';
import FormStandalone from './Form';
import Song from './Song';

function SongList() {

    const [songs, setSongs] = useState([]);
    const [allSongs, setAllSongs] = useState([]);
    const [allFilter, setAllFilter] = useState(false)
    //Create new song 
    const newSong = e => {
        if (!e.SongTitle || !e.Artist || !e.Genre || !e.Rating) {
            return;
        }
        const newSongs = [e, ...songs];
        setSongs(newSongs);
        setAllSongs(newSongs);
        console.log(e, ...songs);
    }
    //Filter song 
    function filterGenre() {
        let optionsAll =
            <button value='All' name='genreFilterSelect' onClick={filterChange}>
                Show All
    </button>
        let optionsFiltered =
            <select name='genreFilterSelect' onChange={filterChange}>
                <option>Select Genre</option>
                <option value='None'>None</option>
                <option value='Rock'>Rock</option>
                <option value='Soul'>Soul</option>
                <option value='Rap'>Rap</option>
                <option value='Jazz'>Jazz</option>
                <option value='Pop'>Pop</option>
            </select>

        function filterChange(event) {
            console.log(event.target.value)
            console.log(allSongs)
            if (allFilter) {
                setSongs(allSongs);
                setAllFilter(false)
            }
            else {
                setAllFilter(true)
                setSongs(allSongs)
                setSongs([...songs].filter(song => song.Genre === event.target.value));
            }
        }
        return (
            <div className='filterGenreDiv'>
                {allFilter ?
                    optionsAll : optionsFiltered
                }
            </div>
        )
    }
    //Delete song 
    const removeSong = id => {
        const removedS = [...songs].filter(song => song.id !== id);
        setSongs(removedS);
        setAllSongs(removedS)
    }


    return (
        <div className='songListDiv'>

            {
                !allFilter &&
                <div className='songFormDiv'>
                    <h2>New Songs</h2>
                    <FormStandalone
                        onSubmit={newSong}
                    />
                </div>
            }
            <div className='displayedSongDiv'>
                <h2>My Songlist</h2>
                <thead>
                    <th>Artist</th>
                    <th>Song</th>
                    <th>{filterGenre()}</th>
                    <th>Rating</th>
                </thead>


                <Song
                    allSongs={allSongs}
                    songs={songs}
                    allFilter={allFilter}
                    removeSong={removeSong}
                />
            </div>
        </div>
    )

}

export default SongList;
