'use client';
import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import PropTypes from 'prop-types';
const VideoPlayer = forwardRef(({ src, title = 'Embedded Video', poster }, ref) => {
  const videoRef = useRef(null);

  useImperativeHandle(ref, () => ({
    play: () => {
      console.log("Attempting to play video");
      videoRef.current.play();
    },
    pause: () => {
      console.log("Attempting to pause video");
      videoRef.current.pause();
    },
  }));

  if (!src) {
    return <div className="bg-gray-200 aspect-video rounded-2xl flex items-center justify-center"><p>Video source is missing.</p></div>;
  }

  return (
    <div className="aspect-video w-full relative">
      <video
        ref={videoRef}
        src={src}
        title={title}
        poster={poster}
        preload="auto"
        playsInline
        className="absolute top-0 left-0 w-full h-full border-0 rounded-2xl"
      ></video>
    </div>
  );
});

VideoPlayer.displayName = 'VideoPlayer';

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
  poster: PropTypes.string,
};

export default VideoPlayer;