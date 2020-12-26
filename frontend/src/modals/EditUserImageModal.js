import React from 'react'
import { Container } from 'react-bootstrap';
import DropZoneComponent from 'react-dropzone-component';
import "../../node_modules/react-dropzone-component/styles/filepicker.css"
import "../../node_modules/dropzone/dist/min/dropzone.min.css"

const EditUserImageModal = (props) => {
    const { userId } = props
    const componentConfig = () => {
        return{
            iconFileTypes: [".jpg", ".png", ".jpeg"],
            showFileIcon: true,
            postUrl: `/api/uploads/${userId}/userimage`
        }
    }
    const djsConfig = () =>{
        return{
            addRemoveLinks: true,
            maxFiles: 1
        }
    }

    return (
        <div>
            <div className="image-uploaders">
                <DropZoneComponent
                config={componentConfig()}
                djsConfig={djsConfig()}
                />
          </div>
        </div>
    )
}

export default EditUserImageModal
