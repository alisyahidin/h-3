import ReactPlayer from 'react-player'

const Video = ({ src }) => {
  return (
    <div style={{ position: 'relative' }}>
      <ReactPlayer width="100%" height="100%" url={src} />
    </div>
  )
}

export default Video