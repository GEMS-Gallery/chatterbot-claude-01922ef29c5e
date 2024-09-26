import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Message { 'content' : string, 'sender' : string }
export interface _SERVICE {
  'addMessage' : ActorMethod<[string, string], undefined>,
  'getClaudeResponse' : ActorMethod<[string], string>,
  'getConversationHistory' : ActorMethod<[], Array<Message>>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
