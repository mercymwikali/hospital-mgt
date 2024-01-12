import React, { useState } from 'react';
import { Tabs, Avatar, Card, Button } from 'antd';
import { BiEdit, BiCalendar } from 'react-icons/bi';
import { ReloadOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import InputField from '../components/InputField';
import Calendar from '../components/Calendar';
import SelectField from '../components/SelectField';

const { TabPane } = Tabs;

const PatientReg = () => {
    const [idValue, setIdValue] = useState('');
    const [firstNameValue, setFirstNameValue] = useState('');
    const [middleNameValue, setMiddleNameValue] = useState('');
    const [phoneNumberValue, setPhoneNumberValue] = useState('');
    const [lastNameValue, setLastNameVale] = useState('');

    const [emailValue, setEmailValue] = useState('');
    const [kinNameValue, setKinNameValue] = useState('');
    const [kinPhoneNumberValue, setKinPhoneNumberValue] = useState('');
    const [patientType, setPatientType] = useState('');
    const [insurance, setInsurance] = useState('');
    const [membershipNoValue, setMembershipNoValue] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [relationship, setRelationship] = useState('');
    const [gender, setGender] = useState('');

    const handleInputChange = (fieldName) => (e) => {
        const value = e.target.value;
        switch (fieldName) {
            case 'id':
                setIdValue(value);
                break;
            case 'firstName':
                setFirstNameValue(value);
                break;
            case 'middleName':
                setMiddleNameValue(value);
                break;
            case 'lastName':
                setLastNameVale(value);
                break;
            case 'phoneNumber':
                setPhoneNumberValue(value);
                break;
            case 'email':
                setEmailValue(value);
                break;
            case 'kinName':
                setKinNameValue(value);
                break;
            case 'kinPhoneNumber':
                setKinPhoneNumberValue(value);
                break;
            // ... Add more cases for other fields
            default:
                break;
        }
        console.log(`${fieldName} Value:`, value);
    };


    const handleDateChange = (date) => {
        setSelectedDate(date);
        console.log('Selected Date:', date);
    };

    const handleRelationship = (value) => {
        setRelationship(value);
        console.log('Relationship:', value);
    };

    const handleGender = (value) => {
        setGender(value);
        console.log('Gender:', value);
    };

    const handlePatientType = (value) => {
        setPatientType(value);
        console.log('Patient Type:', value);
    };

    const handleInsuranceType = (value) => {
        setInsurance(value);
        console.log('Insurance Type:', value);
    };
    const GenderOptions = [
        { label: '--Select Gender--', value: '' },
        { label: 'Female', value: 'Female' },
        { label: 'Male', value: 'Male' },
    ];

    const InsuranceOptions = [
        { label: '--Select Insurance--', value: '' },
        { label: 'AAR', value: 'AAR' },
        { label: 'GA ', value: 'GA' },
        { label: 'Jubilee', value: 'Jubilee' },
        { label: 'UAP', value: 'UAP' },
        { label: 'Britam', value: 'Britam' },
        { label: 'APA', value: 'APA' },
        { label: 'CIC', value: 'CIC' },
        { label: 'NHIF', value: 'NHIF' },
    ];

    const PatientypeOptions = [
        { label: '--Select Patient Type--', value: '' },
        { label: 'Cash', value: 'Cash' },
        { label: 'Insurance', value: 'Insurance' },
        { label: 'Corporate Insurance', value: 'Corporate Insurance' },
    ];

    const relationshipOptions = [
        { label: '--Select Relationship--', value: '' },
        { label: 'Wife', value: 'Wife' },
        { label: 'Mother', value: 'Mother' },
        { label: 'Brother', value: 'Brother' },
        { label: 'Daughter', value: 'Daughter' },
        { label: 'Father', value: 'Father' },
        { label: 'Husband', value: 'Husband' },
        { label: 'Sister', value: 'Sister' },
        { label: 'Son', value: 'Son' },
        { label: 'Grandchild', value: 'Grandchild' },
        { label: 'Grand Son', value: 'Grand Son' },
        { label: 'Grand Father', value: 'Grand Father' },
        { label: 'Grandmother', value: 'Grandmother' },
        { label: 'Sister in Law', value: 'Sister in Law' },
        { label: 'Guardian', value: 'Guardian' },
        { label: 'Friend', value: 'Friend' },
        { label: 'Fiancee', value: 'Fiancee' },
        { label: 'Father In Law', value: 'Father In Law' },
        { label: 'Cousin', value: 'Cousin' },
        { label: 'Business Partner', value: 'Business Partner' },
    ];

    return (
        <div className="card border-primary py-2 px-2">
            <div className="card-body">
                <div className="d-block d-md-flex justify-content-center align-items-center">
                    <h5 className="card-title h3">
                        <u>Patient Registration</u>
                    </h5>
                </div>
                <Tabs defaultActiveKey='1'>
                    <TabPane tab='Patient Information'>
                        <Avatar className="card-text" size={100}></Avatar>
                        <div className="row g-3 align-items-center justify-content-center">
                            <div className="col-12 col-md-4 text-primary">
                                <label className='py-1'>ID/Passport/Birth No:</label>
                                <InputField
                                    onChange={handleInputChange('id')}
                                    value={idValue}
                                    disabled={false}
                                    type="text"
                                />
                            </div>
                            <div className="col-12 col-md-4 text-primary">
                                <label className='py-1'>First Name :</label>
                                <InputField
                                    onChange={handleInputChange('firstName')}
                                    value={firstNameValue}
                                    disabled={false}
                                    type="text"
                                />
                            </div>
                            <div className="col-12 col-md-4 text-primary">
                                <label className='py-1'>Middle Name :</label>
                                <InputField
                                    onChange={handleInputChange('middleName')}
                                    value={middleNameValue}
                                    disabled={false}
                                    type="text"
                                />
                            </div>
                        </div>
                        <div className="row my-1 g-3 align-items-center justify-content-center">
                            <div className="col-12 col-md-4 text-primary">
                                <label className='py-1'>Last Name :</label>
                                <InputField
                                    onChange={handleInputChange('Last Name')}
                                    value={lastNameValue}
                                    disabled={false}
                                    type="text"
                                />
                            </div>
                            <div className="col-12 col-md-4 text-primary">
                                <label className='py-1'>Date of Birth:</label>
                                <Calendar
                                    onChange={handleDateChange}
                                    value={selectedDate}
                                    disabled={false}
                                    placeholder="Select a date" />
                            </div>
                            <div className="col-12 col-md-4 text-primary">
                                <label className='py-1'>Choose Gender :</label>
                                <SelectField
                                    options={GenderOptions}
                                    placeholder="--Select Gender--"
                                    onChange={handleGender}
                                    value={gender}
                                    disabled={false}
                                />
                            </div>
                        </div>
                        <div className="row g-3 my-1 align-items-center justify-content-center">
                            <div className="col-12 col-md-4 text-primary">
                                <label className='py-1'>Phone Number:</label>
                                <InputField
                                    onChange={handleInputChange('phoneNumber')}
                                    value={phoneNumberValue}
                                    disabled={false}
                                    type="text"
                                />
                            </div>
                            <div className="col-12 col-md-4 text-primary">
                                <label className='py-1'>Patient's Email:</label>
                                <InputField
                                    onChange={handleInputChange('email')}
                                    value={emailValue}
                                    disabled={false}
                                    type="text"
                                />
                            </div>
                            <div className="col-12 col-md-4 text-primary">
                                <label className='py-1'>Next of Kin's Name :</label>
                                <InputField
                                    onChange={handleInputChange('kinName')}
                                    value={kinPhoneNumberValue}
                                    disabled={false}
                                    type="text"
                                />
                            </div>

                        </div>
                        <div className="row g-3 my-1 align-items-center justify-content-center">
                            <div className="col-12 col-md-4 text-primary">
                                <label className='py-1'>Next of Kin's Phone Number:</label>
                                <InputField
                                    onChange={handleInputChange('kinPhoneNumber')}
                                    value={kinPhoneNumberValue}
                                    disabled={false}
                                    type="text"
                                />
                            </div>
                            <div className="col-12 col-md-4 text-primary">
                                <label className='py-1'>Patient/Kin's Relationship:</label>
                                <SelectField
                                    options={relationshipOptions}
                                    placeholder="--Select Relationship--"
                                    onChange={handleRelationship}
                                    value={relationship}
                                    disabled={false}
                                />
                            </div>

                            <div className="col-12 col-md-4 text-primary">
                                <label className='py-1'>Patient Type:</label>
                                <InputField
                                    onChange={handleInputChange('middleName')}
                                    value={patientType}
                                    disabled={false}
                                    type="text"
                                />
                            </div>

                        </div>

                        <div className="row g-3 my-1">
                            <div className="col-12 col-md-4 text-primary">
                                <label className='py-1'>Insurance:</label>
                                <SelectField
                                    options={InsuranceOptions} kin
                                    placeholder="--Select Insurance--"
                                    onChange={handleInsuranceType}
                                    value={insurance}
                                    disabled={false}
                                />
                            </div>
                            <div className="col-12 col-md-4 text-primary">
                                <label className='py-1'>Membership No:</label>
                                <InputField
                                    onChange={handleInputChange('middleName')}
                                    value={membershipNoValue}
                                    disabled={false}
                                    type="text"
                                />
                            </div>
                        </div>
                    </TabPane>
                </Tabs>

                <div className="d-flex align-items-center justify-content-center gap-3 my-4">

                    <Button type="primary" onClick='CreatePatientVisit' disabled={false} block  >
                        Create Visit
                    </Button>
                </div>
            </div>
        </div >)
}

export default PatientReg;