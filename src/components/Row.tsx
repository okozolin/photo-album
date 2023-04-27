import React from 'react';
import styled from 'styled-components';
import { platformColors } from '../constants/colors'
import {Field, FieldWidth, RowProps} from "../types";

const RowContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Column = styled.div`
  flex: 1;
  border: 1px solid ${platformColors.darkGrey};
  padding: 10px;
  font-size: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  background-color: ${platformColors.lila};
`;
const FieldItem = styled(Column)<FieldWidth>`
  flex-basis: ${props => props.width};
`
const Row: React.FC<RowProps> = ({ fields }) => {
    return (
        <RowContainer>
            {fields.map((field:Field) => (
                <FieldItem key={field.content} width={field.width}>
                    {field.content}
                </FieldItem>
            ))}
        </RowContainer>    );
}

export default Row;
