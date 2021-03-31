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
    #subdiv{
        display:flex;
        flex-direction:column;
        margin-left:20%;
        img{
            margin-top:20%;
            width:200px;
            height:200px;
        }
        h3{
            margin-top:10%;
            max-width:440px;
        }
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
    div{
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:start;
        h3{
            max-width:240px;
        }
        img{
            width:200px;
            height:200px;
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
    min-height:904px;
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
    flex-direction:column !important;
    align-items:center !important;
    justify-content:center !important;
    h2{
        font-size:25px;
    }
`;