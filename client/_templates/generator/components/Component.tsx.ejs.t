---
to: <%= dir.replace(/\/$/, '') %>/<%= componentName %>/index.tsx
---
<% if (haveProps) { -%>
export type <%= componentName %>PropsType = {

};
<% } -%>
export const <%= componentName %> = <%= haveProps ? `({}: ${componentName}PropsType)` : '()' %> => (
  <div><%= componentName %></div>
);
