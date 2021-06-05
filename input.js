import react, {component} from 'react'

class FormsAndInputs extends components {
    constructor(props){
        super(props){
            this.state ={
                rollnumber:''
            }
        }
    }
    handleSubmit = (event) => {
       event.preventDefault()
       const data = this.state
       console.log("final data is", data)
    }
    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.rollnumber]: event.target.value
        })

    }
    render () {
        const {rollnumber} = this.state
      return (
          <div>
              <h1>forms and inputs</h1>
              <p> rollnumber is : {rollnumber} </p>
              <form onSubmit = {this.handleSubmit}>
                  <p><input type = "text" placeholder = 'rollnumber' name = 'rollnumber' onchange={this.handleInputChange} /> </p>
                  <p><button>send message</button></p> 
              </form>
          </div>
      )  
    }
}

export default FormsAndInputs