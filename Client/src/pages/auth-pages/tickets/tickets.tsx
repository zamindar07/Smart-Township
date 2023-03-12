import { Button, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import NavBar from "components/nav-bar/nav-bar";
import { useState } from 'react';
import { GetAllTickets, GetCurrentUser, GetMyTickets, TicketType, UpdateTicket } from "services/local-service";


function TicketPage() {
    const currentUser = GetCurrentUser();
    const isAdmin = currentUser?.isAdmin;
    const [tickets, setTickets] = useState(isAdmin ? GetAllTickets() : GetMyTickets(currentUser?.id));

    const comounCols = [{
        title: 'Ticket Id',
        dataIndex: 'id',
        key: 'id',
        sorter: (a: any, b: any) => a.id - b.id,
    },
    {
        title: 'Subject',
        dataIndex: 'subject',
        key: 'subject'
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description'
    },
    {
        title: 'UserId',
        dataIndex: 'userId',
        key: 'userId',
        sorter: (a: any, b: any) => a.userId - b.userId,
    },
    {
        title: 'User Name',
        dataIndex: 'userName',
        key: 'userName'
    }
    ];
    const actionCol = [{
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: (ticket: TicketType) => <Button onClick={() => {
            ticket.isResolve = true;
            UpdateTicket(ticket);
            setTickets(isAdmin ? GetAllTickets() : GetMyTickets(currentUser?.id))
        }}>Resolved</Button>,
    }]
    const columns: ColumnsType<any> = isAdmin ? comounCols.concat(actionCol) : comounCols;
    return <div className="w-full h-full">
        < div > <NavBar /></div>
        <div className="w-full h-full flex flex-col space-y-4">
            <div className="bg-gray-50 p-10">
                <div className="text-2xl font-semibold">Open Issues</div>
                <Table dataSource={tickets.filter(x => !x.isResolve)} columns={columns} />
            </div>
            <div className="bg-gray-50 p-10">
                <div className="text-2xl font-semibold">Closed Issues</div>
                <Table dataSource={tickets.filter(x => x.isResolve)} columns={comounCols} />;
            </div>
        </div>
    </div >
}
export default TicketPage;