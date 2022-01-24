import React, {Component, useEffect, useState} from 'react';
import {Button, ButtonGroup, Card, CardText, CardTitle, Container, FormGroup, Table} from 'reactstrap';
import AppNavbar from './AppNavbar';
import {Link} from 'react-router-dom';
import {PDFDownloadLink} from '@react-pdf/renderer';
import MyDocument from './Document.js'
import {useLocation} from "react-router-dom";

const SignUpSuccess = () => {
    const location = useLocation();
    const [data, setData] = useState(location.state);

    return (
        <div>
            <AppNavbar/>
            <br></br>
            <Card body className="text-center">
                <CardTitle tag="h4" color="primary">
                    Payment successful
                </CardTitle>
                <br></br> <br></br>
                <CardText>
                    <PDFDownloadLink document={<MyDocument data={data}/>} fileName="payment_order.pdf">
                        {({blob, url, loading, error}) =>
                            loading ? 'Loading document...' : 'Get payment order'
                        }
                    </PDFDownloadLink>
                </CardText>
            </Card>
            <FormGroup>
            </FormGroup>
        </div>
    );
}

export default SignUpSuccess;