import React, { useState, useEffect } from 'react';
import {  Row, Col, Container, Button } from 'react-bootstrap';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { FaEdit } from 'react-icons/fa'
import Message from '../components/Message';
import Loader from '../components/Loader';
import { getUserDetails } from '../actions/userActions';
import EditProfileModal from '../modals/EditProfileModal';
import EditUserImageModal from '../modals/EditUserImageModal';
import defaultUser from '../images/defaultUser.jpg';
import backGround from '../images/footerBg2.jpg'

const ProfilePage = () => {
    const [modal, setModal] = useState(false);
    const [updateImageModal, setUpdateImageModal ] = useState(false);
    const dispatch = useDispatch();

    const userDetails = useSelector((state) => state.userDetails)
    const { loading, error, user } = userDetails

    const toggle = () => setModal(!modal);
    const updateImageToggle = () => setUpdateImageModal(!updateImageModal);

    const customStyles = {
        content :{
            width: '65%',
            height: '85%',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#839496',
            color: 'white',
            fontFamily: "'Share Tech Mono', mono space",
            paddingTop: '4.5%',
        }
    }
  

    useEffect(() =>{
        dispatch(getUserDetails('profile'))
    }, [dispatch])

    return (
        <div className='profile' style={{backgroundImage: `url(${backGround})`}}>
            <Container>
            <Modal 
                isOpen={modal}
                onRequestClose={toggle}
                style={customStyles}
            >
                <EditProfileModal toggle={toggle} />
            </Modal>
            <Modal 
                isOpen={updateImageModal}
                onRequestClose={updateImageToggle}
                style={customStyles}
            >
                <EditUserImageModal />
            </Modal>
           <Row className='profile-title'>
               <Col><h1>Profile Page</h1></Col>
           </Row>
           <Row>
               {error && <Message variant='danger'>{error}</Message>}
               {loading && <Loader />}
           </Row>
           <Row className='profile-body'>
               <h2>User Details</h2>
           </Row>
           <Row className='profile-body'>
               <Col md={4}>
                   Name:
               </Col>
               <Col md={6}>
                   {user.name}
               </Col>
               <Col md={2}>
                   <Button color="primary" onClick={toggle}>
                        <FaEdit />
                   </Button>
               </Col>
           </Row>
           <Row className='profile-body'>
               <Col md={4}>
                   Email:
               </Col>
               <Col md={6}>
                   {user.email}
               </Col>
               <Col md={2}>
                   <Button color="primary" onClick={toggle}>
                        <FaEdit />
                   </Button>
               </Col>
           </Row>
           <Row className='profile-body'>
               <Col md={4}>
                   Password:
               </Col>
               <Col md={6}>
                   ********
               </Col>
               <Col md={2}>
                   <Button color="primary" onClick={toggle}>
                        <FaEdit />
                   </Button>
               </Col> 
           </Row>
           <Row className='profile-body'>
               <h2>User Image</h2>
           </Row>
           <Row className='profile-body'>
               <Col>
                    <img src={defaultUser} alt='profile'/>
                    <Button color='primary' onClick={updateImageToggle}>
                        <FaEdit />
                    </Button>
               </Col>
           </Row>
           </Container>
        </div>
    )
}

export default ProfilePage
