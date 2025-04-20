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
}) => {
  return (
    <div className="muxContainer" onClick={onClick}>
      <MuxPlayer
        playbackId={playbackId}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline
        controls={controls}
        className={`mux ${className}`}
        nohotkeys={nohotkeys}
      />
    </div>
  )
}

export default VideoPlayer
