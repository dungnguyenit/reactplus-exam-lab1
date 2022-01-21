import React, { useState } from 'react'
interface Props {
  onCancel: () => void
  onOk?: () => void
}
export const AddUserForm: React.FC<Props> = ({ onCancel, onOk }) => {
  const [image, seImage] = useState('')
  const [name, setName] = useState('')
  const [content, setContent] = useState('')
  const handleAddUser = () => {
    fetch('https://5d36d86c86300e0014b647c7.mockapi.io/users', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        image: image,
        name: name,
        description: content
      })
    })
      .then(response => response.json())
      .then(e => {
        if (e) {
          console.log(e)
          // onCancel()
          alert('Da them thanh cong')
          onCancel()
        }
      })
      .catch(err => console.log(err))
      .finally(()=>{})
  }
  return (
    <div>
      <div className='field-input-group'>
        <input
          value={image}
          onChange={(e) => seImage(e.target.value)}
          placeholder='Avatar'
          type='text'
          className='ant-input'
        />
      </div>
      <div className='field-input-group'>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Name'
          type='text'
          className='ant-input'
        />
      </div>
      <div className='field-input-group'>
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder='Content'
          type='text'
          className='ant-input'
        />
      </div>
      <div className='modal-new-user-footer'>
        <button className='ant-btn ant-btn-primary' onClick={handleAddUser}>
          Save
        </button>
        <button
          className='ant-btn'
          style={{ marginLeft: 10 }}
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  )
}
