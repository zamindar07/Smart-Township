/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import {
    Button,
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    message,
    Select,
    Switch,
    TreeSelect,
} from 'antd';
import { useHistory } from "react-router-dom";
import axios from "axios";
import { AddUser, GetUsers } from "services/local-service";

type SizeType = Parameters<typeof Form>[0]['size'];

function SignupPage() {
    const [form] = Form.useForm();
    const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');

    const onFormLayoutChange = ({ size }: { size: SizeType }) => {
        setComponentSize(size);
    };

    const history = useHistory();
    const onFinish = (values: any) => {
        console.log('Success:', values);

        const allUsers = GetUsers();

        if (allUsers.some(e => e.emailID === values.emailID)) {
            message.error("User Already registored");
            return;
        }
        AddUser({ id: allUsers.length, ...values });
        message.success("Signup Success. Please login");
        history.push("/");

        // axios.post("http://localhost:8080/residents", values).then(function (response) {
        //     console.log(response);
        //     message.success("Signup Success");
        //     history.push("/");
        // })
        //     .catch(function (error) {
        //         console.log(error);
        //         message.error("error");
        //     });
    };
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };


    return (
        <div className="h-screen w-full items-center justify-center flex" style={{
            backgroundImage: `url("./building.jpg")`
        }}>
            <div className="flex-col flex  bg-slate-100 p-10 rounded-lg m-auto">
                <h2 className="h2Styles">Become a Member</h2>
                <Form
                    form={form}
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                    onFinish={onFinish}
                    initialValues={{ size: componentSize }}
                    onValuesChange={onFormLayoutChange}
                    size={componentSize as SizeType}
                    style={{ width: 400 }}
                >
                    {/* <Form.Item label="Form Size" name="size">
                        <Radio.Group>
                            <Radio.Button value="small">Small</Radio.Button>
                            <Radio.Button value="default">Default</Radio.Button>
                            <Radio.Button value="large">Large</Radio.Button>
                        </Radio.Group>
                    </Form.Item> */}
                    <Form.Item label="First Name:" name="firstName" rules={[
                        {
                            required: true,
                            validateTrigger: "onSubmit",
                            message: "Please enter "
                        }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Last Name:" name="lastName" rules={[
                        {
                            required: true,
                            validateTrigger: "onSubmit",
                            message: "Please enter "
                        }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="EmailId:" name="emailID" rules={[
                        {
                            required: true,
                            validateTrigger: "onSubmit",
                            message: "Please enter email"
                        },
                        {
                            type: "email",
                            validateTrigger: "onSubmit",
                            message: "Please enter email"
                        }
                    ]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Password:" name="password" rules={[
                        {
                            required: true,
                            validateTrigger: "onSubmit",
                            message: "Please enter "
                        }]}>
                        <Input.Password />
                    </Form.Item>
                    <Form.Item label="Contact No.:" name="contactNo" rules={[
                        {
                            required: true,
                            validateTrigger: "onSubmit",
                            message: "Please enter "
                        }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item label="Wing No.:" name="wingNO" rules={[
                        {
                            required: true,
                            validateTrigger: "onSubmit",
                            message: "Please enter "
                        }]}>
                        <Input type="number" className="w-full" />
                    </Form.Item>
                    <Form.Item label="Floor:" name="floor" className="w-full" rules={[
                        {
                            required: true,
                            validateTrigger: "onSubmit",
                            message: "Please enter "
                        }]}>
                        <Select
                            className="w-full"
                            onChange={handleChange}
                            options={[
                                { value: '1', label: '1' },
                                { value: '2', label: '2' },
                                { value: '3', label: '3' },
                                { value: '4', label: '4' },
                                { value: '5', label: '5' },
                                { value: '6', label: '6' },
                                { value: '7', label: '7' }
                            ]}
                        />
                    </Form.Item>
                    <Form.Item label="Flat No.:" name="flatNo" rules={[
                        {
                            required: true,
                            validateTrigger: "onSubmit",
                            message: "Please enter "
                        }]}>
                        <Input type="number" className="w-full" />
                    </Form.Item>
                    {/* <Form.Item label="TreeSelect">
                        <TreeSelect
                            treeData={[
                                { title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] },
                            ]}
                        />
                    </Form.Item>
                    <Form.Item label="Cascader">
                        <Cascader
                            options={[
                                {
                                    value: 'Floor',
                                    label: 'Flat no',
                                    children: [{ value: 'flatNo', label: '101' },{value: 'flatNo', label: '102'},{value: 'flatNo', label: '103'}],
                                },
                            ]}
                        />
                    </Form.Item>
                    <Form.Item label="DatePicker">
                        <DatePicker />
                    </Form.Item>
                    <Form.Item label="InputNumber">
                        <InputNumber />
                    </Form.Item>
                    <Form.Item label="Switch" valuePropName="checked">
                        <Switch />
                    </Form.Item> */}
                    <div className="flex w-full space-x-2 justify-evenly">
                        <Button onClick={() => { form.resetFields(); }}>Reset</Button>
                        <Button onClick={() => { history.push("/"); }}>Cancel</Button>
                        <Form.Item className="">
                            <Button type="primary" htmlType="submit">
                                Signup
                            </Button>
                        </Form.Item>
                    </div>



                </Form>
            </div>
        </div >
    );
}
export default SignupPage;