import { useState } from "react";
// Define the type for props that the component will receive
interface SongsProps {
    liked: LikedSongs[];
}

const Songs: React.FC<SongsProps> = ({ liked }): JSX.Element => {

    const [likedSongs, setLikedSongs] = useState<LikedSongs[]>(liked)

    const addSong = (song: LikedSongs) => {
        setLikedSongs([...likedSongs, song])
    }

    //const likedSongs: LikedSongs[] = [{songName: 'song one', singer:'singer 1'}]

    ///const {message, color} = props
    return (
        <div>
            Ï
            {likedSongs.map((song, index) => (
                <p key={index}>
                    {song.songName} by {song.singer}
                </p>
            ))}

            <button onClick={() => addSong({songName: 'New Song', singer: 'New Singer'})}>This is a button</button>
        </div>
    )
}

export type LikedSongs = { songName: string, singer: string }

export default Songs