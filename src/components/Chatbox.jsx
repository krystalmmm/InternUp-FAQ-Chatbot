"use client";

import React from 'react';

import { FullPageChat } from "flowise-embed-react";

function Chatbot() {
  return (
    <div>
      <FullPageChat
            chatflowid="3bee7265-681e-41fc-97c5-3c67163acb8d"
            apiHost="https://krystal.app.flowiseai.com"
        />
    </div>
  )
};

export default Chatbot;