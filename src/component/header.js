import classes from './header.module.css';
const Header = ()=>{
    return(
        <div>     
               <div className="btn-toolbar p-2 ju" style={{background:'orange'}}>
    <button data-bs-target = "#menu" data-bs-toggle = "offcanvas" className="bi bi-justify btn-light"></button>
    <div className={classes.userprofile}>
        <span className='bi bi-person-circle'></span>
        <span>Mr John </span>
        <span className='bi bi-chevron-down'></span>
    </div>
</div>

<div className="offcanvas offcanvas-top w-25 h-100 border"   id = "menu">
 <div className="offcanvas-header bg-white text-center">
    <h6>Orange HRM</h6>
    <button className="btn btn-close-white btn-close" data-bs-dismiss = "offcanvas"></button>
    
 </div>

 <div className="offcanvas-body">
    <ul className={classes.list}>
        <li><span className='bi bi-person'> </span>Admin</li>
                    <li><span className='bi bi-circle'> </span>PM</li>
                    <li><span className='bi bi-box'> </span>Leave</li>
                    <li><span className='bi bi-clock'> </span>Time</li>
    </ul>
    </div>
</div>
</div>



    )
}
export default Header