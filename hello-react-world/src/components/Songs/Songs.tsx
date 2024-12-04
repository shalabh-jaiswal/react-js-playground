// Define the type for props that the component will receive
interface SongsProps {
    liked: LikedSongs[];
}

const Songs: React.FC<SongsProps> = ({ liked }): JSX.Element => {


    //const likedSongs: LikedSongs[] = [{songName: 'song one', singer:'singer 1'}]

    ///const {message, color} = props
    return (
        <div>
            Ï
            {liked.map((song, index) => (
                <p key={index}>
                    {song.songName} by {song.singer}
                </p>
            ))}

            {/* <p>{liked[0].songName} by {liked[0].singer} </p>
    <p>{liked[0].songName} by {liked[0].singer} </p> */}
        </div>
    )
}

export type LikedSongs = { songName: string, singer: string }

export default Songs