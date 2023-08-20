import React from 'react'
import { Card, Divider, Space } from 'antd';
import { usePost } from '../../ContextStore/postStore';
import PostLayout from '../../Layout/PostLayout';
import "./listPost.css"
export default function ListPosts() {

  const { posts } = usePost();



  const RenderContent=({data})=>{
    return data.map(e=>{
        debugger
        return <>
                <Space key={e.title} direction="vertical" size={16}>
                    <Card  title={e.title} extra={<a href="#">More</a>} style={{ width: "87vw" }}>
                        <div className='main-content'>
                        <div>
                        {e.content}
                        </div>
                        
                        <div>
                            {e.timeStamp && new Date(e.timeStamp).toDateString()}
                        </div>
                        </div>
                    </Card>
                </Space>
                <Divider/>
                </>
    })
  }




  return (
    <PostLayout content={<RenderContent data={posts}/>}/>
  )
}
