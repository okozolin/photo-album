import React from "react";
import {DragDropContext} from "react-beautiful-dnd";
import {Photo} from "../../types";
import PhotoThumbnail from "../PhotoThumbnail";
import StrictModeDroppable from "./StrictModeDroppable";
import styled from "styled-components";

interface PhotoGridProps {
    photos: Photo[];
    onPhotoReorder: (result: any) => void;
    onRemove: (result: any) => void;
    onPhotoClick: (result: any) => void;

}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`
const PhotoGrid: React.FC<PhotoGridProps> = ({
                                                  photos,
                                                  onPhotoReorder,
                                                  onRemove,
                                                  onPhotoClick
                                             }) => {
    return (
        <DragDropContext onDragEnd={onPhotoReorder}>
            <StrictModeDroppable droppableId="expanded-photos">
                {(provided)=>(
                    <GridContainer
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {photos.map((photo, index) => (
                            <PhotoThumbnail
                                key={photo.id}
                                photo={photo}
                                index={index}
                                onRemove={onRemove}
                                onPhotoClick={onPhotoClick}
                            />
                        ))}
                        {provided.placeholder}
                    </GridContainer>
                )}
            </StrictModeDroppable>
        </DragDropContext>

    )
}

export default PhotoGrid;