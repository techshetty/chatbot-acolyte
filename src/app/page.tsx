import Header from "@/components/Header";
import { ChatInterface } from "@/components/chat-interface";

export default function Page() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <div className="flex flex-1 w-full">
        <ChatInterface />
      </div>
    </div>
  );
}