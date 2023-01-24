import React from 'react';


const Song = ({ songs, completeSong, removeSong, allFilter }) => {

    const cx = songs.map((song) => (
        <div key={song.id} >
            <div key={song.id} onClick={() => completeSong(song.id)}>
                <span className='indDisplayedSongs'>
                    <tbody>
                        <tr>
                            <td>{song.Artist}</td>
                            <td>{song.SongTitle}</td>
                            <td>{song.Genre}</td>
                            <td>{song.Rating}</td>
                        </tr>
                    </tbody>
                </span>

                <span className='songButtons'>
                    <button
                        onClick={() => removeSong(song.id)}
                    >DELETE</button>

                </span>
            </div>
        </div>
    ))
    const sx = songs.map((song) => (
        <div key={song.id} >
            <div key={song.id} onClick={() => completeSong(song.id)}>
                <span className='indDisplayedSongs'>
                    {song.Artist}   {song.SongTitle} {song.Genre} Rating: {song.Rating}
                </span>
            </div>
        </div>
    ))

    return (
        <div>
            {!allFilter ? cx : sx}
        </div>
    )

}

export default Song;