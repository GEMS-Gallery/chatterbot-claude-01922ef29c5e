export const idlFactory = ({ IDL }) => {
  const Message = IDL.Record({ 'content' : IDL.Text, 'sender' : IDL.Text });
  return IDL.Service({
    'addMessage' : IDL.Func([IDL.Text, IDL.Text], [], []),
    'getClaudeResponse' : IDL.Func([IDL.Text], [IDL.Text], []),
    'getConversationHistory' : IDL.Func([], [IDL.Vec(Message)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
