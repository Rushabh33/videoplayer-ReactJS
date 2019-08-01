import React from 'react';
import { Link } from 'react-router-dom';
import StyledPlaylistItem from './styles/StyledPlaylistItem';

const PlaylistItem = ({ video, active, played }) => (
    <StyledPlaylistItem active={active} played={played}>
        <div className='main-player__video-nr'>{video.num}</div>
        <Link to={{ pathname: `/${video.id}`, autoplay: true }}>
            <div className='main-player__video-name'>{video.title}</div>
        </Link>
        <div className='main-player__video-title'>{video.duration}</div>
    </StyledPlaylistItem>
)
export default PlaylistItem;