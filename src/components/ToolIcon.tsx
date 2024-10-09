export const ToolIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component;
  return (
    <>
      <Component
        className="size-10"
        style={{ fill: "url(#tool-icon-gradient)" }}
      />
      <svg className="size-0 absolute">
        <linearGradient id="tool-icon-gradient">
          <stop offset="0%" stopColor="rgb(251 146 60)" />
          <stop offset="100%" stopColor="rgb(220 38 38)" />
        </linearGradient>
      </svg>
    </>
  );
};
