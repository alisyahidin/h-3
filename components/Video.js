import ReactPlayer from 'react-player'

const Video = ({ src }) => {
  return (
    <div style={{ position: 'relative' }}>
      {/* <ReactPlayer width="100%" height="100%" url={src} /> */}
      <video width="100%" height="auto" controls>
        <source src={src} />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Video