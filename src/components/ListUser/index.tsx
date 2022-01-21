import { useEffect, useState } from 'react'
import './ListUser.css'

export const ListUser = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://5d36d86c86300e0014b647c7.mockapi.io/users', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(e=>{if(e)setData(e)})
      .catch(err => console.log(err))
  }, [])
  return (
    <div className='ant-list-items'>
      <div className='ant-list-item'>
        {data.map((item: any, index: number) => (
          <div key={index} className='ant-list-item-meta'>
            <div className='ant-list-item-meta-avatar'>
              <span className='ant-avatar ant-avatar-circle ant-avatar-image'>
                <img src={item.image} />
              </span>
            </div>
            <div className='ant-list-item-meta-content'>
              <h4 className='ant-list-item-meta-title'>
                <a>{item.name}</a>
              </h4>
              <div className='ant-list-item-meta-description'>{item.description}</div>
            </div>
            <ul className='ant-list-item-action'>
              <li>
                <a>Edit</a>
              </li>
              <li>
                <a>Remove</a>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
const data = [2, 4, 5, 63, 234, 324, 325, 325, 23, 5]
