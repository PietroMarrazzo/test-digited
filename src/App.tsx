import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./style/App.css";
import { Master } from "./components/Master";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* Master component is the navigation in app handler */}
        <Master />
      </QueryClientProvider>
    </>
  );
}

export default App;
