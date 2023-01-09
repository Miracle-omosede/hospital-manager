import React from 'react'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function SignupForm() {
        
const [showPassword, setShowPassword] = React.useState(false);

const handleClickShowPassword = () => setShowPassword((show) => !show);

const handleMouseDownPassword = (event) => {
  event.preventDefault();
};

const [department, setDepartment] = React.useState('');

const handleChange = (event) => {
  setDepartment(event.target.value);
};

  return (
    <div>
      <h1 className="py-4 font-bold text-lg">Create an Account</h1>
      <div className="flex flex-row gap-1">
        <div>
          <TextField
            id=""
            label="Firstname"
            type="text"
            autoComplete="firstname"
            size="small"
          />
        </div>

        <div>
          <TextField
            id=""
            label="Lastname"
            type="text"
            autoComplete="lastname"
            size="small"
          />
        </div>
      </div>

      <div className="my-3">
        <TextField fullWidth label="Email" id="fullWidth" size="small" />
      </div>

      <div className="divide-x my-6">
        <hr />
      </div>

      <div className="flex flex-row gap-1">
        <div>
          <TextField
            id=""
            label="Username"
            type="text"
            autoComplete="Username"
          />
        </div>
        <div>
          <FormControl sx={{}} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              color="secondary"
              type={showPassword ? "text" : "password"}
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
      </div>

      <div className="my-2 flex flex-row">
        <div>
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">
              Department
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={department}
              label="Department"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Admin</MenuItem>
              <MenuItem value={20}>Doctor</MenuItem>
              <MenuItem value={30}>Receptionist</MenuItem>
              <MenuItem value={40}>Nurse</MenuItem>
              <MenuItem value={50}>Pharmacy</MenuItem>
            </Select>
            <FormHelperText>please select your department</FormHelperText>
          </FormControl>
        </div>

        <div className="ml-3">
          <TextField
            id=""
            label="Phone Number"
            type="number"
            autoComplete="Number"
          />
        </div>
      </div>
      <div className="py-1">
        <p className="tracking-tighter text-sm ml-2 text-blue-500">
          <span className="mr-1">Already have an account</span>
            <span>
              <Link to="/" className="underline">
            Log in
          </Link>
            </span>
          
        </p>
      </div>

      <div className="button w-full">
        <Button variant="contained" className="w-full mx-3 mt-3">
          SIGN UP
        </Button>
      </div>
    </div>
  );
}

export default SignupForm