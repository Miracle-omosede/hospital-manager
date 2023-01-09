import React from 'react'
import './Login.css';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function LoginForm() {
    
const [showPassword, setShowPassword] = React.useState(false);

const handleClickShowPassword = () => setShowPassword((show) => !show);

const handleMouseDownPassword = (event) => {
  event.preventDefault();
};
  return (
                        <div className="">
                            <h1 className='my-3 mx-3 font-bold flex items-start justify-start text-2xl'>Welcome back</h1>

                            {/* input - section */}
                            <div>
                            
                            <div className='my-2'>
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">

                            <TextField
                                id="outlined-password-input"
                                label="username"
                                type="text"
                                autoComplete="current-password"
                                color='secondary'
                            />
                            </FormControl>
                            </div>

                            <div>
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            color='secondary'
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
                            </div>
                            <div className="ml-2 w-full" id='checker'>
                            <FormGroup>
                                 <FormControlLabel control={<Checkbox defaultChecked />} className="text-sm" label="Remember me" />
                            </FormGroup>
                            </div>
                            <div className="py-1">
                                <p className='tracking-tighter text-sm ml-2 text-blue-500'>Don't have an account <Link to='/signupForm' className='underline'>sign-up</Link></p>
                            </div>

                            <div className='mt-4 px-1'>
                            <Button variant="contained" className="w-full mx-3 mt-3">Submit</Button>
                            </div>
                            </div>

                        </div>
  )
}

export default LoginForm