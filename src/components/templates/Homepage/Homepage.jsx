import React, { useEffect, useState } from 'react'
import client from '@/utils/contentful'

export default function HomepageTemplate() {
  const [video, setVideo] = useState()
  const [showVideo, setShowVideo] = useState(false)

  const handleWatch = () => {
    setShowVideo(true)
  }

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'mainVideo',
        })

        if (response.items.length > 0) {
          const videoData = response.items[0].fields
          setVideo(videoData?.video?.[0]?.original_secure_url)
        }
      } catch (error) {
        console.error('Error fetching data from Contentful:', error)
      }
    }

    fetchVideo()
  }, [])
  return (
    <main className="intro" onClick={handleWatch}>
      {video && (
        <video
          className="video"
          preload="auto"
          autoPlay
          loop={showVideo ? false : true}
          playsInline
          muted={showVideo ? false : true}
          controls={showVideo ? true : false}
          src={video}
          style={{ zIndex: showVideo ? 22 : 1 }}
        />
      )}
    </main>
  )
}
