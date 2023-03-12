import { Button, Checkbox, Form, Input, message } from 'antd';
import { useHistory } from "react-router-dom";
import { GetUsers, SetCurrentUser } from "services/local-service";

function LoginForm() {
    const history = useHistory();
    const onFinish = (values: any) => {
        console.log('Success:', values);
        const users = GetUsers();
        console.log(users);
        const isAdmin = values.emailID === "admin@admin.com" && values.password === "admin";
        if (isAdmin) {
            let adminUser: any = users.find(u => u.emailID === values.emailID);
            if (!adminUser) {
                //Add
                adminUser = {
                    firstName: "Admin",
                    lastName: "Admin",
                    emailID: "admin@admin.com",
                    password: "admin",
                    contactNo: "12349844",
                    wingNO: "1",
                    floor: "1",
                    flatNo: "1",
                    isAdmin: true
                }
                SetCurrentUser(adminUser);
            }

            history.push("/home");
            return;
        }
        if (!users.some(u => u.emailID === values.emailID)) {
            message.error("Email is not found. Please registered yourself.")
            return;
        }
        const currentUser = users.find(u => u.emailID === values.emailID && u.password === values.password);
        if (currentUser) {
            SetCurrentUser(currentUser);
            history.push("/home");
        } else {
            message.error("Credentials Invalid");
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return <div className="flex-col flex w-[400px] bg-slate-100 p-10 rounded-lg m-auto">
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Email"
                name="emailID"
                rules={[
                    { required: true, message: 'Please input your email!' },
                    {
                        type: "email",
                        validateTrigger: "onSubmit",
                        message: "Please enter email"
                    }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>
            <div className="flex justify-between">
                <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </div>

        </Form>

        <div className="text-left"><Button type="link" onClick={() => history.push("/signup")}>singup</Button> </div>
    </div>
}
export default LoginForm;