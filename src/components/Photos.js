import React from 'react'
import { PhotoCards } from './ui'
import { Query } from 'react-apollo'
import { ROOT_QUERY } from '../operations'

const Photos = () => 
    <Query query={ROOT_QUERY}>
        {({ data, loading }) => 
            <PhotoCards photos={data.allPhotos} loading={loading} />
        }
    </Query>

export default Photos