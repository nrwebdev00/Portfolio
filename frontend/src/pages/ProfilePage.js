import React, { useState, useEffect } from 'react';
import {  Row, Col, Container, Button, Form } from 'react-bootstrap';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { FaEdit } from 'react-icons/fa'
import Message from '../components/Message';
import Loader from '../components/Loader';
import EditUserImageModal from '../modals/EditUserImageModal';
import EditProfileModal from '../modals/EditProfileModal';
import { getUserDetails, updateUserProfile } from '../actions/userActions';
import backGround from '../images/footerBg2.jpg';


const ProfilePage = ({location, history}) => {
    const [modal, setModal] = useState(false);
    const [updateImageModal, setUpdateImageModal ] = useState(false);
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');
    const [ message, setMessage ] = useState(null);

    const dispatch = useDispatch();

    const userDetails = useSelector((state) => state.userDetails)
    const { loading, error, user } = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin;

    const userUpdateProfile = useSelector(state => state.userUpdateProfile) 
    const { success } = userUpdateProfile;

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
            backgroundColor: '#002b36',
            color: 'white',
            fontFamily: "'Share Tech Mono', mono space",
            paddingTop: '4.5%',
        }
    }

    useEffect(() =>{
        if(!userInfo){
            history.push('/login')
        } else {
            if(!user.name){
                dispatch(getUserDetails('profile'))
            } else {
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [dispatch, history, userInfo, user])

    const submitHandler = (event) => {
        event.preventDefault();
        if(password !== confirmPassword){
            setMessage('Password do not match')
        } else {
            dispatch(updateUserProfile({ id: user._id, name, email, password }))
            setModal(false)
        }
    }
    console.log(user.image)
    return (
        <div className='profile' style={{backgroundImage: `url(${backGround})`}}>
            <Container>
            <Row className='profile-title'>
               <Col><h1>Profile Page</h1></Col>
           </Row>
           <Row className='d-flex justify-content-center'>
                <Col lg={8} className='text-center'>{success && <Message variant='primary'>Updated Profile</Message>}</Col>
                <Col lg={8} className='text-center'>{error && <Message variant='danger'>{error}</Message>}</Col>
                <Col log={8} className='text-center'>{loading && <Loader />}</Col>
           </Row>
            <Modal 
                isOpen={modal}
                toggle={toggle}
                onRequestClose={toggle}
                style={customStyles}
                ariaHideApp={false}
            >
                <EditProfileModal 
                    toggle={toggle}
                    message={message}
                    error={error}
                    onSubmit={submitHandler}
                    name={name}
                    email={email}
                    password={password}
                    confirmPassword={confirmPassword}
                    nameChange={(event)=>setName(event.target.value)}
                    emailChange={(event)=>setEmail(event.target.value) }
                    passwordChange={(event)=>setPassword(event.target.value)}
                    confirmPasswordChange={(event)=>setConfirmPassword(event.target.value)}
                />
            </Modal>
            <Modal 
                isOpen={updateImageModal}
                onRequestClose={updateImageToggle}
                style={customStyles}
                ariaHideApp={false}
            >

                <EditUserImageModal userId={user._id} />
            
            
            </Modal>
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
                    <img src={`/${user.image}`} alt='profile'/>
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
