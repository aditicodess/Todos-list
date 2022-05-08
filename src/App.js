import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";

function App() {
  const onDelete = ()=>{
    console.log("I am on Delete");
  }
  let todos = [
    { 
      sno: 1,
      title: "Go to the market",
      desc: "You need to go the market to get this job done"
    },
    { 
      sno: 2,
      title: "Go to the mall",
      desc: "You need to go the mall to get this job done"
    },
    { 
      sno: 3,
      title: "Go to the ghat",
      desc: "You need to go the ghat to get this job done"
    }
  ]
  return (
    <>
       <Header title="MyTodosList" searchbar={false}/>
       <Todos todos={todos} onDelete={onDelete}/>
       <Footer/>
    </>
  );
}

export default App;
