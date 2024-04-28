import React from "react";
import styled from "styled-components";

function Form() {

    const [inputState, setInputState] = useState({
        title: "",
        amount: "",
        date: "",
        category: "",
        description: "",
    })

    const { title, amount, date, category, description } = inputState;

    return (
        <div>
            <FormStyled>
                <div className="input-control">
                    <input type="text" />
                </div>
            </FormStyled>
            {/* <h1>Form</h1> */}
        </div>
    )
}

const FormStyled = styled.form`

`;

export default Form;