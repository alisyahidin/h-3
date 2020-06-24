import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { EditorState, convertToRaw, convertFromRaw, AtomicBlockUtils } from 'draft-js'
import { draftToMarkdown, markdownToDraft } from 'markdown-draft-js'
import useMedia from 'hooks/useMedia'

const CustomOption = ({ onChange, editorState }) => {
  const { open, Component: Media } = useMedia()

  const addImage = (src) => {
    const entityData = { src, height: 'auto', width: 'auto' }
    const entityKey = editorState
      .getCurrentContent()
      .createEntity('IMAGE', 'MUTABLE', entityData)
      .getLastCreatedEntityKey()
    const newEditorState = AtomicBlockUtils.insertAtomicBlock(
      editorState,
      entityKey,
      '![alt text](/images/awards-1.png "Logo Title Text 1")'
    )
    onChange(newEditorState)
  }

  return (<>
    <div className="rdw-image-wrapper">
      <div className="rdw-option-wrapper" onClick={open}>⭐</div>
    </div>
    <Media onSelected={addImage} />
  </>)
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
    toolbarStyle={{ backgroundColor: '#e2e8f0', position: 'sticky', top: 70, zIndex: 2 }}
    onEditorStateChange={setState}
    placeholder="Type here ..."
    toolbar={{
      options: ['inline', 'blockType', 'list', 'link', 'image', 'history'],
      inline: {
        options: ['bold', 'italic', 'underline', 'strikethrough'],
      },
      list: {
        options: ['unordered', 'ordered'],
      },
    }}
    toolbarCustomButtons={[<CustomOption />]}
  />
}

export default MarkdownEditor