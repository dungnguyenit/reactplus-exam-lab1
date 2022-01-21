import { url } from 'inspector'
import { useEffect, useState } from 'react'
import { isTypeNode } from 'typescript'
import './ListUser.css'
import { Input, Modal } from "antd";



export const ListUser = () => {
  const [data, setData] = useState([])
  const [loading,setLoading]=useState(false)
  useEffect(() => {
    fetch('https://5d36d86c86300e0014b647c7.mockapi.io/users', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(e => {
        if (e) setData(e)
      })
      .catch(err => console.log(err))
  }, [loading])
  const xoa = (item: any) => {
    if (item && item.id)
      fetch('https://5d36d86c86300e0014b647c7.mockapi.io/users/' + item?.id, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(e => {
          // if (e) setData(e)
          setLoading(!loading)
        })
        .catch(err => console.log(err))
  }
  const sua = (item: any) => {
    if (item && item.id)
      fetch('https://5d36d86c86300e0014b647c7.mockapi.io/users/' + item?.id, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(e => {
          // if (e) setData(e)
          setLoading(!loading)
        })
        .catch(err => console.log(err))
  }
  
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
              <div className='ant-list-item-meta-description'>
                {item.description}
              </div>
            </div>
            <ul className='ant-list-item-action'>
              <li>
               <button onClick={()=>sua(item)}>Edit</button>
              </li>
              <li>
                <button onClick={()=>xoa(item)}>Remove</button>
              </li>
            </ul>
          </div>
        ))}
      </div>
      

    </div>
  )
}
// const data = []
