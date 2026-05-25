import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import NewsUpdates from "@/pages/NewsUpdates";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import SuchAs from "./pages/SuchAs";
import HowToAcquire from "./pages/HowToAcquire";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import SelfTest from "./pages/SelfTest";
import Resources from "./pages/Resources";
import WallOfFlags from "./pages/WallOfFlags";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/news" component={NewsUpdates} />
      <Route path="/such-as" component={SuchAs} />
      <Route path="/how-to-acquire" component={HowToAcquire} />
      <Route path="/faq" component={FAQ} />
      <Route path="/contact" component={Contact} />
      <Route path="/self-test" component={SelfTest} />
      <Route path="/resources" component={Resources} />
      <Route path="/wall-of-flags" component={WallOfFlags} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
