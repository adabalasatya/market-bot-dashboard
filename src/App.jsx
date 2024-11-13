import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import Dashboard from './components/Dashboard';
import ThemeToggle from './components/ThemeToggle';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-10 dark:bg-gray-800 transition-colors duration-100">
        <ThemeToggle />
        <Dashboard />
        <Toaster position="top-right" />
      </div>
    </QueryClientProvider>
  );
}

export default App;