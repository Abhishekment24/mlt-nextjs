import styled from "@emotion/styled";

export const ListItem = styled.li`
  margin: 0px;
  white-space: nowrap;
  cursor: pointer;
  transition: color 0.2s ease 0s;
  list-style: none;
  color: rgb(255, 255, 255);
  /* border-bottom: 2px solid #17a2f1; */
  padding: 15px 30px;
  font-weight: 600;
  height: 54px;
  /*font-weight: 500;*/

  border-bottom: 2px solid
    ${(props) => (props.selected ? "#17a2f1" : "tranparent")};
  @media (max-width: 768px) {
    padding: 15px 20px;
  }
`;

export const ListItems = styled.div`
  display: block;
  line-height: 21px;

  color: ${(props) => (props.active ? "#000" : "#6c757d")};
  padding-top: 10px;
  margin-top: 25px;
  font-weight: 700;
  
  border-top: 1px solid ${(props) => (props.active ? "#000" : "#67707c")};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #000;
    border-top: 1px solid #000;
  }
`;
