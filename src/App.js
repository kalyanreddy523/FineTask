import PrimarySearchAppBar from "./Navbarmui";
import MiniDrawer from "./sidebarmui";
import Content from "./Content";
import Grid from '@mui/material/Grid';

function App() {
  return (
    <>
    <PrimarySearchAppBar />
    <div className="container-fluid">
      <div className="row">         
        <div className="col-12 d-flex">
        <MiniDrawer/>
        <Content />
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
