import MuxPlayer from '@mux/mux-player-react'

const VideoPlayer = ({ playbackId, onClick }) => {
  return (
    <div className="muxContainer" onClick={onClick}>
      <MuxPlayer
        playbackId={playbackId}
        autoPlay
        loop
        muted
        playsInline
        className="mux"
      />
    </div>
  )
}

export default VideoPlayer
