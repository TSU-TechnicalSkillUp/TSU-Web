import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function LoginModal(props) {
  const { open, onCloseLoninModal } = props;
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [showSignIn, setShowSignIn] = React.useState(false);
  const handleClose = () => {
    onCloseLoninModal(false)
  };

  const onToggleShow = () => {
    setShowSignIn(!showSignIn)
  }
  let views
  if (showSignIn) {
    views = <div>
      <Typography>회원가입</Typography>
      <Typography>이메일로 회원가입</Typography>
      <TextField type="email" placeholder="이메일을 입력하세요."></TextField>
      <Button color="inherit">회원가입</Button>
      <Typography>계정이 이미 있으신가요?</Typography>
      <Button color="inherit" onClick={onToggleShow}>로그인</Button>
    </div>
  } else {
    views = <div>
      <Typography>로그인</Typography>
      <Typography >이메일로 로그인</Typography>
      <TextField type="email" placeholder="이메일을 입력하세요."></TextField><Button color="inherit">로그인</Button>
      <Typography>아직 회원이 아니신가요?</Typography>
      <Button color="inherit" onClick={onToggleShow}>회원가입</Button>
    </div>
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          {views}
        </div>
      </Modal>
    </div>
  );
}
