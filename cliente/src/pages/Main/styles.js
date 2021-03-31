import styled from 'styled-components';
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px;
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    textarea {
        flex: 1;
        border: 1px solid #eee;
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 16px;
    }
    aside {
        display: flex;
        justify-content: flex-end;
        button {
            margin: 5px 0 0;
            padding: 6px 16px;
            background: #666666;
            font-weight: bold;
            color: #fff;
            border: 0;
            border-radius: 100px;
            font-size: 16px;
        }
    }
`;
export const List = styled.ul`
    list-style: none;
    li {
        padding: 15px 0;
        display: flex;
        flex-direction: column;
        width: 100%;
        & + li {
            border-top: 1px solid #eee;
        }
        div {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin: 10px 0;
        }
        button {
            padding: 8px 10px;
            background: #dc3545;
            color: #fff;
            border: 0;
            font-size: 16px;
            border-radius: 5px;
        }
    }
`;