import { Link } from 'react-router-dom';

interface ActiveLinkTabPropsType {
  to: string;
  state: string;
  className?: string;
  classNameTab: string;
  linkText: string | undefined;
  onClick: () => void;
}

function ActiveLinkTab({
  to,
  state,
  onClick,
  classNameTab,
  className,
  linkText
}: ActiveLinkTabPropsType) {
  return (
    <button
      onClick={onClick}
      style={{ display: 'block', width: '100%' }}
    >
      <Link
        to={to}
        className={`${state === classNameTab ? 'active link-tab' : 'link-tab'} ${className}`}
        style={{
          padding: '8px 10px',
          display: 'block',
          width: '100%'
        }}
      >
        {linkText}
      </Link>
    </button>
  );
}

export default ActiveLinkTab;
