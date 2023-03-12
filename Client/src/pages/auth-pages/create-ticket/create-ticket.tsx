import { Button, Card, Divider, Form, Input, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import NavBar from "components/nav-bar/nav-bar";
import { useHistory } from "react-router-dom";
import { AddTicket, GetCurrentUser } from "services/local-service";

function CreateTicketPage() {
    const history = useHistory();   
    const [form] = Form.useForm();
    const [modal, contextHolder] = Modal.useModal();

    const onFinish = (values: any) => {
        console.log('Success:', values);
        const currentUser = GetCurrentUser();

        if (currentUser) {
            const ticket = {
                userId: currentUser.id,
                userName: `${currentUser.firstName} ${currentUser.lastName}`,
                ...values
            };
            AddTicket(ticket);
            form.resetFields();
            modal.info({
                title: 'Ticket',
                content: "Success fully submitted your issue!",
                onOk() {
                    history.push("/tickets");
                }
            });
        }
    }
    return <div className="w-full h-full">
        <div><NavBar /></div>
        <div className="w-full flex justify-center p-10">
            <Card title="Create Ticket" className="w-[480px] bg-gray-200 ">
                <Form
                    form={form}
                    labelCol={{ span: 6 }}
                    layout="horizontal"
                    className="w-full"
                    onFinish={onFinish}
                >

                    <Form.Item label="Subject" name="subject" rules={[
                        {
                            required: true,
                            validateTrigger: "onSubmit",
                            message: "Please enter "
                        }]}>
                        <Input className="w-full" />
                    </Form.Item>
                    <Form.Item label="Description" name="description" className="w-full" rules={[
                        {
                            required: true,
                            validateTrigger: "onSubmit",
                            message: "Please enter "
                        }]}>
                        <TextArea rows={4} className="" />
                    </Form.Item>
                    <Divider />
                    <Form.Item>
                        <Button type="primary" className="px-4" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
        {contextHolder}
    </div>
}
export default CreateTicketPage;