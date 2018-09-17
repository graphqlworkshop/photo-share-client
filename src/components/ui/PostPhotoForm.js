import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton/RaisedButton'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import styled from 'styled-components'

const Container = styled.div`
    position: relative;
    width: 100%;
    margin: 20px;
`

const Image = styled.img`
    width: 100%;
`
const ButtonMenu = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-top: 20px;
    >div {
        margin-left: 20px;
    }
`

const Form = styled.form`
    margin-bottom: 50px;
`

export class PostPhotoForm extends Component {
    
    constructor({ photoFile, photoSrc }) {
        super() 

        if (photoFile && photoFile.type !== 'image/jpeg') {
            console.error(`Can only upload jpeg images`)
            photoFile = null
        }

        this.state = {
            file: photoFile,
            src: photoSrc,
            title: '', 
            description: '', 
            category: 'PORTRAIT',
            formError: {
                title: null
            }
        }

        this.selectPhoto = this.selectPhoto.bind(this)
        this.isRequired = this.isRequired.bind(this)
        this.submit = this.submit.bind(this)
    }

    componentDidMount() {
        if (!this.state.file) {
            this.refs.uploadFile.click()
        }
    }

    componentWillReceiveProps({ photoFile, photoSrc }) {
        if (photoFile && photoFile.type !== 'image/jpeg') {
            console.error(`Can only upload jpeg images`)
        } else {
            this.setState({ file: photoFile, src: photoSrc })
        }
    }

    selectPhoto() {
        if (this.refs.uploadFile.files && this.refs.uploadFile.files.length) {
            var reader = new FileReader()
            reader.onload = e => {
                this.setState({ 
                    file: this.refs.uploadFile.files[0],
                    src: e.target.result,
                    photoLocation: this.refs.uploadFile.value
                })
            }
            reader.readAsDataURL(this.refs.uploadFile.files[0])
        }
    }

    isRequired(field, value, message='required') {
        if (!value) {
            this.setState(state => ({
                formError: {
                    ...state.formError,
                    [field]: message
                }
            }))
            return false
        } else {
            this.setState(state => ({
                formError: {
                    ...state.formError,
                    [field]: null
                }
            }))
            return true
        }
    }

    submit(e) { 

        e.preventDefault()

        const { onSubmit=f=>f } = this.props

        if (!this.state.file) {
            return this.refs.uploadFile.focus()
        }
        
        if (!this.isRequired('title', this.state.title, 'A Photo Title is required')) {
            return false
        }
        
        const { title, description, category, file } = this.state
        onSubmit({ name: title, description, category, file })

    }

    render() {
        const { src, formError, title, description, category } = this.state
        const { onCancel=f=>f } = this.props
        return (
            <Container>

                {src ? <Image src={src} /> : 
                    <input
                        type="file"  
                        style={{ padding: '5px', outlineColor: 'red'}}
                        ref="uploadFile" 
                        accept="image/jpeg"
                        onChange={this.selectPhoto} /> }
      
                <Form onSubmit={this.submit}>

                    <TextField 
                        value={title}
                        onChange={({target}) => this.setState({title: target.value})}
                        floatingLabelText="Photo Title" 
                        onBlur={({target}) => this.isRequired('title', target.value, 'A photo title is required.')}
                        errorText={formError.title}
                        fullWidth={true} />
                
                    <TextField 
                        value={description}
                        onChange={({target}) => this.setState({description: target.value})}
                        multiLine={true}
                        errorText={formError.description}
                        floatingLabelText="Photo Description" fullWidth={true} />
                    
                    <SelectField 
                        value={category}
                        onChange={(e, index, category) => this.setState({category})}
                        floatingLabelText="Photo Category" 
                        fullWidth={true}>
                        <MenuItem value="PORTRAIT" primaryText="Portrait" />
                        <MenuItem value="LANDSCAPE" primaryText="Landscape" />
                        <MenuItem value="ACTION" primaryText="Action" />
                        <MenuItem value="GRAPHIC" primaryText="Graphic" />
                    </SelectField>
                    
                    <ButtonMenu>
                        <RaisedButton label="Post Photo" primary={true} onClick={this.submit} />
                        <RaisedButton label="Cancel" onClick={onCancel} />
                    </ButtonMenu>
                
                </Form>   
                   
            </Container>
        )
    }

}