import React from 'react';
import { CiCircleRemove } from "react-icons/ci";
import {Draggable} from "react-beautiful-dnd";

import {PhotoThumbnailProps} from '../types';
import Tooltip from "./Tooltip";
import styled from "styled-components";

const DraggableContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`
const CiCircleRemoveStyled = styled(CiCircleRemove)`
  position: absolute;
  top: 3px;
  left: 130px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: black;
  z-index: 2;
`

const PhotoThumbnail: React.FC<PhotoThumbnailProps> = ({
                                                           photo,
                                                           index,
                                                           onRemove,
                                                           onPhotoClick
                                                       }) => {

    const handleRemove = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
        e.stopPropagation()
        onRemove(photo.id);
    };

    return (
        <DraggableContainer>
            <Draggable draggableId={`photo-${photo.id}`} index={index}>
                {(provided)=> (
                    <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        onClick={()=>onPhotoClick(photo.id)}
                    >
                        <Tooltip title={photo.title}>
                            <img
                                src={photo.thumbnailUrl}
                                alt={`${photo.title}`}
                            />
                            <CiCircleRemoveStyled
                                onClick={handleRemove}
                            />
                        </Tooltip>
                    </div>
                )}
            </Draggable>
        </DraggableContainer>
    );
};

export default PhotoThumbnail;