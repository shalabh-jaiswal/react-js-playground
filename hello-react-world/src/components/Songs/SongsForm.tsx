import { useState } from "react"
import { LikedSongs } from "./Songs"

// Define the props for SongsForm
interface SongsFormProps {
    addSong: (newSong: LikedSongs) => void;
}

const SongsForm: React.FC<SongsFormProps> = ({ addSong }):  JSX.Element => {

    const [songName, setSongName] = useState("")
    const [singer, setSinger] = useState("")

    const handleAddSong = () => {
        const newSong: LikedSongs = {
            songName: songName,
            singer: singer
        };
        
        addSong(newSong)
    }

    return (
        <div>
            <label htmlFor="SongNameInput">Song Name</label><input type="text" id="SongNameInput" onChange={(e) => setSongName(e.target.value)}/>
            <label htmlFor="SingerInput">Singer</label><input type="text" id="SingerInput" onChange={(e) => setSinger(e.target.value)}/>
            <button onClick={handleAddSong}>Add Song</button>
        </div>
    )
}

export default SongsForm