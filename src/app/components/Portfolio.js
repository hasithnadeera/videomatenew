'use client';

export default function Portfolio() {
  return (
    <div className="relative w-full mb-4">
        <div className="overflow-hidden w-full">
          <div className="flex space-x-8 animate-scroll-rtl py-8 px-6">
            <VideoCard src="https://grtomatemedia.b-cdn.net/10.mp4" />
            <VideoCard src="https://grtomatemedia.b-cdn.net/11.mp4" />
            <VideoCard src="https://grtomatemedia.b-cdn.net/13.mp4" />
            <VideoCard src="https://grtomatemedia.b-cdn.net/14.mp4" />
            <VideoCard src="https://grtomatemedia.b-cdn.net/15.mp4" />
            <VideoCard src="https://grtomatemedia.b-cdn.net/2.mp4" />
            <VideoCard src="https://grtomatemedia.b-cdn.net/3.mp4" />
            <VideoCard src="https://grtomatemedia.b-cdn.net/1.mp4" />
            <VideoCard src="https://grtomatemedia.b-cdn.net/4.mp4" />
            <VideoCard src="https://grtomatemedia.b-cdn.net/5.mp4" />
            <VideoCard src="https://grtomatemedia.b-cdn.net/7.mp4" />
            <VideoCard src="https://grtomatemedia.b-cdn.net/9.mp4" />
            <VideoCard src="https://grtomatemedia.b-cdn.net/A.mp4" />
            <VideoCard src="https://grtomatemedia.b-cdn.net/10.mp4" />
            <VideoCard src="https://grtomatemedia.b-cdn.net/11.mp4" />
            <VideoCard src="https://grtomatemedia.b-cdn.net/10.mp4" />
            <VideoCard src="https://grtomatemedia.b-cdn.net/11.mp4" />
            <VideoCard src="https://grtomatemedia.b-cdn.net/1.mp4" />
            <VideoCard src="https://grtomatemedia.b-cdn.net/13.mp4" />
            <VideoCard src="https://grtomatemedia.b-cdn.net/14.mp4" />
            <VideoCard src="https://grtomatemedia.b-cdn.net/15.mp4" />
            <VideoCard src="https://grtomatemedia.b-cdn.net/2.mp4" />
            <VideoCard src="https://grtomatemedia.b-cdn.net/3.mp4" />
            <VideoCard src="https://grtomatemedia.b-cdn.net/4.mp4" />
            <VideoCard src="https://grtomatemedia.b-cdn.net/5.mp4" />
            <VideoCard src="https://grtomatemedia.b-cdn.net/7.mp4" />
            <VideoCard src="https://grtomatemedia.b-cdn.net/9.mp4" />
            <VideoCard src="https://grtomatemedia.b-cdn.net/A.mp4" />
            <VideoCard src="https://grtomatemedia.b-cdn.net/10.mp4" />
            <VideoCard src="https://grtomatemedia.b-cdn.net/11.mp4" />
            <VideoCard src="https://grtomatemedia.b-cdn.net/1.mp4" />
          </div>
        </div>
      </div>
    )
}
const VideoCard = ({ src }) => (
  <div 
    className="flex-shrink-0 w-[215px] h-[382px] rounded-xl shadow-lg overflow-hidden 
      transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1" 
    onContextMenu={(e) => e.preventDefault()} 
  > 
    <video 
      className="w-full h-full object-cover pointer-events-none" 
      src={src} 
      autoPlay 
      muted 
      loop 
      playsInline 
      controls={false} 
      disablePictureInPicture 
      onContextMenu={(e) => e.preventDefault()} 
    /> 
  </div> 
);