import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/layouts";


function Dashboard() {
    return (
        <DashboardStyled>
            <InnerLayout>
                <h1>Dashboard</h1>
                <div className="dashboard-content">
                    <div className="overview"></div>
                    <div className="expense"></div>
            </InnerLayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div``;

export default Dashboard;
