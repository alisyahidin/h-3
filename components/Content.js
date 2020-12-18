import Markdown from 'react-markdown'

const Content = ({ text, ...props }) => {
  return <Markdown
    {...props}
    allowDangerousHtml
    renderers={{
      heading: ({ level, children }) => {
        switch (level) {
          case 1:
            const __html = children.map(({ props }) => props.value).join('')
            return <h1 dangerouslySetInnerHTML={{ __html }} />
          case 2:
            return <h2>{children}</h2>
          case 3:
            return <h3>{children}</h3>
          case 4:
            return <h4>{children}</h4>
          case 5:
            return <h5>{children}</h5>
          case 6:
            return <h6>{children}</h6>
        }
      }
    }}
    children={text}
  />
}

export default Content