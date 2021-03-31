import styled from 'styled-components';
export const Content = styled.div`
    display: flex;
    flex-direction: row;
    margin: 30px;
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    width: 80%;
    margin-left:30px;
    input {
        border: 1px solid #eee;
        padding 10px 15px;
        border-radius: 4px;
        font-size: 16px;
        margin: 5px 0;
    }
    
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
    #divTodos{
        display:flex;
        flex-direction:row;
        padding:20px;
    }
    #div1{
        display:flex;
        flex-direction:column;
        width:50%;
        justify-content:space-between;
        align-items:start;
        div{
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            align-items:start;
        }
    }
    #div2{
        width:50%;
        img{
            width:350px;
            height:204px;
            margin-bottom:50px;
        }
        
    }
    
`;
export const Footer = styled.aside`
    background-color: #f5f8fa;
    color: #333;
    text-align: left;
    padding: 30px;
    font-size: 16px;
    a {
        
        color: #b3b3ff;
        text-decoration: none;
        :hover {
            text-decoration: underline;
        }
    }
`;

export const DivLogos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height:100%;
    min-height:304px;
    img{
        width:76px;
        height:76px;
    }
`;
export const HeadForm = styled.div`
    background-color:#CCC;
    width:100%;
    height:25%;
    padding:5px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    h2{
        font-size:25px;
    }
`;