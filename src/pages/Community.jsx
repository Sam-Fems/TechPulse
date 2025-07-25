import React from 'react'
import { Comment, CommentForm, CreateThreadForm, ThreadCard } from '../components/community'

const Community = () => {
  return (
    <>
      <Comment />
      <CommentForm />
      <CreateThreadForm />
      <ThreadCard />
    </>
  )
}

export default Community