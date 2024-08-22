import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TooltipMessageOrder } from '../../../utils/Tooltip/TooltipMessageOrder/TooltipMessageOrder';

describe('TooltipMessageOrder Component', () => {
    const tooltipText = "This is a tooltip message";

    test('renders children correctly', () => {
        render(
            <TooltipMessageOrder text={tooltipText}>
                <button>Hover me</button>
            </TooltipMessageOrder>
        );

        const button = screen.getByText(/hover me/i);
        expect(button).toBeInTheDocument();
    });

    test('shows tooltip on hover', () => {
        render(
            <TooltipMessageOrder text={tooltipText}>
                <button>Hover me</button>
            </TooltipMessageOrder>
        );

        const button = screen.getByText(/hover me/i);
        expect(screen.queryByText(tooltipText)).not.toBeInTheDocument();
        fireEvent.mouseEnter(button);
        expect(screen.getByText(tooltipText)).toBeInTheDocument();
    });

    test('hides tooltip on mouse leave', () => {
        render(
            <TooltipMessageOrder text={tooltipText}>
                <button>Hover me</button>
            </TooltipMessageOrder>
        );

        const button = screen.getByText(/hover me/i);
        fireEvent.mouseEnter(button);
        expect(screen.getByText(tooltipText)).toBeInTheDocument();
        fireEvent.mouseLeave(button);
        expect(screen.queryByText(tooltipText)).not.toBeInTheDocument();
    });
});
