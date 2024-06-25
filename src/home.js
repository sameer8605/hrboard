import TabPane from "./tabpane";
import classes from './home.module.css'
const Home = ()=>{
    return(
        <div className={classes.homebg}>
            <TabPane />
        </div>
    )
}
export default Home;