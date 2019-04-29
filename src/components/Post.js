import React, { Fragment } from 'react'
import PostHeader from './PostHeader'
import PropTypes from 'prop-types'

const Post = props => {
  return (
    <div className="posts">
      <ul>
        {props.posts.map(p => (
          <li>
            <PostHeader post={p} />
            <div className="content">{p.content}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Post
