class ConversationChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    conversation = Api::V1::Conversation.find(params[:id])
    stream_for conversation
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
