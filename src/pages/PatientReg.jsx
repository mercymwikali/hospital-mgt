import React from 'react';
import { Tabs, Avatar, Input, DatePicker, Select, Card } from 'antd';
import { BiEdit, BiCalendar } from 'react-icons/bi';
import { ReloadOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { TabPane } = Tabs;
const { Option } = Select;

const PatientReg = () => {
    return (
        <div className="card border-primary py-2 px-2">
        <div className="card-body">
          <div className="d-block d-md-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-end align-items-center gap-2">
              <ReloadOutlined style={{ fontSize: 20, padding: 8, cursor: 'pointer' }} />
              <BiEdit style={{ fontSize: 20, marginRight: 12, cursor: 'pointer' }} />
            </div>
            <h5 className="card-title h3">
              <u>Patient Registration</u>
            </h5>
            
          </div>
                <Tabs defaultActiveKey='1'>
                    <TabPane tab='Patient Information'>
                        <Avatar className="card-text" size={100}></Avatar>
                        <div className="row g-3 align-items-center justify-content-center">
                            <div className="col-12 col-md-4 text-primary">
                                <label className='py-1'>ID/Passport/Birth No:</label><Input

                                    defaultValue=""
                                />
                            </div>
                            <div className="col-12 col-md-4 text-primary">
                                <label className='py-1'>First Name :</label><Input

                                    defaultValue=""
                                />
                            </div>
                            <div className="col-12 col-md-4 text-primary">
                                <label className='py-1'>Middle Name :</label><Input

                                    defaultValue=""
                                />
                            </div>
                        </div>
                        <div className="row my-1 g-3 align-items-center justify-content-center">
                            <div className="col-12 col-md-4 text-primary">
                                <label className='py-1'>Date of Birth:</label><DatePicker size='medium'
                                    style={{
                                        width: '100%',
                                    }} />
                            </div>
                            <div className="col-12 col-md-4 text-primary">
                                <label className='py-1'>Choose Gender :</label><select className="form-select form-select-sm" aria-label="Default select example" style={{ border: '1px solid #67336d' }}>
                                    <option selected></option>
                                    <option value="female">Female</option>
                                    <option value="male">Male</option>
                                </select>
                            </div>
                            <div className="col-12 col-md-4 text-primary">
                                <label className='py-1'>Phone Number:</label><Input
                                    defaultValue=""
                                />
                            </div>
                        </div>
                        <div className="row g-3 my-1 align-items-center justify-content-center">
                            <div className="col-12 col-md-4 text-primary">
                                <label className='py-1'>Patient's Email:</label><Input

                                    defaultValue=""
                                />
                            </div>
                            <div className="col-12 col-md-4 text-primary">
                                <label className='py-1'>Next of Kin's Name :</label><Input

                                    defaultValue=""
                                />
                            </div>
                            <div className="col-12 col-md-4 text-primary">
                                <label className='py-1'>Next of Kin's Phone Number:</label><Input
                                    defaultValue=""
                                />
                            </div>
                        </div>
                        <div className="row g-3 my-1 align-items-center justify-content-center">
                            <div className="col-12 col-md-4 text-primary">
                                <label className='py-1'>Patient/Kin's Relationship:</label><select className="form-select form-select-sm" aria-label="Default select example" style={{ border: '1px solid #67336d' }}>
                                    <option value="--Select Relationship--" className='text-grey'>--Select Relationship--</option>
                                    <option value="Assistant Chairperson">Assistant Chairperson</option>
                                    <option value="Aunt">Aunt</option>
                                    <option value="Brother">Brother</option>
                                    <option value="Brother In Law">Brother In Law</option>
                                    <option value="Business Partner">Business Partner</option>
                                    <option value="Child">Child</option>
                                    <option value="Cousin">Cousin</option>
                                    <option value="Daughter">Daughter</option>
                                    <option value="Deputy Secretary">Deputy Secretary</option>
                                    <option value="Father">Father</option>
                                    <option value="Father In Law">Father In Law</option>
                                    <option value="Fiance">Fiance</option>
                                    <option value="Fiancee">Fiancee</option>
                                    <option value="Friend">Friend</option>
                                    <option value="Guardian">Guardian</option>
                                    <option value="Girlfriend">Girlfriend</option>
                                    <option value="Grand Daughter">Grand Daughter</option>
                                    <option value="Grand Father">Grand Father</option>
                                    <option value="Grand Son">Grand Son</option>
                                    <option value="Grandchild">Grandchild</option>
                                    <option value="Grandmother">Grandmother</option>
                                    <option value="Husband">Husband</option>
                                    <option value="Mother">Mother</option>
                                    <option value="Sister">Sister</option>
                                    <option value="Sister in Law">Sister in Law</option>
                                    <option value="Son">Son</option>
                                    <option value="Wife">Wife</option>
                                </select>
                            </div>
                            <div className="col-12 col-md-4 text-primary">
                                <label className='py-1'>Next of Kin's Name :</label><Input

                                    defaultValue=""
                                />
                            </div>
                            <div className="col-12 col-md-4 text-primary">
                                <label className='py-1'>Next of Kin's Phone Number:</label><Input
                                    defaultValue=""
                                />
                            </div>
                        </div>
                        <div className="row g-3 my-1 align-items-center justify-content-center">
                            <div className="col-12 col-md-4 text-primary">
                                <label className='py-1'>Patient Type:</label> <select className="form-select form-select-sm" aria-label="Default select example" style={{ border: '1px solid #67336d' }}>
                                    <option selected></option>
                                    <option value="Corporate">Corporate</option>
                                    <option value="Cash">Cash</option>
                                </select>
                            </div>
                            <div className="col-12 col-md-4 text-primary">
                                <label className='py-1'>Insurance:</label><select className="form-select form-select-sm" aria-label="Default select example" style={{ border: '1px solid #67336d' }}>
                                    <option selected></option>
                                    <option value="Corporate">Corporate</option>
                                    <option value="Cash">Cash</option>
                                </select>
                            </div>
                            <div className="col-12 col-md-4 text-primary">
                                <label className='py-1'>Membership No:</label><Input
                                    defaultValue=""
                                />
                            </div>
                        </div>
                    </TabPane>
                </Tabs>

                <div className="d-flex align-items-center justify-content-center gap-3 my-1">
                    <div className="d-flex flex-sm-column flex-md-row text-center gap-3 my-2">
                        <Link href="#" className="btn btn-primary">Save Patient</Link>
                        <Link href="#" className="btn btn-secondary">Create a Visit</Link>
                        <Link href="#" className="btn btn-primary">Reset Page</Link>
                    </div>
                </div>
            </div>
        </div >)
}

export default PatientReg