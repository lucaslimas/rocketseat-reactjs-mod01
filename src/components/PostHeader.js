import React from 'react'

const PostHeader = props => {
  return (
    <div className="postheader contentH">
      <img className="avatar" src={props.post.avatar} />
      <div className="info contentV center">
        <strong>{props.post.name}</strong>
        <div className="dateinfo">{props.post.date}</div>
      </div>
    </div>
  )
}

export default PostHeader
