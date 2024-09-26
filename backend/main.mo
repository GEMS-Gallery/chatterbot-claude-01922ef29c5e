import Func "mo:base/Func";

import Array "mo:base/Array";
import Iter "mo:base/Iter";
import Text "mo:base/Text";

actor {
  // Type for chat messages
  type Message = {
    sender: Text;
    content: Text;
  };

  // Stable variable to store conversation history
  stable var conversationHistory: [Message] = [];

  // Function to add a message to the conversation history
  public func addMessage(sender: Text, content: Text) : async () {
    let newMessage: Message = {
      sender = sender;
      content = content;
    };
    conversationHistory := Array.append(conversationHistory, [newMessage]);
  };

  // Function to get the entire conversation history
  public query func getConversationHistory() : async [Message] {
    conversationHistory
  };

  // Function to simulate Claude's response
  public func getClaudeResponse(userMessage: Text) : async Text {
    // Simple response simulation
    let response = "As an AI assistant, I understand you said: \"" # userMessage # "\". How can I help you further?";
    
    // Add Claude's response to the conversation history
    await addMessage("Claude", response);
    
    response
  };

  // System functions for upgrades
  system func preupgrade() {
    // Conversation history is already in a stable variable
  };

  system func postupgrade() {
    // No need to restore state as we're using a stable variable
  };
}
