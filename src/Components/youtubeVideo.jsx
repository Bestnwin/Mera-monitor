import React from 'react';

function YouTubeVideoEmbed() {
  const videoId = 'Q63Icc-WvlY'; 
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1&modestbranding=1&rel=0`;

  return (
    <div className="mx-auto max-w-4xl p-4"> 
      <div className="aspect-video relative w-full overflow-hidden rounded-lg shadow-lg">
        <iframe
          className="absolute inset-0 w-full h-full"
          src={embedUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          title="Embedded YouTube Video" 
        ></iframe>
      </div>
    </div>
  );
}

export default YouTubeVideoEmbed;