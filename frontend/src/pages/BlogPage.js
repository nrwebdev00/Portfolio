import React, { useEffect } from 'react';
import {  useSelector, useDispatch } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Paginate from '../components/Paginate';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listBlogs } from '../actions/blogActions.js'
import HeaderImage from '../images/blog-header.jpg'
const BlogPage = ({ history, match }) => {
    const pageNumber = match.params.pageNumber || 1
    const dispatch = useDispatch();

    const blogList = useSelector(state => state.blogList)
    const { loading, error, blogs, page, pages } = blogList;

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(()=>{
        dispatch( listBlogs('', pageNumber))
    },[dispatch, listBlogs])

    const limitText = (str) => {
        if(str.length > 500 ) {
            return (str.substring(0, 500) + "...")
        } else{
            return str
        }
    }

    console.log(blogs)
    return (
        <>
            <Row className='blog-page-title-wrapper' style={{ backgroundImage: `url(${HeaderImage})`}}>
                <Col className='justify-content-center blog-page-title'>
                    <h1 className='text-center my-5'>Nathon's Blog</h1>
                </Col>
            </Row>
            <Row>
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader />}
            </Row>
            <Container>
                {blogs.map((blog) =>(
                    <LinkContainer key={blog._id} to={`/blog/${blog._id}`}>
                        <Col>
                            <Card className='blog-card'>
                                <Row>
                                    <Col>
                                        <h2 className='blog-title' >{blog.title}</h2>
                                    </Col>
                                </Row>
                                <Row style={{ padding: '0 2%'}}>
                                    <Col md={2}>Author:</Col>
                                    <Col md={3}>{blog.userName}</Col>
                                    <Col md={2}>Created At:</Col>
                                    <Col md={3}>{blog.createdAt}</Col>
                                </Row>
                                <Row className='line-break'/>
                                <div style={{ padding: '2%' }}>
                                    <img className='blog-image' src={blog.image} />
                                    <p>{limitText(blog.text)}</p>
                                </div>
                                <Row className='line-break' />
                                <Row>
                                    <Col sm={1}>Likes:</Col>
                                    <Col sm={2}>2</Col>
                                    <Col sm={2}>Comments:</Col>
                                </Row>
                            </Card>
                        </Col>
                    </LinkContainer>
 
                ))}
            </Container>
        </>
    )
}

export default BlogPage
