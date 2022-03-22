import React from "react";
import './SummaryPage.css'

function SummaryPage() {
    return (
        <div className="SummaryPage_Container">
            <div className="SummaryPage__Image"></div>
            <div className="SummaryPage__TextArea">
                <h2 className="SummaryPage__Text__Header">Lorem ipsum dolor</h2>
                <p className="SummaryPage__Text__Paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pellentesque ultrices neque, ut fringilla turpis volutpat eget. Proin semper consequat sapien, ac vehicula sem maximus congue. Nullam sagittis bibendum scelerisque. Donec velit sapien, hendrerit in augue at, lobortis congue augue. Nam vulputate tellus at Vestibulum ultrices sit amet quam vel rutrum.
                <br /><br />
                Morbi sed mauris quis purus commodo fermentum. Integer sed feugiat purus, eu sagittis libero. Cras a magna non neque aliquam fringilla et et tortor. Quisque auctor elit leo, quis egestas enim efficitur vel. Mauris elementum enim lectus, ut laoreet velit mattis sit amet. Proin sit amet mollis lectus. Pellentesque id orci purus. Nam semper ornare ante, non sagittis erat. Vestibulum ut tempus ligula. Nam fringilla nibh cursus nulla varius tempus.</p>
            </div>
        </div>
    )
}

export default SummaryPage;