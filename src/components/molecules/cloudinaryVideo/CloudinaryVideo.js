import { CldVideoPlayer } from 'next-cloudinary'

export default function CloudinaryVideo({ publicId }) {
  console.log('publicId', publicId)

  return (
    <CldVideoPlayer
      id="sea-turtle"
      width="1920"
      height="1080"
      src="samples/sea-turtle"
    />
  )
}
