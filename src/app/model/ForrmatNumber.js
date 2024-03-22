import React from "react";

const FormatNumber = ({number}) => {
    return Number(number).toLocaleString();
}
export default FormatNumber