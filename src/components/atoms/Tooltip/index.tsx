import React, { useMemo } from 'react';
import Tippy from '@tippyjs/react';
import parse from 'html-react-parser';
import 'tippy.js/dist/tippy.css';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  placement = 'top',
  className = '',
}) => {
  const parsedContent = useMemo(() => parse(content), [content]);

  return (
    <Tippy
      content={<div className={className}>{parsedContent}</div>}
      placement={placement}
      arrow={true}
    >
      <div>{children}</div>
    </Tippy>
  );
};
