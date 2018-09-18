import React from 'react'
import { POST_PHOTO } from '../operations'
import { Mutation } from 'react-apollo'
import { PostPhotoForm } from './ui'

const PostPhoto = ({ history, location }) => {

    const photoFile = location.state && location.state.photoToUpload
    const photoSrc = location.state && location.state.photoSrc
    const token = localStorage.getItem('token')

    if (!token) {
        history.replace('/')
    }

    return (
        <Mutation mutation={POST_PHOTO}>
            {mutation => 
                <PostPhotoForm 
                    photoFile={photoFile} 
                    photoSrc={photoSrc} 
                    onSubmit={input => {
                        console.log(input)
                        mutation({ variables: { input }})
                            .then(() => history.push('/'))
                            .catch(console.error)
                    }} 
                />
            }
        </Mutation>
    )
}
    

export default PostPhoto    