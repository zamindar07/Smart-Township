import { message } from "antd";

export type UserAddType = {
    firstName: string;
    lastName: string;
    emailID: string;
    password: string;
    contactNo: any,
    wingNO: any,
    floor: any;
    flatNo: any;
    isAdmin?: boolean;
}
export type UserType = {
    id: any;
} & UserAddType;

export function GetUsers(): Array<UserType> {
    const users = localStorage.getItem("users");
    if (users) {
        const arr = JSON.parse(users);
        return arr as Array<UserType>;
    }

    return [];
}

export function AddUser(user: UserAddType) {
    const allUsers = GetUsers();
    allUsers.push({ id: allUsers.length+1, ...user });
    localStorage.setItem("users", JSON.stringify(allUsers));
}

export function SetCurrentUser(user: UserType | null) {
    const userString = JSON.stringify(user);
    localStorage.setItem("currentUser", userString);
}

export function GetCurrentUser(): UserType | null {
    const user = localStorage.getItem("currentUser");
    if (user) {
        return JSON.parse(user);
    } else {
        return null;
    }
}


export type TicketAddType = {
    subject: string;
    description: string;
    userId: any;
    userName: any;
}
export type TicketType = {
    id: any;
    isResolve: boolean;
} & TicketAddType;

export function GetAllTickets(): Array<TicketType> {
    const tickets = localStorage.getItem("tickets");
    if (tickets) {
        const arr = JSON.parse(tickets);
        return arr as Array<TicketType>;
    }
    return [];
}

export function GetMyTickets(userId: any): Array<TicketType> {
    const tickets = localStorage.getItem("tickets");
    if (tickets) {
        const arr: Array<TicketType> = JSON.parse(tickets);
        return arr.filter(a => a.userId === userId);
    }
    return [];
}

export function AddTicket(ticket: TicketAddType) {
    const AllTickets = GetAllTickets();
    AllTickets.push({ id: AllTickets.length+1, isResolve: false, ...ticket });
    localStorage.setItem("tickets", JSON.stringify(AllTickets));
}

export function UpdateTicket(ticket: TicketType) {
    const allTicket = GetAllTickets();
    const filteredTicket = allTicket.filter(t => t.id !== ticket.id);
    filteredTicket.push(ticket);
    localStorage.setItem("tickets", JSON.stringify(filteredTicket));
    message.success("Updated Successfully");

}