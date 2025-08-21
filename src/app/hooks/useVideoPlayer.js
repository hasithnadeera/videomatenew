import { useState, useRef, useCallback } from 'react';

export default function useVideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const videoRef = useRef(null);
  
  const togglePlay = useCallback(() => {
    if (!videoRef.current) return;
    
    if (!hasStarted) {
      setHasStarted(true);
    }

    try {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(err => setError(err));
      }
      setIsPlaying(!isPlaying);
    } catch (err) {
      setError(err);
    }
  }, [isPlaying, hasStarted]);
  
  const handleLoadedData = useCallback(() => {
    setIsLoading(false);
  }, []);
  
  const handleError = useCallback(() => {
    setIsLoading(false);
    setError(new Error('Video failed to load'));
  }, []);
  
  return {
    videoRef,
    isPlaying,
    hasStarted,
    isLoading,
    error,
    togglePlay,
    handleLoadedData,
    handleError,
    setIsPlaying
  };
}