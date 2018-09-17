import React from 'react'
import Card from 'material-ui/Card/Card'
import CardHeader from 'material-ui/Card/CardHeader'
import CardMedia from 'material-ui/Card/CardMedia'
import CardTitle from 'material-ui/Card/CardTitle'
import CardText from 'material-ui/Card/CardText'
import { Loading } from './'
import styled from 'styled-components'
import moment from 'moment'

const Photos = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    padding 50px;

    >div {
        margin: 10px;
        flex-grow: 1;
    }
`

const PhotoImg = styled.div`
    width: 200px;
    height: 400px;
    background-size: cover;
    background-position: center center;
`

export const PhotoCards = ({ photos=[], loading=false }) => loading ?
    <Loading /> :
    <Photos>
        {photos.map(photo => 
            <Card key={photo.id}>
                <CardHeader 
                    title={`by ${photo.postedBy.name}`}
                    subtitle={moment(photo.created).format('dddd, MMMM Do YYYY h:mma')}
                    avatar={photo.postedBy.avatar} />
                <CardMedia>
                    <PhotoImg style={{backgroundImage: `url(http://localhost:4000${photo.url})`}} />
                </CardMedia>  
                <CardTitle><h2>{photo.name}</h2></CardTitle>
                <CardText>{photo.category}: {photo.description}</CardText>
            </Card>
        )}
    </Photos>