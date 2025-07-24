import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./style/App.css";
import { Master } from "./components/Master";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* Master component is the handler of generic and high logics shared between other components */}
        <Master />
      </QueryClientProvider>
    </>
  );
}

export default App;
