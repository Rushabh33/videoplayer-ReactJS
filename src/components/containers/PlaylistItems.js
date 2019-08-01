import React from 'react';
import PlaylistItem from '../PlaylistItem';
import StyledPlaylistItems from '../styles/StyledPlaylistItems';


const PlaylistItems = ({ videos, active }) => (

    <StyledPlaylistItems>
        {/* we need to loop through the list of the video items */}
        {videos.map(video => (
            <PlaylistItem
                key={video.id}
                video={video}
                active={video.id === active.id ? true : false}
                played={video.played}
            />
        ))}
    </StyledPlaylistItems>
)
export default PlaylistItems