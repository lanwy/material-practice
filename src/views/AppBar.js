import React from 'react';
import Button from '@material-ui/core/Button';
import fetch from '../api/httpFetch_node.js'
fetch.get('/del_user').then(res =>{
    console.log(res)
    alert(res.data.msg)
});
function AppBar() {
  return (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  );
}

export default AppBar