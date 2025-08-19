'use client';
import React from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({ src, title = 'Embedded Video' }) => {
  if (!src) {
    return (
      <div className="bg-gray-200 aspect-video rounded-2xl flex items-center justify-center">
        <p>Video source is missing.</p>
      </div>
    );
  }

  return (
    <div style={{position:'relative',paddingTop:'56.25%'}}>
      <iframe 
        src={`${src}?rel=0&autoplay=1&mute=1`}
        style={{border:0,position:'absolute',top:0,height:'100%',width:'100%', borderRadius: '1rem'}}
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        allowFullScreen={true}
        title={title}
      ></iframe>
    </div>
  );
};

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default VideoPlayer;
