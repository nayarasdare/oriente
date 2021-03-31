import styled from 'styled-components';
export const Container = styled.div`
    background: white;
    padding: 0 0 0 60px;
    img{
        height:93px;
        position: absolute; 
        top: 5px;
    }
`;

export const Content = styled.div`
    height: 64px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    nav {
        width:10%;
        display: flex;
        height:100%;
        flex-direction: row;
        align-items: center;
        a{
            img {
                margin-top:0.5%;
                color: #1da1f2;
                width:38px;
                height: 38px;
            }   
        }
    }
    aside {
        width:90%;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        a{
            h3{
                color:black;
               
            }
        }
        display: flex;
        align-items: center;
    }
`;
export const Profile = styled.div`
    diplay: flex;
    margin-left: 20px;
    padding-left:20px;
    border-left: px solid #eee;
    div {
        text-align: right;
        margin-right: 10px;
        strong {
            display: block;
            color: #3333
        }
        button {
            padding: 4px 6px;
            border: 0;
            font-size: 16px;
            margin-top: 2px;
            color: #FFF;
            background: #1da1f2;
            border-radius: 5px;
        }
    }
`;