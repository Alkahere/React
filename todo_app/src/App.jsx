import { Header } from './components/Header';
import { Todolist } from './components/Todolist';
import { Tabs } from './components/Tabs';
import {Todoinput} from './components/Todoinput';


export default function App() {
  return (
    <>
      <Header />
      <Todolist />
      <Tabs />
      <Todoinput />
    </> 
  
  );
}