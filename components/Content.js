import Markdown from 'react-markdown'

const Content = ({ text, ...props }) => {
  return <Markdown {...props} source={text} />
}

export default Content