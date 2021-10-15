import React from "react";
import * as Ant from "react-icons/ai";

export const SidebarData = [
    {
        id: 1,
        title: "Home",
        path: "/",
        icon: <Ant.AiOutlineHome />,
        className: "nav-text",
    },
    {
        id: 2,
        title: "Products",
        path: "/product",
        icon: <Ant.AiOutlineShoppingCart />,
        className: "nav-text",
    },
    {
        id: 3,
        title: "Reports",
        path: "/report",
        icon: <Ant.AiOutlineBook />,
        className: "nav-text",
    },
    {
        id: 4,
        title: "Messages",
        path: "/messages",
        icon: <Ant.AiOutlineMessage />,
        className: "nav-text",
    },
    {
        id: 5,
        title: "Teams",
        path: "/teams",
        icon: <Ant.AiOutlineTeam />,
        className: "nav-text",
    },
    {
        id: 6,
        title: "Support",
        path: "/support",
        icon: <Ant.AiOutlineCustomerService />,
        className: "nav-text",
    },
];
