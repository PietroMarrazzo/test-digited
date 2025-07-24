import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./style/App.css";
import { Master } from "./components/Master";
import { PrimeReactProvider } from "primereact/api";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <PrimeReactProvider>
        <QueryClientProvider client={queryClient}>
          {/* Master component is the handler of generic and high logics shared between other components */}
          <Master />
        </QueryClientProvider>
      </PrimeReactProvider>
    </>
  );
}

export default App;
