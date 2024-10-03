import React from 'react'
import { Button, ButtonGroup,Input } from '@chakra-ui/react'


const Navbar = () => {
    return (
        <div>
            <div style={{display:"flex",border:"1px solid red",width:"85%",margin:"auto" }} >
                <div style={{display:"flex",border:"1px solid green",width:"30%"}} >
                    <p style={{fontSize:"20px",fontStyle:"inherit"}}>BookStore</p>
                </div>
                <div style={{display:"flex",border:"1px solid green",width:"80%",justifyContent:"space-between"}} >
                    <div  style={{display:"flex",border:"1px solid blue"}} >    
                            <h1>Home</h1>
                            <h1>Course</h1>
                            <h1>Contact</h1>
                            <h1>About</h1>
                    </div>
                    <div>
                    <Input htmlSize={4} width='auto' />
                    </div>
                    <div>
                        <Button colorScheme='teal' size='xs'>
                            Button
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
