import React from 'react'
import { usePost } from '../../ContextStore/postStore';
import PostLayout from '../../Layout/PostLayout';

export default function DetailedPost() {
    const { posts } = usePost();



    const RenderContent=({data})=>{
         return data.map(e=>{
            return <Space key={e.title} direction="vertical" size={16}>
                        <Card  title={e.title} extra={<a href="#">More</a>} style={{ width: "87vw" }}>
                            {e.content}
                        </Card>
                    </Space>
        })
    }


  return (
    <PostLayout content={<RenderContent data={posts}/>}/>
  )
}
