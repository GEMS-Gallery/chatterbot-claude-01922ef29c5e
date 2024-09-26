import Text "mo:base/Text";
import Error "mo:base/Error";
import Debug "mo:base/Debug";

actor {
  public func callAnthropicAPI(userInput : Text) : async Text {
    // Simulate API response
    let simulatedResponse = "{\"content\":[{\"text\":\"This is a simulated response from Claude. You said: " # userInput # "\"}]}";
    
    Debug.print("Simulated API call with input: " # userInput);
    
    return simulatedResponse;
  };
}
