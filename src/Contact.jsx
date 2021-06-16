import React from "react";
const Contact = () => {
return (
    <div className="my-5">
        <h3 className="text-center">Contact Us</h3>
    <div className="container contact_div">
        <div className="row">
            <div className="col-md-6 col-10 mx-auto">
             <form action="/action_page.php">
                 <div className="form-group">
                     <label for="Name">  Full Name </label>
                     <input className="form-control" type="text" placeholder="Name"></input><br></br>
                     <label for="Email"> Email Address </label>
                     <input className="form-control" type="email" placeholder="Email"></input><br></br>
                     <label for="Phone">  Phone </label>
                     <input className="form-control" type="number" placeholder="Mobile Number"></input><br></br>
                     <label for="exampleFormControlTextarea">  Message </label>
                     <input className="form-control" type="Message"></input><br></br>
                     <button className="btn btn-primary">Submit</button>
                 </div>
             </form>
            </div>
        </div>
</div>
    </div>
);
};
 export default Contact;