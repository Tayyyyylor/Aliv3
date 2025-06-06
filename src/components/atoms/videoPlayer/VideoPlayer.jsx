import MuxPlayer from '@mux/mux-player-react'

const VideoPlayer = ({
  playbackId,
  onClick,
  autoPlay,
  loop,
  muted,
  controls,
  nohotkeys,
  className,
  poster
}) => {
  return (
    <div className="muxContainer" onClick={onClick}>
      <MuxPlayer
        playbackId={playbackId}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline
        poster={poster}
        controls={controls}
        className={`mux ${className}`}
        nohotkeys={nohotkeys}
        accentColor="black"
      />
    </div>
  )
}

export default VideoPlayer
