import { Component, useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { EditorState, convertToRaw, convertFromRaw, Modifier } from 'draft-js'
import { draftToMarkdown, markdownToDraft } from 'markdown-draft-js'

class CustomOption extends Component {
  addStar = () => {
    const { editorState, onChange } = this.props
    const contentState = Modifier.replaceText(
      editorState.getCurrentContent(),
      editorState.getSelection(),
      '⭐',
      editorState.getCurrentInlineStyle(),
    )
    onChange(EditorState.push(editorState, contentState, 'insert-characters'))
  }

  render() {
    return (
      <div onClick={this.addStar}>⭐</div>
    )
  }
}

const Editor = dynamic(() => import('react-draft-wysiwyg').then(mod => mod.Editor), { ssr: false })

const MarkdownEditor = ({ value, onChange }) => {
  const initialState = convertFromRaw(markdownToDraft(value))
  const [state, setState] = useState(EditorState.createWithContent(initialState))

  useEffect(() => {
    onChange(draftToMarkdown(convertToRaw(state.getCurrentContent())))
  }, [state])

  return <Editor
    editorState={state}
    wrapperClassName="border-gray-300 border-2"
    editorClassName="px-3"
    toolbarStyle={{ backgroundColor: '#e2e8f0', position: 'sticky', top: 73, zIndex: 2 }}
    onEditorStateChange={setState}
    placeholder="Type here ..."
    toolbar={{
      options: ['inline', 'blockType', 'list', 'link', 'textAlign', 'image', 'history'],
    }}
    toolbarCustomButtons={[<CustomOption />]}
  />
}

export default MarkdownEditor