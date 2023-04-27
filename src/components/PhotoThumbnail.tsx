import React from 'react';
import { CiCircleRemove } from "react-icons/ci";
import {Draggable} from "react-beautiful-dnd";


import {PhotoThumbnailProps} from '../types';
import Tooltip from "./Tooltip";
import styled from "styled-components";

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
        <div
            style={{
                // opacity: isDragging ? 0.5 : 1,
                position: 'relative',
            }}
        >
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
                                alt={`Photo: ${photo.title}`}
                            />
                        </Tooltip>
                        <CiCircleRemoveStyled
                            onClick={handleRemove}
                        />
                    </div>
                )}
            </Draggable>
        </div>
    );
};

export default PhotoThumbnail;