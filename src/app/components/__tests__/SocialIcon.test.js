import React from 'react';
import { render, screen } from '@testing-library/react';
import SocialIcon from '../SocialIcon';

describe('SocialIcon Component', () => {
  test('renders with string icon path', () => {
    render(
      <SocialIcon 
        name="Test Icon" 
        href="https://example.com" 
        icon="/icons/test.svg" 
      />
    );
    
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveAttribute('aria-label', 'Test Icon');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    
    // Check if Image component is rendered
    const image = screen.getByAltText('Test Icon icon');
    expect(image).toBeInTheDocument();
  });

  test('renders with React element icon', () => {
    const testIcon = <div data-testid="test-icon">Icon</div>;
    
    render(
      <SocialIcon 
        name="Test Icon" 
        href="https://example.com" 
        icon={testIcon} 
      />
    );
    
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://example.com');
    
    // Check if the React element is rendered
    const icon = screen.getByTestId('test-icon');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveTextContent('Icon');
  });
});