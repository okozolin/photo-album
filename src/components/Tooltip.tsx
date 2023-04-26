import React, {useState} from "react";
import {TooltipProps} from "../types";
import styled from "styled-components";

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`
const TooltipWrapper = styled.div`
  position: relative;
  z-index: 1
`
const TooltipStyle = styled.div`
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  background: #000;
  color: #fff;
  border-radius: 4px;
  padding: 4px 8px;
  opacity: 0.9;
  transition: opacity 0.2s ease;
  width: 200px;
  pointer-events: none; // prevent flickering
  z-index: 1
`

const Tooltip: React.FC<TooltipProps> = ({ title, children }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleMouseEnter = () => {
        setShowTooltip(true);
    };

    const handleMouseLeave = () => {
        setShowTooltip(false);
    };

    return (
        <TooltipContainer>
            <TooltipWrapper
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {children}
            </TooltipWrapper>
            {showTooltip && (
                <TooltipStyle>
                    {title}
                </TooltipStyle>
            )}
        </TooltipContainer>
    );
};

export default Tooltip;
