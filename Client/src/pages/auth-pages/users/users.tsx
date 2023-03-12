    import { Table } from 'antd';
import NavBar from "components/nav-bar/nav-bar";
import { useHistory } from 'react-router-dom';
import { GetCurrentUser, GetUsers, UserType } from "services/local-service";


function UsersPage() {
    const history = useHistory();
    const currentUser = GetCurrentUser();
    const isAdmin = currentUser?.isAdmin;
    if (!isAdmin) {
        history.push("/");
    }
    const users = GetUsers();

    const comounCols = [{
        title: 'UserId',
        dataIndex: 'id',
        key: 'id',
        sorter: (a: any, b: any) => a.id - b.id,
    },
    {
        title: 'Email',
        dataIndex: 'emailID',
        key: 'emailID'
    },
    {
        title: 'Name',
        key: 'x',
        render: (user: UserType) => user ? `${user.firstName} ${user.lastName}` : ""
    },
    {
        title: 'Contact No.',
        dataIndex: 'contactNo',
        key: 'contactNo'
    },
    {
        title: 'Wing NO',
        dataIndex: 'wingNO',
        key: 'wingNO'
    },
    {
        title: 'Floor',
        dataIndex: 'floor',
        key: 'floor'
    },
    {
        title: 'Flat NO',
        dataIndex: 'flatNo',
        key: 'flatNo'
    }
    ];

    return <div className="w-full h-full">
        < div > <NavBar /></div>
        <div className="w-full h-full flex flex-col space-y-4">
            <div className="bg-gray-50 p-10">
                <div className="text-2xl font-semibold">Users</div>
                <Table dataSource={users} columns={comounCols} />
            </div>
        </div>
    </div >
}
export default UsersPage;