import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/layouts";

function Income() {
    return (
        <IncomesStyled>
            <innerHeight>
                <h1>Incomes</h1>
                <div className="income-content">
                    <div className="form-container"></div>
                    <div className="incomes"></div>
                </div>
            </innerHeight>
        </IncomesStyled>
    )
}

const IncomesStyled = styled.div``;

export default Income;