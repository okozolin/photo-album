import React from "react";
import {FullSizePhotoProps} from "../../types";

const FullSizePhoto: React.FC<FullSizePhotoProps> = ({
                                                         selectedPhoto,
                                                         onPhotoCloseClick
                                                     }) => {
    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(0, 0, 0, 0.8)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
            }}
        >
            <div
                style={{
                    maxWidth: "90%",
                    maxHeight: "90%",
                    position: "relative"
                }}
            >
                <img
                    src={selectedPhoto.url}
                    alt={selectedPhoto.title}
                />
                <button
                    onClick={onPhotoCloseClick}
                    style={{
                        position: "absolute",
                        top: "8px",
                        right: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        background: "#000",
                        color: "#fff",
                        border: "none",
                        cursor: "pointer",
                        zIndex: 1,
                    }}
                >
                    X
                </button>
            </div>
        </div>
    )
}

export default FullSizePhoto;