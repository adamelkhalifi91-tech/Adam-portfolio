type ToolMetaProps = {
  stack: string[];
};

export function ToolMeta({ stack }: ToolMetaProps) {
  return (
    <ul className="flex flex-wrap gap-x-3 gap-y-1">
      {stack.map((item) => (
        <li
          key={item}
          className="font-mono text-xs uppercase tracking-widest text-ink-subtle"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
