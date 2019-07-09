import styled from 'styled-components';

export const ButtonContainer=styled.button`
text-transform:capitalize;
height:3rem;
font-size:2rem;
background:transparent ;

margin:1rem;
border-color:${prop =>
    prop.cart? "var(--mainYellow)" : "var(--lightBlue)"};
color:${prop => prop.cart ? "var(--mainYellow)" : "var(--lightBlue)" };
      
border:0.05rem solid var(--lightBlue); 
color:var(--lightBlue);
border-radius:0.5rem ;
cursor:pointer;
padding:0.1rem;
transition:all 0.5s ease-in-out;
&:hover{
    background:${prop=>
        prop.cart? "var(--mainYellow)":"var(--lightBlue)"};
    color:var(--mainBlue);
}
&:focus{
    outline:none;
}
`;
