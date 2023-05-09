


//create a Contact page that gives information about the team and how to contact us!  be a bit creative here, and be able to have users have a button that can send emails given the provided email in the team member's profile.
export default function ContactUs () {
    return (
<div className="aboutus section">

    <h2 className="text-align-center ">Meet the Team!</h2>
    <div className="row">
        <div className="col-md-4">
            <div className="card">
                <img className="h-auto max-w-full" src="John's picture.png" alt="John's picture"/>
                <div className="container">
                <h2>John Scicluna</h2>
                <p>Insert text here for John (short).</p>
                <p>John.email@gmail.com</p>
                <p><button className="button">Contact</button></p>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card">
                <img className="h-auto max-w-full" src="Jacob's picture.png" alt="Jacob's picture"/>
                <div className="container">
                <h2>Jacob Jeffries</h2>
                <p>Insert text here for Jacob (short).</p>
                <p>jeffries.info@gmail.com</p>
                <p><button className="button">Contact</button></p>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card">
                <img className="h-auto max-w-full" src="Jake's picture.png" alt="Jake's picture"/>
                <div className="container">
                <h2>Damian Galus</h2>
                <p>Insert text here for Damian (short).</p>
                <p>damian.galus@gmail.com</p>
                <p><button className="button">Contact</button></p> 
            </div>
        </div>
        <div className="col-md-4">
            <div className="card">
                <img className="h-auto max-w-full" src="Jake's picture.png" alt="Jake's picture"/>
                <div className="container">
                <h2>Ryan Mennemeier</h2>
                <p>Insert text here for Ryan (short).</p>
                <p>kalpha1865@gmail.com</p>
                <p><button className="button">Contact</button></p> 
            </div>
        </div>
    </div>
</div>
)
};
