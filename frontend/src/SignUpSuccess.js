import React, {Component, useEffect, useState} from 'react';
import {Card, CardText, CardTitle} from 'reactstrap';
import AppNavbar from './AppNavbar';
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
                {/*<CardText>*/}
                {/*    <PDFDownloadLink document={<MyReport data={data}/>} fileName="report.pdf">*/}
                {/*        {({blob, url, loading, error}) =>*/}
                {/*            loading ? 'Loading document...' : 'Get report'*/}
                {/*        }*/}
                {/*    </PDFDownloadLink>*/}
                {/*</CardText>*/}
            </Card>
        </div>
    );
}

export default SignUpSuccess;