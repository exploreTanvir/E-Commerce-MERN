import { Send } from "@mui/icons-material"
import "./newSletter.css"

const NewSletter = () => {
  return (
    <div className="newSletter flex-column d-flex  align-items-center justify-content-center">
        <h1 className="title mb-3">NewSletter</h1>
        <p className="desc mb-3">
        Get timely updates from your favorite products.
        </p>
        <div className="inputContainer row  justify-content-between">
            <input className="col-10 border-0 ps-4" type="email" placeholder="Your Email" />
        <button className="col-2 border-0"><Send/></button>

        </div>
    </div>
  )
}

export default NewSletter