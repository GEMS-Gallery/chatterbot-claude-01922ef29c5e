export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'callAnthropicAPI' : IDL.Func([IDL.Text], [IDL.Text], []),
  });
};
export const init = ({ IDL }) => { return []; };
