function Contact(){
    return(
        <div className="Contact-form">
            <input name="name" type="text" className="form-control" placeholder="Your Name" required />
            <br />
            <input name="email" type="email" className="form-control" placeholder="Your Email" required/>
            <br/>
            <input name="mobile number" type="mobile number" className="form-control" placeholder="Your Mobile Number" required/>
            <br/>
            <textarea name="message/queries" className="form-control" placeholder="Message/Queries" row="4" required></textarea>
            <br/>
            <input type="submit" className="form-control submit" value="SEND MESSAGE"/>    
        </div> 
    )
}

export default Contact;