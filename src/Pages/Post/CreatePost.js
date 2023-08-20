import React, { useState } from "react";
import PostLayout from "../../Layout/PostLayout";
import { Divider, Input, Button } from "antd";
import { usePost } from "../../ContextStore/postStore";
import "./createpost.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import {SendOutlined} from '@ant-design/icons';
const { TextArea } = Input;

export default function CreatePost() {
  const history = useHistory() ;
  const {addPosts} = usePost() ;
  
  const handlePublish=(data)=>{
    addPosts(data);
    history.push("/")
  }

  const RenderContent = () => {
    const [fieldData, setFieldData] = useState({title : "", content : ""});
    const handleFields =(data,type)=>{
        setFieldData({...fieldData, [type] : data})
        console.log({...fieldData, [type] : data})
    }
    return (
      <>
      <div className="blog-createpost-titlearea">
        <div>
        Title :
            <Input showCount maxLength={20} onChange={(e) => {handleFields(e.target.value , "title")}} />
        </div>
           <div>
           <Button
            type="primary"
            icon={<SendOutlined />}
            onClick={(e) => {handlePublish(fieldData)}}
            >
            Publish
        </Button>
           </div>
            
      </div>
        <Divider />
        Content :
        <TextArea
          style={{ height: "30vh" }}
          size="large"
          showCount
          maxLength={100}
          onChange={(e) => {handleFields(e.target.value , "content")}}
        />
      </>
    );
  };



  return <PostLayout content={<RenderContent />} />;
}
