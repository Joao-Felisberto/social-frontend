import type { Component } from 'solid-js';
import Login from './login/Login';
import ChatArea from './main_page/chat/ChatArea';
import ChatMessage from './main_page/chat/ChatMessage';
import Sidebar from './main_page/sidebar/Sidebar';

const App: Component = () => {
  return (
    // <p class="text-4xl text-s-red text-center py-20">Hello tailwind!</p>
    // <Login />
    <div class='flex'>
      <div class='flex-1' style="max-width: 8%;">
        <Sidebar />
      </div>
      <div class='flex-auto self-end'>
          {/* Messages */}
          <ul>
            <ChatMessage msg='Lorem ipsum dolor sit amet'/>
            <ChatMessage msg='Lorem ipsum dolor sit amet'/>
            <ChatMessage msg='Lorem ipsum dolor sit amet'/>
          </ul>
        <ChatArea />
      </div>
    </div>
  );
};

export default App;
