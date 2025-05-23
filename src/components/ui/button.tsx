import React from "react";
import styled from "styled-components";

interface ButtonProps {
  children?: React.ReactNode; // For text or elements
  icon?: React.ReactNode; // For passing icons
  iconPosition?: "left" | "right"; // Where the icon should appear
  onClick?: () => void; // Optional click handler
  type?: "button" | "submit" | "reset"; // ✅ Add this line
  disabled?: boolean; // ✅ Add disabled prop
  className?: string; // ✅ Allow custom class names
}


const Button = ({ children, icon, iconPosition = "left", onClick }: ButtonProps) => {
  return (
    <StyledWrapper>
      <button className="button" onClick={onClick}>
        {icon && iconPosition === "left" && <span className="icon">{icon}</span>}
        {children}
        {icon && iconPosition === "right" && <span className="icon">{icon}</span>}
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    position: relative;
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
    padding-block: 0.5rem;
    padding-inline: 1.25rem;
    background-color: rgb(0 107 179);
    border-radius: 9999px;
    display: inline-flex; /* Inline-flex for dynamic width */
    align-items: center;
    justify-content: center;
    color: #ffffff;
    gap: 10px; /* Space between text and icon */
    font-weight: bold;
    border: 3px solid #ffffff4d;
    outline: none;
    overflow: hidden;
    font-size: 15px;
    cursor: pointer;
  }

  .icon {
    width: 20px;
    height: 20px;
    transition: all 0.3s ease-in-out;
  }

  .button:hover {
    transform: scale(1.05);
    border-color: #fff9;
  }

  .button:hover .icon {
    transform: translate(4px); /* Animate icon slightly */
  }

  .button:hover::before {
    animation: shine 1.5s ease-out infinite;
  }

  .button::before {
    content: "";
    position: absolute;
    width: 100px;
    height: 100%;
    background-image: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 30%,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0) 70%
    );
    top: 0;
    left: -100px;
    opacity: 0.6;
  }

  @keyframes shine {
    0% {
      left: -100px;
    }
    60% {
      left: 100%;
    }
    to {
      left: 100%;
    }
  }
`;

export { Button };
