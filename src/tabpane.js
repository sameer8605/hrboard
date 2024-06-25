import ContactForm from "./contactform";

const TabPane = ()=>{
    return(
        <div >
      <ul class="nav nav-tabs bg-white " >
<li class="nav-item"> <a href="#basic" data-bs-toggle = "tab" class="nav-link active">
    <span class="nav-text ">Configuration</span>
</a></li>

<li class="nav-item"> <a href="#preview" data-bs-toggle="tab" class="nav-link">
    <span class="nav-text">Employee List</span>
</a> </li>
<li class="nav-item active"><a href="#forms" data-bs-toggle="tab" class="nav-link active">
    <span class="nav-text ">Add Employee</span>
</a> </li>
<li class="nav-item"> <a href="#reports" data-bs-toggle="tab" class="nav-link">
    <span class="nav-item ">Repots</span> </a></li>
</ul>

<div class="tab-content mt-4">
<div class="tab-pane " id="basic">
   tab1
</div>
<div class="tab-pane " id = "preview">
    tab2
</div>

<div class="tab-pane active" id = "forms">
    <ContactForm />
</div>
<div class="tab-pane" id = "reports">
tab4
</div>
</div>

        </div>
    )
}
export default TabPane;