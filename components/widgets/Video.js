import useMedia from 'hooks/useMedia'
import VideoPlayer from 'components/Video'

const Video = ({ name, value, onChange }) => {
  const { open, Component: Media } = useMedia()
  const filled = Boolean(value)

  return (<>
    <div className="w-full border-gray-300 border-2 p-3">
      {filled && (<>
        <VideoPlayer src={value} />
        <button onClick={open} className="block bg-green-200 mt-2 py-1 px-2 rounded">Choose Different Video</button>
        <button onClick={() => onChange(null)} className="block bg-red-200 mt-2 py-1 px-2 rounded">Delete Video</button>
      </>)}
      {!filled && <button onClick={open} className="bg-blue-200 py-1 px-2 rounded">Choose Video</button>}
    </div>
    <Media onSelected={onChange} accept=".mp4,.3gp,.mkv" />
  </>)
}

export default Video