import React, {Component} from 'react';
import {Document, Page, Text, View, StyleSheet} from '@react-pdf/renderer';

    const styles = StyleSheet.create({
        page: {
            flexDirection: 'row',
            backgroundColor: '#E4E4E4'
        },
        section: {
            margin: 10,
            padding: 10,
            flexGrow: 1
        }
    });

    // constructor(props) {
    //     super(props);
    //
    // }


    const MyDocument = ({data}) => (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text>Driving School Register Payment Order</Text>
                    <br></br>
                    <Text>First name: {data.firstName}</Text>
                    <Text>Last name: {data.lastName}</Text>
                    <Text>Car option: {data.car}</Text>
                    <Text>Driving school price: {data.carDrivingSchoolPrice} </Text>
                </View>
                {/*<View style={styles.section}>*/}
                {/*    <Text>b</Text>*/}
                {/*</View>*/}
            </Page>
        </Document>
    );

export default MyDocument;