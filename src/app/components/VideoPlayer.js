'use client';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = forwardRef(({ src, poster, title = 'Embedded Video', hasStarted }, ref) => {
  if (!src) {
    return (
      <div className="bg-gray-200 aspect-video rounded-2xl flex items-center justify-center">
        <p>Video source is missing.</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full" style={{ paddingTop: '56.25%' }}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        className="absolute top-0 left-0 w-full h-full rounded-2xl"
        style={{ objectFit: 'cover' }}
        title={title}
        playsInline
        controls={hasStarted}
      />
    </div>
  );
});

VideoPlayer.displayName = 'VideoPlayer';

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string,
  title: PropTypes.string,
  hasStarted: PropTypes.bool,
};

export default VideoPlayer;
