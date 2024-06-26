import React from 'react'
import "./SingleContent.css";
import Badge from '@mui/material/Badge';
import { img_300, unavailable } from '../Config/Config';
// import config from '../config'

const SingleContent = ({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average,
}) => {
  return (
    <div className="media">
        <Badge badgeContent={vote_average} color={vote_average> 6 ? "primary": "secondary"}/>
        <img src={poster ? `${img_300}/${poster}`: unavailable} alt={title} />
        <b className='title'>{title}</b>
        <span className='sunTitle'>{media_type==="tv"  ? "TV Series" : "Movie"}</span>
        <span className='sunTitle'>{date}</span>
    </div>
  )
}

export default SingleContent