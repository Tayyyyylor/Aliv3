import React, { useEffect, useState } from 'react'
import client from '@/utils/contentful'
import CloseButton from '@/components/atoms/buttons/closeButton/CloseButton'
import VideoPlayer from '@/components/atoms/videoPlayer/VideoPlayer'

export default function HomepageTemplate() {
  const [video, setVideo] = useState()
  const [showVideo, setShowVideo] = useState(false)

  const handleWatch = () => {
    setShowVideo(true)
  }

  const handleClose = () => {
    setShowVideo(false)
  }

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'mainVideo',
        })

        if (response.items.length > 0) {
          const videoData = response.items[0].fields
          setVideo(videoData?.video?.playbackId)
        }
      } catch (error) {
        console.error('Error fetching data from Contentful:', error)
      }
    }

    fetchVideo()
  }, [])
  return (
    <main
      className={`intro ${!showVideo ? 'video_before_play' : ''}`}
      onClick={handleWatch}
      style={{
        cursor: !showVideo ? "url('/play.png') 32 32, pointer" : 'auto',
      }}
    >
      {showVideo && (
        <CloseButton onClick={handleClose} className="closeButtonn" />
      )}
      {video && (
        <VideoPlayer
          className={
            showVideo ? 'video mux--with-controls' : 'video mux--no-controls'
          }
          key={showVideo ? 'with-controls' : 'no-controls'}
          playbackId={video}
          muted={!showVideo}
          controls={showVideo}
          autoPlay={true}
          nohotkeys={!showVideo}
        />
      )}
    </main>
  )
}
