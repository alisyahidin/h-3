import Markdown from 'react-markdown'

const Content = ({ text, ...props }) => {
  return <Markdown
    {...props}
    allowDangerousHtml
    renderers={{
      heading: ({ level, children }) => {
      const __html = children.map(({ props }) => props.value).join('')
        switch (level) {
          case 1:
            return <h1 dangerouslySetInnerHTML={{ __html }} />
          case 2:
            return <h2 dangerouslySetInnerHTML={{ __html }} />
          case 3:
            return <h3 dangerouslySetInnerHTML={{ __html }} />
          case 4:
            return <h4 dangerouslySetInnerHTML={{ __html }} />
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