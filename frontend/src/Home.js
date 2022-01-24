import React, {Component} from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import {Link} from 'react-router-dom';
import {
    Button,
    Container,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap';

class Home extends Component {

    emptyItem = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: '',
        car: '',
        carDrivingSchoolPrice: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem,
            dropDownOpen: '',
            car: 'Car option',
            carDrivingSchoolPrice: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeCarDropdown = this.handleChangeCarDropdown.bind(this);
    }

    async componentDidMount() {
        if (this.props.match.params.id !== 'new') {
            const client = await (await fetch(`/success/${this.props.match.params.id}`)).json();
            this.setState({item: client});
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

    setDropDownOpen = () => {
        this.setState({
            dropDownOpen: !this.state.dropDownOpen,
        })
    }

    handleChangeCarDropdown(dpValue) {
        this.setState({car: dpValue})
        const VAT = 0.19;
        let price = 0;
        let priceWithoutVAT = 0;
        if (dpValue === 'Mini Cooper Manual') {
            priceWithoutVAT = 1848.7395;
            price = Math.round(priceWithoutVAT + VAT * priceWithoutVAT);
        } else if (dpValue === 'Mini Cooper Automatic') {
            priceWithoutVAT = 2100.84034;
            price = Math.round(priceWithoutVAT + VAT * priceWithoutVAT);
        } else if (dpValue === 'Renault Clio IV Manual') {
            priceWithoutVAT = 1596.63866;
            price = Math.round(priceWithoutVAT + VAT * priceWithoutVAT);
        } else if (dpValue === 'Renault Clio IV Automatic') {
            priceWithoutVAT = 1848.7395;
            price = Math.round(priceWithoutVAT + VAT * priceWithoutVAT);
        } else if (dpValue === 'BMW Series 1 Manual') {
            priceWithoutVAT = 1680.67227;
            price = Math.round(priceWithoutVAT + VAT * priceWithoutVAT);
        }
        this.setState({carDrivingSchoolPrice: price});
        let item = {...this.state.item};
        item.car = dpValue;
        item.carDrivingSchoolPrice = price;
        this.setState({item});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;

        await fetch('/api/driving-school' + (item.id ? '/' + item.id : ''), {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push(
            {
                pathname: '/success',
                state: this.state.item
            });
    }

    render() {
        const {item} = this.state;
        return (
            <div>
                <AppNavbar/>
                <Container>
                    <Form onSubmit={this.handleSubmit}>
                        <h3>
                            Personal data
                        </h3>
                        <FormGroup>
                            <Label for="firstName">First name</Label>
                            <Input type="text" name="firstName" id="firstName" value={item.firstName || ''}
                                   onChange={this.handleChange} autoComplete="firstName" required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="lastName">Last name</Label>
                            <Input type="text" name="lastName" id="lastName" value={item.lastName || ''}
                                   onChange={this.handleChange} autoComplete="lastName" required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email" value={item.email || ''}
                                   onChange={this.handleChange} autoComplete="email"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="phoneNumber">Phone number</Label>
                            <Input type="number" name="phoneNumber" id="phoneNumber" value={item.phoneNumber || ''}
                                   onChange={this.handleChange} autoComplete="phoneNumber" required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="address">Address</Label>
                            <Input type="text" name="address" id="address" value={item.address || ''}
                                   onChange={this.handleChange} autoComplete="address" required/>
                        </FormGroup>
                        <br></br>
                        <h3>
                            Choose your car
                        </h3>
                        <FormGroup>
                            <Dropdown isOpen={this.state.dropDownOpen} toggle={this.setDropDownOpen} size="lg"
                                      color="warning">
                                <DropdownToggle caret onChange={this.handleChange}>
                                    {this.state.car}
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem onClick={() => this.handleChangeCarDropdown("Mini Cooper Manual")}
                                                  dropDownValue="Mini Cooper Manual">
                                        Mini Cooper Manual
                                    </DropdownItem>
                                    <DropdownItem onClick={() => this.handleChangeCarDropdown("Mini Cooper Automatic")}
                                                  dropDownValue="Mini Cooper Automatic">
                                        Mini Cooper Automatic
                                    </DropdownItem>
                                    <DropdownItem onClick={() => this.handleChangeCarDropdown("Renault Clio IV Manual")}
                                                  dropDownValue="Renault Clio IV Manual">
                                        Renault Clio IV Manual
                                    </DropdownItem>
                                    <DropdownItem
                                        onClick={() => this.handleChangeCarDropdown("Renault Clio IV Automatic")}
                                        dropDownValue="Renault Clio IV Automatic">
                                        Renault Clio IV Automatic
                                    </DropdownItem>
                                    <DropdownItem onClick={() => this.handleChangeCarDropdown("BMW Series 1 Manual")}
                                                  dropDownValue="BMW Series 1 Manual">
                                        BMW Series 1 Manual
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </FormGroup>
                        <br></br>
                        <h4 onChange={this.handleChange} value={item.carDrivingSchoolPrice || ''}>
                            Price: {this.state.carDrivingSchoolPrice} lei
                        </h4>
                        <br></br>
                        <h3>
                            Payment details
                        </h3>
                        <FormGroup>
                            <Label for="cardHolder">Card holder</Label>
                            <Input type="text" name="cardHolder" id="cardHolder"
                                   onChange={this.handleChange} autoComplete="cardHolder" required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="cardNumber">Card Number</Label>
                            <Input type="text" name="cardNumber" id="cardNumber"
                                   onChange={this.handleChange} autoComplete="cardNumber" required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="cvv">CVV</Label>
                            <Input type="number" name="cvv" id="cvv"
                                   onChange={this.handleChange} autoComplete="cvv"/>
                        </FormGroup>
                        <br></br>
                        <FormGroup>
                            <Button color="primary" type="submit">Submit</Button>{' '}
                            <Button color="secondary" tag={Link} to="/">Cancel</Button>
                        </FormGroup>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default Home;