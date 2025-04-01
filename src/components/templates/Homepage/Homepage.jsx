import React, { useEffect, useState } from 'react'
import { CldVideoPlayer } from 'next-cloudinary'
import client from '@/utils/contentful'

export default function HomepageTemplate() {
  const [video, setVideo] = useState()

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'mainVideo',
        })

        console.log('response', response)

        if (response.items.length > 0) {
          const videoData = response.items[0].fields
          console.log('videoData', videoData)
          setVideo(videoData?.video?.[0]?.public_id)
        }
      } catch (error) {
        console.error('Error fetching data from Contentful:', error)
      }
    }

    fetchVideo()
  }, [])

  return (
    <main className="intro">
      {video && (
        <CldVideoPlayer
          id={`cld-player-${video}`}
          width="1920"
          height="1080"
          publicId={video}
          controls={false}
          bigPlayButton={false}
          className="video"
          muted={true}
          autoplay
          loop
        />
      )}
    </main>
  )
}
